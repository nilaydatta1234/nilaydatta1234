import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";
import "./globals.css";

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nirbhik Datta — Close-Up Card Magician",
    template: "%s | Nirbhik Datta",
  },
  description:
    "Nirbhik Datta is a close-up card magician specialising in sleight-of-hand, misdirection, and unforgettable live experiences for corporate and private events.",
  openGraph: {
    title: "Nirbhik Datta — Close-Up Card Magician",
    description:
      "Close-up card magic for corporate events, private gatherings, and luxury brand activations.",
    type: "website",
    locale: "en_US",
    siteName: "Nirbhik Datta",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="bg-bg text-fg antialiased">
        <GrainOverlay />
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
