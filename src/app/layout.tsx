import { AOSInit } from "@/utils/aos";
import { Analytics } from "@vercel/analytics/react";
import "@fontsource-variable/fira-code";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SKYNET MERCHA",
  description: "Tienda Skynet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <AOSInit />
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
export const dynamic = "force-static";
