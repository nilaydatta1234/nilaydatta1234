"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/content/site";
import { PageTransition } from "@/components/PageTransition";
import { Spade, Diamond } from "@/components/icons";

export function ServicesContent() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-accent uppercase tracking-[0.2em] mb-3">Services</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-fg">
            What I Offer
          </h1>
          <p className="mt-3 text-sm text-muted max-w-lg">
            Every performance is tailored to your event. Here&apos;s what you can expect.
          </p>
        </motion.div>
      </section>

      {/* Service sections */}
      <section className="mx-auto max-w-4xl px-6 pb-24 space-y-16">
        {siteConfig.services.map((service, i) => (
          <motion.div
            key={service.title}
            className="hairline rounded-lg p-8 bg-bg-elevated"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Diamond className="w-4 h-4 text-accent mb-4" />
            <h2 className="font-heading text-2xl font-semibold text-fg">
              {service.title}
            </h2>
            <p className="text-xs text-accent tracking-wide uppercase mt-1">
              {service.subtitle}
            </p>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-2xl">
              {service.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
              {/* Details */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-accent uppercase tracking-wider mb-1">
                    Ideal Audience
                  </p>
                  <p className="text-sm text-fg">{service.audience}</p>
                </div>
                <div>
                  <p className="text-xs text-accent uppercase tracking-wider mb-1">
                    Duration
                  </p>
                  <p className="text-sm text-fg">{service.duration}</p>
                </div>
              </div>

              {/* What's included */}
              <div>
                <p className="text-xs text-accent uppercase tracking-wider mb-2">
                  What&apos;s Included
                </p>
                <ul className="space-y-2">
                  {service.includes.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted">
                      <span className="text-accent text-xs mt-0.5">&#9830;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Requirements */}
            <div className="mt-6 pt-6 hairline-t">
              <p className="text-xs text-accent uppercase tracking-wider mb-2">
                Requirements
              </p>
              <ul className="space-y-1.5">
                {service.requirements.map((req, j) => (
                  <li key={j} className="text-xs text-muted flex items-start gap-2">
                    <span className="text-border-hover mt-0.5">&#8212;</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="hairline-t">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-heading text-2xl font-semibold text-fg">
              Request a Quote
            </h2>
            <p className="mt-2 text-sm text-muted">
              Every event is unique. Let&apos;s discuss what works best for yours.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 mt-6 bg-fg text-bg px-7 py-3.5 rounded-md text-sm font-medium transition-colors hover:bg-accent-bright"
            >
              <Spade className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
