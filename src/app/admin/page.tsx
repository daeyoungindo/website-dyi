import Link from "next/link";
import { mainNav, siteConfig } from "@/data/site";

const cards = [
  {
    title: "Halaman publik",
    value: String(mainNav.length),
    body: "Beranda dan halaman konten sudah dipisah per route.",
  },
  {
    title: "Produk utama",
    value: "4",
    body: "Engineering Mesh, Sandwich Mesh, Circular Knit, Tricot.",
  },
  {
    title: "Negara operasi",
    value: "3",
    body: "Korea, Indonesia, dan Vietnam.",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
          Dashboard
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold">
          Selamat datang, Admin {siteConfig.shortName}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-white/65">
          Panel ini terpisah dari website utama. Gunakan untuk memantau struktur
          konten company profile dan menyiapkan pengelolaan pesan/kontak.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <p className="text-sm text-white/55">{card.title}</p>
            <p className="mt-3 font-display text-4xl font-bold">
              {card.value}
            </p>
            <p className="mt-3 text-sm text-white/65">{card.body}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="font-display text-xl font-bold">
          Shortcut
        </h3>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/admin/konten"
            className="rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white"
          >
            Kelola konten
          </Link>
          <Link
            href="/admin/pesan"
            className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Lihat pesan
          </Link>
          <Link
            href="/"
            className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Pratinjau website
          </Link>
        </div>
      </div>
    </div>
  );
}
