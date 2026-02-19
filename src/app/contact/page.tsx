import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book Nirbhik Datta for your next event. Get in touch to discuss corporate shows, private performances, and workshops.",
};

export default function ContactPage() {
  return <ContactContent />;
}
