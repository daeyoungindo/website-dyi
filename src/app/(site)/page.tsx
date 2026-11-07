import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { VideoBlock } from "@/components/VideoBlock";
import { SectionHeading, StatGrid, TextLink } from "@/components/ui";
import { about, principles } from "@/data/about";
import { homeStats, pageTeasers, siteConfig } from "@/data/site";
import { siteVideos } from "@/data/videos";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="relative z-10 mx-auto -mt-12 max-w-6xl px-5">
        <StatGrid stats={homeStats} />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Tentang"
              title={about.title}
              description={about.body}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {principles.map((item) => (
                <div key={item.title} className="border-l-2 border-blue pl-4">
                  <h3 className="font-display text-lg font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <TextLink href="/tentang">Selengkapnya tentang DYI</TextLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.5rem] border border-line bg-surface shadow-[0_20px_60px_rgba(18,38,63,0.12)]">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              width={960}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface/70">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="Jelajahi"
            title="Company profile per halaman"
            description="Konten brief dipecah menjadi halaman terpisah agar setiap topik mudah dibaca dan dikelola."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {pageTeasers.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-line bg-bg px-6 py-6 transition hover:-translate-y-0.5 hover:border-blue/40 hover:shadow-[0_16px_40px_rgba(23,64,110,0.1)]"
              >
                <h3 className="font-display text-xl font-bold text-navy group-hover:text-blue">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-blue">
                  Buka halaman →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8 md:py-12">
        <VideoBlock
          src={siteVideos.production.src}
          poster={siteVideos.production.poster}
          eyebrow={siteVideos.production.eyebrow}
          title={siteVideos.production.title}
          description={siteVideos.production.description}
        />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="overflow-hidden rounded-[2rem] bg-hero px-8 py-12 text-white md:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {siteConfig.shortName}
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold md:text-4xl">
            Ingin membahas kebutuhan kain, meminta sampel, atau berkunjung ke
            pabrik?
          </h2>
          <p className="mt-4 max-w-xl text-white/75">
            Tim kami siap membantu. Hubungi sales atau lihat detail lokasi
            produksi di Jawa Tengah.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/kontak"
              className="rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Hubungi kami
            </Link>
            <Link
              href="/lokasi"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Lihat lokasi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
