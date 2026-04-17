import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border pt-16 pb-8">
    <div className="container mx-auto px-6 md:px-12">

      {/* Top section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

        {/* Logo + tagline */}
        <div className="flex flex-col gap-5">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img src={logo} alt="Big Binary Tech" className="h-20 w-auto" />
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Transforming ambitious beginners into industry-ready professionals through a four-phase learning pipeline.
          </p>
          <div className="flex gap-3">
            {/* Instagram */}
            <a href="https://www.instagram.com/bigbinarytrainings" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/share/18RHXpLKHC/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/big-binary-tech" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-5">Quick Links</p>
          <div className="flex flex-col gap-3">
            {[
              { label: "Courses", href: "/courses" },
              { label: "Curriculum", href: "/curriculum" },
              { label: "Our Approach", href: "/about" },
              { label: "Franchise", href: "/franchise" },
              { label: "Enroll Now", href: "/enroll" },
            ].map((link) => (
              <Link key={link.label} to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Address */}
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-5">Contact Us</p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Big Binary Tech, 444 Q Phase 2 DHA,<br />
                Lahore, Pakistan
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              <a href="tel:+923260188811" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                0326-0188811
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <a href="mailto:info@bbt.edu.pk" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                info@bbt.edu.pk
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Big Binary Tech. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          April 2026 Cohort · Limited Seats Available
        </p>
      </div>

    </div>
  </footer>
);

export default Footer;
