import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Ingin membahas kebutuhan kain, meminta sampel, atau berkunjung ke pabrik? Tim kami siap membantu.",
};

export default function KontakPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontak"
        title="Hubungi kami"
        description="Ingin membahas kebutuhan kain, meminta sampel, atau berkunjung ke pabrik? Tim kami siap membantu."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.5rem] border border-line bg-surface p-8">
            <h2 className="font-display text-2xl font-bold text-navy">
              Informasi perusahaan
            </h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-ink">Alamat</dt>
                <dd className="mt-1 text-muted">{siteConfig.contact.address}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Email sales</dt>
                <dd className="mt-1 text-muted">{siteConfig.contact.email}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Telepon</dt>
                <dd className="mt-1 text-muted">{siteConfig.contact.phone}</dd>
              </div>
            </dl>
            <p className="mt-8 rounded-xl bg-bg px-4 py-3 text-sm text-muted">
              {siteConfig.contact.note}
            </p>
          </div>

          <form className="rounded-[1.5rem] border border-line bg-surface p-8">
            <h2 className="font-display text-2xl font-bold text-navy">
              Kirim permintaan
            </h2>
            <p className="mt-2 text-sm text-muted">
              Form demo untuk company profile. Integrasi backend bisa
              ditambahkan kemudian.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">Nama</span>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-xl border border-line bg-bg px-3 py-2.5 outline-none ring-blue focus:ring-2"
                  placeholder="Nama lengkap"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">Email</span>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-line bg-bg px-3 py-2.5 outline-none ring-blue focus:ring-2"
                  placeholder="nama@perusahaan.com"
                />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="mb-1.5 block font-medium text-ink">Perusahaan</span>
                <input
                  type="text"
                  name="company"
                  className="w-full rounded-xl border border-line bg-bg px-3 py-2.5 outline-none ring-blue focus:ring-2"
                  placeholder="Nama perusahaan"
                />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="mb-1.5 block font-medium text-ink">Pesan</span>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full rounded-xl border border-line bg-bg px-3 py-2.5 outline-none ring-blue focus:ring-2"
                  placeholder="Ceritakan kebutuhan kain atau permintaan sampel"
                />
              </label>
            </div>

            <button
              type="button"
              className="mt-6 rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Kirim pesan
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
