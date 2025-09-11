// PartnersMarquee.jsx
"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export type Partner = {
  name: string
  src: string
  href?: string
}

const DEFAULT_PARTNERS: Partner[] = [
  { name: "Cisco", src: "/images/partners/Logo_entp.svg", href: "#" },
  { name: "Fortinet", src: "/images/partners/Banque_du_Golf_Algérie.svg", href: "#" },
  { name: "AWS", src: "/images/partners/AlgeriePoste 1.svg", href: "#" },
  { name: "Azure", src: "/images/partners/Algerie_Telecom.svg.svg", href: "#" },
  { name: "Dell", src: "/images/partners/Sonatrach.svg", href: "#" },
  { name: "Dell", src: "/images/partners/test.svg", href: "#" },
]

export default function PartnersSlider({
  partners = DEFAULT_PARTNERS,
  speed = 35,           // seconds per full loop
  direction = "left",   // "left" | "right"
  className = "",
}) {
  const track = [...partners, ...partners]
  const animName = direction === "left" ? "partnersLeft" : "partnersRight"

  return (
    <div className={`py-5 md:w-9/10 relative overflow-hidden ${className}`} aria-label="Partenaires">
      {/* soft fade edges */}
      <div className="pointer-events-none absolute inset-y-0 z-40 left-0 w-10 bg-gradient-to-r from-foreground to-transparent opacity-50" />
      <div className="pointer-events-none absolute inset-y-0 z-40 right-0 w-10 bg-gradient-to-l from-foreground to-transparent opacity-50" />
      
      <div
        className="flex w-[200%] items-center gap-10 opacity-90 hover:opacity-100"
        style={{ animation: `${animName} ${speed}s linear infinite` }}
      >
        {track.map((p, i) => (
          <Logo key={`${p.name}-${i}`} partner={p} />
        ))}
      </div>

      {/* scoped keyframes */}
      <style jsx>{`
        @keyframes partnersLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes partnersRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}

function Logo({ partner }: { partner: Partner }) {
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <Image
      src={partner.src}
      alt={partner.name}
      className="h-8 w-auto md:h-10 object-contain  transition"
      draggable={false}
      width={160}
      height={60}
    />
  )
  return (
    <div className="shrink-0 flex items-center">
      {partner.href ? (
        <Link href={partner.href} className="inline-flex items-center" aria-label={partner.name}>
          {img}
        </Link>
      ) : img}
    </div>
  )
}
