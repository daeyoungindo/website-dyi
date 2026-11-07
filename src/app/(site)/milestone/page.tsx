import type { Metadata } from "next";
import { MilestoneContent } from "@/components/pages/MilestoneContent";

export const metadata: Metadata = {
  title: "Milestone",
  description:
    "Tonggak sejarah dan perjalanan Dae Young Textile dari 1997 sampai 2023.",
};

export default function MilestonePage() {
  return <MilestoneContent />;
}