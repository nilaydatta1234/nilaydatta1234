"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {label && (
        <p className="text-xs text-accent uppercase tracking-[0.2em] mb-2">{label}</p>
      )}
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-fg">{title}</h2>
      {description && (
        <p className="mt-3 text-sm text-muted max-w-xl leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
