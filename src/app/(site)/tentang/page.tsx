import type { Metadata } from "next";
import { TentangContent } from "@/components/pages/TentangContent";
import { about } from "@/data/about";

export const metadata: Metadata = {
  title: "Tentang",
  description: about.body,
};

export default function TentangPage() {
  return <TentangContent />;
}