import React from "react";
import { Play } from "lucide-react";
import Image from "next/image";

/**
 * RightPlaceSection — matches the provided mock
 * - Large heading + subtitle
 * - Media card with rounded corners
 * - Floating left badge (15 ans d'expertise)
 * - Floating glass card top-right (Solutions Fiables)
 * - Bottom centered green CTA pill (Inside our process)
 * - 3 stats below
 */
export default function AboutHeader() {
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

      <div className="text-center pt-20 mt-5 mx-auto relative ">
        <Image
          className="absolute -right-10 top-5 -z-10 "
          src="/images/right_side_logo.png"
          width={200}
          height={200}
          alt="servsi logo"
        />
        <Image
          className="absolute -left-10 -bottom-15 -z-10"
          src="/images/left_side_logo.png"
          width={200}
          height={200}
          alt="servsi logo"
        />
        <h2 className="text-balance text-4xl z-50  font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl  ">
          Là où{" "}
          <span className="text-primary">la vision rencontre l’expertise</span>,
          pour bâtir <span className="text-primary">le succès digital.</span>
        </h2>
        <p className="mx-auto text-md font-medium mt-4 max-w-3xl text-balance text-white/80">
          nous sommes un partenaire de confiance qui transforme les idées en
          stratégies impactantes. En alliant innovation, créativité et résultats
          mesurables, nous aidons nos clients à prospérer dans un monde en
          constante évolution.
        </p>
        
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10">
        {/* Heading */}

        {/* Media */}
        <div className="relative mx-auto mt-10 max-w-5xl">
          <div className="group relative rounded-[2rem] border border-white/10 bg-[#0a1f21] p-2 shadow-2xl  ">
            <div
              className="absolute -inset-6 rounded-[2.5rem] bg-emerald-400/10 blur-3xl transition-opacity duration-500 "
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.75rem]">
              {/* Replace with your image */}
              <Image
                src="/images/aboutusPage.png"
                alt="Réunion d'équipe"
                className="block h-[420px] w-full object-cover md:h-[520px]"
                width={1500}
                height={1500}
                priority
              />
            </div>

            {/* Left badge */}
            {/* <div className="absolute -left-25 top-2/3 hidden -translate-y-1/2 sm:block">
              <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 backdrop-blur-sm ">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg ">
                  <Sparkles className="h-4 w-4 text-emerald-300" />
                </span>
                <span className="text-sm font-medium text-white/90">
                  15 ans d'expertise
                </span>
              </div>
            </div> */}

            {/* Top-right glass card */}
            {/* <div className="absolute -right-45 top-6 hidden w-[370px] max-w-[65vw]  md:block">
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
            </div> */}

            {/* CTA */}
            <div className="absolute left-1/2 bottom-6 -translate-x-1/2">
              <button className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-black shadow-lg transition hover:brightness-95">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black">
                  <Play className="h-4 w-4 text-primary" />
                </span>
                Know our story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
