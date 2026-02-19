import type { Metadata } from "next";
import { PressContent } from "./PressContent";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Press kit for Nirbhik Datta — bio, photos, and technical rider for media and event organisers.",
};

export default function PressPage() {
  return <PressContent />;
}
