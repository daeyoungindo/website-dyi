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
        {/* Google Maps Java Island View pointing to PT Dae Young Textile Indonesia (-6.9244232, 110.2626724) */}
        <div className="mb-14">
          <SectionHeading
            title="Peta Lokasi & Pulau Jawa"
            description="Peta interaktif wilayah Jawa Tengah menunjuk ke lokasi PT Dae Young Textile Indonesia."
          />
          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-line bg-surface shadow-md">
            <div className="relative h-[450px] w-full">
              <iframe
                title="Peta Lokasi PT Dae Young Textile Indonesia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6725841666874!2d110.2600975!3d-6.9244179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7067a30fa76acb%3A0x322d0b42d21e8941!2sPT.+DAE+YOUNG+TEXTILE+INDONESIA!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4 bg-surface flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-line">
              <p className="text-sm text-muted">
                Koordinat: <span className="font-semibold text-ink">-6.9244232, 110.2626724</span>
              </p>
              <a
                href="https://maps.app.goo.gl/F2iSZKo8d4HdVzB59"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue/90 transition-colors"
              >
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>

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
      </section>
    </>
  );
}
