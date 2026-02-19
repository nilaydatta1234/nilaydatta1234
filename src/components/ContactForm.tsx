"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Spade } from "./icons";

interface FormData {
  name: string;
  email: string;
  eventType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  eventType?: string;
  message?: string;
}

const eventTypes = [
  "Corporate Event",
  "Private Event",
  "Wedding",
  "Workshop",
  "Other",
];

export function ContactForm() {
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    eventType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function validate(): boolean {
    const errs: FormErrors = {};
    if (!data.name.trim()) errs.name = "Name is required";
    if (!data.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = "Enter a valid email address";
    }
    if (!data.eventType) errs.eventType = "Select an event type";
    if (!data.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        setData({ name: "", email: "", eventType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-bg-elevated hairline rounded-md px-4 py-3 text-sm text-fg placeholder-muted transition-colors focus:border-accent/40 focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-xs text-muted mb-1.5 uppercase tracking-wider">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className={inputClass}
        />
        {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-xs text-muted mb-1.5 uppercase tracking-wider">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className={inputClass}
        />
        {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="eventType" className="block text-xs text-muted mb-1.5 uppercase tracking-wider">
          Event Type
        </label>
        <select
          id="eventType"
          value={data.eventType}
          onChange={(e) => setData({ ...data, eventType: e.target.value })}
          className={`${inputClass} appearance-none`}
        >
          <option value="">Select event type</option>
          {eventTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.eventType && <p className="text-xs text-red-400 mt-1">{errors.eventType}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-xs text-muted mb-1.5 uppercase tracking-wider">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell me about your event..."
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          className={`${inputClass} resize-none`}
        />
        {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
      </div>

      <motion.button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex items-center gap-2 bg-fg text-bg px-6 py-3 rounded-md text-sm font-medium transition-colors hover:bg-accent-bright disabled:opacity-50"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <Spade className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
        {status === "sending" ? "Sending..." : "Send Message"}
      </motion.button>

      {status === "success" && (
        <motion.p
          className="text-sm text-green-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Message sent successfully. I&apos;ll be in touch soon.
        </motion.p>
      )}
      {status === "error" && (
        <motion.p
          className="text-sm text-red-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Something went wrong. Please try again or email directly.
        </motion.p>
      )}
    </form>
  );
}
