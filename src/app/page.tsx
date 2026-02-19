"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/content/site";
import { VideoCard } from "@/components/VideoCard";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialStrip } from "@/components/TestimonialStrip";
import { SectionHeading } from "@/components/SectionHeading";
import { Spade, Club } from "@/components/icons";

export default function Home() {
  const featuredVideos = siteConfig.videos.slice(0, 3);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative flex items-center justify-center min-h-[90vh] overflow-hidden">
        {/* Vignette spotlight */}
        <div className="vignette" />

        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 600px 400px at 50% 45%, rgba(168,180,192,0.04) 0%, transparent 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs text-accent uppercase tracking-[0.3em] mb-4 flex items-center justify-center gap-2">
              <Spade className="w-3 h-3" />
              Close-Up Card Magic
              <Club className="w-3 h-3" />
            </p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-fg">
              {siteConfig.name}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted font-light tracking-wide">
              {siteConfig.tagline}
            </p>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-fg text-bg px-7 py-3.5 rounded-md text-sm font-medium transition-colors hover:bg-accent-bright"
            >
              <Spade className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              Book a Show
            </Link>
            <Link
              href="/performances"
              className="inline-flex items-center gap-2 hairline px-7 py-3.5 rounded-md text-sm text-fg transition-colors hover:border-accent/40"
            >
              Watch Performances
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── Featured Clips ─── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          label="Featured"
          title="Recent Performances"
          description="A glimpse into the world of close-up card magic."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredVideos.map((video) => (
            <VideoCard
              key={video.title}
              title={video.title}
              description={video.description}
              url={video.url}
              thumbnail={video.thumbnail}
            />
          ))}
        </div>
      </section>

      {/* ─── Services Overview ─── */}
      <section className="mx-auto max-w-6xl px-6 py-24 hairline-t">
        <SectionHeading
          label="Services"
          title="What I Offer"
          description="Tailored close-up magic for every occasion."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
            />
          ))}
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="mx-auto max-w-6xl px-6 py-24 hairline-t">
        <SectionHeading
          label="Testimonials"
          title="What People Say"
        />
        <TestimonialStrip testimonials={siteConfig.testimonials} />
      </section>

      {/* ─── CTA Strip ─── */}
      <section className="hairline-t">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-fg">
              Ready to experience the impossible?
            </h2>
            <p className="mt-3 text-sm text-muted">
              Get in touch to discuss your next event.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 mt-8 bg-fg text-bg px-7 py-3.5 rounded-md text-sm font-medium transition-colors hover:bg-accent-bright"
            >
              <Spade className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
