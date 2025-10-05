"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("Jane Smith");
  const [email, setEmail] = useState("jane@framer.com");
  const [service, setService] = useState("Consultation professionnelle");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      // Simulation d’un appel API — à remplacer par ton endpoint réel
      await new Promise((r) => setTimeout(r, 800));
      setStatus("✅ Merci ! Votre message a bien été envoyé.");
      setMessage("");
    } catch (err) {
      setStatus("❌ Désolé, l’envoi a échoué. Veuillez réessayer.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="mx-auto w-full px-4 py-12">
      <form
        onSubmit={onSubmit}
        className="rounded-[1.75rem] bg-[#F5F5F5] p-4 ring-black/5 md:p-8"
      >
        {/* Nom complet */}
        <label
          htmlFor="name"
          className="block md:text-[15px] text-sm font-medium text-gray-900"
        >
          Entrez votre nom complet :
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full text-sm rounded-xl bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          placeholder="Jane Smith"
        />

        {/* Email */}
        <label
          htmlFor="email"
          className="mt-6 block md:text-[15px] text-sm font-medium text-gray-900"
        >
          Entrez une adresse e-mail valide pour recevoir une réponse :
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full text-sm rounded-xl bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          placeholder="exemple@entreprise.com"
        />

        {/* Service */}
        <label
          htmlFor="service"
          className="mt-6 block md:text-[15px] text-sm font-medium text-gray-900"
        >
          Quel type de service recherchez-vous ?
        </label>
        <select
          id="service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="mt-2 w-full text-sm appearance-none rounded-xl bg-white px-4 py-3 text-gray-900"
        >
          <option>Consultation professionnelle</option>
          <option>Cloud & Infrastructure</option>
          <option>Audit de sécurité</option>
          <option>Maintenance & Support</option>
          <option>Développement sur mesure</option>
        </select>

        {/* Message */}
        <label
          htmlFor="message"
          className="mt-6 block md:text-[15px] text-sm font-medium text-gray-900"
        >
          Partagez les détails ou vos besoins spécifiques :
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Votre message..."
          className="mt-2 w-full text-sm resize-y rounded-xl bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none"
        />

        {/* CTA */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-primary px-6 py-4 text-base font-semibold text-black transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Envoi en cours..." : "Obtenir mon devis gratuit"}
          </button>
        </div>

        {status && (
          <p className="mt-3 text-center text-sm text-gray-700" role="status">
            {status}
          </p>
        )}

        <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
          <span>🔒 +95% de satisfaction client</span>
        </div>
      </form>
    </section>
  );
}
