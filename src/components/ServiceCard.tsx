"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Diamond } from "./icons";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
}

export function ServiceCard({ title, subtitle, description }: ServiceCardProps) {
  return (
    <motion.div
      className="group hairline rounded-lg p-6 bg-bg-elevated transition-colors hover:border-accent/30"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Diamond className="w-4 h-4 text-accent mb-4" />
      <h3 className="font-heading text-lg font-medium text-fg">{title}</h3>
      <p className="mt-1 text-xs text-accent tracking-wide uppercase">{subtitle}</p>
      <p className="mt-3 text-sm text-muted leading-relaxed">{description}</p>
      <Link
        href="/services"
        className="inline-flex items-center gap-1 mt-4 text-xs text-accent hover:text-accent-bright transition-colors"
      >
        Learn more
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="transition-transform group-hover:translate-x-0.5"
        >
          <path d="M4 2l4 4-4 4" />
        </svg>
      </Link>
    </motion.div>
  );
}
