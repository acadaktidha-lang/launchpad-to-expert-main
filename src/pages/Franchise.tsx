import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  investmentTiers,
  franchiseBenefits,
  revenueSchools,
  revenueStreams,
  instituteModels,
} from "@/data/franchise";
import { ArrowRight } from "lucide-react";

const Franchise = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    cnic: "",
    mobile: "",
    email: "",
    city: "",
    qualification: "",
    currentStatus: "",
    experience: "",
    bizType: "",
    hasExisting: "",
    existingInstitute: "",
    preferredCity: "",
    areaPreference: "",
    investmentCategory: "",
    numberOfUnits: "",
    preferredModel: "",
    franchiseRunner: "",
    financing: "",
    propertyStatus: "",
    propertyType: "",
    propertyArea: "",
    motivation: "",
    contactTime: "",
    source: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  const formatPKR = (num: number) => {
    return (num / 100000).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 border-b border-border overflow-hidden">
        <div className="absolute -right-32 -top-20 text-9xl font-display font-900 text-primary/5 pointer-events-none">
          FRANCHISE
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 flex items-center gap-2"
          >
            <div className="h-0.5 w-5 bg-primary"></div>
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              Now Open · Nationwide · Multiple Models
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-900 uppercase leading-tight mb-6"
          >
            Own the Future of <span className="text-gradient-gold">Tech Ed.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mb-8"
          >
            Bring Big Binary Tech International Institute to your city. A proven business model, three revenue
            schools, government project access, and a full support system — backed by Pakistan's most serious tech
            education operation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#apply"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-display font-semibold text-sm hover:brightness-110 transition-all duration-300"
            >
              Express Your Interest
            </a>
            <a
              href="#invest"
              className="px-6 py-3.5 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground border border-foreground/15 hover:border-primary/50 transition-colors duration-300"
            >
              See Investment Plans
            </a>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-primary py-3 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 40, linear: true }}
          className="whitespace-nowrap flex gap-8"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8">
              <span className="font-display font-800 text-sm uppercase tracking-wider text-primary-foreground">
                Generative AI + Agentic AI
              </span>
              <span className="text-primary-foreground/40">·</span>
              <span className="font-display font-800 text-sm uppercase tracking-wider text-primary-foreground">
                Cloud + MLOps
              </span>
              <span className="text-primary-foreground/40">·</span>
              <span className="font-display font-800 text-sm uppercase tracking-wider text-primary-foreground">
                Odoo ERP Dev
              </span>
              <span className="text-primary-foreground/40">·</span>
              <span className="font-display font-800 text-sm uppercase tracking-wider text-primary-foreground">
                AI Full Stack
              </span>
              <span className="text-background/40">·</span>
              <span className="font-display font-800 text-sm uppercase tracking-wider text-background">
                Cybersecurity
              </span>
              <span className="text-background/40">·</span>
              <span className="font-display font-800 text-sm uppercase tracking-wider text-background">
                UI/UX + Brand Design
              </span>
              <span className="text-background/40">·</span>
              <span className="font-display font-800 text-sm uppercase tracking-wider text-background">
                AI Marketing + Sales
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Investment Tiers */}
      <section id="invest" className="py-20 px-6 md:px-12 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-5 bg-accent"></div>
                <span className="text-xs font-mono uppercase tracking-widest text-accent">Investment Plans</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-900 uppercase mb-4">
                Three Tiers. One <span className="text-gradient-gold">Lifetime License.</span>
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground text-base leading-relaxed">
                All licenses are lifetime and non-refundable. Paid in two tranches: at MOU signing and before
                operations begin. Royalty is charged on gross income per student, per month.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-1 bg-border border border-border mb-8">
            {investmentTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-8 relative overflow-hidden transition-all ${
                  tier.featured ? "bg-[#F6931D] text-white" : "bg-[#262261] hover:bg-[#262261]/90 text-white"
                }`}
              >
                <div className="absolute -top-6 -right-6 text-8xl font-display font-900 opacity-10">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10">
                  <div className={`text-xs font-mono uppercase tracking-wider mb-3 ${
                    tier.featured ? "text-white/70" : "text-[#F6931D]"
                  }`}>
                    {tier.category}
                  </div>
                  <div
                    className={`inline-block text-xs font-bold uppercase px-3 py-1 rounded-full mb-4 ${
                      tier.featured
                        ? "bg-[#262261] text-white"
                        : "bg-[#F6931D]/20 text-[#F6931D] border border-[#F6931D]/40"
                    }`}
                  >
                    {tier.badge}
                  </div>

                  <h3 className="text-xl font-display font-800 mb-2 uppercase">{tier.name}</h3>

                  <div className="mb-1">
                    <div className="text-3xl font-display font-900">{formatPKR(tier.fee)}M</div>
                    <div className={`text-xs ${tier.featured ? "text-white/60" : "text-white/50"}`}>
                      {tier.feeLabel}
                    </div>
                  </div>

                  <div className={`h-px my-4 ${tier.featured ? "bg-white/20" : "bg-white/15"}`}></div>

                  <div className="space-y-3 mb-4 text-sm text-white/80">
                    <div className="flex justify-between">
                      <span>At MOU Signing</span>
                      <span className="font-semibold">PKR {(tier.mouSigning / 100000).toFixed(1)}M</span>
                    </div>
                    <div className="flex justify-between border-t border-current/20 pt-3">
                      <span>Before Operations</span>
                      <span className="font-semibold">PKR {(tier.beforeOperations / 100000).toFixed(1)}M</span>
                    </div>
                  </div>

                  <div
                    className={`p-3 rounded flex items-center justify-between ${
                      tier.featured ? "bg-[#262261]/50" : "bg-white/10"
                    }`}
                  >
                    <span className="text-xs font-mono uppercase tracking-wide">Monthly Royalty</span>
                    <span className="text-2xl font-display font-900">{tier.monthlyRoyalty}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-navy border border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-white">Note on Royalty:</span> Students' fees are deposited
              into the BBT designated account. Your franchisee share is transferred to your bank account based on the
              royalty rate. Government projects through NAVTTC provide additional revenue opportunities.
            </p>
            <a
              href="#apply"
              className="px-6 py-3 bg-accent text-background font-bold uppercase rounded whitespace-nowrap hover:opacity-90 transition-opacity"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-6 md:px-12 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-5 bg-accent"></div>
                <span className="text-xs font-mono uppercase tracking-widest text-accent">What You Get</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-900 uppercase mb-4">
                Full Support. From Day <span className="text-gradient-gold">One.</span>
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground text-base leading-relaxed">
                BBT doesn't hand you a brand and step back. You get a complete operational system — from setup
                through daily management — built from our own experience running the model.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-1 bg-border border border-border">
            {franchiseBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-8 bg-card hover:bg-card/80 transition-all"
              >
                <div className="text-xs font-mono uppercase tracking-wider text-accent mb-4">
                  {benefit.number}
                </div>
                <h3 className="text-lg font-display font-800 uppercase mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Schools */}
      <section className="py-20 px-6 md:px-12 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-5 bg-accent"></div>
                <span className="text-xs font-mono uppercase tracking-widest text-accent">Three Revenue Schools</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-900 uppercase mb-4">
                Seven Tracks. All <span className="text-gradient-gold">Market-Gap Built.</span>
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground text-base leading-relaxed">
                Your franchise delivers all 7 BBT courses — each chosen because qualified applicants are genuinely
                scarce in that role. Not what was popular three years ago. What the market is missing right now.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-1 bg-border border border-border">
            {revenueSchools.map((school, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`p-8 ${school.featured ? "bg-accent text-background md:col-span-1" : "bg-card hover:bg-card/80"}`}
              >
                <div
                  className={`text-xs font-mono uppercase tracking-wider mb-3 ${
                    school.featured ? "text-background/60" : "text-accent"
                  }`}
                >
                  {school.tracks}
                </div>
                <h3 className="text-xl font-display font-800 uppercase mb-4">{school.title}</h3>
                <ul className="space-y-2">
                  {school.courses.map((course) => (
                    <li key={course.id} className="flex gap-3 text-sm">
                      <span
                        className={`flex-shrink-0 mt-1 ${
                          school.featured ? "text-background/50" : "text-accent"
                        }`}
                      >
                        →
                      </span>
                      <span>{course.title}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Streams */}
      <section className="py-20 px-6 md:px-12 border-b border-border bg-navy">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-5 bg-accent"></div>
                <span className="text-xs font-mono uppercase tracking-widest text-accent">Revenue Streams</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-900 uppercase mb-4">
                Multiple Ways to <span className="text-gradient-gold">Earn.</span>
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground text-base leading-relaxed">
                BBT franchises generate revenue from more than one direction. The diversity of income sources is part
                of what makes the model resilient.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-1 bg-border border border-border">
            {revenueStreams.map((stream, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-6 bg-card hover:bg-card/80 transition-all"
              >
                <div className="text-xs font-mono uppercase tracking-wider text-accent/70 mb-2">
                  {stream.category}
                </div>
                <h3 className="text-lg font-display font-800 uppercase mb-3">{stream.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{stream.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Institute Models */}
      <section className="py-20 px-6 md:px-12 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-5 bg-accent"></div>
                <span className="text-xs font-mono uppercase tracking-widest text-accent">Institute Models</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-900 uppercase mb-4">
                Three Ways to <span className="text-gradient-gold">Partner.</span>
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground text-base leading-relaxed">
                Whether you're starting fresh, converting an existing institute, or building a hybrid operation —
                BBT's franchise structure accommodates the model that fits your situation.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-1 bg-border border border-border">
            {instituteModels.map((model, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`p-8 ${
                  model.featured ? "bg-accent/20 border border-accent/30" : "bg-card hover:bg-card/80"
                } transition-all`}
              >
                <div className={`text-xs font-mono uppercase tracking-wider mb-3 ${model.featured ? "text-accent" : "text-accent/70"}`}>
                  {model.number}
                </div>
                <h3 className="text-lg font-display font-800 uppercase mb-3">{model.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{model.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="apply" className="py-24 px-6 md:px-12 border-b border-border">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-0.5 w-5 bg-accent"></div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent">Express Your Interest</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-900 uppercase mb-6">
              Start the Conversation. <span className="text-gradient-gold">Today.</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Fill in your details below. Our franchise team reviews every application and contacts qualified
              candidates directly. No commitment required at this stage — just tell us about yourself and where you
              want to build.
            </p>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex gap-3">
                <span className="text-xs font-mono text-accent uppercase">Phone</span>
                <span>0326-0188811</span>
              </div>
              <div className="flex gap-3">
                <span className="text-xs font-mono text-accent uppercase">Email</span>
                <span>franchise@bbt.edu.pk</span>
              </div>
              <div className="flex gap-3">
                <span className="text-xs font-mono text-accent uppercase">Location</span>
                <span>444Q, 2nd Floor DHA Phase 2, Lahore</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Info */}
            <div>
              <h3 className="text-lg font-display font-800 uppercase mb-6 flex items-center gap-3">
                <span className="h-0.5 w-4 bg-border"></span>
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-accent mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-card border border-border rounded outline-none focus:border-accent transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-accent mb-2">
                    CNIC Number
                  </label>
                  <input
                    type="text"
                    name="cnic"
                    value={formData.cnic}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-card border border-border rounded outline-none focus:border-accent transition-colors"
                    placeholder="XXXXX-XXXXXXX-X"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-accent mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-card border border-border rounded outline-none focus:border-accent transition-colors"
                    placeholder="0300-0000000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-accent mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-card border border-border rounded outline-none focus:border-accent transition-colors"
                    placeholder="you@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-accent mb-2">
                    City of Residence
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-card border border-border rounded outline-none focus:border-accent transition-colors"
                    placeholder="Your city"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-accent mb-2">
                    Preferred City for Franchise
                  </label>
                  <input
                    type="text"
                    name="preferredCity"
                    value={formData.preferredCity}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-card border border-border rounded outline-none focus:border-accent transition-colors"
                    placeholder="e.g. Karachi"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Investment Category */}
            <div>
              <h3 className="text-lg font-display font-800 uppercase mb-6 flex items-center gap-3">
                <span className="h-0.5 w-4 bg-border"></span>
                Investment & Model Selection
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-accent mb-2">
                    Investment Category
                  </label>
                  <select
                    name="investmentCategory"
                    value={formData.investmentCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-card border border-border rounded outline-none focus:border-accent transition-colors"
                    required
                  >
                    <option value="">Select tier</option>
                    <option>Category I — PKR 1.5M (First Unit)</option>
                    <option>Category II — PKR 1.2M (Second Unit)</option>
                    <option>Category III — PKR 1.0M (Third+)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-accent mb-2">
                    Number of Units
                  </label>
                  <select
                    name="numberOfUnits"
                    value={formData.numberOfUnits}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-card border border-border rounded outline-none focus:border-accent transition-colors"
                  >
                    <option value="">Select</option>
                    <option>1 Unit</option>
                    <option>2 Units</option>
                    <option>3+ Units</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-accent mb-3">
                  Preferred Model
                </label>
                <div className="space-y-2">
                  {["Training Institute", "Software & Consultancy", "Hybrid"].map((model) => (
                    <label key={model} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredModel"
                        value={model}
                        checked={formData.preferredModel === model}
                        onChange={handleChange}
                        className="w-4 h-4 accent-accent"
                      />
                      <span className="text-sm text-muted-foreground">{model}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Motivation */}
            <div>
              <h3 className="text-lg font-display font-800 uppercase mb-6 flex items-center gap-3">
                <span className="h-0.5 w-4 bg-border"></span>
                Additional Information
              </h3>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-accent mb-2">
                  Why do you want to partner with BBT?
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-card border border-border rounded outline-none focus:border-accent transition-colors"
                  rows={4}
                  placeholder="Tell us about your vision..."
                ></textarea>
              </div>
            </div>

            {/* Consent & Submit */}
            <div>
              <label className="flex items-start gap-3 mb-8">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="w-4 h-4 mt-1 accent-accent flex-shrink-0"
                  required
                />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  I understand this is an expression of interest and not a formal commitment. I consent to Big Binary
                  Tech contacting me regarding this application.
                </span>
              </label>

              <button
                type="submit"
                className="px-8 py-4 bg-accent text-background font-display font-bold uppercase rounded hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Submit Expression of Interest
                <ArrowRight className="w-4 h-4" />
              </button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded text-green-400 text-sm"
                >
                  ✓ Your interest has been submitted. Our franchise team will contact you within 2 business days.
                </motion.div>
              )}
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Franchise;
