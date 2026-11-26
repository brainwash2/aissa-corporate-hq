import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://aissa-corporate-hq.vercel.app"),
  title: {
    default: "Brain Studio | Software that moves businesses forward",
    template: "%s | Brain Studio",
  },
  description:
    "Brain Studio is the independent software studio of Aissa Mohammed, based in Algeria. Full-stack web development, e-commerce, internal tools, and practical AI integrations.",
  openGraph: {
    title: "Brain Studio | Software that moves businesses forward",
    description:
      "Full-stack software, commerce experiences, internal tools, and practical AI integrations from Algeria.",
    type: "website",
    locale: "en_US",
    siteName: "Brain Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brain Studio",
    description: "Full-stack software and practical AI integrations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
