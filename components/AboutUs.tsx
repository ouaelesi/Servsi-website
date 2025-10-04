"use client";
import Image from "next/image";
import React from "react";

/**
 * HeroServsi — TSX + Tailwind
 * Uses an <iframe> to embed a Spline scene to avoid CORS issues.
 */
export default function HeroServsi() {
  return (
    <section className="relative isolate overflow-hidden ">
      {/* background glow */}

      {/* Left: Copy */}
      <div className="text-center max-w-7xl mx-auto px-6 py-14 md:px-10  lg:py-20">
        <h1 className="font-extrabold leading-[1.1] tracking-tight text-3xl sm:text-4xl md:text-5xl xl:text-5xl">
          SERVSI accompagne{" "}
          <span className="text-[#2B8C07]">la transformation</span> digitale en
          Algérie avec{" "}
          <span className="text-[#2B8C07]">
            des solutions IT innovantes et durables.
          </span>{" "}
          Avec <span className="text-[#2B8C07]">IT2S</span> , nous offrons
          agilité, expertise et proximité.
        </h1>
      </div>
      <Image
        className="absolute -right-10 top-5  md:w-32 w-25"
        src="/images/right_side_logo.png"
        width={200}
        height={200}
        alt="servsi logo"
      />
      <Image
        className="absolute -left-10 bottom-5 md:w-32 w-25"
        src="/images/left_side_logo.png"
        width={200}
        height={200}
        alt="servsi logo"
      />
    </section>
  );
}
