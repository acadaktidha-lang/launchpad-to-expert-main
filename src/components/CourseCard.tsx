import { useState } from "react";
import type { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

const badgeColors = {
  amber: "bg-primary/15 border-primary/30 text-primary",
  green: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
  purple: "bg-purple-500/15 border-purple-500/30 text-purple-300",
  blue: "bg-blue-500/15 border-blue-500/30 text-blue-300",
};

const CourseCard = ({ course }: CourseCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-8 md:p-10 hover:bg-white/[0.02] transition-colors"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8">
          {/* Left Content */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="text-xs font-mono text-primary/80 uppercase tracking-widest">
                {course.track} · {course.type}
              </span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="text-xs font-mono text-primary/80 uppercase tracking-widest">
                {course.weeks} Weeks
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold uppercase leading-tight mb-4 text-white tracking-tight">
              {course.name}
            </h3>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              {course.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${badgeColors[badge.type]}`}
                >
                  {badge.text}
                </span>
              ))}
            </div>

            {/* Market Gap */}
            <p className="text-sm md:text-base text-foreground/90 font-semibold mb-3 leading-relaxed drop-shadow-sm">
              {course.marketGap}
            </p>

            {/* Description */}
            <p className="text-sm md:text-base text-foreground/60 leading-relaxed max-w-2xl">
              {course.description}
            </p>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-start md:items-end gap-4 pt-1">
            <div className="text-xs font-mono text-foreground/50 md:text-right uppercase tracking-widest">
              {course.duration}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="text-xs font-bold text-foreground/60 uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2 border border-border hover:border-primary/40 px-4 py-2 rounded-full"
            >
              {isExpanded ? "Close ↑" : "Expand Curriculum ↓"}
            </button>
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-border grid grid-cols-1 md:grid-cols-2">
          {/* Modules Column */}
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-border">
            <div className="mb-6 pb-4 border-b border-border">
              <h4 className="text-xs font-mono text-foreground/50 uppercase tracking-widest">
                {course.modules.length} Modules · Week-by-Week
              </h4>
            </div>

            <div className="space-y-6">
              {course.modules.map((module) => (
                <div key={module.number} className="pb-6 border-b border-border/60 last:border-0">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center">
                        <span className="text-xs font-mono font-bold text-primary">
                          {String(module.number).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow min-w-0">
                      <h5 className="text-sm font-semibold text-foreground mb-1">{module.name}</h5>
                      <p className="text-xs text-foreground/60 leading-relaxed mb-2">
                        {module.description}
                      </p>
                      <span className="text-xs font-mono text-foreground/40">{module.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Pipeline Column */}
          <div className="p-8 md:p-10">
            {/* Skills */}
            <div className="mb-8">
              <div className="mb-4 pb-3 border-b border-border">
                <h4 className="text-xs font-mono text-foreground/50 uppercase tracking-widest">
                  Tools & Technologies
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-white/5 border border-white/10 text-foreground/80 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Pipeline */}
            <div className="mb-8">
              <div className="mb-4 pb-3 border-b border-border">
                <h4 className="text-xs font-mono text-foreground/50 uppercase tracking-widest">
                  Career Pipeline
                </h4>
              </div>
              <div className="space-y-3">
                {course.careerPipeline.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    {idx > 0 && <span className="text-foreground/30 text-xs">→</span>}
                    <div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: step.color }}
                    />
                    <div className="flex-grow">
                      <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">
                        {step.label}
                      </span>
                      {step.earning && (
                        <span className="text-xs text-primary ml-2 font-medium">· {step.earning}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Outcome */}
            <div className="p-4 bg-primary/10 border border-primary/25 rounded-lg">
              <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
                Career Outcome
              </div>
              <p className="text-sm text-foreground leading-relaxed">{course.careerOutcome}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-8 md:px-10 py-5 bg-white/[0.02] border-t border-border">
        <span className="text-xs text-foreground/50 font-mono">
          April 2026 · {course.seats} seats · {course.phone}
        </span>
        <a
          href="/enroll"
          className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground font-bold text-xs uppercase tracking-widest rounded-lg hover:brightness-110 transition-all duration-200"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
