import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Briefcase, Users, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import logo from "@/assets/logo.png";

const phases = [
  {
    number: "01",
    title: "Student",
    tagline: "Build Your Foundation",
    description:
      "Master the fundamentals through a structured, expert-curated curriculum. You'll gain deep conceptual clarity and hands-on problem-solving skills that form the bedrock of your career.",
    highlights: ["Core Concepts & Theory", "Hands-on Projects", "Weekly Assessments", "1-on-1 Mentoring"],
    icon: BookOpen,
    colorVar: "--phase-student",
    duration: "3 Months",
  },
  {
    number: "02",
    title: "Internee",
    tagline: "Apply & Experiment",
    description:
      "Transition from learning to doing. Work on real client projects under supervision, adopt professional workflows, and experience the pace and standards of real industry work.",
    highlights: ["Live Client Projects", "Industry-Standard Tools", "Team Collaboration", "Code Reviews"],
    icon: Briefcase,
    colorVar: "--phase-internee",
    duration: "3 Months",
  },
  {
    number: "03",
    title: "Shadow",
    tagline: "Learn From the Best",
    description:
      "Shadow senior professionals on high-impact engagements. Observe strategic decision-making, absorb leadership patterns, and refine your professional instincts.",
    highlights: ["Senior Mentorship", "Strategic Thinking", "Leadership Skills", "Client Communication"],
    icon: Users,
    colorVar: "--phase-shadow",
    duration: "3 Months",
  },
  {
    number: "04",
    title: "Expert",
    tagline: "Lead & Innovate",
    description:
      "You're now industry-ready. Lead projects end-to-end, mentor juniors, and build solutions that create real impact. This is where your career truly begins.",
    highlights: ["Project Leadership", "Mentoring Others", "Portfolio Showcase", "Job Placement Support"],
    icon: Award,
    colorVar: "--phase-expert",
    duration: "Ongoing",
  },
];

const PhaseCard = ({ phase, index }: { phase: typeof phases[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = phase.icon;
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Timeline connector */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 hidden lg:block">
        {/* Vertical line */}
        {index < phases.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-1/2 -translate-x-1/2 top-12 w-px h-[calc(100%+2rem)] origin-top"
            style={{
              background: `linear-gradient(to bottom, hsl(var(${phase.colorVar}) / 0.4), hsl(var(${phases[index + 1]?.colorVar || phase.colorVar}) / 0.4))`,
            }}
          />
        )}
        {/* Node */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
          className="relative z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center backdrop-blur-sm"
          style={{
            borderColor: `hsl(var(${phase.colorVar}))`,
            backgroundColor: `hsl(var(${phase.colorVar}) / 0.1)`,
          }}
        >
          <span
            className="font-display font-bold text-sm"
            style={{ color: `hsl(var(${phase.colorVar}))` }}
          >
            {phase.number}
          </span>
        </motion.div>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`lg:grid lg:grid-cols-2 lg:gap-24 items-center pb-20 lg:pb-28 ${
          isEven ? "" : "lg:direction-rtl"
        }`}
      >
        <div
          className={`${isEven ? "lg:pr-20 lg:text-right" : "lg:pl-20 lg:text-left lg:col-start-2"}`}
          style={{ direction: "ltr" }}
        >
          {/* Phase number + duration badge - mobile */}
          <div className={`flex items-center gap-3 mb-4 lg:hidden`}>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: `hsl(var(${phase.colorVar}) / 0.12)`,
              }}
            >
              <Icon className="w-5 h-5" style={{ color: `hsl(var(${phase.colorVar}))` }} />
            </div>
            <span
              className="text-xs font-medium tracking-[0.2em] uppercase"
              style={{ color: `hsl(var(${phase.colorVar}))` }}
            >
              Phase {phase.number}
            </span>
          </div>

          {/* Desktop phase label */}
          <div className={`hidden lg:flex items-center gap-3 mb-5 ${isEven ? "justify-end" : "justify-start"}`}>
            <span
              className="text-xs font-medium tracking-[0.25em] uppercase"
              style={{ color: `hsl(var(${phase.colorVar}))` }}
            >
              Phase {phase.number} — {phase.duration}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight mb-2">
            {phase.title}
          </h3>
          <p
            className="font-display text-base font-medium mb-4"
            style={{ color: `hsl(var(${phase.colorVar}))` }}
          >
            {phase.tagline}
          </p>

          {/* Description */}
          <p className="text-muted-foreground text-[15px] leading-relaxed mb-6 max-w-md lg:max-w-none">
            {phase.description}
          </p>

          {/* Highlights */}
          <div className={`grid grid-cols-2 gap-x-4 gap-y-2 ${isEven ? "lg:justify-items-end" : ""}`}>
            {phase.highlights.map((h) => (
              <div
                key={h}
                className={`flex items-center gap-2 ${isEven ? "lg:flex-row-reverse" : ""}`}
              >
                <CheckCircle2
                  className="w-3.5 h-3.5 flex-shrink-0"
                  style={{ color: `hsl(var(${phase.colorVar}) / 0.7)` }}
                />
                <span className="text-sm text-foreground/70">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual side */}
        <div
          className={`mt-8 lg:mt-0 ${isEven ? "lg:pl-20 lg:col-start-2" : "lg:pr-20 lg:col-start-1 lg:row-start-1"}`}
          style={{ direction: "ltr" }}
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative rounded-2xl overflow-hidden border border-border/50 p-8 md:p-10"
            style={{
              background: `linear-gradient(145deg, hsl(var(${phase.colorVar}) / 0.06), hsl(var(--card)))`,
            }}
          >
            {/* Large number watermark */}
            <span
              className="absolute -top-4 -right-2 font-display text-[8rem] md:text-[10rem] font-black leading-none select-none pointer-events-none"
              style={{ color: `hsl(var(${phase.colorVar}) / 0.06)` }}
            >
              {phase.number}
            </span>

            {/* Icon */}
            <div
              className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{
                background: `linear-gradient(135deg, hsl(var(${phase.colorVar}) / 0.2), hsl(var(${phase.colorVar}) / 0.05))`,
                boxShadow: `0 8px 32px -8px hsl(var(${phase.colorVar}) / 0.25)`,
              }}
            >
              <Icon
                className="w-8 h-8"
                style={{ color: `hsl(var(${phase.colorVar}))` }}
                strokeWidth={1.5}
              />
            </div>

            {/* Stats row */}
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div>
                <p
                  className="font-display text-2xl md:text-3xl font-bold"
                  style={{ color: `hsl(var(${phase.colorVar}))` }}
                >
                  {index === 0 ? "500+" : index === 1 ? "50+" : index === 2 ? "30+" : "95%"}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {index === 0 ? "Enrolled Students" : index === 1 ? "Live Projects" : index === 2 ? "Industry Mentors" : "Placement Rate"}
                </p>
              </div>
              <div>
                <p
                  className="font-display text-2xl md:text-3xl font-bold"
                  style={{ color: `hsl(var(${phase.colorVar}))` }}
                >
                  {index === 0 ? "12" : index === 1 ? "8" : index === 2 ? "15+" : "200+"}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {index === 0 ? "Week Program" : index === 1 ? "Tech Stacks" : index === 2 ? "Companies" : "Experts Graduated"}
                </p>
              </div>
            </div>

            {/* Bottom accent line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[2px]"
              style={{
                background: `linear-gradient(to right, transparent, hsl(var(${phase.colorVar}) / 0.5), transparent)`,
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const JourneySection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.03),_transparent_60%)]" />

      <div className="relative container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <img src={logo} alt="Institute Logo" className="w-16 h-auto md:w-20 opacity-90" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-medium tracking-[0.35em] uppercase text-primary mb-5"
          >
            Our Learning System
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
          >
            Your Journey,
            <br />
            <span className="text-gradient-gold">Step by Step</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-5 text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            A proven four-phase system designed to take you from absolute beginner
            to industry-ready professional — with real projects, real mentors, and
            real results.
          </motion.p>
        </div>

        {/* Timeline phases */}
        <div className="max-w-6xl mx-auto">
          {phases.map((phase, i) => (
            <PhaseCard key={phase.number} phase={phase} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8"
        >
          <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-semibold text-sm hover:brightness-110 transition-all duration-300 shadow-[0_8px_32px_-8px_hsl(var(--primary)/0.4)]">
            Begin Your Transformation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-4 text-xs text-muted-foreground">
            Join 500+ students who've already made the leap
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
