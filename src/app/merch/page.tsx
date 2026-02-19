import type { Metadata } from "next";
import { MerchContent } from "./MerchContent";

export const metadata: Metadata = {
  title: "Merch",
  description:
    "Official Nirbhik Datta merchandise — tees, hoodies, signature decks, and accessories.",
};

export default function MerchPage() {
  return <MerchContent />;
}
