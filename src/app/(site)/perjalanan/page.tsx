import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { timeline } from "@/data/about";

export const metadata: Metadata = {
  title: "Perjalanan",
  description:
    "Tonggak perusahaan Dae Young Textile dari 1997 sampai 2023.",
};

const brandLogos: Record<string, string> = {
  Reebok: "/images/timeline/reebok.jpg",
  Adidas: "/images/timeline/adidas.png",
};

export default function PerjalananPage() {
  return (
    <>
      <PageHero
        eyebrow="Perjalanan"
        title="Perjalanan kami"
        description="Geser untuk melihat tonggak perusahaan dari 1997 sampai 2023."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="relative space-y-6 before:absolute before:bottom-4 before:left-[1.15rem] before:top-4 before:w-px before:bg-line md:before:left-1/2">
          {timeline.map((item, index) => {
            const left = index % 2 === 0;
            return (
              <article
                key={`${item.year}-${item.title}`}
                className={`relative grid gap-4 md:grid-cols-2 ${
                  left ? "" : "md:text-right"
                }`}
              >
                <div
                  className={`rounded-2xl border border-line bg-surface p-6 shadow-[0_12px_30px_rgba(18,38,63,0.06)] ${
                    left ? "md:col-start-1" : "md:col-start-2"
                  }`}
                >
                  <p className="font-display text-3xl font-bold text-blue">
                    {item.year}
                  </p>
                  <h2 className="mt-2 text-lg font-semibold text-ink">
                    {item.title}
                  </h2>
                  {item.brand && brandLogos[item.brand] ? (
                    <div
                      className={`mt-4 inline-flex rounded-xl bg-bg px-3 py-2 ${
                        left ? "" : "md:ml-auto"
                      }`}
                    >
                      <Image
                        src={brandLogos[item.brand]}
                        alt={item.brand}
                        width={96}
                        height={40}
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                  ) : null}
                </div>
                <div className="absolute left-[0.85rem] top-8 h-3 w-3 rounded-full border-2 border-blue bg-surface md:left-1/2 md:-translate-x-1/2" />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
