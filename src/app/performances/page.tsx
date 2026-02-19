import type { Metadata } from "next";
import { PerformancesContent } from "./PerformancesContent";

export const metadata: Metadata = {
  title: "Performances",
  description:
    "Watch Nirbhik Datta's close-up card magic performances — corporate events, private shows, and street magic.",
};

export default function PerformancesPage() {
  return <PerformancesContent />;
}
