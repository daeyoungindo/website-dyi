import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui";
import { about, principles } from "@/data/about";

export const metadata: Metadata = {
  title: "Tentang",
  description: about.body,
};

export default function TentangPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang"
        title={about.title}
        description={about.body}
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[1.5rem] border border-line bg-surface">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              width={1100}
              height={800}
              className="w-full object-cover"
            />
          </div>

          <div>
            <SectionHeading
              title="Tiga prinsip di semua lini"
              description="R&D di Korea berpadu dengan produksi di Indonesia dan Vietnam."
            />
            <div className="mt-8 space-y-5">
              {principles.map((item, index) => (
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
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
