"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { mainNav } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/data/translations";

export function SiteHeader() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navLabels: Record<string, string> = {
    "/": t.nav.beranda,
    "/tentang": t.nav.tentang,
    "/milestone": t.nav.milestone,
    "/produk": t.nav.produk,
    "/produksi": t.nav.produksi,
    "/lokasi": t.nav.lokasi,
    "/keberlanjutan": t.nav.keberlanjutan,
    "/kontak": t.nav.kontak,
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        solid || !isHome || open
          ? "bg-hero text-white shadow-[0_8px_30px_rgba(8,20,35,0.28)]"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex h-[4.75rem] max-w-6xl items-center gap-4 px-5 sm:h-20">
        <Link href="/" className="flex items-center" aria-label="Beranda">
          <BrandLogo className="h-12 w-auto sm:h-14" />
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href + "/");
            const label = navLabels[item.href] || item.label;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  active
                    ? "bg-blue text-white"
                    : "text-white/85 hover:bg-white/12 hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Language Switcher */}
        <div className="hidden items-center gap-1 rounded-full border border-white/25 bg-black/20 p-1 text-xs lg:flex">
          {(["id", "en", "ko"] as Language[]).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setLanguage(lang)}
              className={`rounded-full px-2.5 py-1 font-semibold uppercase transition ${
                language === lang
                  ? "bg-blue text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/35 lg:hidden"
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-hero px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {/* Mobile Lang Switcher */}
            <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-3">
              <span className="text-xs text-white/60">{t.common.language}</span>
              {(["id", "en", "ko"] as Language[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`rounded-md px-2.5 py-1 text-xs font-semibold uppercase transition ${
                    language === lang
                      ? "bg-blue text-white"
                      : "bg-white/10 text-white/80"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {mainNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");
              const label = navLabels[item.href] || item.label;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-sm transition ${
                    active
                      ? "bg-blue text-white font-semibold"
                      : "text-white/90 hover:bg-white/10"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
