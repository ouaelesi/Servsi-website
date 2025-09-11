"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("Jane Smith");
  const [email, setEmail] = useState("jane@framer.com");
  const [service, setService] = useState("Business Consultation");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      // Simulate API call — replace with your endpoint
      await new Promise((r) => setTimeout(r, 800));
      setStatus("Merci ! Votre message a bien été envoyé.");
      setMessage("");
    } catch (err) {
      setStatus("Désolé, l'envoi a échoué. Réessayez.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <form
        onSubmit={onSubmit}
        className="rounded-[1.75rem] bg-gray-50 p-4  ring-black/5 md:p-8"
      >
        {/* Name */}
        <label
          htmlFor="name"
          className="block md:text-[15px] text-sm font-medium text-gray-900"
        >
          Enter your full name.
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full text-sm   rounded-xl bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400   focus:outline-none focus:ring-2 focus:ring-emerald-400"
          placeholder="Jane Smith"
        />

        {/* Email */}
        <label
          htmlFor="email"
          className="mt-6 block md:text-[15px] text-sm font-medium text-gray-900"
        >
          Enter a valid email for a response.
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full text-sm  rounded-xl bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400   focus:outline-none focus:ring-2 focus:ring-emerald-400"
          placeholder="jane@company.com"
        />

        {/* Service */}
        <label
          htmlFor="service"
          className="mt-6 block md:text-[15px] text-sm font-medium text-gray-900"
        >
          Which services are you interested in?
        </label>
        <select
          id="service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="mt-2 w-full text-sm  appearance-none rounded-xl bg-white px-4 py-3 text-gray-900  "
        >
          <option>Business Consultation</option>
          <option>Cloud & Infrastructure</option>
          <option>Security Audit</option>
          <option>Maintenance & Support</option>
          <option>Custom Development</option>
        </select>

        {/* Message */}
        <label
          htmlFor="message"
          className="mt-6 block md:text-[15px] text-sm font-medium text-gray-900"
        >
          Share any details or specific requirements.
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message..."
          className="mt-2 w-full text-sm  resize-y rounded-xl bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400   focus:outline-none  "
        />

        {/* CTA */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-primary px-6 py-4 text-base font-semibold text-black  transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Submitting…" : "Submit"}
          </button>
        </div>

        {status && (
          <p className="mt-3 text-center text-sm text-gray-600" role="status">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
