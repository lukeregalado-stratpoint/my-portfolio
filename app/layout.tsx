import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luke Regalado",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FCFBF4] text-[#2A2622] h-lvh flex flex-col`}>
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2A2622]/10 bg-[#E8E0D0]">
          <div className="px-8 h-14 flex items-center justify-between">
            <Link href="/" className="group">
              <img
                src="/luke-regalado-nametag.png"
                alt="Luke Regalado - Home"
                className="w-2/12 ml-10 h-auto opacity-100 transition-all duration-300 ease-out group-hover:opacity-70 group-active:opacity-50 group-active:scale-95"
              />
            </Link>
            <NavBar />
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="border-t border-[#2A2622]/10 bg-[#FCFBF4] px-6 md:px-16 lg:px-32 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-[#8A8378]">
            © {new Date().getFullYear()} Luke Regalado
          </p>
          <div className="flex gap-6">
            {[
              { label: "GitHub", href: "https://github.com/lukeregalado" },
              { label: "LinkedIn", href: "https://linkedin.com/in/luke-regalado" },
              { label: "Email", href: "mailto:luke.m.regalado@gmail.com" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#8A8378] hover:text-[#C75D3D] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </footer>
      </body>
    </html>
  );
}