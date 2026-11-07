"use client";

import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";

export function TentangContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        description={t.about.body}
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[1.5rem] border border-line bg-surface">
            <Image
              src="/images/about/tim-dae-young-textile-indonesia.jpg"
              alt={t.about.imageAlt}
              width={1100}
              height={800}
              className="w-full object-cover"
            />
          </div>

          <div>
            <SectionHeading
              title={t.about.principlesTitle}
              description={t.about.principlesDesc}
            />
            <div className="mt-8 space-y-5">
              {t.about.principles.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-line bg-surface p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
                    0{index + 1}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-bold text-navy">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
