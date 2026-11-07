import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { VideoBlock } from "@/components/VideoBlock";
import { SectionHeading } from "@/components/ui";
import { production } from "@/data/production";
import { siteVideos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Produksi",
  description: production.intro,
};

export default function ProduksiPage() {
  return (
    <>
      <PageHero
        eyebrow="Produksi"
        title={production.title}
        description={production.intro}
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {production.gallery.map((item) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-2xl border border-line bg-surface"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={640}
                height={480}
                className="h-44 w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-sm text-muted">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14">
          <VideoBlock
            src={siteVideos.production.src}
            poster={siteVideos.production.poster}
            eyebrow={siteVideos.production.eyebrow}
            title={siteVideos.production.title}
            description={siteVideos.production.description}
          />
        </div>

        <div className="mt-14">
          <SectionHeading title="Kapasitas mesin utama" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {production.capacities.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-line bg-surface p-5"
              >
                <p className="text-sm font-medium text-muted">{item.name}</p>
                <p className="mt-2 text-sm text-ink">{item.machines}</p>
                <p className="mt-4 font-display text-3xl font-bold text-navy">
                  {item.output}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 overflow-x-auto rounded-2xl border border-line bg-surface">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-bg text-muted">
              <tr>
                <th className="px-5 py-4 font-semibold">Proses</th>
                <th className="px-5 py-4 font-semibold">Mesin</th>
                <th className="px-5 py-4 font-semibold">Kapasitas</th>
              </tr>
            </thead>
            <tbody>
              {production.processTable.map((row) => (
                <tr key={row.process} className="border-t border-line">
                  <td className="px-5 py-4 font-medium text-ink">
                    {row.process}
                  </td>
                  <td className="px-5 py-4 text-muted">{row.machines}</td>
                  <td className="px-5 py-4 text-muted">{row.capacity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted">{production.note}</p>
      </section>
    </>
  );
}
