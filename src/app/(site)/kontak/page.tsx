import type { Metadata } from "next";
import { KontakContent } from "@/components/pages/KontakContent";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Ingin membahas kebutuhan kain, meminta sampel, atau berkunjung ke pabrik? Tim kami siap membantu.",
};

export default function KontakPage() {
  return <KontakContent />;
}