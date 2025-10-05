"use client";
import React from "react";
import {
  ClipboardList,
  RefreshCw,
  Shield,
  Network,
  DatabaseBackup,
  Cloud,
  Camera,
  Umbrella,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export default function ServicesSection() {
  const services: Array<{
    title: string;
    desc: string;
    icon: React.ElementType;
  }> = [
    {
      title: "Maintenance & Support IT",
      desc: "Assurez la continuité de vos opérations grâce à un support réactif et personnalisé, sur site ou à distance, incluant suivi, mise à jour et optimisation des systèmes.",
      icon: ClipboardList,
    },
    {
      title: "Cybersécurité & Conformité ISO",
      desc: "Protégez vos systèmes avec des solutions avancées : audits réguliers, conformité ISO, surveillance 24/7 et conseil stratégique.",
      icon: Shield,
    },
    {
      title: "Sécurité Physique & Contrôle d’Accès",
      desc: "Déployez des systèmes CCTV intelligents et un contrôle d’accès sécurisé pour protéger vos infrastructures et vos données sensibles.",
      icon: Camera,
    },
    {
      title: "Infrastructures IT & Réseaux",
      desc: "Conception et intégration d’infrastructures performantes, fiables et évolutives, alliant performance, stabilité et sécurité.",
      icon: Network,
    },
    {
      title: "Cloud, Virtualisation & Sauvegarde",
      desc: "Gagnez en flexibilité et en résilience avec le cloud : sauvegarde sécurisée, reprise après sinistre et continuité d’activité.",
      icon: Cloud,
    },
    {
      title: "Smart Building & Gestion Intelligente",
      desc: "Optimisez la gestion de vos bâtiments grâce à l’automatisation, l’efficacité énergétique et la sécurité intégrée.",
      icon: Umbrella,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10" id="services">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mb-10 text-center"
      >
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
          Services
        </h2>
        <p className="mt-3 text-gray-600 font-medium">
          Des services informatiques fiables pour des opérations sans
          interruption.
        </p>
      </motion.div>

      {/* Grid (stagger) */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3"
      >
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.article
              key={i}
              variants={fadeUp}
              className="group rounded-xl bg-[#f8f8f8] p-3 transition-all md:p-5
                          hover:-translate-y-0.5"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, ease }}
                className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white ring-1 ring-black/5"
              >
                <Icon className="h-6 w-6 text-gray-900" />
              </motion.div>

              <h3 className="text-md font-medium text-gray-900 md:text-xl">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {s.desc}
              </p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
