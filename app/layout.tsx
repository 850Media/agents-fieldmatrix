import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FieldMatrix AI — Autonomous Agents for Field Operations",
  description:
    "Deploy AI agents that automate inspections, compliance, logistics, and field intelligence. Real-time decision-making at the edge.",
  openGraph: {
    title: "FieldMatrix AI — Autonomous Agents for Field Operations",
    description:
      "Deploy AI agents that automate inspections, compliance, logistics, and field intelligence.",
    url: "https://agents.fieldmatrix.ai",
    siteName: "FieldMatrix AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FieldMatrix AI — Autonomous Agents for Field Operations",
    description:
      "Deploy AI agents that automate inspections, compliance, logistics, and field intelligence.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
