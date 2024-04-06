import { AOSInit } from "@/utils/aos";
import { Analytics } from "@vercel/analytics/react";
import "@fontsource-variable/fira-code";
import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Skynet",
    template: "%s | Skynet",
  },
  description: "Tienda Skynet",
  twitter: {
    card: "summary_large_image",
  },
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
