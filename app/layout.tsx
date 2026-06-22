import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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

const navLinks = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FCFBF4] text-[#2A2622]`}
      >
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#FCFBF4]/80 border-b border-[#2A2622]/10">
          <div className="w-full mx-auto px-6 md:px-16 h-14 flex items-center justify-between">
            <Link
              href="/"
              className="font-mono text-sm font-bold text-[#C75D3D] tracking-widest hover:opacity-70 transition-opacity"
            >
              <img src="/luke-regalado-nametag.png" alt="Luke Regalado - Home" className="w-2/12 ml-40 h-auto" />
            </Link>
            <nav className="flex items-center gap-8">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-mono text-xs tracking-widest text-[#5C564C] hover:text-[#2A2622] transition-colors uppercase"
                >
                  {label}
                </Link>
              ))}
            </nav>
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