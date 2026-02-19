"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/content/site";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { Spade } from "@/components/icons";

export function PressContent() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-accent uppercase tracking-[0.2em] mb-3">Press</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-fg">
            Press Kit
          </h1>
          <p className="mt-3 text-sm text-muted max-w-lg">
            Resources for media, event organisers, and collaborators.
          </p>
        </motion.div>
      </section>

      {/* Short bio */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <motion.div
          className="hairline rounded-lg p-8 bg-bg-elevated"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-heading text-lg font-medium text-fg mb-3">Bio</h2>
          <p className="text-sm text-muted leading-relaxed">
            {siteConfig.press.shortBio}
          </p>
        </motion.div>
      </section>

      {/* Photos */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <SectionHeading label="Photos" title="Press Photos" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <motion.div
              key={n}
              className="aspect-[4/5] bg-bg-elevated hairline rounded-lg flex items-center justify-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: n * 0.08, duration: 0.4 }}
            >
              <div className="text-center">
                <Spade className="w-6 h-6 text-accent/20 mx-auto mb-2" />
                <p className="text-xs text-muted">Photo {n}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Rider */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <SectionHeading label="Technical" title="Tech Rider" />
        <motion.div
          className="hairline rounded-lg p-8 bg-bg-elevated"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <ul className="space-y-3">
            {siteConfig.press.techRider.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted">
                <span className="text-accent text-xs mt-0.5">&#9830;</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Download CTA */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <motion.div
          className="hairline rounded-lg p-8 bg-bg-elevated text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="font-heading text-lg font-medium text-fg mb-2">
            Download Press Kit
          </h3>
          <p className="text-xs text-muted mb-5">
            High-resolution photos, full bio, and tech rider in a single download.
          </p>
          <button
            className="group inline-flex items-center gap-2 bg-fg text-bg px-6 py-3 rounded-md text-sm font-medium transition-colors hover:bg-accent-bright"
            aria-label="Download press kit (coming soon)"
          >
            <Spade className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            Download PDF
          </button>
          <p className="text-xs text-muted mt-3 italic">Coming soon</p>
        </motion.div>
      </section>
    </PageTransition>
  );
}
