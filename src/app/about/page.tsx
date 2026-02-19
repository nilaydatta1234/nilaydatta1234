import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Nirbhik Datta — his journey, style, and what makes his close-up card magic unforgettable.",
};

export default function AboutPage() {
  return <AboutContent config={siteConfig} />;
}
