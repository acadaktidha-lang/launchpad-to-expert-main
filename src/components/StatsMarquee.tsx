import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Students Transformed" },
  { value: 95, suffix: "%", label: "Placement Rate" },
  { value: 200, suffix: "+", label: "Industry Partners" },
  { value: 4, suffix: "", label: "Phase System" },
  { value: 50, suffix: "+", label: "Expert Mentors" },
  { value: 12, suffix: "", label: "Countries" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl font-black text-gradient-gold">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsMarquee = () => {
  return (
    <section className="relative py-24 border-y border-border overflow-hidden">
      {/* Scrolling marquee text bg */}
      <div className="absolute inset-0 flex items-center overflow-hidden opacity-[0.03] pointer-events-none">
        <div className="animate-marquee whitespace-nowrap font-display text-[12rem] font-black">
          STUDENT • INTERNEE • SHADOW • EXPERT • STUDENT • INTERNEE • SHADOW • EXPERT •&nbsp;
          STUDENT • INTERNEE • SHADOW • EXPERT • STUDENT • INTERNEE • SHADOW • EXPERT •&nbsp;
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center space-y-2"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground font-body uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsMarquee;
