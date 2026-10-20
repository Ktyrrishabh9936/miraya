import { NextResponse } from "next/server";

type AppointmentRequest = {
  name?: unknown;
  phone?: unknown;
  date?: unknown;
  format?: unknown;
  interest?: unknown;
  message?: unknown;
};

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const endpoint = process.env.SHEETDB_ENDPOINT;
  const sheet = process.env.SHEETDB_SHEET;

  if (!endpoint || !sheet) {
    return NextResponse.json({ error: "Appointment service is not configured." }, { status: 500 });
  }

  let body: AppointmentRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid appointment request." }, { status: 400 });
  }

  const appointment = {
    name: clean(body.name, 100),
    phone: clean(body.phone, 30),
    date: clean(body.date, 20),
    format: clean(body.format, 50),
    interest: clean(body.interest, 100),
    message: clean(body.message, 1000),
    submittedAt: new Date().toISOString(),
    source: "Miraya website",
  };

  if (!appointment.name || !appointment.phone || !appointment.date) {
    return NextResponse.json({ error: "Name, phone number, and preferred date are required." }, { status: 400 });
  }

  try {
    const sheetDbUrl = new URL(endpoint);
    sheetDbUrl.searchParams.set("sheet", sheet);

    const sheetDbResponse = await fetch(sheetDbUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: [appointment] }),
      cache: "no-store",
    });

    if (!sheetDbResponse.ok) {
      console.error("SheetDB appointment error", sheetDbResponse.status, await sheetDbResponse.text());
      return NextResponse.json(
        { error: sheetDbResponse.status === 404 ? "The SheetDB tab is not ready yet. Create the 'miraya' tab and its headers." : "We could not send your request. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Appointment submission failed", error);
    return NextResponse.json({ error: "We could not send your request. Please try again." }, { status: 502 });
  }
}
