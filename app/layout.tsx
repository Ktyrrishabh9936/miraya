import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miraya Gold & Diamond | Timeless Beauty. Radiant You.",
  description:
    "Explore Miraya's gold, diamond and bridal jewellery collections, crafted for life's most meaningful moments.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
