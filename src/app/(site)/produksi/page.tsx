import type { Metadata } from "next";
import { ProduksiContent } from "@/components/pages/ProduksiContent";
import { production } from "@/data/production";

export const metadata: Metadata = {
  title: "Produksi",
  description: production.intro,
};

export default function ProduksiPage() {
  return <ProduksiContent />;
}