import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Spade, Heart, Diamond, Club } from "./icons";

const pips = [Spade, Heart, Diamond, Club];

export function Footer() {
  return (
    <footer className="hairline-t">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-heading text-lg font-semibold tracking-tight text-fg"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-1 text-sm text-muted">{siteConfig.tagline}</p>
          </div>

          {/* Links */}
          <nav className="flex gap-6 text-sm text-muted" aria-label="Footer navigation">
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/performances" className="hover:text-accent transition-colors">
              Performances
            </Link>
            <Link href="/services" className="hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
            <Link href="/press" className="hover:text-accent transition-colors">
              Press
            </Link>
          </nav>

          {/* Social */}
          <div className="flex gap-4 text-sm text-muted">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="YouTube"
            >
              YouTube
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 hairline-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-2">
            {pips.map((Pip, i) => (
              <Pip key={i} className="w-3 h-3 text-border-hover" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
