// PartnersMarquee.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type Partner = {
  name: string;
  src: string;
  href?: string;
  isLarge?: boolean;
};

const DEFAULT_PARTNERS: Partner[] = [
  { name: "ARPC", src: "/images/partners/ARPCE_logo 1.svg", href: "#" },
  { name: "Aten", src: "/images/partners/aten-seeklogo-2 1.svg", href: "#" },
  {
    name: "Axis Communications",
    src: "/images/partners/axis.svg",
    href: "#",
  },

  {
    name: "Banque du Golf Algérie",
    src: "/images/partners/Banque_du_Golf_Algérie.svg",
    href: "#",
  },
  { name: "Bosch", src: "/images/partners/bosch-seeklogo 1.svg", href: "#" },
  {
    name: "Cisco Partner",
    src: "/images/partners/cisco_partner.svg",
    href: "#",
  },
  { name: "Cisco", src: "/images/partners/cisco.svg", href: "#" },
  {
    name: "Dormakaba",
    src: "/images/partners/Dormakaba_idTpCNOBFD_1 1.svg",
    href: "#",
    isLarge: true,
  },
  {
    name: "ELKA-Torantriebe",
    src: "/images/partners/ELKA-Torantriebe GmbH u. Co. Betriebs KG_id_wF-gRW__1 1.svg",
    href: "#",
  },
  { name: "F5", src: "/images/partners/F5_Logo_0 1.svg", href: "#" },
  {
    name: "Forcepoint",
    src: "/images/partners/forcepoint.svg",
    href: "#",
    isLarge: true,
  },
  {
    name: "Fortinet",
    src: "/images/partners/Fortinet_idZhbQEBqi_0 1.svg",
    href: "#",
    isLarge: true,
  },
  { name: "Huawei", src: "/images/partners/huawei.png", href: "#" },
  { name: "Image 456", src: "/images/partners/image 456.svg", href: "#" },
  { name: "Image 457", src: "/images/partners/image 457.svg", href: "#" },
  { name: "Image 458", src: "/images/partners/image 458.svg", href: "#" },
  {
    name: "ISO 9001",
    src: "/images/partners/ISO_9001-2015 1.svg",
    href: "#",
  },
  {
    name: "LG Electronics",
    src: "/images/partners/LG Electronics_Logo_0 1.svg",
    href: "#",
  },
  { name: "Logo entp", src: "/images/partners/Logo_entp.svg", href: "#" },
  { name: "Microsoft", src: "/images/partners/microsoft.svg", href: "#" },
  { name: "Milstone", src: "/images/partners/milstone.svg", href: "#" },
  {
    name: "Nedap",
    src: "/images/partners/nedap.svg",
    href: "#",
  },
  {
    name: "NETSCOUT",
    src: "/images/partners/NETSCOUT_id9he3cBKz_1 1.svg",
    href: "#",
    isLarge: true,
  },
  {
    name: "Orascom Telecom",
    src: "/images/partners/Orascom_Telecom_Logo 1.svg",
    href: "#",
  },
  { name: "Sonatrach", src: "/images/partners/Sonatrach.svg", href: "#" },
  {
    name: "Sophos",
    src: "/images/partners/Sophos Support_idMf1YNtw__1 1.svg",
    href: "#",
  },
  {
    name: "Symantec",
    src: "/images/partners/Symantec_logo10 1.svg",
    href: "#",
  },
  { name: "Tenable", src: "/images/partners/tenable.svg", href: "#" },
  { name: "Test", src: "/images/partners/test.svg", href: "#" },
  { name: "Vector", src: "/images/partners/Vector.svg", href: "#" },
  {
    name: "VMware",
    src: "/images/partners/vmware-partner-premier-solution-provider-seeklogo copy 1.svg",
    href: "#",
  },
];

const WHITE_PARTNERS: Partner[] = [
  { name: "ARPC", src: "/images/partners/V2/ARPCE_logo 3.svg", href: "#" },
  { name: "Aten", src: "/images/partners/V2/aten-seeklogo-2 3.svg", href: "#" },
  {
    name: "Axis Communications",
    src: "/images/partners/V2/axis.svg",
    href: "#",
  },

  {
    name: "Banque du Golf Algérie",
    src: "/images/partners/V2/Banque_du_Golf_Algérie 3.svg",
    href: "#",
  },
  { name: "Bosch", src: "/images/partners/V2/bosch-seeklogo 3.svg", href: "#" },
  { name: "Cisco", src: "/images/partners/V2/cisco.svg", href: "#" },
  {
    name: "Dormakaba",
    src: "/images/partners/V2/Dormakaba_idTpCNOBFD_1 3.svg",
    href: "#",
    isLarge: true,
  },
  {
    name: "ELKA-Torantriebe",
    src: "/images/partners/V2/ELKA-Torantriebe GmbH u. Co. Betriebs KG_id_wF-gRW__1 3.svg",
    href: "#",
  },
  { name: "F5", src: "/images/partners/V2/F5_Logo_0 3.svg", href: "#" },
  { name: "Forcepoint", src: "/images/partners/V2/forcepoint.svg", href: "#" , isLarge: true,},
  {
    name: "Fortinet",
    src: "/images/partners/V2/Fortinet_idZhbQEBqi_0 3.svg",
    href: "#",
    isLarge: true,
  },
  {
    name: "Huawei",
    src: "/images/partners/V2/huawei-seeklogo 3.svg",
    href: "#",
  },
  { name: "Image 456", src: "/images/partners/V2/image 456.svg", href: "#" },
  { name: "Image 457", src: "/images/partners/V2/image 457.svg", href: "#" },
  { name: "Image 458", src: "/images/partners/V2/image 458.svg", href: "#" },
  {
    name: "ISO 9001",
    src: "/images/partners/V2/ISO_9001-2015 3.svg",
    href: "#",
  },
  {
    name: "LG Electronics",
    src: "/images/partners/V2/LG Electronics_Logo_0 3.svg",
    href: "#",
  },
  {
    name: "Logo entp 2",
    src: "/images/partners/V2/Logo_entp 2.svg",
    href: "#",
  },
  { name: "Logo entp", src: "/images/partners/V2/Logo_entp.svg", href: "#" },
  { name: "Microsoft", src: "/images/partners/V2/microsoft.svg", href: "#" },
  { name: "Milstone", src: "/images/partners/V2/milstone.svg", href: "#" },
  {
    name: "Nedap",
    src: "/images/partners/V2/Nedap N.V._idoJe-RWRK_1 3.svg",
    href: "#",
  },
  {
    name: "NETSCOUT",
    src: "/images/partners/V2/NETSCOUT_id9he3cBKz_1 3.svg",
    href: "#",
  },
  {
    name: "Orascom Telecom",
    src: "/images/partners/V2/Orascom_Telecom_Logo 3.svg",
    href: "#",
  },
  { name: "Sonatrach", src: "/images/partners/V2/Sonatrach.svg", href: "#" },
  {
    name: "Sophos",
    src: "/images/partners/V2/Sophos Support_idMf1YNtw__1 3.svg",
    href: "#",
  },
  {
    name: "Symantec",
    src: "/images/partners/V2/Symantec_logo10 3.svg",
    href: "#",
  },
  { name: "Tenable", src: "/images/partners/V2/tenable.svg", href: "#" },
  { name: "Test", src: "/images/partners/V2/test.svg", href: "#" },
  { name: "Vector", src: "/images/partners/V2/Vector.svg", href: "#" },
  {
    name: "VMware",
    src: "/images/partners/V2/vmware-partner-premier-solution-provider-seeklogo copy 3.svg",
    href: "#",
  },
];

export default function PartnersSlider({
  partners = DEFAULT_PARTNERS,
  speed = 35, // seconds per full loop
  direction = "left", // "left" | "right"
  className = "",
  section = "Hero",
}) {
  partners = section === "Hero" ? WHITE_PARTNERS : partners;
  const track = [...partners, ...partners];
  const animName = direction === "left" ? "partnersLeft" : "partnersRight";

  return (
    <div
      className={`py-5  relative overflow-hidden ${className}  ${
        section == "Hero" ? "md:w-9/10" : "md:w-full mx-auto"
      }`}
      aria-label="Partenaires"
    >
      {/* soft fade edges */}
      <div
        className={`pointer-events-none absolute inset-y-0 z-40 left-0 w-10 bg-gradient-to-r to-transparent opacity-50 ${
          section == "Hero" ? "from-foreground " : "from-white"
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 z-40 right-0 w-10 bg-gradient-to-l ${
          section == "Hero" ? "from-foreground " : "from-white"
        } to-transparent opacity-50`}
      />

      <div
        className="flex w-[200%] items-center gap-15 opacity-90 hover:opacity-100"
        style={{ animation: `${animName} ${speed}s linear infinite` }}
      >
        {track.map((p, i) => (
          <Logo key={`${p.name}-${i}`} partner={p} section={section} />
        ))}
      </div>

      {/* scoped keyframes */}
      <style jsx>{`
        @keyframes partnersLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes partnersRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

function Logo({
  partner,
  section = "Hero",
}: {
  partner: Partner;
  section: string;
}) {
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <Image
      src={partner.src}
      alt={partner.name}
      className={
        " object-contain  " +
        (partner.isLarge
          ? section == "Hero"
            ? " md:h-10  transition grayscale"
            : " md:h-10 "
          : section == "Hero"
          ? " md:h-10 w-auto transition grayscale"
          : " md:h-10 w-auto")
      }
      draggable={false}
      width={160}
      height={60}
    />
  );
  return (
    <div className="shrink-0 flex items-center">
      {partner.href ? (
        <Link
          href={partner.href}
          className="inline-flex items-center"
          aria-label={partner.name}
        >
          {img}
        </Link>
      ) : (
        img
      )}
    </div>
  );
}
