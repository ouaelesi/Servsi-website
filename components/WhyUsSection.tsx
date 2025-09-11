import React from "react";
import { Play, Shield, Sparkles, CheckCircle2, XCircle } from "lucide-react";

/**
 * RightPlaceSection — matches the provided mock
 * - Large heading + subtitle
 * - Media card with rounded corners
 * - Floating left badge (15 ans d'expertise)
 * - Floating glass card top-right (Solutions Fiables)
 * - Bottom centered green CTA pill (Inside our process)
 * - 3 stats below
 */
export default function WhyUsSection() {
  const negatives = [
    "Stratégies génériques et non personnalisées",
    "Focalisation sur des indicateurs superficiels",
    "Temps de réponse lents et communication insuffisante",
    "Peu ou pas de support après déploiement",
    "Utilisation de technologies obsolètes",
  ];

  const positives = [
    "Solutions IT sur mesure adaptées à vos objectifs",
    "Des KPI réels : disponibilité, sécurité et performance",
    "Communication transparente et support dédié",
    "Dernières technologies et pratiques de cybersécurité",
    "Support et optimisation à long terme",
  ];
  return (
    <section className="relative isolate overflow-hidden bg-[#002329] text-white">
      {/* background grid */}
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

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
            Pourquoi vous êtes au bon endroit
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-balance text-white/80 text-sm">
            Chez <span className="font-semibold text-emerald-300">SERVSI</span>,
            nous savons que la technologie doit être un atout, pas un obstacle.
            Notre mission est de transformer vos infrastructures IT en leviers
            de performance et de sécurité.
          </p>
        </div>

        {/* Media */}
        <div className="relative mx-auto mt-10 max-w-5xl">
          <div className="group relative rounded-[2rem] border border-white/10 bg-[#0a1f21] p-2 shadow-2xl  ">
            <div
              className="absolute -inset-6 rounded-[2.5rem] bg-emerald-400/10 blur-3xl transition-opacity duration-500 "
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.75rem]">
              {/* Replace with your image */}
              <img
                src="/images/meeting.jpg"
                alt="Réunion d'équipe"
                className="block h-[420px] w-full object-cover md:h-[520px]"
              />
            </div>

            {/* Left badge */}
            <div className="absolute md:-left-25 md:top-2/3 top-10 -left-4 -translate-y-1/2 sm:block">
              <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 backdrop-blur-sm ">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg ">
                  <Sparkles className="h-4 w-4 text-emerald-300" />
                </span>
                <span className="text-sm font-medium text-white/90">
                  15 ans d'expertise
                </span>
              </div>
            </div>

            {/* Top-right glass card */}
            <div className="absolute -right-45 top-6 hidden w-[370px] max-w-[65vw]  md:block">
              <div className="rounded-2xl bg-white/10 p-5 text-white/90 backdrop-blur-md ring-1 ring-white/15">
                <div className="mb-2 flex flex-col items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30">
                    <Shield className="h-4 w-4 text-emerald-300" />
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Solutions Fiables
                  </span>
                </div>
                <p className="text-sm text-white/80 text-center">
                  Optimisées pour performance et sécurité IT
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="absolute left-1/2 bottom-6 -translate-x-1/2">
              <button className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs min-w-[200px] font-semibold text-black shadow-lg transition hover:brightness-95">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black">
                  <Play className="h-4 w-4 text-primary" />
                </span>
                Inside our process
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-10 text-center sm:grid-cols-3">
          <div>
            <div className="text-4xl font-extrabold">98%</div>
            <div className="mt-2 text-white/70">Taux de réussite client</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold">200+</div>
            <div className="mt-2 text-white/70">Projets IT réalisés</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold">24/7</div>
            <div className="mt-2 text-white/70">Support client</div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Pourquoi choisir Servsi
          </h2>
          <p className="mt-4 text-white/80">
            Voici comment Servsi offre plus de valeur, de clarté et de résultats
            par rapport aux prestataires IT classiques.
          </p>
        </div>

        {/* Comparison grid */}
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Other agencies */}
          <div>
            <h3 className="mb-4 text-center text-xl font-semibold text-white/90">
              Autres agences
            </h3>
            <article className="rounded-[1.5rem] border-2 border-white/10 bg-[#0a2426] p-6 shadow-lg md:p-8 ring-2 ring-white/10">
              <ul className="space-y-4 text-white/85">
                {negatives.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full ">
                      <XCircle className="h-4 w-4 text-white/60" />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* Servsi */}

          <div>
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/30">
                <Shield className="h-4 w-4 text-emerald-300" />
              </span>
              <span className="text-sm font-bold tracking-wide">SERVSI</span>
            </div>
            <article className="relative rounded-[1.5rem]  border-2 border-emerald-400/25 bg-gradient-to-bl from-emerald-400/20 via-black/5 to-black/10 p-6  ring-2 ring-emerald-400/20 md:p-8">
              {/* glow */}

            

              <div className="relative">
                <ul className="space-y-4 text-white">
                  {positives.map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full ">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </span>
                      <span className="text-white/95">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
