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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#060A07] text-[#E8F0EC]`}
      >
        {/* Global ambient background */}
        <div className="fixed inset-0 -z-10 bg-[#060A07]">
          {/* Jade glow — top left */}
          <div className="absolute top-[-10%] left-[-5%] w-[650px] h-[650px] bg-[#3DAB7A]/14 rounded-full blur-[160px]" />
          {/* Amber glow — top right */}
          <div className="absolute top-[5%] right-[-5%] w-[500px] h-[500px] bg-[#2D8A62]/10 rounded-full blur-[140px]" />
          {/* Deep jade — bottom center */}
          <div className="absolute bottom-[-5%] left-[25%] w-[600px] h-[400px] bg-[#1A6B47]/12 rounded-full blur-[150px]" />
          {/* Deep jade — bottom right */}
          <div className="absolute bottom-[15%] right-[5%] w-[350px] h-[350px] bg-[#2D8A62]/7 rounded-full blur-[100px]" />
          {/* Noise grain */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px 128px",
            }}
          />
        </div>

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-[#060A07]/50 border-b border-[#3DAB7A]/10">
          <div className="max-w-6xl mx-auto px-6 md:px-16 h-14 flex items-center justify-between">
            <Link
              href="/"
              className="font-mono text-sm font-bold text-[#3DAB7A] tracking-widest hover:opacity-70 transition-opacity"
            >
              LR
            </Link>
            <nav className="flex items-center gap-8">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-mono text-xs tracking-widest text-[#7A9E8A] hover:text-[#E8F0EC] transition-colors uppercase"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="border-t border-[#3DAB7A]/10 backdrop-blur-xl bg-white/[0.01] px-6 md:px-16 lg:px-32 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-[#4A6A5A]">
            © {new Date().getFullYear()} Luke Regalado
          </p>
          <div className="flex gap-6">
            {[
              { label: "GitHub", href: "https://github.com/lukeregalado" },
              { label: "LinkedIn", href: "#" },
              { label: "Email", href: "mailto:luke@example.com" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#4A6A5A] hover:text-[#3DAB7A] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </footer>
      </body>
    </html>
  );
}