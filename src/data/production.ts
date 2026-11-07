export const production = {
  title: "Produksi dan kapasitas",
  intro:
    "Rantai produksi lengkap di satu lokasi: rajut, warping, celup, dan finishing.",
  gallery: [
    {
      src: "/images/produksi/mesin-rajut.jpg",
      alt: "Mesin rajut",
      caption: "Mesin rajut",
    },
    {
      src: "/images/produksi/mesin-warping.jpg",
      alt: "Mesin warping",
      caption: "Warping",
    },
    {
      src: "/images/produksi/circular-knit.jpg",
      alt: "Circular knit",
      caption: "Circular knit",
    },
    {
      src: "/images/produksi/area-stenter.jpg",
      alt: "Area stenter",
      caption: "Finishing (stenter)",
    },
  ],
  capacities: [
    { name: "Circular Knit", machines: "23 mesin", output: "614K yd" },
    { name: "Engineering Mesh", machines: "3 mesin", output: "270K pasang" },
    { name: "Tricot", machines: "3 mesin", output: "210K yd" },
    { name: "Double Raschel", machines: "9 mesin", output: "200K yd" },
  ],
  processTable: [
    {
      process: "Warping",
      machines: "3 filament + 2 mother yarn",
      capacity: "22.500K yd (filament), 15.000K yd (mother)",
    },
    { process: "Dyeing", machines: "17", capacity: "500K kg" },
    {
      process: "Finishing (post-heating)",
      machines: "2",
      capacity: "2.500K kg",
    },
  ],
  note: "Panjang batang membandingkan antar-baris saja; satuan tiap proses berbeda.",
};
