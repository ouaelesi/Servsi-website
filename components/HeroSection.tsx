"use client";

import React, { useEffect, useRef, useState } from "react";
import { Smile, Sparkles, Zap } from "lucide-react";
import PartnersSlider from "./PartnersSlider";
import Image from "next/image";
import { motion, Variants, animate, useInView } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

// Tiny count-up that starts when visible
function Counter({
  to,
  prefix = "",
  suffix = "",
}: {
  to: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {val}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative isolate flex flex-col justify-center bg-foreground text-white">
      {/* glows + grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(1200px 600px at 80% 20%, rgba(0,255,153,0.06), transparent 60%), radial-gradient(800px 400px at 10% 90%, rgba(0,255,153,0.04), transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "-1px -1px",
          opacity: 0.25,
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pt-14 md:px-10 lg:grid-cols-12 lg:gap-16 lg:pt-20">
        {/* LEFT: copy */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="pb-15 relative flex flex-col justify-center gap-4 lg:col-span-6 xl:col-span-6"
        >
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Solutions IT fiables pour{" "}
            <span className="text-primary">Votre Entreprise</span>
          </h1>
          <p className="mt-4 text-sm md:text-lg">
            De l’infrastructure réseau à la cybersécurité avancée, SERVSI vous
            accompagne pour construire et protéger votre environnement
            numérique.
          </p>

          <motion.div
            variants={fadeUp}
            className="flex gap-4"
            transition={{ delay: 0.05 }}
          >
            <button className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary/20 px-4 py-3 text-md font-medium text-white shadow-lg transition hover:brightness-95 md:px-10 md:text-md">
              Découvrir nos services
            </button>
            <button className="inline-flex cursor-pointer items-center gap-2 font-bold rounded-full bg-primary px-8 py-3 text-md  text-black shadow-lg transition hover:brightness-95 md:text-md">
              Passez au Digital
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="mt-2 relative"
          >
            <PartnersSlider />
            <div
              className="absolute w-1/2 left-20 -inset-6 rounded-[2.5rem] bg-emerald-400/10 blur-3xl transition-opacity duration-500"
              aria-hidden
            />
          </motion.div>
        </motion.div>

        {/* RIGHT: image + floating badges/cards */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="lg:col-span-6 xl:col-span-6"
        >
          <div className="relative mx-auto">
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-[2.5rem] bg-emerald-400/10 blur-3xl transition-opacity duration-500"
                aria-hidden
              />
              <div className="relative   rounded-[1.75rem]">
                <Image
                  src="/images/gd.png"
                  alt="Réunion d'équipe"
                  className="block  w-full object-cover "
                  width={1500}
                  height={1000}
                  priority
                />
              </div>

              {/* Left-top badge */}
              <motion.div
                initial={{ opacity: 0, y: -12, x: 12, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                transition={{ duration: 0.55, ease, delay: 0.15 }}
                viewport={{ once: true, amount: 0.4 }}
                className="absolute bottom-0 -translate-y-1/2 sm:block md:right-0"
              >
                <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 ring-1 ring-white/15 backdrop-blur-sm ">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg">
                    <Sparkles className="h-4 w-4 text-emerald-300 " />
                  </span>
                  <span className="text-sm font-medium text-white/90">
                    +25 Partenaires internationaux
                  </span>
                </div>
              </motion.div>

              {/* Right-middle chip */}
              <motion.div
                initial={{ opacity: 0, x: 12, y: 12, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                transition={{ duration: 0.55, ease, delay: 0.25 }}
                viewport={{ once: true, amount: 0.4 }}
                className="absolute right-0 top-2/3 -translate-y-1/2 sm:block md:-right-10 md:top-1/2"
              >
                <div className="inline-flex items-center rounded-full bg-white/10 px-2 py-2  ring-1 ring-white/15 backdrop-blur-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg">
                    <Smile className="h-6 w-6 text-emerald-300" />
                  </span>
                </div>
              </motion.div>

              {/* Bottom-left stats card with count-up */}
              <motion.div
                initial={{ opacity: 0, y: 10, x: -10 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.55, ease, delay: 0.35 }}
                viewport={{ once: true, amount: 0.4 }}
                className="absolute -top-10 z-40 w-[270px] max-w-[70vw] md:-left-3"
              >
                <div className="rounded-2xl bg-white/10 p-2 text-white/90 backdrop-blur-md ring-1 ring-white/15 md:px-5 py-3">
                  <div className=" flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30">
                      <Zap className="h-4 w-4 text-emerald-300" />
                    </span>
                    <div>
                      <span className="text-sm font-medium text-white md:text-md">
                        <span className="text-primary">
                          +<Counter to={100} />
                        </span>{" "}
                        km de 
                      </span>
                      <p className="text-sm font-medium text-white/80">Réseau réalisé</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
