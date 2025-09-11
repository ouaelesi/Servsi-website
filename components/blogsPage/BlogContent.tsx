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
              <img
                src={meta.author.avatar}
                alt={meta.author.name}
                className="h-8 w-8 rounded-full object-cover ring-1 ring-white/20"
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
          <div className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={meta.heroImage}
              alt={meta.title}
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <section className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        {children ?? (
          <div className="prose prose-zinc max-w-none prose-headings:tracking-tight prose-p:leading-relaxed">
            <h2>Content with a Mission</h2>
            <p>
              Content is the engine of digital marketing—but not all content
              works. If it doesn’t drive action, it’s just noise. Writing with
              purpose means understanding your audience, offering value, and
              guiding them toward the next step.
            </p>
            <p>
              Effective content blends clarity with emotion. Start with a clear
              outcome, anchor on a single message, and remove anything that
              distracts from it. Then add narrative and visual structure to make
              it memorable.
            </p>
            <h3>Principles that Drive Conversion</h3>
            <ul>
              <li>Address a real problem with specific language.</li>
              <li>Make the next step obvious and low-friction.</li>
              <li>Use proof—data, examples, or customer stories.</li>
            </ul>
            <p>
              When teams align on purpose, every headline, paragraph, and
              call-to-action becomes a lever for growth.
            </p>
          </div>
        )}
      </section>
    </article>
  );
}
