import { mainNav, siteConfig } from "@/data/site";
import { products } from "@/data/products";
import { timeline } from "@/data/about";

export default function AdminKontenPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
          Konten situs
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold">
          Ringkasan konten aktif
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-white/65">
          Data saat ini bersumber dari brief `.md` dan disimpan di `src/data`.
          Form edit live database bisa ditambahkan pada tahap berikutnya.
        </p>
      </div>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold">Identitas brand</h3>
        <dl className="mt-4 grid gap-4 text-sm md:grid-cols-2">
          <div>
            <dt className="text-white/50">Nama</dt>
            <dd className="mt-1">{siteConfig.name}</dd>
          </div>
          <div>
            <dt className="text-white/50">Tagline</dt>
            <dd className="mt-1">{siteConfig.tagline}</dd>
          </div>
          <div className="md:col-span-2">
            <dt className="text-white/50">Deskripsi</dt>
            <dd className="mt-1 text-white/80">{siteConfig.description}</dd>
          </div>
        </dl>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">Halaman publik</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {mainNav.map((item) => (
              <li key={item.href} className="flex justify-between gap-3">
                <span>{item.label}</span>
                <span className="text-white/40">{item.href}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">Lini produk</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold">Timeline</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item) => (
            <div
              key={`${item.year}-${item.title}`}
              className="rounded-xl border border-white/10 bg-black/20 p-4"
            >
              <p className="text-blue">{item.year}</p>
              <p className="mt-1 text-sm text-white/80">{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
