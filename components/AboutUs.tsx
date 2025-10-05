"use client";
import React from "react";
import Image from "next/image";
import {
  motion,
  type Variants,
  type Transition,
} from "framer-motion";

/** ---------- Word-by-word headline animation ---------- */

type Segment = { text: string; highlight?: boolean };

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];
const wordT: Transition = { duration: 0.045, ease: easeOut }; // each word
const groupT: Transition = { staggerChildren: 0.04, delayChildren: 0.05 }; // sequence

const groupVariants: Variants = {
  hidden: {},
  show: { transition: groupT },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 6, filter: "blur(2px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: wordT,
  },
};

function tokenize(text: string): string[] {
  // keep spaces as tokens so spacing stays perfect
  return text.split(/(\s+)/).filter(Boolean);
}

function AnimatedWords({
  segments,
  className,
}: {
  segments: Segment[];
  className?: string;
}) {
  return (
    <motion.h1
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={groupVariants}
      className={className}
      aria-label={segments.map(s => s.text).join(" ")}
    >
      {segments.map((seg, i) => {
        const words = tokenize(seg.text);
        const isHL = Boolean(seg.highlight);
        return (
          <span
            key={i}
            className={
              isHL
                ? "text-[#2B8C07]  rounded-sm"
                : undefined
            }
          >
            {words.map((w, j) => {
              // animate only non-space tokens; render spaces as normal spans
              const isSpace = /^\s+$/.test(w);
              if (isSpace) {
                return <span key={`${i}-${j}`}>{w}</span>;
              }
              return (
                <motion.span
                  key={`${i}-${j}`}
                  variants={wordVariants}
                  className="inline-block will-change-transform"
                >
                  {w}
                </motion.span>
              );
            })}
            {/* add a trailing space between segments if needed */}
            {i < segments.length - 1 ? <span> </span> : null}
          </span>
        );
      })}
    </motion.h1>
  );
}

/** ---------- Your section with side images (kept static) ---------- */

export default function HeroServsi() {
  const segments: Segment[] = [
    { text: "SERVSI accompagne" },
    { text: "la transformation", highlight: true },
    { text: "digitale en Algérie avec" },
    { text: "des solutions IT innovantes et durables.", highlight: true },
    { text: "Avec" },
    { text: "IT2S", highlight: true },
    { text: ", nous offrons agilité, expertise et proximité." },
  ];

  return (
    <section className="relative isolate overflow-hidden">
      <div className="text-center max-w-7xl mx-auto px-6 py-14 md:px-10 lg:py-20">
        <AnimatedWords
          segments={segments}
          className="font-extrabold leading-[1.1] tracking-tight text-3xl sm:text-4xl md:text-5xl xl:text-5xl"
        />
      </div>

      {/* Right image (static, no motion — focus stays on text) */}
      <div className="pointer-events-none select-none absolute -right-10 top-5">
        <Image
          className="md:w-48 w-24"
          src="/images/right_side_logo.png"
          width={200}
          height={200}
          alt="servsi logo"
        />
      </div>

      {/* Left image (static) */}
      <div className="pointer-events-none select-none absolute -left-10 bottom-5">
        <Image
          className="md:w-48 w-24"
          src="/images/left_side_logo.png"
          width={200}
          height={200}
          alt="servsi logo"
        />
      </div>
    </section>
  );
}
