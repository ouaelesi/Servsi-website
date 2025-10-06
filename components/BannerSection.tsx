import Link from "next/link";
import React from "react";

type Props = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

/**
 * CtaBanner — Dark rounded CTA section (matches mock)
 * - Centered big headline
 * - Subheadline
 * - Green pill CTA
 * - Subtle grid background
 */
export default function CtaBanner({
  title = "Boostez votre infrastructure IT dès aujourd’hui",
  subtitle =
    "Confiez vos systèmes à des experts et assurez la sécurité, la performance et la continuité de vos opérations.",
  ctaLabel = "Découvrir nos services",
  ctaHref = "/#services",
  className = "",
}: Props) {
  return (
    <section className={`mx-auto max-w-7xl px-6 py-14 md:px-10 ${className}`}>
      <div className="relative overflow-hidden rounded-[2.25rem] bg-foreground text-white shadow-2xl">
        {/* grid overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
            backgroundPosition: "-1px -1px",
          }}
        />

        {/* content */}
        <div className="relative mx-auto max-w-4xl px-6 py-10 text-center md:py-14">
          <h2 className="text-balance text-2xl font-extrabold leading-tight tracking-tight sm:text-2xl md:text-4xl xl:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-pretty text-white/80 md:text-lg">
            {subtitle}
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center cursor-pointer justify-center rounded-full bg-primary px-6 py-2 text-base font-semibold text-black shadow-lg ring-1 ring-emerald-500/40 transition hover:brightness-95 md:px-8 md:py-3 md:text-md"
            > 
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
