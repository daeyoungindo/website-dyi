import type { Metadata } from "next";
import { KeberlanjutanContent } from "@/components/pages/KeberlanjutanContent";
import { sustainability } from "@/data/sustainability";

export const metadata: Metadata = {
  title: "Keberlanjutan",
  description: sustainability.intro,
};

export default function KeberlanjutanPage() {
  return <KeberlanjutanContent />;
}