"use client";
import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

/**
 * TestimonialsSection — grid of testimonial cards (animated)
 * - Heading fades up on view
 * - Cards stagger in with a soft lift
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatarSrc?: string; // optional image; if not provided, initials are shown
  initials?: string;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "La consolidation et l’extension du réseau ont été réalisées avec professionnalisme, en respectant toutes les exigences techniques et de sécurité.",
    name: "Algérie Poste",
    role: "",
    avatarSrc: "/images/partners/AlgeriePoste 1.svg",
    initials: "ER",
  },
  {
    quote:
      "Les obligations contractuelles ont été réalisées dans les règles de l’art, apportant une entière satisfaction.",
    name: "Sonatrach",
    role: "Division Production (WIFI TFT)",
    avatarSrc: "/images/partners/Sonatrach.svg",
    initials: "JW",
  },

  {
    quote:
      "Les obligations ont été accomplies dans les règles de l’art, offrant une entière satisfaction.",
    name: "Optimum Telecom Algérie",
    role: "(OTA - ACI)",
    avatarSrc: "/images/TEAM/3.jpg",
    initials: "NC",
  },
  {
    quote:
      "Les travaux ont été exécutés de manière professionnelle, avec une entière satisfaction dans la mise à niveau et la mise en conformité du Datacenter.",
    name: "Groupe SAIDAL",
    role: "",
    avatarSrc: "/images/TEAM/3.jpg",
    initials: "DF",
  },
  {
    quote:
      "Les tâches confiées ont été exécutées correctement et dans les délais, avec un résultat conforme aux attentes.",
    name: "Fromagerie BEL Algérie",
    role: "Fashion CEO",
    avatarSrc: "/images/TEAM/3.jpg",
    initials: "MA",
  },
  {
    quote:
      "Les engagements techniques ont été respectés dans les règles de l’art, avec une entière satisfaction.",
    name: "Optimum Telecom Algérie ",
    role: "(OTA - ACI)",
    avatarSrc: "/images/partners/test.svg",
    initials: "LB",
  },
];

function Avatar({ src, initials }: { src?: string; initials?: string }) {
  return (
    <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200 shadow-sm ring-1 ring-black/5">
      {src ? (
        <Image
          src={src}
          alt=""
          className="h-full w-full object-cover"
          width={48}
          height={48}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-gray-700">
          {initials?.slice(0, 2).toUpperCase()}
        </div>
      )}
    </div>
  );
}

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

export default function TestimonialsSection({
  items = DEFAULT_TESTIMONIALS,
  title = "Ce que disent nos clients",
  subtitle = "Les témoignages de nos clients reflètent notre engagement envers l’excellence.",
}: {
  items?: Testimonial[];
  title?: string;
  subtitle?: string;
}) {
  return (
    <section
      className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:pt-20"
      id="testimonials"
    >
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mb-15 text-center"
      >
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-gray-600">{subtitle}</p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
      >
        {items.map((t, i) => (
          <motion.article
            key={i}
            variants={fadeUp}
            whileHover={{ y: -2, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
            className="rounded-xl bg-gray-50 p-6 transition-all md:p-5 ring-1 ring-black/5"
          >
            <p className="text-sm leading-relaxed text-gray-700">{t.quote}</p>
            <div className="mt-6 flex items-center gap-4">
              <Avatar src={t.avatarSrc} initials={t.initials} />
              <div>
                <div className="font-medium text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
