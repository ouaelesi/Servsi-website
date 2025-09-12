"use client";
import React, { useId, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

export type FaqItem = { q: string; a: string };

const DEFAULT_FAQ: FaqItem[] = [
  {
    q: "Quels types de solutions IT proposez-vous ?",
    a: "SaaS is subscription-based and centrally hosted. Users pay a recurring fee to access the software over the internet, eliminating the need for upfront costs and ongoing maintenance.",
  },
  {
    q: "Comment garantissez-vous la sécurité de mes données ?",
    a: "Nous appliquons le chiffrement au repos et en transit, l'authentification multi-facteur et des audits de sécurité réguliers.",
  },
  {
    q: "Offrez-vous des services de maintenance et de support 24/7 ?",
    a: "Oui. Notre équipe d'astreinte assure une surveillance continue et une réponse rapide aux incidents critiques.",
  },
  {
    q: "Pouvez-vous installer et configurer mes serveurs et réseaux ?",
    a: "Oui, nous prenons en charge l'installation, la configuration et la documentation complète pour vos équipes.",
  },
  {
    q: "Proposez-vous des solutions personnalisées selon mon secteur ?",
    a: "Absolument. Nos architectures sont adaptées à votre contexte métier, vos contraintes et vos objectifs.",
  },
  {
    q: "Comment puis-je commencer à travailler avec Servsi dès aujourd'hui ?",
    a: "Planifiez un appel de découverte : nous évaluons vos besoins, proposons une feuille de route et démarrons un POC.",
  },
];

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
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
const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

export default function FAQAccordion({
  items = DEFAULT_FAQ,
  defaultOpen = 0,
  title = "Vos questions, nos réponses.",
  subtitle = "Trouvez rapidement des réponses sur nos services IT, notre expertise et comment nous pouvons optimiser votre infrastructure et votre sécurité.",
}: {
  items?: FaqItem[];
  defaultOpen?: number | null;
  title?: string;
  subtitle?: string;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const sectionId = useId();

  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:px-8">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mb-8 text-center"
      >
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-gray-600">{subtitle}</p>
      </motion.div>

      {/* Items */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="space-y-4"
      >
        {items.map((itemData, i) => {
          const isOpen = open === i;
          const contentId = `${sectionId}-panel-${i}`;
          return (
            <motion.div
              key={i}
              variants={item}
              className="rounded-2xl bg-gray-50 ring-1 ring-black/5"
            >
              <motion.button
                type="button"
                className="flex w-full items-center justify-between gap-6 rounded-2xl px-6 py-5 text-left"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => setOpen(isOpen ? null : i)}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xs font-medium text-gray-900 md:text-lg">
                  {itemData.q}
                </span>

                {/* Icon cross-fade + rotate */}
                <div className="relative h-6 w-6">
                  <AnimatePresence mode="wait" initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="x"
                        initial={{ opacity: 0, rotate: -90, scale: 0.9 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.9 }}
                        transition={{ duration: 0.2, ease }}
                        className="absolute inset-0"
                      >
                        <XIcon className="h-6 w-6 text-gray-900" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="plus"
                        initial={{ opacity: 0, rotate: -90, scale: 0.9 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.9 }}
                        transition={{ duration: 0.2, ease }}
                        className="absolute inset-0"
                      >
                        <PlusIcon className="h-6 w-6 text-gray-900" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>

              {/* Expand / collapse */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={contentId}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease }}
                    className="-mt-2 overflow-hidden px-6 pb-6"
                  >
                    <p className="text-xs leading-relaxed text-gray-600 md:text-sm">
                      {itemData.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
