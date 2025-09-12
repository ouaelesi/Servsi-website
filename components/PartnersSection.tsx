'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, Variants } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

const DEFAULT_PARTNERS = [
  { name: "Cisco", src: "/images/partners/Logo_entp.svg", href: "#" },
  { name: "Fortinet", src: "/images/partners/Banque_du_Golf_Algérie.svg", href: "#" },
  { name: "AWS", src: "/images/partners/AlgeriePoste 1.svg", href: "#" },
  { name: "Azure", src: "/images/partners/Algerie_Telecom.svg.svg", href: "#" },
  { name: "Dell", src: "/images/partners/Sonatrach.svg", href: "#" },
  { name: "Dell", src: "/images/partners/test.svg", href: "#" },
];

export default function PartnersSection() {
  return (
    <section className="relative isolate flex flex-col justify-center">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mb-15 text-center"
      >
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
          Ils nous ont fait confiance
        </h2>
      </motion.div>

      {/* Grid of logos (stagger) */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-wrap items-center justify-center gap-8 md:gap-10"
      >
        {DEFAULT_PARTNERS.map((partner) => (
          <motion.div
            key={partner.name + partner.src}
            variants={fadeUp}
            whileHover={{ y: -2, scale: 1.03 }}
            transition={{ duration: 0.25, ease }}
            className="p-4"
          >
            <Link href={partner.href} className="block">
              <Image
                src={partner.src}
                alt={partner.name}
                width={160}
                height={60}
                className="h-[60px] w-auto object-contain opacity-80 transition-opacity duration-200 hover:opacity-100"
                // If your SVGs are dark on dark, uncomment to keep them visible:
                // style={{ filter: "invert(0)" }}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
