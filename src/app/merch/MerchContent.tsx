"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/content/site";
import { PageTransition } from "@/components/PageTransition";
import { Spade } from "@/components/icons";

const categories = ["All", "Tees", "Hoodies", "Decks", "Accessories"] as const;

function MerchCard({
  item,
  index,
}: {
  item: (typeof siteConfig.merch)[number];
  index: number;
}) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const discount = item.salePrice
    ? Math.round(((item.price - item.salePrice) / item.price) * 100)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-bg-elevated hairline">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badge */}
        {item.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] bg-accent text-bg rounded-sm">
            {item.badge}
          </span>
        )}

        {/* Discount badge */}
        {discount && (
          <span className="absolute top-3 right-3 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider bg-fg text-bg rounded-sm">
            Save {discount}%
          </span>
        )}

        {/* Quick-add overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full py-3 bg-accent/90 backdrop-blur-sm text-bg text-xs font-semibold uppercase tracking-[0.15em] hover:bg-accent transition-colors">
            {item.sizes.length > 0 ? "Choose Options" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="font-heading text-sm font-medium text-fg leading-snug group-hover:text-accent transition-colors">
          {item.title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          {item.salePrice ? (
            <>
              <span className="text-sm font-medium text-fg">
                Rs. {item.salePrice.toLocaleString("en-IN")}
              </span>
              <span className="text-xs text-muted line-through">
                Rs. {item.price.toLocaleString("en-IN")}
              </span>
            </>
          ) : (
            <span className="text-sm font-medium text-fg">
              Rs. {item.price.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        {/* Sizes */}
        {item.sizes.length > 0 && (
          <div className="flex gap-1.5 mt-1">
            {item.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size === selectedSize ? null : size)}
                className={`w-8 h-8 flex items-center justify-center text-[11px] rounded transition-all duration-200 ${
                  selectedSize === size
                    ? "bg-accent text-bg font-semibold"
                    : "hairline text-muted hover:text-fg hover:border-border-hover"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function MerchContent() {
  const [filter, setFilter] = useState<string>("All");

  const filtered =
    filter === "All"
      ? siteConfig.merch
      : siteConfig.merch.filter((item) => item.category === filter);

  return (
    <PageTransition>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-accent uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
            <Spade className="w-3 h-3" />
            Official Merch
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-fg">
            The Collection
          </h1>
          <p className="mt-3 text-sm text-muted max-w-lg">
            Wear the craft. Official Nirbhik Datta merchandise — designed for
            those who appreciate the art of close-up magic.
          </p>
        </motion.div>
      </section>

      {/* Filter chips */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
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

      {/* Product grid */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
          {filtered.map((item, i) => (
            <MerchCard key={item.title} item={item} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-sm text-muted text-center py-12">
            No products in this category yet.
          </p>
        )}
      </section>
    </PageTransition>
  );
}
