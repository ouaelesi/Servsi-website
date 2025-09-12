'use client'
import React, { useEffect, useRef } from 'react'
import { Play, Shield, Sparkles, CheckCircle2, XCircle } from 'lucide-react'
import Image from 'next/image'
import { motion, useInView, useMotionValue, useTransform, animate  , Variants} from 'framer-motion'

// ---- simple variants ----
const fadeUp  : Variants= {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}
const fadeLeft  : Variants= {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const fadeRight  : Variants= {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

// ---- Count up when visible ----
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const mv = useMotionValue(0)
  const rounded = useTransform(mv, (v) => Math.round(v))

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.4, ease: 'easeOut' })
      return () => controls.stop()
    }
  }, [inView, to, mv])

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export default function WhyUsSection() {
  const negatives = [
    'Stratégies génériques et non personnalisées',
    'Focalisation sur des indicateurs superficiels',
    'Temps de réponse lents et communication insuffisante',
    'Peu ou pas de support après déploiement',
    'Utilisation de technologies obsolètes',
  ]

  const positives = [
    'Solutions IT sur mesure adaptées à vos objectifs',
    'Des KPI réels : disponibilité, sécurité et performance',
    'Communication transparente et support dédié',
    'Dernières technologies et pratiques de cybersécurité',
    'Support et optimisation à long terme',
  ]

  return (
    <section className="relative isolate overflow-hidden bg-[#002329] text-white">
      {/* background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(0deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          backgroundPosition: '-1px -1px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
            Pourquoi vous êtes au bon endroit
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-balance text-white/80 text-sm">
            Chez <span className="font-semibold text-emerald-300">SERVSI</span>, nous savons que la technologie doit être un atout, pas un obstacle. Notre
            mission est de transformer vos infrastructures IT en leviers de performance et de sécurité.
          </p>
        </div>

        {/* Media */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative mx-auto mt-10 max-w-5xl"
        >
          <div className="group relative rounded-[2rem] border border-white/10 bg-[#0a1f21] p-2 shadow-2xl">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-emerald-400/10 blur-3xl transition-opacity duration-500" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <Image
                src="/images/meeting.jpg"
                alt="Réunion d'équipe"
                className="block h-[420px] w-full object-cover md:h-[520px]"
                width={1000}
                height={600}
              />
            </div>

            {/* Left badge (slides in) */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.4 }}
              className="absolute md:-left-25 md:top-2/3 top-10 -left-4 -translate-y-1/2 sm:block"
            >
              <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 backdrop-blur-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg">
                  <Sparkles className="h-4 w-4 text-emerald-300" />
                </span>
                <span className="text-sm font-medium text-white/90">15 ans d&apos;expertise</span>
              </div>
            </motion.div>

            {/* Top-right glass card (slides in) */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.4 }}
              className="absolute -right-45 top-6 hidden w-[370px] max-w-[65vw] md:block"
            >
              <div className="rounded-2xl bg-white/10 p-5 text-white/90 backdrop-blur-md ring-1 ring-white/15">
                <div className="mb-2 flex flex-col items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30">
                    <Shield className="h-4 w-4 text-emerald-300" />
                  </span>
                  <span className="text-sm font-semibold text-white">Solutions Fiables</span>
                </div>
                <p className="text-center text-sm text-white/80">Optimisées pour performance et sécurité IT</p>
              </div>
            </motion.div>

            {/* CTA */}
            <div className="absolute left-1/2 bottom-6 -translate-x-1/2">
              <button className="inline-flex min-w-[200px] items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-semibold text-black shadow-lg transition hover:brightness-95">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black">
                  <Play className="h-4 w-4 text-primary" />
                </span>
                Inside our process
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats with count-up */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-10 text-center sm:grid-cols-3"
        >
          <motion.div variants={fadeUp}>
            <div className="text-4xl font-extrabold"><Counter to={98} suffix="%" /></div>
            <div className="mt-2 text-white/70">Taux de réussite client</div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <div className="text-4xl font-extrabold"><Counter to={200} suffix="+" /></div>
            <div className="mt-2 text-white/70">Projets IT réalisés</div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <div className="text-4xl font-extrabold"><Counter to={24} suffix="/7" /></div>
            <div className="mt-2 text-white/70">Support client</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Pourquoi choisir Servsi */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Pourquoi choisir Servsi
          </h2>
          <p className="mt-4 text-white/80">
            Voici comment Servsi offre plus de valeur, de clarté et de résultats par rapport aux prestataires IT classiques.
          </p>
        </div>

        {/* Comparison grid with slide-in cards */}
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Other agencies */}
          <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <h3 className="mb-4 text-center text-xl font-semibold text-white/90">Autres agences</h3>
            <article className="rounded-[1.5rem] border-2 border-white/10 bg-[#0a2426] p-6 shadow-lg ring-2 ring-white/10 md:p-8">
              <ul className="space-y-4 text-white/85">
                {negatives.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full">
                      <XCircle className="h-4 w-4 text-white/60" />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </article>
          </motion.div>

          {/* Servsi */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/30">
                <Shield className="h-4 w-4 text-emerald-300" />
              </span>
              <span className="text-sm font-bold tracking-wide">SERVSI</span>
            </div>
            <article className="relative rounded-[1.5rem] border-2 border-emerald-400/25 bg-gradient-to-bl from-emerald-400/20 via-black/5 to-black/10 p-6 ring-2 ring-emerald-400/20 md:p-8">
              <ul className="space-y-4 text-white">
                {positives.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </span>
                    <span className="text-white/95">{t}</span>
                  </li>
                ))}
              </ul>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
