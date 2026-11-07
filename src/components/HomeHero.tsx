"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides, siteConfig } from "@/data/site";

export function HomeHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-hero text-white">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${
              i === index ? "animate-kenburns" : ""
            }`}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,20,35,0.55)] via-[rgba(8,20,35,0.25)] to-[rgba(8,20,35,0.92)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-24 pt-32">
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
          {siteConfig.name}
        </p>
        <h1 className="animate-fade-up mt-4 max-w-[15ch] font-display text-4xl font-extrabold tracking-[-0.02em] sm:text-5xl md:text-6xl lg:text-7xl">
          {siteConfig.tagline}
        </h1>
        <p className="animate-fade-up mt-5 max-w-[56ch] text-base text-white/90 md:text-lg">
          {siteConfig.description}
        </p>
        <div className="animate-fade-up mt-8 flex flex-wrap gap-3">
          <Link
            href="/produk"
            className="inline-flex items-center rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Lihat produk
          </Link>
          <Link
            href="/kontak"
            className="inline-flex items-center rounded-full border-2 border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Hubungi kami
          </Link>
        </div>
      </div>

      <div className="absolute bottom-24 right-5 z-10 flex gap-2 md:right-8">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
