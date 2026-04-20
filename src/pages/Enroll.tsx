import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tracks = [
  "Generative AI + Agentic AI",
  "Cloud + MLOps",
  "Odoo ERP Development",
  "AI-Integrated Full Stack",
  "Cybersecurity",
  "UI/UX + Brand Design",
  "AI-Powered Marketing + Sales",
];

const backgrounds = [
  "Student (No experience)",
  "Fresh Graduate",
  "Working Professional",
  "Freelancer",
  "Career Switcher",
  "Other",
];

const Enroll = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    track: "",
    background: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "/api/contact";
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          service: form.track,
          message: `City: ${form.city}\nBackground: ${form.background}\n\n${form.message || "No additional message."}`,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ firstName: "", lastName: "", email: "", phone: "", city: "", track: "", background: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      const errorMessage = err instanceof Error ? err.message : "Could not reach the server. Please try again later.";
      setErrorMsg(errorMessage);
      console.error("Form submission error:", errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 flex items-center gap-2"
          >
            <div className="h-0.5 w-5 bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              April 2026 Cohort · Limited Seats
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-900 uppercase leading-tight mb-4"
          >
            Apply <span className="text-gradient-gold">Now</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl font-light leading-relaxed"
          >
            Fill out the form below and our team will reach out within 24 hours to confirm your seat.
          </motion.p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-8 md:p-10 space-y-6"
          >
            {/* Row 1 — First Name / Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  First Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="e.g. Ali"
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Last Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="e.g. Hassan"
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Row 2 — Email */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                Email Address <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  WhatsApp / Phone <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="03XX-XXXXXXX"
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  City <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Lahore, Karachi, etc."
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Track of Interest <span className="text-primary">*</span>
                </label>
                <select
                  name="track"
                  value={form.track}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a track...</option>
                  {tracks.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Your Background <span className="text-primary">*</span>
                </label>
                <select
                  name="background"
                  value={form.background}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select...</option>
                  {backgrounds.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                Anything you'd like us to know? <span className="text-muted-foreground">(Optional)</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your goals, questions, or relevant experience..."
                rows={5}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            {/* Status messages */}
            {status === "success" && (
              <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
                Application submitted! Our team will contact you within 24 hours.
              </div>
            )}
            {status === "error" && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium">
                {errorMsg}
              </div>
            )}

            {/* Submit */}
            <div className="space-y-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full md:w-auto px-10 py-3.5 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-widest rounded-lg hover:brightness-110 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Submitting..." : "Submit Application"}
              </button>
              <p className="text-xs text-muted-foreground">
                Or reach us directly:{" "}
                <span className="text-foreground font-semibold">0326-0188811</span>
                {" · "}
                <span className="text-foreground font-semibold">admissions@bbt.edu.pk</span>
              </p>
            </div>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enroll;
