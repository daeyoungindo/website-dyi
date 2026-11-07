# Dae Young Textile – Company Profile

Website company profile multi-page untuk **PT Dae Young Textile (DYI)**, dibangun dengan Next.js App Router.

## Breakdown halaman (bukan one-page)

| Route | Sumber brief |
| --- | --- |
| `/` | Hero, stats, teaser |
| `/tentang` | Tentang DYI + Speed / Sustainability / Quality |
| `/perjalanan` | Timeline 1997–2023 |
| `/produk` | EM, SW, Circular Knit, Tricot + desain bersama |
| `/produksi` | Galeri proses + kapasitas |
| `/lokasi` | Logistik, pelabuhan, denah |
| `/keberlanjutan` | CO₂, inisiatif, KPI 2025 |
| `/kontak` | Kontak + form |
| `/admin` | Panel admin terpisah dari website utama |

## Menjalankan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) untuk website, dan [http://localhost:3000/admin](http://localhost:3000/admin) untuk admin panel.

## Sumber konten

- Brief: `.md/Dae Young Textile – Company Profile.md`
- Referensi visual: `.contoh/Dae Young Textile – Company Profile.html`
- Data terstruktur: `src/data/*`
- Aset gambar: `public/images/*`
