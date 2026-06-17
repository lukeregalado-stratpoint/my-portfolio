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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080C0A] text-[#E8F0EC]`}
      >
        {/* Global ambient background — fixed so it persists across routes */}
        <div className="fixed inset-0 -z-10 bg-[#080C0A]">
          <div className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] bg-[#3DAB7A]/10 rounded-full blur-[160px]" />
          <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-[#2D8A62]/8 rounded-full blur-[130px]" />
          <div className="absolute bottom-[-10%] left-[30%] w-[600px] h-[600px] bg-[#1A6B47]/7 rounded-full blur-[150px]" />
          <div className="absolute top-[20%] left-[50%] w-[300px] h-[300px] bg-[#3DAB7A]/5 rounded-full blur-[80px]" />
        </div>

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-[#080C0A]/40 border-b border-[#3DAB7A]/10">
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
        <footer className="border-t border-[#3DAB7A]/10 backdrop-blur-xl bg-white/[0.02] px-6 md:px-16 lg:px-32 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-[#7A9E8A]">
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
                className="font-mono text-xs text-[#7A9E8A] hover:text-[#3DAB7A] transition-colors"
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