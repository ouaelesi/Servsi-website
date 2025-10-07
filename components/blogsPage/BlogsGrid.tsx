"use client";
import { Search, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

export type Post = {
  title: string;
  category: string;
  image: string;
  href?: string;
};

const DEFAULT_POSTS: Post[] = [
  {
    title:
      "Comment moderniser son réseau en entreprise : de l’audit au déploiement",
    category: "Réseaux & Infrastructure",
    image: "/images/about1.jpg",
    href: "/blogs/creating-content-that-converts",
  },
];

export default function BlogGrid({
  posts = DEFAULT_POSTS,
}: {
  posts?: Post[];
}) {
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [activeCat, setActiveCat] = useState<string>("Toutes");
  const inputRef = useRef<HTMLInputElement>(null);

  // Debounce search
  useEffect(() => {
    const t = setTimeout(() => setDebounced(query.trim().toLowerCase()), 200);
    return () => clearTimeout(t);
  }, [query]);

  const categories = useMemo(
    () => ["Toutes", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts]
  );

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesCat = activeCat === "Toutes" || p.category === activeCat;
      const matchesText =
        !debounced || p.title.toLowerCase().includes(debounced);
      return matchesCat && matchesText;
    });
  }, [posts, activeCat, debounced]);

  function resetFilters() {
    setQuery("");
    setActiveCat("Toutes");
    inputRef.current?.focus();
  }

  return (
    <section className="mx-auto max-w-5xl px-4 md:px-0 py-20">
      {/* Controls */}
      <div className="sticky top-0 z-10 -mx-4 md:mx-0 mb-6 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 border-b border-black/5">
        <div className="mx-4 md:mx-0 py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative w-full sm:max-w-md">
              <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                <Search className="h-4 w-4 text-neutral-500" />
              </div>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un article"
                aria-label="Rechercher"
                className="w-full rounded-2xl border border-neutral-200 bg-white pl-10 pr-10 py-2.5 text-sm outline-none ring-0 focus:border-black/60 transition"
              />
              {query && (
                <button
                  aria-label="Effacer la recherche"
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-neutral-500 hover:text-neutral-800"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category dropdown + actions */}
            <div className="flex items-center gap-3">
              <label
                className="text-xs text-neutral-600"
                htmlFor="category-select"
              >
                Catégorie
              </label>
              <select
                id="category-select"
                value={activeCat}
                onChange={(e) => setActiveCat(e.target.value)}
                className="rounded-2xl border border-neutral-200 bg-white px-3 py-2 text-sm"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <span className="inline-flex items-center rounded-full border border-neutral-200 px-3 py-1.5 text-xs text-neutral-600">
                {filtered.length} résultat{filtered.length > 1 ? "s" : ""}
              </span>
              <button
                onClick={resetFilters}
                className="rounded-xl  bg-primary px-3 py-1.5 text-xs font-medium text-neutral-800 cursor-pointer transition"
              >
                Réinitialiser
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-8">
          {filtered.map((p, i) => (
            <article key={i} className="text-left">
              <a href={p.href ?? "#"} className="group block">
                <div className="relative overflow-hidden rounded-[20px] bg-gray-100">
                  <Image
                    width={1000}
                    height={1000}
                    src={p.image}
                    alt={p.title}
                    className="aspect-[1/1] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-xs font-medium text-gray-800 shadow">
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
      ) : (
        <p className="text-center text-gray-500 mt-10">
          Aucun article ne correspond à votre recherche.
        </p>
      )}
    </section>
  );
}
