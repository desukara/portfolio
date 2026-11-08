import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "English Teacher Portfolio | Tokyo",
  description: "A professional English teaching portfolio for opportunities in Tokyo, Japan.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
