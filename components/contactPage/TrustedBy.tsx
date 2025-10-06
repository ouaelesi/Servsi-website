"use client";
import React from "react";
import Image from "next/image";
import { MonitorSmartphone, Factory, Workflow } from "lucide-react";

type Logo = { src: string; alt: string; width?: number; height?: number };

const LOGOS: Logo[] = [
  { src: "/images/partners/Logo_entp 2.svg", alt: "ENTP" },
  { src: "/images/partners/Banque_du_Golf_Algérie.svg", alt: "AGB" },
  { src: "/images/partners/AlgeriePoste 1.svg", alt: "SAF" },
  { src: "/images/partners/Algerie_Telecom 1.svg", alt: "Algérie Télécom" },
  { src: "/images/partners/Sonatrach.svg", alt: "Sonelgaz" },
  { src: "/images/partners/test.svg", alt: "OQAA" },
];

export default function TrustedBySection() {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-20">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Ils Nous Font Confiance
          </h2>
          <p className="mt-3 ">
            De grandes entreprises collaborent avec nous
          </p>
        </div>

        {/* Logos */}
        <div className="mx-auto max-w-5xl">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-8 items-center justify-items-center">
            {LOGOS.map((logo, i) => (
              <li
                key={i}
                className="opacity-90  hover:grayscale-0 hover:opacity-100 transition"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width ?? 84}
                  height={logo.height ?? 84}
                  className="h-12 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}

        {/* Stats */}
        <div className="grid md:w-4/5 mx-auto grid-cols-1 sm:grid-cols-3 gap-8 text-center mt-25">
          <div className="flex flex-col items-center">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-700">
              <MonitorSmartphone className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900">+200</div>
            <div className="mt-1 text-md font-medium ">
              projets IT réussis
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-700">
              <Factory className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900">+15</div>
            <div className="mt-1 text-md font-medium ">
              ans d’expertise cumulée
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-700">
              <Workflow className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900">+10</div>
            <div className="mt-1 text-md font-medium ">secteurs couverts</div>
          </div>
        </div>
      </div>
    </section>
  );
}
