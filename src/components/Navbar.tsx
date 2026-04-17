import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Curriculum", href: "/curriculum" },
    { label: "Our Approach", href: "/about" },
    { label: "Franchise", href: "/franchise" },
  ];


  return (
    <>
      <motion.nav
        className={`fixed z-50 transition-all duration-500 ${
          scrolled
            ? "top-5 left-1/2 -translate-x-1/2 w-[88%] max-w-5xl rounded-2xl bg-[hsl(244_35%_10%/0.95)] backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/40"
            : "top-0 left-0 right-0 w-full"
        }`}
      >
        <div className={`relative flex items-center ${scrolled ? "px-6 py-3.5" : "px-8 md:px-16 pt-8 pb-6"}`}>
          {/* Logo */}
          <Link to="/" className="h-8 hover:opacity-80 transition-opacity flex-shrink-0">
            <img src={logo} alt="Big Binary Tech" className="h-full w-auto" />
          </Link>

          {/* Desktop nav links — centered */}
          <div className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-medium transition-all duration-200 relative group ${
                  link.href === location.pathname
                    ? "text-foreground font-semibold"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300 ${
                  link.href === location.pathname ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </div>

          {/* Enroll button — pinned right */}
          <div className="hidden md:block ml-auto flex-shrink-0">
            <Link
              to="/enroll"
              className="px-6 py-2.5 text-sm font-bold rounded-full bg-primary text-primary-foreground hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-md shadow-primary/30"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground ml-auto" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] bg-[hsl(244_35%_8%)] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/10">
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <img src={logo} alt="Big Binary Tech" className="h-8 w-auto" />
            </Link>
            <button onClick={() => setMobileOpen(false)} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-foreground">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex-1 flex flex-col px-6 py-8 gap-1 overflow-y-auto">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between w-full px-4 py-4 rounded-xl text-lg font-semibold transition-colors ${
                    link.href === location.pathname
                      ? "bg-primary/15 text-primary"
                      : "text-foreground/80 hover:bg-white/5 hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {link.href === location.pathname && (
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom — Enroll CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="px-6 pb-10 pt-4 border-t border-white/10"
          >
            <Link
              to="/enroll"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base uppercase tracking-wider hover:brightness-110 transition-all duration-300 shadow-lg shadow-primary/30"
            >
              Enroll Now — April 2026
            </Link>
            <p className="text-center text-xs text-muted-foreground mt-3">Limited seats · April 2026 cohort</p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
