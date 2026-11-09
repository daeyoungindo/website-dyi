"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/context/LanguageContext";
import { products } from "@/data/products";

export function ProdukContent() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems = activeTab === "all" 
    ? t.products.items 
    : t.products.items.filter(item => item.id === activeTab);

  return (
    <>
      <PageHero
        eyebrow={t.products.eyebrow}
        title={t.products.title}
        description={t.products.description}
      />

      <section className="mx-auto max-w-6xl space-y-16 px-5 py-20">
        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-200 ${
              activeTab === "all"
                ? "bg-[#17406e] text-white shadow-md"
                : "bg-surface text-ink border border-border hover:border-[#2f7fd1]/50"
            }`}
          >
            Semua Produk
          </button>
          {t.products.items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-200 ${
                activeTab === item.id
                  ? "bg-[#17406e] text-white shadow-md"
                  : "bg-surface text-ink border border-border hover:border-[#2f7fd1]/50"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Product Cards List */}
        <div className="space-y-12">
          {filteredItems.map((product) => {
            const productData = products.find((p) => p.id === product.id);
            const images = productData?.images ?? [];
            return (
              <article
                key={product.id}
                id={product.id}
                className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-border bg-surface shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-10"
              >
                <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                  <div className="space-y-6">
                    <div>
                      <span className="inline-block rounded-md bg-[#2f7fd1]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2f7fd1]">
                        Lini Kain Unggulan
                      </span>
                      <h2 className="font-display text-3xl font-extrabold text-[#17406e] mt-3">
                        {product.name}
                      </h2>
                    </div>

                    <ul className="grid gap-3 sm:grid-cols-2">
                      {product.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2.5 rounded-xl border border-border bg-bg/50 px-4 py-3 text-sm font-medium text-ink"
                        >
                          <span className="h-2 w-2 rounded-full bg-[#1f9d55] shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {product.examples ? (
                      <div className="rounded-xl bg-[#eef2f7] p-4 border border-border/60 text-xs sm:text-sm leading-relaxed text-muted">
                        <strong className="block font-semibold text-primary-900 mb-1">Aplikasi & Contoh Klien:</strong>
                        {product.examples}
                      </div>
                    ) : null}

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/kontak?product=${product.id}`}
                        className="inline-flex items-center gap-2 rounded-full bg-[#17406e] px-6 py-3 text-xs font-semibold text-white shadow-md transition hover:bg-[#0f2d4f]"
                      >
                        Minta Sampel & Penawaran →
                      </Link>
                      <Link
                        href="/produksi"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-xs font-semibold text-ink transition hover:border-[#2f7fd1] hover:text-[#17406e]"
                      >
                        Lihat Proses Produksi
                      </Link>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {images.map((image, i) => (
                      <div
                        key={image.src}
                        className={`overflow-hidden rounded-2xl border border-border bg-bg group relative ${
                          images.length === 3 && i === 0 ? "sm:col-span-2" : ""
                        }`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={700}
                          height={500}
                          className="h-52 sm:h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <p className="text-xs font-medium text-white">{image.alt}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Design Collaboration Banner */}
        <article className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-[#0f2d4f] to-[#17406e] text-white shadow-xl">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="p-8 sm:p-12 space-y-6">
              <span className="inline-block rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-blue-200">
                Custom Engineering
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight">
                {t.products.designTitle}
              </h2>
              <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                {t.products.designBody}
              </p>
              <div className="pt-2">
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2f7fd1] px-7 py-3 text-xs font-semibold text-white shadow-lg transition hover:brightness-110"
                >
                  Konsultasi Desain Kustom →
                </Link>
              </div>
            </div>
            <div className="relative h-full min-h-[320px] lg:min-h-[400px]">
              <Image
                src="/images/produk/tim-desain-dyi-menyiapkan-pola-di-komputer.jpg"
                alt={t.products.designImageAlt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2d4f]/80 via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </article>
      </section>
    </>
  );
}