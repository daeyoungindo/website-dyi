export const sustainability = {
  title: "Keberlanjutan",
  intro:
    "Target: mengurangi emisi CO₂ 30% pada 2025, 50% pada 2030, dan net zero pada 2050 (baseline 2020).",
  co2: [
    { year: "2021", value: "21%", tone: "achieved" as const },
    { year: "2022", value: "23%", tone: "achieved" as const },
    { year: "2023", value: "21%", tone: "achieved" as const },
    { year: "2024", value: "27%", tone: "achieved" as const },
    { year: "2025", value: "30%", tone: "target-near" as const },
    { year: "2030", value: "50%", tone: "target-near" as const },
    { year: "2050", value: "100%", tone: "target-far" as const },
  ],
  legend:
    "Hijau: capaian. Kuning: target 2025 dan 2030. Merah: target 2050.",
  initiatives: [
    {
      title: "Daur ulang air limbah",
      body: "Air dari proses diolah dan digunakan kembali.",
      image: {
        src: "/images/sustainability/instalasi-pengolahan-air-limbah.jpg",
        alt: "Instalasi pengolahan air limbah",
      },
    },
    {
      title: "Daur ulang sludge",
      body: "Burn & Dry setelah pengolahan air celup; hasilnya dimanfaatkan Indocement.",
      image: {
        src: "/images/sustainability/mesin-pengolah-sludge.jpg",
        alt: "Mesin pengolah sludge",
      },
    },
    {
      title: "Limbah non-B3",
      body: "Kardus, cones, styrofoam, plastik, benang, tekstil, dan palet kayu didaur ulang mitra menjadi kertas, egg tray, boneka, dan perabot.",
      image: {
        src: "/images/sustainability/gudang-hasil-sludge.jpg",
        alt: "Gudang hasil sludge",
      },
    },
    {
      title: "Rooftop solar",
      body: "PLTS atap 398 kWp (DC), perkiraan selesai akhir 2026.",
      image: {
        src: "/images/sustainability/rencana-panel-surya-atap.jpg",
        alt: "Rencana panel surya atap",
      },
    },
  ],
  kpis: [
    { value: "100%", label: "Waste diversion" },
    { value: "-19,6%", label: "Efisiensi air (Tier 2)" },
    { value: "98,65%", label: "Process" },
    { value: "94,3%", label: "Input chemical" },
    { value: "92,1%", label: "Environmental Assessment Tool" },
    { value: "100%", label: "Zero Tolerance dan Threshold Issue" },
  ],
};
