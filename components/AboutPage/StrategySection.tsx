import React from "react";
import { Check, Target, TrendingUp } from "lucide-react";
import Image from "next/image";

/**
 * TrustStrategySection — 2-block staggered layout matching the mock
 * - Block A: Left text + bullet list, Right image
 * - Block B: Left image, Right text + two feature rows with small icon chips
 * - Clean, rounded images, generous whitespace
 */
export default function StrategySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      {/* Row 1 */}
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Text left */}
        <div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
            Optimisation des Infrastructures IT
          </h2>
          <p className="mt-4 max-w-xl text-gray-600">
            SERVSI conçoit, installe et gère vos réseaux et serveurs pour
            garantir des infrastructures fiables, performantes et adaptées aux
            besoins de vos entreprises. Nous contribuons activement à la
            modernisation des infrastructures numériques en Algérie, en
            soutenant les acteurs locaux dans leur transition digitale.
          </p>
          <ul className="mt-6 space-y-3 text-gray-800">
            {[
              "Conception et déploiement de réseaux et serveurs sur mesure",
              "Partenariats technologiques pour une performance durable",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/5">
                  <Check className="h-4 w-4" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image right */}
        <div className="justify-self-end">
          {/* Replace with your path */}
          <Image
            src="/images/about2.jpg"
            alt="Team collaborating around a table"
            className="h-[280px] w-full max-w-[420px] rounded-2xl object-cover shadow-md ring-1 ring-black/5 md:h-[320px]"
            width={1420}
            height={1320}
          />
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16" />

      {/* Row 2 */}
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image left */}
        <div className="justify-self-start">
          <Image
            src="/images/about1.jpg"
            alt="Presenter discussing analytics with team"
            className="h-[300px] w-full max-w-[420px] rounded-2xl object-cover shadow-md ring-1 ring-black/5 md:h-[340px]"
            width={1560}
            height={1340}
          />
        </div>

        {/* Text right */}
        <div>
          <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
            Sécurité & Performance de vos systèmes IT
          </h3>
          <p className="mt-4 max-w-xl text-gray-600">
            Nos ingénieurs déploient des solutions de cybersécurité avancées et
            assurent une supervision continue pour protéger vos données et
            garantir la continuité de vos services. À travers nos expertises,
            nous participons à renforcer la souveraineté numérique et à
            accompagner la croissance des entreprises algériennes dans leur
            transformation digitale.
          </p>

          <div className="mt-6 space-y-5">
            <FeatureRow
              icon={<Target className="h-4 w-4" />}
              title="Protection ciblée"
              text="Sécurisation des données sensibles et des infrastructures critiques."
            />
            <FeatureRow
              icon={<TrendingUp className="h-4 w-4" />}
              title="Croissance évolutive"
              text="Développement durable de vos systèmes sans refonte complexe."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureRow({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/5">
        {icon}
      </span>
      <div>
        <div className="font-semibold text-gray-900">{title}</div>
        <div className="text-sm text-gray-600">{text}</div>
      </div>
    </div>
  );
}
