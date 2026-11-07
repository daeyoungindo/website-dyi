export type NavItem = {
  href: string;
  label: string;
};

export const siteConfig = {
  name: "Dae Young Textile",
  shortName: "DYI",
  legalName: "PT Dae Young Textile",
  tagline: "Kain rajut teknis untuk merek global",
  description:
    "Dae Young Textile memproduksi engineering mesh, sandwich mesh, circular knit, dan tricot dari pabrik di Jawa Tengah, dengan pusat R&D di Korea.",
  year: 2026,
  contact: {
    address: "Akan diisi oleh perusahaan",
    email: "sales@daeyoungtextile.example",
    phone: "+62 XXX XXX XXXX",
    note: "Alamat pabrik, email sales, dan nomor telepon: akan diisi oleh perusahaan.",
  },
};

export const mainNav: NavItem[] = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/perjalanan", label: "Perjalanan" },
  { href: "/produk", label: "Produk" },
  { href: "/produksi", label: "Produksi" },
  { href: "/lokasi", label: "Lokasi" },
  { href: "/keberlanjutan", label: "Keberlanjutan" },
  { href: "/kontak", label: "Kontak" },
];

export const heroSlides = [
  {
    src: "/images/hero/pabrik-dyi-dilihat-dari-udara.jpg",
    alt: "Pabrik DYI dilihat dari udara",
  },
  {
    src: "/images/hero/gedung-utama-pt-dae-young-textile.jpg",
    alt: "Gedung utama PT Dae Young Textile",
  },
  {
    src: "/images/hero/mesin-rajut-di-lantai-produksi.jpg",
    alt: "Mesin rajut di lantai produksi",
  },
  {
    src: "/images/hero/lini-produksi-dyi.jpg",
    alt: "Lini produksi DYI",
  },
];

export const homeStats = [
  { value: "1997", label: "Tahun berdiri" },
  { value: "3", label: "Negara: Korea, Indonesia, Vietnam" },
  { value: "224", label: "Karyawan (4 Korea, 220 lokal)" },
  { value: "100%", label: "Waste diversion 2025" },
];

export const pageTeasers = [
  {
    href: "/tentang",
    title: "Tentang DYI",
    body: "Tiga prinsip: Speed, Sustainability, Quality.",
  },
  {
    href: "/produk",
    title: "Produk",
    body: "Engineering mesh, sandwich mesh, circular knit, dan tricot.",
  },
  {
    href: "/produksi",
    title: "Produksi",
    body: "Kapasitas lengkap dari warping sampai finishing.",
  },
  {
    href: "/keberlanjutan",
    title: "Keberlanjutan",
    body: "Target net zero 2050 dengan KPI lingkungan 2025.",
  },
];
