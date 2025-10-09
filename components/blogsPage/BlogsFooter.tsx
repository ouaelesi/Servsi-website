"use client";

import { Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type Article = {
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  href: string;
};

type Props = {
  articles?: Article[];
  title?: string;
};

const DEFAULT_ARTICLES: Article[] = [
  {
    title: "Moderniser son infrastructure réseau : bonnes pratiques en 2025",
    date: "Oct 8, 2025",
    author: {
      name: "SERVSI — Équipe Réseaux",
      avatar: "/images/Logo.png",
    },
    href: "/blogs/moderniser-reseau",
  },
  {
    title: "Cybersécurité : anticiper les menaces émergentes",
    date: "Sept 28, 2025",
    author: {
      name: "SERVSI — Équipe Sécurité",
      avatar: "/images/about2.jpg",
    },
    href: "/blogs/cybersecurite-2025",
  },
  {
    title: "Cloud & Virtualisation : optimiser vos coûts IT",
    date: "Sept 15, 2025",
    author: {
      name: "SERVSI — Équipe Cloud",
      avatar: "/images/Logo.png",
    },
    href: "/blogs/cloud-virtualisation",
  },
];

export default function RecentArticles({
  articles = DEFAULT_ARTICLES,
  title = "Articles récents",
}: Props) {
  return (
    <section className="mx-auto max-w-6xl  py-16">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-gray-900">
        {title}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={article.href}
            className="group rounded-xl border border-gray-200 bg-white p-5  transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="mb-3 text-lg font-semibold leading-snug text-gray-900 group-hover:text-[#0c2b2e]">
              {article.title}
            </h3>

            <div className="mt-auto flex items-center gap-3 text-sm text-gray-600">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover ring-1 ring-gray-200"
              />
              <div>
                <p className="font-medium text-gray-800">
                  {article.author.name}
                </p>
                <p className="text-xs text-gray-500">{article.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-between bg-foreground rounded-2xl p-12 gap-4 justify-items-center mt-16 flex-col md:flex-row md:items-center">
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
        <div className="text-3xl font-semibold text-white/80 w-1/2">
          Recevez les dernières mises à jour de la newsletter WriteClick.
        </div>
        <div>
          <form action="#" className=" flex max-w-xl items-center gap-3 ">
            <label htmlFor="email" className="sr-only">
              Adresse e-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-white/60 ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="submit"
              className="whitespace-nowrap cursor-pointer md:block hidden rounded-xl bg-primary px-5 py-3 font-medium text-black shadow ring-1 ring-emerald-500/40 transition hover:brightness-95"
            >
              Abonner
            </button>
            <button
              type="submit"
              aria-label="Recevoir les alertes"
              className="whitespace-nowrap block md:hidden rounded-xl bg-primary px-3 py-3 font-medium text-black shadow ring-1 ring-emerald-500/40 transition hover:brightness-95"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
