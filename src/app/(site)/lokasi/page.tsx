import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui";
import { location } from "@/data/location";

export const metadata: Metadata = {
  title: "Lokasi",
  description: location.intro,
};

export default function LokasiPage() {
  return (
    <>
      <PageHero
        eyebrow="Lokasi"
        title={location.title}
        description={location.intro}
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {location.gallery.map((image) => (
            <div
              key={image.src}
              className="overflow-hidden rounded-2xl border border-line bg-surface"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={720}
                height={540}
                className="h-56 w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {location.points.map((point) => (
            <article
              key={point.title}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <h2 className="font-display text-xl font-bold text-navy">
                {point.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {point.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <SectionHeading
            title="Denah pabrik"
            description={location.floorPlan.note}
          />
          <a
            href={location.floorPlan.src}
            target="_blank"
            rel="noreferrer"
            className="mt-6 block overflow-hidden rounded-[1.5rem] border border-line bg-surface"
          >
            <Image
              src={location.floorPlan.src}
              alt={location.floorPlan.alt}
              width={1400}
              height={900}
              className="w-full object-cover"
            />
          </a>
        </div>
      </section>
    </>
  );
}
