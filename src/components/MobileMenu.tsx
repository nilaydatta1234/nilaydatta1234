"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Spade } from "./icons";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  pathname: string;
}

export function MobileMenu({ open, onClose, links, pathname }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-lg flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between px-6 py-4 hairline-b">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-2 font-heading text-lg font-semibold text-fg"
            >
              <Spade className="w-4 h-4 text-accent" />
              <span>Nirbhik Datta</span>
            </Link>
            <button onClick={onClose} className="p-2" aria-label="Close menu">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 4l12 12M16 4L4 16" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-8" aria-label="Mobile navigation">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`text-2xl font-heading tracking-wide transition-colors hover:text-accent ${
                    pathname === link.href ? "text-accent" : "text-fg"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
