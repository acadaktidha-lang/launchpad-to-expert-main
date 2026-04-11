import { useState } from "react";
import { motion } from "framer-motion";
import { coursesData } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type FilterType = "all" | "ai" | "build" | "money" | "creative" | "fast";

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filters: { id: FilterType; label: string }[] = [
    { id: "all", label: "All Tracks" },
    { id: "ai", label: "AI & Cloud" },
    { id: "build", label: "Software Dev" },
    { id: "money", label: "Highest Earning" },
    { id: "creative", label: "Design & Creative" },
    { id: "fast", label: "Fastest to Income" }
  ];

  const filteredCourses =
    activeFilter === "all"
      ? coursesData
      : coursesData.filter((course) => course.filters.includes(activeFilter));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 flex items-center gap-2"
          >
            <div className="h-0.5 w-5 bg-primary"></div>
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              7 Courses · April 2026 Cohort
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-900 uppercase leading-tight mb-6"
          >
            Built for the <span className="text-gradient-gold">Gap</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl font-light leading-relaxed"
          >
            Every course at BBT was selected because qualified applicants are genuinely scarce in
            that role. We didn't build what's popular — we built what the market is missing. Seven
            tracks. All market-research-backed. All connected to a real career pipeline.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-20 md:top-20 z-40 bg-background/95 backdrop-blur border-b border-border px-6 md:px-12 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Filter:
            </span>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all ${
                    activeFilter === filter.id
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-muted-foreground hover:border-primary hover:text-foreground"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-900 uppercase mb-4">
              Want a Deeper Dive?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              See the complete week-by-week curriculum for every track, detailed learning objectives, and career outcomes.
            </p>
            <Link
              to="/curriculum"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-display font-semibold text-sm hover:brightness-110 transition-all duration-300"
            >
              View Full Curriculum
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Courses;
