import React from "react";
import Link from "next/link";
export default function NotFoundPage() {
  return (
    <div className="text-center pt-58 px-6 space-y-6 min-h-screen ">
      <div className="text-5xl font-bold">Ooops! page not found</div>
      <div>
        It looks like the page you’re looking for doesn’t exist or has been
        moved.
      </div>
      <div className="hidden md:block">
        <Link
          href={"/"}
          className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black shadow ring-1 ring-emerald-500/40 transition hover:brightness-95"
        >
          Go home
        </Link>
      </div>
        <div className="text-[300px] font-extrabold text-black/5">
        404
      </div>
    </div>
  );
}
