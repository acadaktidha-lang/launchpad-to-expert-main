import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, BookOpen, Briefcase, Users, Award } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import logo from "@/assets/logo.png";
import heroMainBg from "@/assets/hero-main-bg.jpg";
import slideStudent from "@/assets/slide-student.jpg";
import slideInternee from "@/assets/slide-internee.jpg";
import slideShadow from "@/assets/slide-shadow.jpg";
import slideExpert from "@/assets/slide-expert.jpg";

interface Slide {
  id: number;
  phase?: string;
  phaseNumber?: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: string;
  icon?: React.ReactNode;
}

const slides: Slide[] = [
  {
    id: 0,
    title: "Big Binary Tech",
    subtitle: "A four-phase learning system",
    description:
      "We don't just teach — we transform. Our structured pathway turns ambitious beginners into industry-ready professionals through hands-on, real-world experience.",
    image: heroMainBg,
    color: "var(--primary)",
  },
  {
    id: 1,
    phase: "Student",
    phaseNumber: "01",
    title: "Build Your Foundation",
    subtitle: "Phase 01 — Student",
    description:
      "Master core concepts, frameworks, and problem-solving fundamentals. Guided curriculum with hands-on projects that cement deep understanding.",
    image: slideStudent,
    color: "var(--phase-student)",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    id: 2,
    phase: "Internee",
    phaseNumber: "02",
    title: "Apply & Experiment",
    subtitle: "Phase 02 — Internee",
    description:
      "Step into real work environments. Collaborate on live projects, learn industry tools, and build a professional workflow under expert mentorship.",
    image: slideInternee,
    color: "var(--phase-internee)",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: 3,
    phase: "Shadow",
    phaseNumber: "03",
    title: "Learn From the Best",
    subtitle: "Phase 03 — Shadow",
    description:
      "Work alongside senior professionals on high-impact projects. Absorb decision-making, leadership, and strategic thinking through direct observation.",
    image: slideShadow,
    color: "var(--phase-shadow)",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 4,
    phase: "Expert",
    phaseNumber: "04",
    title: "Lead & Innovate",
    subtitle: "Phase 04 — Expert",
    description:
      "You're ready. Lead projects, mentor others, and drive innovation. Graduate as a fully capable professional with a portfolio that speaks for itself.",
    image: slideExpert,
    color: "var(--phase-expert)",
    icon: <Award className="w-5 h-5" />,
  },
];

const SLIDE_DURATION = 5000;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1);
  const location = useLocation();

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
      setProgress(0);
    },
    [current]
  );

  const next = useCallback(() => {
    goTo(current === slides.length - 1 ? 0 : current + 1);
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    setProgress(0);
    const progressTimer = requestAnimationFrame(() => setProgress(100));
    const timer = setTimeout(next, SLIDE_DURATION);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(progressTimer);
    };
  }, [current, next]);

  const slide = slides[current];

  const bgVariants = {
    enter: { scale: 1.1, opacity: 0 },
    center: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { scale: 1.05, opacity: 0, transition: { duration: 0.5 } },
  };

  const contentVariants = {
    enter: (d: number) => ({ x: d * 80, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], staggerChildren: 0.08 } },
    exit: (d: number) => ({ x: d * -60, opacity: 0, transition: { duration: 0.35 } }),
  };

  const childVariants = {
    enter: { y: 30, opacity: 0 },
    center: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.25 } },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background images */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className={current === 0 ? "absolute inset-0 slide-overlay" : "absolute inset-0 slide-overlay-phase"} />
          {/* Color tint for phase slides */}
          {current > 0 && (
            <div
              className="absolute inset-0 mix-blend-multiply opacity-30"
              style={{ background: `hsl(${slide.color.includes("--") ? slide.color.replace("var(", "").replace(")", "") : ""} / 0.5)` }}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Top nav hint */}
        <div className="flex items-center justify-between px-8 md:px-16 pt-8">
          <Link to="/" className="h-8 hover:opacity-80 transition-opacity flex-shrink-0">
            <img src={logo} alt="Big Binary Tech" className="h-full w-auto" />
          </Link>
          
          {/* Navigation links */}
          <div className="hidden lg:flex items-center gap-3">
            {[
              { label: "Courses", href: "/courses" },
              { label: "Curriculum", href: "/curriculum" },
              { label: "Our Approach", href: "/about" },
              { label: "Franchise", href: "/franchise" },
              { label: "Enroll", href: "#enroll" }
            ].map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`px-5 py-2.5 text-sm font-medium rounded-full border transition-all duration-300 ${
                  link.href === location.pathname
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-foreground/15 text-foreground/80 hover:border-primary/50 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex items-center px-8 md:px-16 lg:px-24">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.id}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="max-w-2xl"
            >
              {/* Phase badge */}
              {slide.phase && (
                <motion.div variants={childVariants} className="flex items-center gap-3 mb-6">
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-xl"
                    style={{ background: `hsl(${slide.color.replace("var(--", "").replace(")", "")} / 0.15)`, color: `hsl(${slide.color.replace("var(--", "").replace(")", "")})` }}
                  >
                    {slide.icon}
                  </span>
                  <span
                    className="text-sm font-medium tracking-widest uppercase"
                    style={{ color: `hsl(${slide.color.replace("var(--", "").replace(")", "")})` }}
                  >
                    {slide.subtitle}
                  </span>
                </motion.div>
              )}

              {/* Badge for main slide */}
              {!slide.phase && (
                <motion.div variants={childVariants} className="mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-medium tracking-widest uppercase text-primary">
                      {slide.subtitle}
                    </span>
                  </span>
                </motion.div>
              )}

              {/* Title */}
              <motion.h1
                variants={childVariants}
                className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground mb-5"
              >
                {current === 0 ? (
                  <>
                    From Zero
                    <br />
                    to <span className="text-gradient-gold">Expert</span>
                  </>
                ) : (
                  slide.title
                )}
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={childVariants}
                className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mb-8"
              >
                {slide.description}
              </motion.p>

              {/* CTA */}
              <motion.div variants={childVariants} className="flex items-center gap-4">
                <Link
                  to={current === 0 ? "/courses" : "#"}
                  className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-display font-semibold text-sm hover:brightness-110 transition-all duration-300"
                >
                  {current === 0 ? "View Courses" : `Explore ${slide.phase}`}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                {current === 0 && (
                  <button className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-300">
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom navigation */}
        <div className="px-8 md:px-16 pb-8">
          <div className="flex items-end justify-between gap-8">
            {/* Slide indicators */}
            <div className="flex gap-1.5 items-end">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  className="group flex flex-col items-center gap-2"
                >
                  {/* Label on active */}
                  <span
                    className={`text-[10px] tracking-widest uppercase font-medium transition-all duration-300 ${
                      i === current ? "opacity-100" : "opacity-0"
                    }`}
                    style={i === current && i > 0 ? { color: `hsl(${s.color.replace("var(--", "").replace(")", "")})` } : { color: "hsl(var(--primary))" }}
                  >
                    {i === 0 ? "Home" : s.phase}
                  </span>
                  {/* Bar */}
                  <div
                    className={`rounded-full transition-all duration-500 ${
                      i === current ? "w-16 h-1" : "w-8 h-1 opacity-30 hover:opacity-60"
                    }`}
                    style={
                      i === current
                        ? { background: i > 0 ? `hsl(${s.color.replace("var(--", "").replace(")", "")})` : "hsl(var(--primary))" }
                        : { background: "hsl(var(--foreground) / 0.5)" }
                    }
                  >
                    {i === current && (
                      <div
                        className="h-full rounded-full bg-foreground/30"
                        style={{
                          width: `${progress}%`,
                          transition: progress === 0 ? "none" : `width ${SLIDE_DURATION}ms linear`,
                        }}
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Slide counter */}
            <div className="flex items-center gap-3 text-foreground/40">
              <span className="font-display font-bold text-2xl text-foreground">
                {String(current + 1).padStart(2, "0")}
              </span>
              <span className="w-8 h-px bg-foreground/20" />
              <span className="font-display text-sm">
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
