import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luke Regalado | Software Engineer",
  description:
    "Portfolio of Luke Regalado, a software engineer building clean, fast, and thoughtful web experiences.",
  openGraph: {
    title: "Luke Regalado | Software Engineer",
    description:
      "Portfolio of Luke Regalado, a software engineer building clean, fast, and thoughtful web experiences.",
    url: "https://lukeregalado.dev",
    siteName: "Luke Regalado",
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen text-[#E8F0EC] flex flex-col">

      {/* Hero */}
      <section className="flex flex-col items-start justify-center flex-1 px-6 md:px-16 lg:px-32 pt-32 pb-24">

        {/* Floating glass card */}
        <div className="backdrop-blur-2xl bg-white/[0.03] border border-[#3DAB7A]/15 rounded-3xl p-10 md:p-10 max-w-3xl shadow-[0_8px_64px_rgba(61,171,122,0.06)]">
          <p className="font-mono text-[#3DAB7A] text-xs tracking-widest uppercase mb-6">
            Hey, I'm
          </p>
          <h1 className="font-mono text-5xl md:text-7xl font-bold tracking-tight leading-none mb-2 text-[#E8F0EC]">
            Luke Regalado
            <span className="inline-block w-1 h-12 md:h-16 bg-[#3DAB7A] ml-2 align-middle animate-pulse rounded-full" />
          </h1>
          <p className="font-mono text-[#3DAB7A] text-xl md:text-2xl mt-6 mb-4">
            Software Engineer
          </p>
          <p className="text-[#7A9E8A] text-base md:text-lg max-w-xl leading-relaxed mb-12">
            I like building clean, performant web applications focused on user 
            experience, thoughtful and captivating UI, and code that's easy to maintain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="font-mono backdrop-blur-md bg-[#3DAB7A]/15 border border-[#3DAB7A]/40 text-[#3DAB7A] px-6 py-3 text-sm tracking-wide rounded-xl hover:bg-[#3DAB7A]/25 hover:border-[#3DAB7A]/60 transition-all duration-300"
            >
              view projects →
            </Link>
            <Link
              href="/about"
              className="font-mono backdrop-blur-md bg-white/[0.03] border border-white/10 text-[#7A9E8A] px-6 py-3 text-sm tracking-wide rounded-xl hover:bg-white/[0.06] hover:text-[#E8F0EC] transition-all duration-300"
            >
              about me
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip — glass bar */}
      <section className="mx-6 md:mx-16 lg:mx-32 mb-24 backdrop-blur-xl bg-white/[0.03] border border-[#3DAB7A]/10 rounded-2xl px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { value: "2+", label: "Years experience" },
          { value: "10+", label: "Projects shipped" },
          { value: "React", label: "Primary stack" },
          { value: "PH", label: "Based in Manila" },
        ].map(({ value, label }) => (
          <div key={label}>
            <p className="font-mono text-3xl font-bold text-[#E8F0EC]">
              {value}
            </p>
            <p className="text-[#7A9E8A] text-sm mt-1">{label}</p>
          </div>
        ))}
      </section>
    </main>
  );
}