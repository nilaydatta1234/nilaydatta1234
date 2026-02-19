"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface VideoCardProps {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
}

export function VideoCard({ title, description, url, thumbnail }: VideoCardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block hairline rounded-lg overflow-hidden bg-bg-elevated transition-colors hover:border-accent/30"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Play indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-bg/60 backdrop-blur-sm flex items-center justify-center hairline">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="text-accent ml-0.5"
            >
              <path d="M4 2l10 6-10 6V2z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-heading text-sm font-medium text-fg">{title}</h3>
        <p className="mt-1 text-xs text-muted leading-relaxed">{description}</p>
      </div>
    </motion.a>
  );
}
