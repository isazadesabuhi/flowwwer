import type { Metadata } from "next";
import { Geist_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

import { FooterSection } from "./components/footer-section";
import { NavbarSection } from "./components/navbar-section";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flowwwer",
  description: "Studio de design boutique pour expériences web haut de gamme.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${instrumentSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col px-[20px]">
        <div className="py-[20px] mb-[70px] lg:mb-[120px]"><NavbarSection /></div>
        {children}
      </body>
      <div className="pt-[70px] lg:pt-[120px] pb-[20px]">
        <FooterSection />
      </div>
      
    </html>
  );
}
