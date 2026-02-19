"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/content/site";
import { VideoCard } from "@/components/VideoCard";
import { PageTransition } from "@/components/PageTransition";

const categories = ["All", "Corporate", "Private", "Street"] as const;

export function PerformancesContent() {
  const [filter, setFilter] = useState<string>("All");

  const filtered =
    filter === "All"
      ? siteConfig.videos
      : siteConfig.videos.filter((v) => v.category === filter);

  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-accent uppercase tracking-[0.2em] mb-3">
            Performances
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-fg">
            Watch the Magic
          </h1>
          <p className="mt-3 text-sm text-muted max-w-lg">
            A curated selection of live performances, event highlights, and technical demonstrations.
          </p>
        </motion.div>
      </section>

      {/* Filter chips */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs transition-colors hairline ${
                filter === cat
                  ? "bg-accent/10 text-accent border-accent/30"
                  : "text-muted hover:text-fg hover:border-border-hover"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Video grid */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((video) => (
            <VideoCard
              key={video.title}
              title={video.title}
              description={video.description}
              url={video.url}
              thumbnail={video.thumbnail}
            />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-sm text-muted text-center py-12">
            No performances in this category yet.
          </p>
        )}
      </section>
    </PageTransition>
  );
}
