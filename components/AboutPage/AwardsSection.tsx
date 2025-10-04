import Image from "next/image";
import React from "react";

export type AwardItem = {
  title: string;
  subtitle: string;
  year: string | number;
  logo: string;
};

const DEFAULT_AWARDS: AwardItem[] = [
  {
    title: "Fortinet NSE 7 — Network Security Architect",
    subtitle: "Certification avancée en sécurité réseau",
    year: 2025,
    logo: "/images/partners/V2/Fortinet_idZhbQEBqi_0 3.svg",
  },
  {
    title: "Cisco CCIE Routing & Switching",
    subtitle: "Plus haut niveau de certification Cisco",
    year: 2024,
    logo: "/images/partners/V2/cisco.svg",
  },
  {
    title: "Certified Ethical Hacker (CEH)",
    subtitle: "Spécialiste en tests d'intrusion et cybersécurité offensive",
    year: 2024,
    logo: "/images/partners/V2/cisco.svg",
  },
  {
    title: "VMware VCAP Network Virtualization Design",
    subtitle: "Expertise en virtualisation et infrastructures cloud",
    year: 2023,
    logo: "/images/partners/V2/vmware.svg",
  },
];

/**
 * AwardsTimeline — matches the provided mock
 * - Dark section with subtle grid
 * - Centered heading + subtext
 * - Stacked rounded cards with title/description and a year at right
 * - Thin connector between cards for timeline feel
 */
export default function AwardsSection({
  items = DEFAULT_AWARDS,
  title = "Partenariats & Reconnaissances",
  subtitle = "Un haut niveau de compétences techniques validé par des certifications internationales reconnues.",
}: {
  items?: AwardItem[];
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-foreground py-16 text-white">
      {/* grid bg */}
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

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-white/80">{subtitle}</p>
        </div>

        {/* List */}
        <div className="mx-auto mt-10 max-w-3xl space-y-6">
          {items.map((a, i) => (
            <article
              key={`${a.title}-${i}`}
              className={`relative rounded-2xl border border-white/10 bg-foreground px-6 py-5 shadow-xl ring-1 ring-white/10 backdrop-blur-sm md:px-8 md:py-6 `}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white md:text-xl">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">{a.subtitle}</p>
                </div>
                <div className="shrink-0 rounded-xl  px-3 py-1.5 text-sm font-semibold text-white/90 ">
                  <div className="justify-end flex"> {a.year}</div>

                  <div>
                    <Image
                      src={a.logo}
                      alt={a.title}
                      width={50}
                      height={50}
                      className="grayscale w-15 mt-4 "
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
