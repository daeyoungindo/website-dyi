import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { VideoBlock } from "@/components/VideoBlock";
import { SectionHeading, StatGrid } from "@/components/ui";
import { sustainability } from "@/data/sustainability";
import { siteVideos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Keberlanjutan",
  description: sustainability.intro,
};

const toneClass = {
  achieved: "bg-green text-white",
  "target-near": "bg-amber text-ink",
  "target-far": "bg-coral text-white",
} as const;

export default function KeberlanjutanPage() {
  return (
    <>
      <PageHero
        eyebrow="Keberlanjutan"
        title={sustainability.title}
        description={sustainability.intro}
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading
          title="Penurunan CO₂ terhadap baseline 2020"
          description={sustainability.legend}
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {sustainability.co2.map((item) => (
            <div
              key={item.year}
              className={`rounded-2xl px-4 py-5 text-center ${toneClass[item.tone]}`}
            >
              <p className="font-display text-2xl font-bold">
                {item.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide opacity-90">
                {item.year}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <VideoBlock
            src={siteVideos.sustainability.src}
            poster={siteVideos.sustainability.poster}
            eyebrow={siteVideos.sustainability.eyebrow}
            title={siteVideos.sustainability.title}
            description={siteVideos.sustainability.description}
          />
        </div>

        <div className="mt-16 space-y-8">
          {sustainability.initiatives.map((item) => (
            <article
              key={item.title}
              className="grid items-center gap-6 overflow-hidden rounded-[1.5rem] border border-line bg-surface md:grid-cols-2"
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={900}
                height={650}
                className="h-64 w-full object-cover md:h-full"
              />
              <div className="p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold text-navy">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading title="Environmental KPI 2025" />
          <div className="mt-8">
            <StatGrid stats={sustainability.kpis} />
          </div>
        </div>
      </section>
    </>
  );
}
