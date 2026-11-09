"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading, StatGrid } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";

export function TentangContent() {
  const { t } = useLanguage();
  const [activePrinciple, setActivePrinciple] = useState(0);

  const principleDetails = [
    {
      badge: "01 / SPEED",
      title: t.about.principles[0]?.title || "Speed",
      body: t.about.principles[0]?.body || "Lead time cepat dari sampel sampai produksi massal.",
      highlight: "Fast Prototyping & Agile Delivery",
      metric: "< 7 Days",
      metricLabel: "Sample Lead Time",
    },
    {
      badge: "02 / SUSTAINABILITY",
      title: t.about.principles[1]?.title || "Sustainability",
      body: t.about.principles[1]?.body || "Daur ulang air dan limbah, energi surya, dan target net zero 2050.",
      highlight: "Circular Economy & Green Manufacturing",
      metric: "100%",
      metricLabel: "Waste Diversion 2025",
    },
    {
      badge: "03 / QUALITY",
      title: t.about.principles[2]?.title || "Quality",
      body: t.about.principles[2]?.body || "Kualitas stabil, bersertifikat ISO 14001 sejak 2011.",
      highlight: "Global Standards & Strict QA",
      metric: "ISO 9001",
      metricLabel: "& FSSC 22000 Certified",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        description={t.about.body}
      />

      <section className="relative z-10 mx-auto -mt-10 max-w-6xl px-5">
        <StatGrid stats={[...t.home.stats]} />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow={t.about.principlesTitle}
              title={t.about.principlesDesc}
              description="R&D di Korea berpadu dengan fasilitas produksi modern di Indonesia dan Vietnam untuk memastikan presisi tinggi setiap meter kain."
            />

            <div className="grid gap-4 sm:grid-cols-3">
              {principleDetails.map((item, idx) => {
                const isActive = activePrinciple === idx;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActivePrinciple(idx)}
                    className={`text-left rounded-2xl border p-4 transition-all duration-200 ${
                      isActive
                        ? "border-[#17406e] bg-[#17406e] text-white shadow-xl scale-[1.02] ring-2 ring-[#2f7fd1]/50"
                        : "border-border bg-surface text-ink hover:border-[#2f7fd1]/50 hover:bg-surface/90"
                    }`}
                  >
                    <div>
                      <span className={`text-xs font-semibold ${isActive ? "text-[#93c5fd]" : "text-muted"}`}>
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold">
                      {item.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-md relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-secondary-600/10 blur-2xl pointer-events-none" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-2">
                  <span className="inline-block rounded-full bg-secondary-600/10 px-3 py-1 text-xs font-semibold text-secondary-600">
                    {principleDetails[activePrinciple].highlight}
                  </span>
                  <h4 className="font-display text-2xl font-bold text-primary-900">
                    {principleDetails[activePrinciple].title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted max-w-lg">
                    {principleDetails[activePrinciple].body}
                  </p>
                </div>
                <div className="rounded-2xl bg-bg border border-border p-4 text-center shrink-0 min-w-[140px]">
                  <span className="block font-display text-3xl font-extrabold text-secondary-600">
                    {principleDetails[activePrinciple].metric}
                  </span>
                  <span className="mt-1 block text-xs font-medium text-muted">
                    {principleDetails[activePrinciple].metricLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-surface shadow-xl relative group">
              <Image
                src="/images/about/tim-dae-young-textile-indonesia.jpg"
                alt={t.about.imageAlt}
                width={1100}
                height={800}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent flex items-end p-6 sm:p-8 text-white">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent-500">
                    Dae Young Textile Indonesia
                  </p>
                  <p className="font-display text-xl font-bold mt-1">
                    Dedikasi &amp; Inovasi Tanpa Henti Sejak 1997
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-display font-bold text-primary-900">Ingin melihat proses produksi lengkap?</h4>
                <p className="text-xs text-muted mt-0.5">Dari warping, knitting, dyeing, hingga finishing.</p>
              </div>
              <Link
                href="/produksi"
                className="rounded-full bg-secondary-600 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-secondary-700 shrink-0"
              >
                Lihat Produksi →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GlobalNetworkSection />
    </>
  );
}

function GlobalNetworkSection() {
  const countries = [
    {
      code: "KR",
      name: "Research & Development (Korea)",
      desc: "Pusat inovasi teknologi benang, engineering mesh, dan desain corak berstandar global.",
    },
    {
      code: "ID",
      name: "Production Hub (Indonesia)",
      desc: "Fasilitas utama di Jawa Tengah dengan kapasitas produksi masif dan komitmen zero waste.",
    },
    {
      code: "VN",
      name: "Supply & Operations (Vietnam)",
      desc: "Jaringan distribusi dan operasional pendukung untuk melayani pasar Asia Tenggara dan global.",
    },
  ];

  return (
    <section className="border-y border-border bg-surface/70 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Global Network"
          title="Sinergi Korea, Indonesia, & Vietnam"
          description="Kolaborasi lintas negara untuk menghadirkan kualitas terbaik bagi brand alas kaki dan pakaian olahraga dunia."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {countries.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border border-border bg-bg p-6 shadow-sm hover:border-secondary-600/40 transition"
            >
              <span className="inline-block rounded bg-secondary-600/10 px-2.5 py-1 text-xs font-bold text-secondary-600">
                {c.code}
              </span>
              <h3 className="font-display text-xl font-bold text-primary-900 mt-4">{c.name}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
