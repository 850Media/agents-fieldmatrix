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
  title: "FieldMatrix AI Agents — Your AI Employee. We Set It Up. You Just Use It.",
  description:
    "Managed AI agent hosting for local businesses. We build your AI employee, deploy it on Telegram & Discord, and you just use it. Starting at $149/mo.",
  openGraph: {
    title: "FieldMatrix AI Agents — Your AI Employee",
    description:
      "Managed AI agent hosting for local businesses. We build it. You talk to it. It works for you.",
    url: "https://agents.fieldmatrix.ai",
    siteName: "FieldMatrix AI Agents",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FieldMatrix AI Agents — Your AI Employee",
    description:
      "Managed AI agent hosting for local businesses. We build it. You talk to it. It works for you.",
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
