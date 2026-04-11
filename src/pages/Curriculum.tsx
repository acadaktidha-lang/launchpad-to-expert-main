import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { curriculumData } from "@/data/curriculum";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Curriculum = () => {
  const [activeTrack, setActiveTrack] = useState<string>("ai");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-track]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          const trackId = section.getAttribute("data-track");
          if (trackId) setActiveTrack(trackId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 flex items-center gap-2"
          >
            <div className="h-0.5 w-5 bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              Week-by-Week · All Tracks
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-900 uppercase leading-tight mb-6"
          >
            The Full <br />
            <span className="text-gradient-gold">Curriculum</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl"
          >
            Every module, every week, every outcome — clearly structured.
          </motion.p>
        </div>
      </section>

      {/* Navigation */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur border-b border-border px-6 md:px-12 py-4">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2">
          {curriculumData.map((track) => (
            <a
              key={track.id}
              href={`#${track.id}`}
              className={`px-3 py-2 text-xs font-mono uppercase rounded ${
                activeTrack === track.id
                  ? "bg-primary/20 border border-primary/40 text-primary"
                  : "bg-card border border-border text-muted-foreground"
              }`}
            >
              {track.trackNumber} {track.title.split("+")[0]}
            </a>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="py-20 px-6 md:px-12">
        {curriculumData.map((track) => (
          <section
            key={track.id}
            id={track.id}
            data-track={track.id}
            className="max-w-6xl mx-auto mb-32"
          >
            {/* Header */}
            <div className="mb-12">
              <p className="text-xs font-mono text-primary uppercase">
                Track {track.trackNumber} · {track.type}
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {track.title}
              </h2>

              <div className="flex flex-wrap gap-2">
                {track.meta.map((item, i) => (
                  <span key={i} className="text-xs border px-3 py-1 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Weeks */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {track.weeks.map((week, i) => (
                <div
                  key={i}
                  className={`p-5 border rounded ${
                    week.isCapstone ? "border-primary bg-primary/10" : ""
                  }`}
                >
                  <p className="text-xs text-primary mb-2">
                    {week.weekRange} {week.isCapstone && "• CAPSTONE"}
                  </p>

                  <h4 className="font-semibold mb-2">{week.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {week.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {week.skills.map((s, j) => (
                      <span key={j} className="text-xs border px-2 py-1 rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Outcomes */}
            <div className="grid md:grid-cols-3 gap-4 border-t pt-10">
              {track.outcomes.map((o, i) => (
                <div key={i} className="p-5 border rounded">
                  <p className="text-xs text-primary mb-2">{o.label}</p>
                  <p>{o.value}</p>
                  {o.highlight && (
                    <p className="text-primary font-semibold">
                      {o.highlight}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Curriculum;