import Image from "next/image";
import React from "react";

export default function ContactHeader() {
  return (
    <section className="relative isolate overflow-hidden bg-[#002329] text-white">
      {/* background grid */}
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
      <div className="pointer-events-none select-none absolute -right-10 top-5">
        <Image
          className="md:w-48 w-24"
          src="/images/right_side_logo.png"
          width={200}
          height={200}
          alt="servsi logo"
        />
      </div>
      <div className="pointer-events-none select-none absolute -left-10 bottom-5">
        <Image
          className="md:w-48 w-24"
          src="/images/left_side_logo.png"
          width={200}
          height={200}
          alt="servsi logo"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10">
        {/* Heading */}
        <div className="text-center md:w-2/3 mx-auto">
          <h2 className="text-balance text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl  ">
            Démarrez votre <span className="text-primary">projet</span> dès{" "}
            <span className="text-primary">aujourd&apos;hui </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-balance text-white/80">
            Nous vous accompagnons avec des solutions IT certifiées et un
            support réactif.
          </p>
        </div>
      </div>
    </section>
  );
}
