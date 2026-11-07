import type { Metadata } from "next";
import { ProdukContent } from "@/components/pages/ProdukContent";

export const metadata: Metadata = {
  title: "Produk",
  description:
    "Empat lini kain dengan desain dan pola yang dapat disesuaikan.",
};

export default function ProdukPage() {
  return <ProdukContent />;
}