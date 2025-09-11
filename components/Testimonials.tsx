import Image from "next/image";
import React from "react";

/**
 * TestimonialsSection — grid of testimonial cards
 * Matches the provided mock (title, subtitle, 2 rows × 3 columns)
 * TailwindCSS + TypeScript React component
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatarSrc?: string; // optional image; if not provided, initials are shown
  initials?: string;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Their platform transformed how we approach campaigns. The intuitive tools and seamless integrations saved us a lot of time.",
    name: "Jacob Williams",
    role: "Tech CEO",
    avatarSrc: "/avatars/jacob.jpg",
    initials: "JW",
  },
  {
    quote:
      "Their marketing approach brought in more foot traffic and online orders. The data-driven insights made all the difference.",
    name: "Ethan Reynolds",
    role: "Café Owner",
    avatarSrc: "/avatars/ethan.jpg",
    initials: "ER",
  },
  {
    quote:
      "Their system improved our client engagement and lead conversions. The easy-to-use tools streamlined our entire sales process.",
    name: "Nathan Carter",
    role: "Fitness Founder",
    avatarSrc: "/avatars/nathan.jpg",
    initials: "NC",
  },
  {
    quote:
      "Their system improved our client engagement and lead conversions. The easy-to-use tools streamlined our entire sales process",
    name: "Daniel Foster",
    role: "Real Estate CEO",
    avatarSrc: "/avatars/daniel.jpg",
    initials: "DF",
  },
  {
    quote:
      "They refined our brand’s digital presence and increased customer retention. The personalized strategies made a huge impact.",
    name: "Mitchell Apparel",
    role: "Fashion CEO",
    avatarSrc: "/avatars/mitchell.jpg",
    initials: "MA",
  },
  {
    quote:
      "Their platform enhanced project coordination and design workflow. The advanced tools helped us meet deadlines stress-free.",
    name: "Lucas Bennett",
    role: "Architect",
    avatarSrc: "/avatars/lucas.jpg",
    initials: "LB",
  },
];

function Avatar({ src, initials }: { src?: string; initials?: string }) {
  return (
    <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200 shadow-sm ring-1 ring-black/5">
      {src ? (
        // regular <img> avoids Next/Image domain config
        // eslint-disable-next-line @next/next/no-img-element
        <Image
          src={src}
          alt=""
          className="h-full w-full object-cover"
          width={48}
          height={48}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-gray-700">
          {initials?.slice(0, 2).toUpperCase()}
        </div>
      )}
    </div>
  );
}

export default function TestimonialsSection({
  items = DEFAULT_TESTIMONIALS,
  title = "Ce que disent nos clients",
  subtitle = "Les témoignages de nos clients reflètent notre engagement envers l’excellence.",
}: {
  items?: Testimonial[];
  title?: string;
  subtitle?: string;
}) {
  return (
    <section
      className="mx-auto max-w-7xl px-6 py-16 md:pt-20 md:px-10"
      id="testimonials"
    >
      {/* Heading */}
      <div className="mb-15 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-gray-600">{subtitle}</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {items.map((t, i) => (
          <article
            key={i}
            className="rounded-xl bg-gray-50 p-6  transition-shadow  md:p-5"
          >
            <p className="text-gray-700 leading-relaxed text-sm">{t.quote}</p>
            <div className="mt-6 flex items-center gap-4">
              <Avatar initials={t.initials} />
              <div>
                <div className="font-medium text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
