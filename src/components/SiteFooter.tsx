import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { mainNav, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-hero text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <BrandLogo className="h-14 w-auto" />
          <p className="mt-4 font-display text-2xl font-semibold">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
            Navigasi
          </p>
          <div className="mt-4 grid gap-2">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
            Kontak
          </p>
          <div className="mt-4 space-y-2 text-sm text-white/80">
            <p className="leading-relaxed">{siteConfig.contact.address}</p>
            <p>
              <span className="text-white/55">Email:</span>{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-blue hover:underline">
                {siteConfig.contact.email}
              </a>
            </p>
            <p>
              <span className="text-white/55">Telp:</span>{" "}
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white">
                {siteConfig.contact.phone}
              </a>
            </p>
            <div className="pt-2">
              <Link href="/kontak" className="inline-block text-blue hover:underline">
                Halaman kontak &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {siteConfig.year} {siteConfig.legalName}. Seluruh hak cipta dilindungi.
          </p>
          <Link href="/admin" className="hover:text-white">
            Admin panel
          </Link>
        </div>
      </div>
    </footer>
  );
}
