import type { Metadata } from "next";
import { LokasiContent } from "@/components/pages/LokasiContent";
import { location } from "@/data/location";

export const metadata: Metadata = {
  title: "Lokasi",
  description: location.intro,
};

export default function LokasiPage() {
  return <LokasiContent />;
}