"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";
import { PageTransition } from "@/components/PageTransition";

export function ContactContent() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-accent uppercase tracking-[0.2em] mb-3">Contact</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-fg">
            Let&apos;s Talk
          </h1>
          <p className="mt-3 text-sm text-muted max-w-lg">
            Have an upcoming event? Want to book a performance or workshop?
            Fill out the form below or reach out directly.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.8fr] gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>

          {/* Direct contact */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="hairline rounded-lg p-6 bg-bg-elevated">
              <h3 className="font-heading text-sm font-medium text-fg mb-4">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  >
                    <rect x="1" y="3" width="14" height="10" rx="2" />
                    <path d="M1 5l7 4 7-4" />
                  </svg>
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8 1a7 7 0 00-6.1 10.4L1 15l3.7-.9A7 7 0 108 1zm3.6 9.8c-.2.4-.9.8-1.3.9-.3 0-.7.1-2-.4s-2.5-1.6-3.3-2.8c-.5-.7-.9-1.5-.9-2.3s.4-1.1.5-1.3c.2-.2.3-.2.4-.2h.4c.1 0 .3 0 .4.3s.5 1.2.6 1.3c.1.1.1.2 0 .3s-.2.3-.3.4c-.1.1-.2.3-.1.5.6 1 1.3 1.7 2.2 2.2.2.1.4.1.5-.1.2-.2.4-.5.6-.7.1-.2.3-.2.5-.1l1.5.7c.2.1.3.2.4.3.1.3.1.6-.1 1z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  >
                    <rect x="1" y="1" width="14" height="14" rx="4" />
                    <circle cx="8" cy="8" r="3" />
                    <circle cx="12" cy="4" r="0.8" fill="currentColor" stroke="none" />
                  </svg>
                  Instagram
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M14.5 4.3a1.8 1.8 0 00-1.3-1.3C12 2.7 8 2.7 8 2.7s-4 0-5.2.3A1.8 1.8 0 001.5 4.3C1.2 5.5 1.2 8 1.2 8s0 2.5.3 3.7c.2.7.7 1.1 1.3 1.3C4 13.3 8 13.3 8 13.3s4 0 5.2-.3c.6-.2 1.1-.6 1.3-1.3.3-1.2.3-3.7.3-3.7s0-2.5-.3-3.7zM6.5 10.3V5.7L10.2 8l-3.7 2.3z" />
                  </svg>
                  YouTube
                </a>
              </div>
            </div>

            <div className="hairline rounded-lg p-6 bg-bg-elevated">
              <h3 className="font-heading text-sm font-medium text-fg mb-2">
                Response Time
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                I typically respond within 24 hours. For urgent enquiries,
                please reach out via WhatsApp.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
