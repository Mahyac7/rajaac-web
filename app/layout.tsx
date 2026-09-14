import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} - ${site.tagline}`,
  description: site.about.body[0],
  keywords: [
    "AC",
    "kontraktor AC",
    "distributor AC",
    "retail AC",
    "AC VRV",
    "AC VRF",
    "chiller",
    "tata udara",
    "ACWahana",
  ],
  openGraph: {
    title: `${site.name} - ${site.tagline}`,
    description: site.about.body[0],
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={sans.variable}>{children}</body>
    </html>
  );
}
