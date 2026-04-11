import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { BookOpen, Briefcase, Eye, Crown } from "lucide-react";

const phases = [
  {
    number: "01",
    title: "Student",
    subtitle: "Foundation",
    description: "Build your core knowledge from the ground up. Master fundamentals through structured learning, hands-on exercises, and expert-curated curriculum.",
    icon: BookOpen,
    colorVar: "--phase-student",
    skills: ["Core Concepts", "Theory", "Problem Solving", "Critical Thinking"],
  },
  {
    number: "02",
    title: "Internee",
    subtitle: "Application",
    description: "Apply your knowledge in real-world scenarios. Work on live projects under mentorship, bridging the gap between learning and doing.",
    icon: Briefcase,
    colorVar: "--phase-internee",
    skills: ["Real Projects", "Teamwork", "Industry Tools", "Deadlines"],
  },
  {
    number: "03",
    title: "Shadow",
    subtitle: "Immersion",
    description: "Shadow industry professionals. Observe decision-making at the highest level, absorb patterns, and develop your professional instincts.",
    icon: Eye,
    colorVar: "--phase-shadow",
    skills: ["Mentorship", "Decision Making", "Leadership", "Strategy"],
  },
  {
    number: "04",
    title: "Expert",
    subtitle: "Mastery",
    description: "You are now the expert. Lead projects, mentor others, and build solutions that impact the world. This isn't the end — it's the beginning.",
    icon: Crown,
    colorVar: "--phase-expert",
    skills: ["Innovation", "Mentoring", "Thought Leadership", "Impact"],
  },
];

const PhaseCard = ({ phase, index }: { phase: typeof phases[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  const Icon = phase.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group grid md:grid-cols-2 gap-8 items-center py-16 md:py-24 ${
        index % 2 === 0 ? '' : 'md:direction-rtl'
      }`}
    >
      {/* Number + Content Side */}
      <div className={`space-y-6 ${index % 2 !== 0 ? 'md:order-2 md:text-left' : ''}`} style={{ direction: 'ltr' }}>
        <div className="flex items-center gap-4">
          <span
            className="font-display text-7xl md:text-8xl font-black opacity-20"
            style={{ color: `hsl(var(${phase.colorVar}))` }}
          >
            {phase.number}
          </span>
          <div>
            <p className="text-sm font-body uppercase tracking-[0.3em]" style={{ color: `hsl(var(${phase.colorVar}))` }}>
              Phase {phase.number}
            </p>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              {phase.title}
            </h3>
          </div>
        </div>

        <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
          {phase.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {phase.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm font-body rounded-full border"
              style={{
                borderColor: `hsl(var(${phase.colorVar}) / 0.3)`,
                color: `hsl(var(${phase.colorVar}))`,
                backgroundColor: `hsl(var(${phase.colorVar}) / 0.08)`,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Visual Side */}
      <div className={`relative flex justify-center ${index % 2 !== 0 ? 'md:order-1' : ''}`} style={{ direction: 'ltr' }}>
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
            rotate: isHovered ? 3 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl glass-card flex items-center justify-center"
          style={{
            boxShadow: isHovered ? `0 0 80px -20px hsl(var(${phase.colorVar}) / 0.4)` : `0 0 40px -20px hsl(var(${phase.colorVar}) / 0.2)`,
          }}
        >
          {/* Animated ring */}
          <motion.div
            className="absolute inset-4 rounded-2xl border-2 opacity-30"
            style={{ borderColor: `hsl(var(${phase.colorVar}))` }}
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Pulsing ring on hover */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-3xl border-2"
              style={{ borderColor: `hsl(var(${phase.colorVar}))` }}
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.3, opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}

          <Icon
            className="w-20 h-20 md:w-24 md:h-24 transition-colors duration-300"
            style={{ color: `hsl(var(${phase.colorVar}))` }}
            strokeWidth={1.2}
          />

          <span
            className="absolute bottom-6 font-display text-sm tracking-[0.3em] uppercase"
            style={{ color: `hsl(var(${phase.colorVar}) / 0.6)` }}
          >
            {phase.subtitle}
          </span>
        </motion.div>
      </div>

      {/* Connecting line */}
      {index < phases.length - 1 && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 md:h-24"
          style={{
            background: `linear-gradient(to bottom, hsl(var(${phase.colorVar}) / 0.3), transparent)`,
          }}
        />
      )}
    </motion.div>
  );
};

const PhaseJourney = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            className="text-sm font-body uppercase tracking-[0.4em] text-primary mb-4"
          >
            The System
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground"
          >
            Four Phases.
            <br />
            <span className="text-gradient-gold">One Transformation.</span>
          </motion.h2>
        </div>

        {/* Phase Cards */}
        {phases.map((phase, i) => (
          <PhaseCard key={phase.number} phase={phase} index={i} />
        ))}
      </div>
    </section>
  );
};

export default PhaseJourney;
