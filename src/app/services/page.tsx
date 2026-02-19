import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Corporate events, private gatherings, and workshops — discover Nirbhik Datta's close-up card magic services.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
