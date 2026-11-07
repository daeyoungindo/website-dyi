"use client";

import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/context/LanguageContext";

const brandLogos: Record<string, string> = {
  Reebok: "/images/timeline/reebok.jpg",
  Adidas: "/images/timeline/adidas.png",
};

export function MilestoneContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.milestone.eyebrow}
        title={t.milestone.title}
        description={t.milestone.description}
      />

      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="relative pl-8 sm:pl-10 md:pl-0">
          <div className="absolute bottom-4 left-3 top-4 w-0.5 bg-blue/30 sm:left-4 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {t.milestone.items.map((item, index) => {
              const left = index % 2 === 0;
              const brand = "brand" in item ? item.brand : undefined;
              return (
                <article
                  key={`${item.year}-${item.title}`}
                  className={`relative flex flex-col md:grid md:grid-cols-2 md:gap-8 ${
                    left ? "md:text-right" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute -left-8 top-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-blue bg-surface shadow-md sm:-left-10 md:left-1/2 md:-translate-x-1/2">
                    <div className="h-2 w-2 rounded-full bg-blue" />
                  </div>

                  <div
                    className={`rounded-2xl border border-line bg-surface p-6 shadow-[0_12px_30px_rgba(18,38,63,0.06)] transition-all hover:shadow-lg ${
                      left ? "md:col-start-1" : "md:col-start-2"
                    }`}
                  >
                    <div className={`flex items-center gap-3 ${left ? "md:justify-end" : ""}`}>
                      <span className="inline-flex rounded-full bg-blue/10 px-3 py-1 font-display text-sm font-bold text-blue">
                        {item.year}
                      </span>
                    </div>
                    <h2 className="mt-3 text-lg font-semibold text-ink leading-snug">
                      {item.title}
                    </h2>
                    {brand && brandLogos[brand] ? (
                      <div
                        className={`mt-4 inline-flex rounded-xl bg-bg px-3 py-2 border border-line/50 ${
                          left ? "md:ml-auto" : ""
                        }`}
                      >
                        <Image
                          src={brandLogos[brand]}
                          alt={brand}
                          width={96}
                          height={40}
                          className="h-7 w-auto object-contain"
                        />
                      </div>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
