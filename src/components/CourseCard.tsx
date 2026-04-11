import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

const badgeColors = {
  amber: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  green: "bg-green-500/10 border-green-500/20 text-green-400",
  purple: "bg-purple-500/10 border-purple-500/20 text-purple-400",
  blue: "bg-blue-500/10 border-blue-500/20 text-blue-400"
};

const CourseCard = ({ course }: CourseCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-border/50 transition-colors">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-8 md:p-10 hover:bg-card/50 transition-colors"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8">
          {/* Left Content */}
          <div>
            <div className="mb-3">
              <span className="text-xs font-mono text-accent uppercase tracking-widest">
                {course.track} · {course.type} · {course.weeks} Weeks
              </span>
            </div>

            <h3 className="text-4xl md:text-5xl font-display font-900 uppercase leading-tight mb-4 text-foreground">
              {course.name}
            </h3>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {course.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${badgeColors[badge.type]}`}
                >
                  {badge.text}
                </span>
              ))}
            </div>

            {/* Market Gap */}
            <p className="text-base text-accent font-semibold mb-3">{course.marketGap}</p>

            {/* Description */}
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
              {course.description}
            </p>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-end gap-4 pt-2">
            <div>
              <div className="text-xs font-mono text-muted-foreground text-right uppercase tracking-widest mb-2">
                {course.duration}
              </div>
              <div className="text-3xl md:text-4xl font-display font-900 text-right">
                <span className="text-accent">PKR</span>
                <br />
                <span className="text-accent">
                  {(course.fee.min / 1000).toFixed(0)}–{(course.fee.max / 1000).toFixed(0)}K
                </span>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="text-sm font-semibold text-accent uppercase tracking-wider hover:text-accent/80 transition-colors flex items-center gap-2 mt-2"
            >
              {isExpanded ? "Close ↑" : "Expand Curriculum ↓"}
              {/* <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} /> */}
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
              <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                {course.modules.length} Modules · Week-by-Week
              </h4>
            </div>

            <div className="space-y-6">
              {course.modules.map((module) => (
                <div key={module.number} className="pb-6 border-b border-border last:border-0">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                        <span className="text-xs font-mono font-semibold text-amber-400">
                          {String(module.number).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow min-w-0">
                      <h5 className="text-sm font-semibold text-foreground mb-1">{module.name}</h5>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                        {module.description}
                      </p>
                      <span className="text-xs font-mono text-muted-foreground">{module.duration}</span>
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
                <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  Tools & Technologies
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Pipeline */}
            <div className="mb-8">
              <div className="mb-4 pb-3 border-b border-border">
                <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  Career Pipeline
                </h4>
              </div>

              <div className="space-y-3">
                {course.careerPipeline.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: step.color }}
                    ></div>
                    {idx > 0 && <span className="text-xs text-border mr-1">→</span>}
                    <div className="flex-grow">
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                        {step.label}
                      </span>
                      {step.earning && (
                        <span className="text-xs text-muted-foreground ml-1">· {step.earning}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Outcome */}
            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">
                Career Outcome
              </div>
              <p className="text-sm text-foreground leading-relaxed">{course.careerOutcome}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-8 md:px-10 py-5 bg-background/50 border-t border-border">
        <span className="text-xs text-muted-foreground">
          April 2026 · {course.seats} seats · PKR {(course.fee.min / 1000).toFixed(0)}–{(course.fee.max / 1000).toFixed(0)}K · {course.phone}
        </span>
        <a
          href="#apply"
          className="inline-block px-4 py-2 bg-accent text-background font-semibold text-xs uppercase tracking-wider rounded hover:opacity-90 transition-opacity"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
