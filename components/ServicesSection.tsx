'use client';
import React from "react";
import {
  ClipboardList,
  RefreshCw,
  Shield,
  Network,
  DatabaseBackup,
  Cloud,
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
      title: "Conseil & Gestion de Projets IT",
      desc:
        "Nous vous guidons dans vos projets IT, de la stratégie à la mise en œuvre complète.",
      icon: ClipboardList,
    },
    {
      title: "Maintenance & Support IT",
      desc:
        "Assurez la continuité de vos opérations avec notre support réactif, sur site ou à distance.",
      icon: RefreshCw,
    },
    {
      title: "Cybersécurité Avancée",
      desc:
        "Protégez vos systèmes et données grâce à nos solutions de sécurité, audits et surveillance continue.",
      icon: Shield,
    },
    {
      title: "Infrastructures IT & Réseaux",
      desc:
        "Nous concevons et déployons des infrastructures réseau fiables et performantes pour soutenir votre croissance.",
      icon: Network,
    },
    {
      title: "Sauvegarde & Reprise Après Sinistre",
      desc:
        "Protégez vos données critiques et assurez une reprise rapide en cas d'incident majeur.",
      icon: DatabaseBackup,
    },
    {
      title: "Solutions Cloud & Virtualisation",
      desc:
        "Gagnez en flexibilité et en performance avec nos solutions cloud et de virtualisation sécurisées.",
      icon: Cloud,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
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
        <p className="mt-3 text-gray-600">
          Des services informatiques fiables pour des opérations sans interruption.
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
                         hover:shadow-md hover:-translate-y-0.5"
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

              <h3 className="text-md text-gray-900 md:text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{s.desc}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
