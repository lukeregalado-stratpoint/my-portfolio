import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { LightbulbProvider } from "@/components/LightbulbContext";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-[#2A2622] h-min-screen flex flex-col`}>
        <LightbulbProvider>
          <Header />
          {children}
        </LightbulbProvider>
      </body>
    </html>
  );
}