import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <Link to="/" className="h-6 hover:opacity-80 transition-opacity">
        <img src={logo} alt="Big Binary Tech" className="h-full w-auto" />
      </Link>
      <p className="text-sm text-muted-foreground font-body">
        © {new Date().getFullYear()} Big Binary Tech. All rights reserved.
      </p>
      <div className="flex gap-6">
        {["Twitter", "LinkedIn", "Instagram"].map((s) => (
          <a key={s} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
            {s}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
