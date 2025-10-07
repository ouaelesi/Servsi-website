import Image from "next/image";
import Link from "next/link";
import React from "react";

export type Author = {
  name: string;
  avatar: string; // /public path preferred
};

export type PostMeta = {
  title: string;
  excerpt: string;
  date: string; // human readable
  category: string;
  heroImage: string; // /public path preferred
  author: Author;
  content: PostContentSection[];
};

export type PostContentSection = {
  title: string;
  text: string;
  images: string[]; // array of /public paths preferred
};

const DEFAULT_META: PostMeta = {
  title:
    "Comment moderniser son réseau en entreprise : de l’audit au déploiement",
  excerpt:
    "De l’audit initial à l’exploitation 24/7, découvrez les étapes clés pour bâtir une infrastructure réseau performante, sécurisée, évolutive et conforme aux standards (ITIL, ISO 27001).",
  date: "Oct 2025",
  category: "Réseaux & Infrastructure",
  heroImage: "/images/about1.jpg",
  author: {
    name: "SERVSI — Équipe Réseaux",
    avatar: "/images/Logo.png",
  },
  content: [
    {
      title: "Introduction",
      text: "La transformation digitale impose de nouvelles exigences aux infrastructures IT. Des réseaux souvent anciens ne répondent plus aux usages modernes ni aux menaces actuelles. Objectif : garantir performance, sécurité, évolutivité et conformité (ITIL, ISO 27001) via une démarche structurée, de l’audit au déploiement opérationnel.",
      images: [],
    },
    {
      title: "Étape 1 — L’audit du réseau existant",
      text: "• Cartographier équipements et flux : actifs (switches, routeurs, firewalls, Wi-Fi), câblage passif (fibre/cuivre), schéma des flux et criticité. • Identifier saturations et vulnérabilités : bande passante insuffisante, absence de redondance, failles de sécurité/segmentation. • Mesurer avec des KPIs : bande passante utilisée, disponibilité/SLA, MTTR, compatibilité cloud/virtualisation/Wi-Fi 6/SD-WAN.",
      images: [],
    },
    {
      title: "Étape 2 — Définir les besoins et objectifs",
      text: "• Scalabilité : ajouter utilisateurs/sites/apps sans refonte, ouverture aux techno (SD-WAN, IoT, Wi-Fi 6). • Sécurité : NGFW, SOC 24/7, PRA. • Interopérabilité : data centers, cloud/hybride, virtualisation, smart building. • Expérience utilisateur : accès fluides aux apps, faible latence, continuité de service.",
      images: [],
    },
    {
      title: "Étape 3 — Conception et choix technologiques",
      text: "• Connectivité : MPLS (priorisation), SD-WAN (flexibilité/coûts), Wi-Fi 6 (débit/densité), fibre (hauts débits/virtualisation). • Sécurité by design : segmentation, Zero Trust, chiffrement bout-en-bout. • Partenariats : Cisco (réseau), Fortinet (cybersécurité), Dell & VMware (virtualisation/serveurs), Microsoft (cloud/productivité). • Continuité : redondances, failover automatique, tests de résilience réguliers.",
      images: [],
    },
    {
      title: "Étape 4 — Déploiement & intégration",
      text: "• Migration progressive par site/service/zone avec bascules planifiées et environnements de test. • Tests de charge/performance (pics visioconf, sauvegardes, accès applicatifs), mesures latence/bande passante/temps de réponse. • Validation des SLA : viser 99,9 % de disponibilité, supervision outillée, rapports de conformité.",
      images: [],
    },
    {
      title: "Étape 5 — Opérations & amélioration continue",
      text: "• Supervision 24/7 : NOC/SOC, détection et résolution < 30 min, alertes proactives. • Maintenance proactive : mises à jour, patchs, renouvellement fin de vie. • Suivi KPIs : disponibilité, MTTR, incidents/mois. • Culture d’amélioration continue : revues annuelles, intégration des nouveaux besoins (cloud, IoT, sécurité avancée), apprentissage organisationnel.",
      images: [],
    },
    {
      title: "Cas pratique — Réseau bancaire (Algérie)",
      text: "Architecture SD-WAN : −35 % de downtime en 1 an, +50 % de performance applicative via optimisation des flux, sécurité renforcée (SOC local, redondance multi-sites).",
      images: [],
    },
    {
      title: "Conclusion",
      text: "Moderniser le réseau est un investissement stratégique pour concilier sécurité, performance et évolutivité. Avec un audit rigoureux, une conception adaptée et un déploiement méthodique, les risques diminuent et la transformation digitale s’accélère. SERVSI accompagne de bout en bout, du câblage passif au data center, avec disponibilité 24/7 et SLA 99,9 %. Prêt à moderniser votre réseau ?",
      images: [],
    },
  ],
};

/**
 * BlogPostPage — Article header + hero + content (matches mock)
 * - Dark intro band with back button, title, excerpt, byline, category pill
 * - Rounded hero image card that overlaps the band and body
 * - Body content area for headings and paragraphs
 */
export default function BlogPost({
  meta = DEFAULT_META,
  children,
}: {
  meta?: PostMeta;
  children?: React.ReactNode;
}) {
  return (
    <article className="relative isolate">
      {/* Header band */}
      <header className="relative bg-[#0c2b2e] text-white">
        {/* subtle grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            backgroundPosition: "-1px -1px",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 pt-10 pb-28">
          {/* back */}
          <div className="mb-4">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/90 ring-1 ring-white/15 backdrop-blur-sm hover:bg-white/15"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </Link>
          </div>

          <h1 className="text-pretty text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {meta.title}
          </h1>

          <p className="mt-4 max-w-3xl text-white/80">{meta.excerpt}</p>

          {/* byline + category */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                src={meta.author.avatar}
                alt={meta.author.name}
                className="h-8 w-8 rounded-full object-cover ring-1 ring-white/20"
                width={1500}
                height={500}
              />
              <div className="text-sm text-white/90">
                <span className="font-medium">{meta.author.name}</span>
                <span className="px-2">•</span>
                <span className="text-white/70">{meta.date}</span>
              </div>
            </div>

            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/15">
              {meta.category}
            </span>
          </div>
        </div>
      </header>

      {/* Hero card overlaps header & body */}
      <div className="relative -mt-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="overflow-hidden rounded-2xl bg-white ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              width={1500}
              height={500}
              src={meta.heroImage}
              alt={meta.title}
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <section className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        {meta.content.map((section, index) => (
          <div
            key={index}
            className="prose prose-zinc max-w-none prose-headings:tracking-tight prose-p:leading-relaxed mb-8"
          >
            {section.title && (
              <h2 className="text-2xl text-medium mb-3">{section.title}</h2>
            )}
            {section.text && <p>{section.text}</p>}
            <div className="flex gap-2">
              {section.images &&
                section.images.map((imgSrc: string, imgIndex: number) => (
                  <Image
                    width={400}
                    height={300}
                    key={imgIndex}
                    src={imgSrc}
                    alt={`Blog image ${imgIndex + 1}`}
                    className="my-4 rounded-lg"
                    style={{
                      width: `${(1 / section.images.length) * 100}%`,
                      height: "auto",
                    }}
                  />
                ))}
            </div>
          </div>
        ))}
      </section>
    </article>
  );
}
