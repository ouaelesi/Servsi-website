import Image from "next/image";
import React from "react";

export type Author = {
  name: string;
  avatar: string; // /public path preferred
};

export type PostMeta = {
  title: string;
  excerpt: string;
  date: string; // human readable
  category: string;
  heroImage: string; // /public path preferred
  author: Author;
  content: PostContentSection[];
};

export type PostContentSection = {
  title: string;
  text: string;
  images: string[]; // array of /public paths preferred
};

const DEFAULT_META: PostMeta = {
  title: "Creating Content That Converts:\nWriting with Purpose",
  excerpt:
    "Discover the keys to writing content that informs, engages, and drives users toward action with clarity, emotion, and brand alignment.",
  date: "May 24, 2025",
  category: "Content Creation",
  heroImage: "/images/blogs/blog.jpg",
  author: {
    name: "Matthew King",
    avatar: "/images/TEAM/3.jpg",
  },
  content: [
    {
      title: "Content with a Mission",
      text: "Content is the engine of digital marketing—but not all content works. If it doesn’t drive action, it’s just noise. Writing with purpose means understanding your audience, offering value, and guiding them toward the next step. In this post, we’ll show you how to create content that converts—whether it’s a blog, landing page, or social caption.",
      images: [],
    },
    {
      title: "Content with a Mission",
      text: "Begin with a compelling headline. Hook attention fast and hint at the value inside. Use clear, benefit-driven language. Break up long text with subheadings, bullets, or visuals. Focus on one goal per piece—don’t overwhelm with multiple CTAs. Address pain points and offer practical advice. Add emotion—stories, analogies, and empathy build trust. Include proof points like stats, testimonials, or case studies. Finally, guide readers with a strong, clear CTA: “Download now,” “Book a call,” or “Get your guide.” Track performance and tweak based on results.",
      images: [
        "/images/blogs/blog.jpg",
        "/images/blogs/blog.jpg",
        "/images/blogs/blog.jpg",
      ],
    },
    {
      title: "",
      text: "",
      images: [],
    },
  ],
};

/**
 * BlogPostPage — Article header + hero + content (matches mock)
 * - Dark intro band with back button, title, excerpt, byline, category pill
 * - Rounded hero image card that overlaps the band and body
 * - Body content area for headings and paragraphs
 */
export default function BlogPost({
  meta = DEFAULT_META,
  children,
}: {
  meta?: PostMeta;
  children?: React.ReactNode;
}) {
  return (
    <article className="relative isolate">
      {/* Header band */}
      <header className="relative bg-[#0c2b2e] text-white">
        {/* subtle grid */}
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

        <div className="relative mx-auto max-w-4xl px-6 pt-10 pb-28">
          {/* back */}
          <div className="mb-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/90 ring-1 ring-white/15 backdrop-blur-sm hover:bg-white/15"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </a>
          </div>

          <h1 className="text-pretty text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {meta.title}
          </h1>

          <p className="mt-4 max-w-3xl text-white/80">{meta.excerpt}</p>

          {/* byline + category */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                src={meta.author.avatar}
                alt={meta.author.name}
                className="h-8 w-8 rounded-full object-cover ring-1 ring-white/20"
                width={32}
                height={32}
              />
              <div className="text-sm text-white/90">
                <span className="font-medium">{meta.author.name}</span>
                <span className="px-2">•</span>
                <span className="text-white/70">{meta.date}</span>
              </div>
            </div>

            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/15">
              {meta.category}
            </span>
          </div>
        </div>
      </header>

      {/* Hero card overlaps header & body */}
      <div className="relative -mt-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="overflow-hidden rounded-2xl bg-white ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              src={meta.heroImage}
              alt={meta.title}
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <section className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        {meta.content.map((section, index) => (
          <div
            key={index}
            className="prose prose-zinc max-w-none prose-headings:tracking-tight prose-p:leading-relaxed mb-8"
          >
            {section.title && (
              <h2 className="text-2xl text-medium mb-3">{section.title}</h2>
            )}
            {section.text && <p>{section.text}</p>}
            <div className="flex gap-2">
              {section.images &&
                section.images.map((imgSrc: string, imgIndex: number) => (
                  <Image
                    key={imgIndex}
                    src={imgSrc}
                    alt={`Blog image ${imgIndex + 1}`}
                    className="my-4 rounded-lg"
                    style={{
                      width: `${(1 / section.images.length) * 100}%`,
                      height: "auto",
                    }}
                  />
                ))}
            </div>
          </div>
        ))}
      </section>
    </article>
  );
}
