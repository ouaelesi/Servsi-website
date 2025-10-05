import React from "react";
import PartnersSlider from "../PartnersSlider";

export default function Partners() {
  return (
    <section >
      <div className=" text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
          Vous hésitez encore ? Déjà +25 partenaires nous font confiance dans{" "}
          <span className="text-primary">le monde entier.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-gray-600">
          Certifiés et recommandés par nos partenaires technologiques de
          confiance.
        </p>
      </div>
      <PartnersSlider className="py-25" section="Parntners" />
    </section>
  );
}
