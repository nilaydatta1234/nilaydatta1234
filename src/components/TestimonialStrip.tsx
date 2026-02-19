"use client";

import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialStrip({ testimonials }: { testimonials: readonly Testimonial[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <motion.blockquote
          key={i}
          className="hairline rounded-lg p-6 bg-bg-elevated"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
        >
          <p className="text-sm text-fg leading-relaxed italic">
            &ldquo;{t.quote}&rdquo;
          </p>
          <footer className="mt-4 pt-4 hairline-t">
            <p className="text-sm font-medium text-fg">{t.author}</p>
            <p className="text-xs text-muted mt-0.5">{t.role}</p>
          </footer>
        </motion.blockquote>
      ))}
    </div>
  );
}
