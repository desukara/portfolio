import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eastokyo.com"),
  title: { default: "James Simmons | English Teacher in Tokyo", template: "%s | James Simmons" },
  description: "James Simmons is a TEFL-certified English teacher in Tokyo. Explore classroom experience, teaching reflections, résumé, and interview availability.",
  alternates: { canonical: "./" },
  applicationName: "JS · EASTOKYO",
  appleWebApp: { capable: true, title: "JS Teaching", statusBarStyle: "default" },
  icons: { icon: [{url:"/icon.svg",type:"image/svg+xml",sizes:"any"},{url:"/icon",type:"image/png",sizes:"512x512"}], apple:[{url:"/apple-icon",sizes:"180x180",type:"image/png"}], shortcut:"/icon.svg" },
  manifest: "/manifest.webmanifest",
  openGraph: { type: "website", siteName: "James Simmons | Teaching Portfolio", title: "James Simmons | English Teacher in Tokyo", description: "TEFL-certified English teacher in Tokyo. Teaching experience, classroom reflections, résumé and interview requests.", url: "https://eastokyo.com" },
  twitter: { card: "summary", title: "James Simmons | English Teacher in Tokyo", description: "TEFL-certified English teacher in Tokyo. Explore experience, teaching evidence, and interview availability." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
