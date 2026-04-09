import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { FooterSection } from "./components/footer-section";
import { NavbarSection } from "./components/navbar-section";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flowwwer",
  description: "Studio de design boutique pour experiences web haut de gamme.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased mx-[20px] my-[20px]`}
    >
      
      <body className="flex min-h-full flex-col gap-y-[50px] lg:gap-y-[100px]">
        <NavbarSection />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
