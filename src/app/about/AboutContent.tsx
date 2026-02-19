"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { Spade, Heart, Diamond, Club } from "@/components/icons";
import type { SiteConfig } from "@/content/site";

const specialties = [
  { icon: Spade, label: "Close-Up Card Magic", note: "Intimate performances inches from the audience" },
  { icon: Heart, label: "Corporate Entertainment", note: "Roaming and headline sets for events of any scale" },
  { icon: Diamond, label: "Private Gatherings", note: "Bespoke experiences for intimate celebrations" },
  { icon: Club, label: "Card Mechanics Demo", note: "Technical demonstrations of sleight-of-hand mastery" },
];

const signaturePoints = [
  "Every performance is different — routines are tailored to the audience and occasion",
  "No cameras, no screens — magic happens live, in your hands, at your table",
  "Guests don't just watch; they participate, react, and remember",
  "Clean, elegant presentation — no gimmicks, no cheese, just pure skill",
];

export function AboutContent({ config }: { config: SiteConfig }) {
  return (
    <PageTransition>
      {/* ─── Hero ─── */}
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-accent uppercase tracking-[0.2em] mb-3">About</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-fg">
            {config.name}
          </h1>
        </motion.div>
      </section>

      {/* ─── Bio ─── */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12">
          {/* Photo placeholder */}
          <motion.div
            className="aspect-[4/5] bg-bg-elevated hairline rounded-lg flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="text-center">
              <Spade className="w-8 h-8 text-accent/30 mx-auto mb-2" />
              <p className="text-xs text-muted">Photo</p>
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            {config.longBio.map((paragraph, i) => (
              <p key={i} className="text-sm text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Style & Specialties ─── */}
      <section className="hairline-t">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <SectionHeading
            label="Expertise"
            title="Style & Specialties"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {specialties.map((s, i) => (
              <motion.div
                key={s.label}
                className="hairline rounded-lg p-5 bg-bg-elevated"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <s.icon className="w-4 h-4 text-accent mb-3" />
                <h3 className="font-heading text-sm font-medium text-fg">{s.label}</h3>
                <p className="mt-1 text-xs text-muted">{s.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Signature Experience ─── */}
      <section className="hairline-t">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <SectionHeading
            label="The Experience"
            title="What Guests Remember"
            description="It's not about the tricks — it's about the moment."
          />
          <div className="space-y-4">
            {signaturePoints.map((point, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <span className="mt-1 text-accent text-xs">&#9830;</span>
                <p className="text-sm text-muted leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
