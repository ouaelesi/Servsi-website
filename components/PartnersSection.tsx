import Image from "next/image";
import Link from "next/link";
import React from "react";

const DEFAULT_PARTNERS = [
  { name: "Cisco", src: "/images/partners/Logo_entp.svg", href: "#" },
  {
    name: "Fortinet",
    src: "/images/partners/Banque_du_Golf_Algérie.svg",
    href: "#",
  },
  { name: "AWS", src: "/images/partners/AlgeriePoste 1.svg", href: "#" },
  { name: "Azure", src: "/images/partners/Algerie_Telecom.svg.svg", href: "#" },
  { name: "Dell", src: "/images/partners/Sonatrach.svg", href: "#" },
  { name: "Dell", src: "/images/partners/test.svg", href: "#" },
];

export default function PartnersSection() {
  return (
    <section className=" flex flex-col justify-center relative   isolate overflow-hidden ">
      <div>
        <div className="mb-15 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Ils nous ont fait confiance
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {DEFAULT_PARTNERS.map((partner) => (
            <Link
              key={partner.name + partner.src}
              href={partner.href}
              style={{ display: "flex", alignItems: "center", padding: "1rem" }}
            >
              <Image
                src={partner.src}
                alt={partner.name}
                style={{ maxHeight: 60, maxWidth: 320, objectFit: "contain" }}
                className="w-25"
                width={160}
                height={60}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
