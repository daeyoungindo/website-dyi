import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Panel pengelolaan konten company profile Dae Young Textile.",
};

const adminNav = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/konten", label: "Konten situs" },
  { href: "/admin/pesan", label: "Pesan masuk" },
];

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#0b1728] text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">
        <aside className="border-b border-white/10 lg:w-64 lg:border-b-0 lg:border-r">
          <div className="px-5 py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              DYI Admin
            </p>
            <h1 className="mt-2 font-display text-xl font-bold">
              Company Profile
            </h1>
          </div>
          <nav className="flex gap-1 overflow-x-auto px-3 pb-4 lg:flex-col">
            {adminNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-lg px-3 py-2 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/"
              className="mt-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm text-blue transition hover:bg-white/10 lg:mt-6"
            >
              ← Kembali ke website
            </Link>
          </nav>
        </aside>

        <div className="flex-1 px-5 py-8 lg:px-8">{children}</div>
      </div>
    </div>
  );
}
