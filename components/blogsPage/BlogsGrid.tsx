import Image from "next/image";
import React from "react";

export type Post = {
  title: string;
  category: string;
  image: string;
  href?: string;
};

const DEFAULT_POSTS: Post[] = [
  {
    title: "Creating Content That Converts: Writing with Purpose",
    category: "Content Creation",
    image: "/images/about1.jpg",
    href: "/blogs/creating-content-that-converts",
  },

];

/**
 * BlogGrid — 2×2 grid of compact blog cards (matches screenshot)
 * - Rounded image with small category pill overlay
 * - Title below each image
 * - Minimal hover scale
 */
export default function BlogGrid({
  posts = DEFAULT_POSTS,
}: {
  posts?: Post[];
}) {
  return (
    <section className="mx-auto max-w-4xl px-4 md:px-0 py-20">
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-8">
        {posts.map((p, i) => (
          <article key={i} className="text-left">
            <a href={p.href ?? "#"} className="group block">
              <div className="relative overflow-hidden rounded-[20px] bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                width={1000}
                height={1000}
                  src={p.image}
                  alt={p.title}
                  className="aspect-[1/1] w-full object-cover transition will-change-transform group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/55 px-5 py-2 text-xs font-medium text-gray-800 ">
                  {p.category}
                </span>
              </div>
              <h3 className="mt-3 text-[13px] font-semibold leading-snug text-gray-900 sm:text-[14px]">
                {p.title}
              </h3>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
