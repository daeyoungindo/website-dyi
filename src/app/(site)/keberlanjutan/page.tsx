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

        {/* Responsive CO2 Milestone: Horizontal on wide screens, vertical on mobile */}
        <div className="mt-10 relative">
          {/* Desktop horizontal connecting line */}
          <div className="hidden md:block absolute left-4 right-4 top-1/2 -translate-y-1/2 h-0.5 bg-blue/30 z-0" />
          {/* Mobile vertical connecting line */}
          <div className="md:hidden absolute left-4 top-4 bottom-4 w-0.5 bg-blue/30 z-0" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-2">
            {sustainability.co2.map((item) => (
              <div
                key={item.year}
                className="relative flex items-center md:flex-col md:items-center gap-4 md:gap-3 pl-10 md:pl-0"
              >
                {/* Milestone Node Dot */}
                <div className="absolute left-2.5 top-1/2 -translate-y-1/2 md:static md:translate-y-0 h-6 w-6 rounded-full border-2 border-blue bg-surface shadow-md flex items-center justify-center shrink-0">
                  <div className="h-2 w-2 rounded-full bg-blue" />
                </div>
                <div
                  className={`rounded-2xl px-4 py-4 text-center shadow-md w-full md:w-28 transition-all hover:scale-105 ${
                    toneClass[item.tone]
                  }`}
                >
                  <p className="font-display text-xl font-bold">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide opacity-90">
                    {item.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
