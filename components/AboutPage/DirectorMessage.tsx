"use client";
import Image from "next/image";

export default function DirectorMessage() {
  return ( 
    <section className="py-16  mx-auto max-w-7xl ">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-10">
        
        {/* Photo du directeur */}
        <div className="flex-shrink-0 md:w-1/4 " >
          <Image
            src="/images/ceo.png" // remplace par le chemin de ton image
            alt="Houari Khaldi"
            width={250}
            height={250}
            className="rounded-xl w-full  border-4 border-foreground"
          />
        </div>

        {/* Texte */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Mot du directeur <span className="">&quot;Houari KHALDI&quot;</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bienvenue sur le site officiel de <strong>SERVSI</strong>. Je suis 
            <strong> KHALDI Houari</strong>, Directeur Général de notre société, spécialisée 
            dans l&apos;installation et l&apos;intégration des réseaux informatiques ainsi que les 
            solutions de sécurité physique. Notre priorité est de fournir à nos clients 
            des services de haute qualité, innovants et adaptés à leurs besoins spécifiques.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chez <strong>SERVSI</strong>, nous combinons expertise technique, innovation 
            et engagement pour garantir des solutions fiables et performantes. Notre équipe 
            dévouée travaille sans relâche pour assurer la réussite de chaque projet, en 
            respectant les délais et en veillant à la satisfaction totale de nos clients.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Nous sommes déterminés à continuer à innover et à renforcer notre position 
            en tant que partenaire de confiance dans le domaine des réseaux et de la 
            sécurité en Algérie. N&apos;hésitez pas à nous contacter pour toute demande ou 
            collaboration. Merci de votre confiance et bienvenue dans l&apos;univers de SERVSI.
          </p>
        </div>
      </div>
    </section>
  );
}
