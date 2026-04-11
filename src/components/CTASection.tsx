import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-40 overflow-hidden noise-overlay">
      {/* Radial gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, hsl(var(--phase-expert) / 0.12) 0%, transparent 70%)`,
        }}
      />

      <div ref={ref} className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-6"
        >
          Ready to Begin?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-muted-foreground mb-12 max-w-lg mx-auto"
        >
          Your transformation starts with a single step. Join the next cohort and become the expert you were meant to be.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="group relative px-12 py-5 font-display font-bold text-lg text-primary-foreground rounded-xl overflow-hidden magnetic-hover">
            <span className="absolute inset-0 rounded-xl" style={{ background: "var(--gradient-gold)" }} />
            <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, hsl(35 100% 50%), hsl(50 100% 60%))" }} />
            <span className="relative flex items-center gap-3">
              Enroll Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>
        </motion.div>

        {/* Phase dots decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6 mt-16"
        >
          {[
            { label: "Student", color: "--phase-student" },
            { label: "Internee", color: "--phase-internee" },
            { label: "Shadow", color: "--phase-shadow" },
            { label: "Expert", color: "--phase-expert" },
          ].map((p, i) => (
            <div key={p.label} className="flex items-center gap-2">
              <motion.span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: `hsl(var(${p.color}))` }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
              <span className="text-xs font-body uppercase tracking-wider text-muted-foreground">
                {p.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
