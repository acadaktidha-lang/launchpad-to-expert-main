import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I came in knowing nothing about coding. The four-phase system didn't just teach me — it rewired how I think. Now I lead a team of 12.",
    name: "Sarah K.",
    role: "Senior Developer → Phase 4 Graduate",
    phase: "Expert",
    colorVar: "--phase-expert",
  },
  {
    quote: "The shadow phase changed everything. Watching real professionals make decisions taught me more than any textbook ever could.",
    name: "James R.",
    role: "UX Designer → Phase 3 Graduate",
    phase: "Shadow",
    colorVar: "--phase-shadow",
  },
  {
    quote: "During my internee phase, I worked on a product used by 2 million people. That experience was invaluable.",
    name: "Aisha M.",
    role: "Data Analyst → Phase 2 Graduate",
    phase: "Internee",
    colorVar: "--phase-internee",
  },
];

const TestimonialSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-sm font-body uppercase tracking-[0.4em] text-primary mb-4"
          >
            Success Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground"
          >
            They Started at <span className="text-outline">Zero</span>
          </motion.h2>
        </div>

        {/* Testimonial Cards */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-8 md:p-12 text-center relative"
            style={{
              boxShadow: `0 0 80px -30px hsl(var(${testimonials[active].colorVar}) / 0.3)`,
            }}
          >
            <Quote className="w-10 h-10 mx-auto mb-6 opacity-30" style={{ color: `hsl(var(${testimonials[active].colorVar}))` }} />
            <p className="font-body text-xl md:text-2xl text-foreground leading-relaxed mb-8">
              "{testimonials[active].quote}"
            </p>
            <div>
              <p className="font-display text-lg font-bold text-foreground">{testimonials[active].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[active].role}</p>
              <span
                className="inline-block mt-3 px-3 py-1 text-xs rounded-full border"
                style={{
                  borderColor: `hsl(var(${testimonials[active].colorVar}) / 0.5)`,
                  color: `hsl(var(${testimonials[active].colorVar}))`,
                  backgroundColor: `hsl(var(${testimonials[active].colorVar}) / 0.1)`,
                }}
              >
                {testimonials[active].phase}
              </span>
            </div>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="relative w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: i === active ? `hsl(var(${t.colorVar}))` : `hsl(var(--muted))`,
                }}
              >
                {i === active && (
                  <motion.span
                    layoutId="dot"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: `hsl(var(${t.colorVar}))` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
