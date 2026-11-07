export const principles = [
  {
    title: "Speed",
    body: "Lead time cepat dari sampel sampai produksi massal.",
  },
  {
    title: "Sustainability",
    body: "Daur ulang air dan limbah, energi surya, dan target net zero 2050.",
  },
  {
    title: "Quality",
    body: "Kualitas stabil, bersertifikat ISO 14001 sejak 2011.",
  },
];

export const about = {
  title: "Tentang DYI",
  image: {
    src: "/images/about/tim-dae-young-textile-indonesia.jpg",
    alt: "Tim Dae Young Textile Indonesia",
  },
  body: "Sejak 1997, DYI memasok kain performa untuk merek olahraga dunia. R&D di Korea berpadu dengan produksi di Indonesia dan Vietnam, dengan tiga prinsip yang sama di semua lini.",
};

export type TimelineItem = {
  year: string;
  title: string;
  brand?: string;
};

export const timeline: TimelineItem[] = [
  { year: "1997", title: "Dae Young Textile berdiri" },
  { year: "2003", title: "Mulai bekerja sama dengan Reebok", brand: "Reebok" },
  { year: "2007", title: "Mulai bekerja sama dengan Adidas", brand: "Adidas" },
  { year: "2011", title: "Sertifikasi ISO 14001" },
  { year: "2013", title: "Pusat R&D dibuka di Korea" },
  { year: "2019", title: "Mulai produksi di Indonesia" },
  { year: "2020", title: "Mulai produksi di Vietnam" },
  { year: "2023", title: "Global MD Center dibuka" },
];
