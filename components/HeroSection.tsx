import { Shield, Smile, Sparkles, Zap } from "lucide-react";
import { Play } from "next/font/google";
import React from "react";
import PartnersSlider from "./PartnersSlider";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className=" flex flex-col justify-center relative   isolate overflow-hidden bg-foreground text-white">
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

      <div className="   mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pt-14 md:px-10 lg:grid-cols-12 lg:gap-16 lg:pt-20 ">
        <div className="flex flex-col justify-center gap-4  lg:col-span-7 xl:col-span-7 pb-15">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Solutions IT fiables pour{" "}
            <span className="text-primary">Votre Entreprise</span>
          </h1>
          <p className="mt-4  md:text-lg text-sm">
            De l’infrastructure réseau à la cybersécurité avancée, SERVSI vous
            accompagne pour construire et protéger votre environnement
            numérique.
          </p>
          <div className="flex gap-4">
            <button className="text-white text-center inline-flex items-center gap-2 rounded-full bg-primary/20 md:px-10  px-4 py-3 md:text-md  text-xs font-medium  shadow-lg transition hover:brightness-95">
              En savoir plus
            </button>
            <button className="text-center  inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 md:text-md text-xs font-medium text-black shadow-lg transition hover:brightness-95">
              Découvrir nos services
            </button>
          </div>

          <PartnersSlider />
          {/* partners slides gos here  */}
        </div>
        <div className=" lg:col-span-5 xl:col-span-5">
          <div className="relative mx-auto">
            <div className="">
              <div
                className="absolute -inset-6 rounded-[2.5rem] bg-emerald-400/10 blur-3xl transition-opacity duration-500 "
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-[1.75rem]">
                {/* Replace with your image */}
                <Image
                  src="/images/hero.png"
                  alt="Réunion d'équipe"
                  className="block h-[420px] w-full object-cover md:h-[520px]"
                  width={500}
                  height={300}
                />
              </div>

              {/* Left badge */}
              <div className="absolute md:left-0 right-0 top-0  -translate-y-1/2 sm:block">
                <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 backdrop-blur-sm ">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg ">
                    <Sparkles className="h-4 w-4 text-emerald-300" />
                  </span>
                  <span className="text-sm font-medium text-white/90">
                    Performance et fiabilité
                  </span>
                </div>
              </div>
              <div className="absolute md:-right-10 right-0 top-2/3 md:top-1/2 -translate-y-1/2 sm:block">
                <div className="inline-flex items-center  rounded-full bg-white/10 px-2 py-2 backdrop-blur-sm ">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg ">
                    <Smile className="h-6 w-6 text-emerald-300" />
                  </span>
                </div>
              </div>

              {/* Top-right glass card */}
              <div className="absolute md:-left-35 z-40 bottom-6  w-[370px] max-w-[65vw]  md:block">
                <div className="rounded-2xl bg-white/10 md:p-5 p-2 text-white/90 backdrop-blur-md ring-1 ring-white/15">
                  <div className="mb-2  flex items-center gap-2">
                    <div>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30">
                        <Zap className="h-4 w-4 text-emerald-300" />
                      </span>
                    </div>

                    <div>
                      <span className="md:text-md text-sm  font-medium text-white">
                        +500 Infrastructures
                      </span>
                      <p className="text-xs text-white/80 ">Sécurisées</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
