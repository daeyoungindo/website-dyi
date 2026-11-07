"use client";

import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/context/LanguageContext";
import { products } from "@/data/products";

export function ProdukContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.products.eyebrow}
        title={t.products.title}
        description={t.products.description}
      />

      <section className="mx-auto max-w-6xl space-y-14 px-5 py-16">
        {t.products.items.map((product) => {
          const images = products.find((p) => p.id === product.id)?.images ?? [];
          return (
            <article
              key={product.id}
              id={product.id}
              className="scroll-mt-24 rounded-[1.75rem] border border-line bg-surface p-6 md:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <h2 className="font-display text-3xl font-bold text-navy">
                    {product.name}
                  </h2>
                  <ul className="mt-5 space-y-2">
                    {product.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {product.examples ? (
                    <p className="mt-5 text-sm leading-relaxed text-ink/80">
                      {product.examples}
                    </p>
                  ) : null}
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {images.map((image) => (
                    <div
                      key={image.src}
                      className="overflow-hidden rounded-2xl border border-line bg-bg"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={640}
                        height={480}
                        className="h-48 w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          );
        })}

        <article className="grid items-center gap-8 overflow-hidden rounded-[1.75rem] border border-line bg-hero text-white lg:grid-cols-2">
          <div className="p-8 md:p-10">
            <h2 className="font-display text-3xl font-bold">{t.products.designTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              {t.products.designBody}
            </p>
          </div>
          <Image
            src="/images/produk/tim-desain-dyi-menyiapkan-pola-di-komputer.jpg"
            alt={t.products.designImageAlt}
            width={900}
            height={700}
            className="h-full min-h-72 w-full object-cover"
          />
        </article>
      </section>
    </>
  );
}
