"use client";

import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/context/LanguageContext";
import { location } from "@/data/location";

export function LokasiContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.location.eyebrow}
        title={t.location.title}
        description={t.location.intro}
      />

      <section className="mx-auto max-w-6xl space-y-16 px-5 py-20">
        {/* Strategic Logistics Highlights */}
        <div className="grid gap-6 md:grid-cols-3">
          {t.location.points.map((point, index) => {
            const icons = ["⚓", "✈️", "🏭"];
            return (
              <article
                key={point.title}
                className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-28 h-28 bg-[#2f7fd1]/5 rounded-full blur-2xl pointer-events-none" />
                <div className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2f7fd1]/10 text-xl font-bold text-[#2f7fd1]">
                    {icons[index] || "📍"}
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#17406e]">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {point.body}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-[#2f7fd1]">
                  <span>Akses Logistik Utama</span>
                  <span>Verified →</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Interactive Map Section */}
        <div className="overflow-hidden rounded-[2.5rem] border border-border bg-surface shadow-xl">
          <div className="bg-gradient-to-r from-[#0f2d4f] to-[#17406e] p-6 sm:p-8 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="inline-block rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-200">
                Peta & Navigasi
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold mt-2">
                {t.location.mapTitle}
              </h2>
              <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-2xl">
                {t.location.mapDesc}
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/F2iSZKo8d4HdVzB59"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2f7fd1] px-6 py-3 text-xs font-bold text-white shadow-lg transition hover:brightness-110 shrink-0"
            >
              {t.common.openMaps} →
            </a>
          </div>

          <div className="relative h-[480px] w-full bg-bg">
            <iframe
              title={t.location.mapIframeTitle}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6725841666874!2d110.2600975!3d-6.9244179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7067a30fa76acb%3A0x322d0b42d21e8941!2sPT.+DAE+YOUNG+TEXTILE+INDONESIA!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-[1.05]"
            ></iframe>
          </div>

          <div className="p-6 bg-surface flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-[#1f9d55] animate-pulse" />
              <p className="text-xs sm:text-sm text-muted">
                {t.common.coordinates}:{" "}
                <span className="font-bold text-[#17406e]">-6.9244232, 110.2626724</span>
              </p>
            </div>
            <span className="text-xs font-medium text-muted bg-[#eef2f7] px-4 py-2 rounded-xl border border-border">
              Kawasan Industri Strategis Jawa Tengah
            </span>
          </div>
        </div>

        {/* Facility & Logistics Gallery */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-block rounded-md bg-[#2f7fd1]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2f7fd1]">
              Galeri Infrastruktur
            </span>
            <h2 className="font-display text-3xl font-extrabold text-[#17406e]">
              Fasilitas & Area Pabrik
            </h2>
            <p className="text-sm text-muted">
              Dokumentasi visual fasilitas produksi dan lokasi strategis PT Dae Young Textile Indonesia.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {location.gallery.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-[2rem] border border-border bg-surface shadow-md hover:shadow-xl transition-all duration-300 group relative"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={720}
                    height={540}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <p className="text-xs sm:text-sm font-bold text-white">{image.alt}</p>
                  </div>
                </div>
                <div className="p-4 bg-surface border-t border-border flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#17406e]">{image.alt}</span>
                  <span className="text-xs text-muted">DYI Facilities</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}