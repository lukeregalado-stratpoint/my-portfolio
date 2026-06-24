"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { LightbulbProvider } from "@/components/LightbulbContext";
import "./globals.css";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import { useLightbulb } from "@/components/LightbulbContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const footerLinks = [
  { label: "GitHub", href: "https://github.com/lukeregalado" },
  { label: "LinkedIn", href: "https://linkedin.com/in/luke-regalado" },
  { label: "Email", href: "mailto:luke.m.regalado@gmail.com" },
];

function HeaderInner() {
  const { isBlackedOut } = useLightbulb();
  const dark = isBlackedOut;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[70] border-b transition-colors duration-500 ${
        dark
          ? "bg-[#1a1a1a] border-[#ffffff]/10"
          : "bg-[#E8E0D0] border-[#2A2622]/10"
      }`}
    >
      <div className="px-8 h-14 flex items-center justify-between">
        <Link href="/" className="group inline-flex shrink-0 w-auto">
          <img
            src="/luke-regalado-nametag.png"
            alt="Luke Regalado - Home"
            className={`w-79 ml-10 h-auto transition-all duration-500 ease-out group-hover:opacity-70 group-active:opacity-50 group-active:scale-95 ${
              dark ? "invert" : "opacity-100"
            }`}
          />
        </Link>
        <NavBar />
      </div>
    </header>
  );
}

function FooterInner() {
  const { isBlackedOut } = useLightbulb();
  const dark = isBlackedOut;

  return (
    <footer className="px-6 md:px-16 lg:px-32 py-8 flex flex-col md:flex-row items-center justify-between gap-4 z-9999">
      <p className={`font-mono text-xs transition-colors duration-500 ${dark ? "text-[#EDE8DC]/60" : "text-[#8A8378]"}`}>
        © {new Date().getFullYear()} Luke Regalado
      </p>
      <div className="flex gap-6">
        {footerLinks.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-mono text-xs transition-colors duration-500 hover:text-[#439a86] ${
              dark ? "text-[#EDE8DC]/60" : "text-[#8A8378]"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-[#2A2622] h-lvh flex flex-col`}>
        <LightbulbProvider>
          <HeaderInner />

          {children}

          <FooterInner />
        </LightbulbProvider>
      </body>
    </html>
  );
}