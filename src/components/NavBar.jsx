// components/Navbar.jsx
import { useEffect, useState } from "react";
import { X, Menu, ArrowLeft } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenuOverlay } from "./MobileMenuOverlay";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate, Link } from "react-router-dom";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScrolled
            ? "py-6 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-8"
        )}
      >
        <div className="container flex items-center">
          {/* Left: Logo or Back Arrow */}
          <div className="absolute top-1/2 left-[0] -translate-y-1/2">
            {location.pathname !== "/" ? (
              <Link
                to="/"
                state={{ scrollTo: "projects" }}
                className="flex items-center gap-2 text-primary font-bold text-xl ml-5 hover:text-primary/80 transition-colors"
                aria-label="Back to Projects"
              >
                <ArrowLeft className="h-6 w-6" />
                <span className="hidden sm:inline">Back to Projects</span>
              </Link>
            ) : (
              <a
                className="text-xl font-bold text-primary flex-items ml-5"
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("hero");
                }}
              >
                <span className="relative z-10">
                  <span className="text-glow text-foreground">Cholo</span>{" "}
                  Candelaria
                </span>
              </a>
            )}
          </div>

          {/* Desktop nav items */}
          <div className="hidden md:flex space-x-8 absolute top-1/2 right-[10%] -translate-y-1/2">
            {navItems.map((item, key) => (
              <a
                key={key}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href.replace("#", ""));
                }}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                href={item.href}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile: Theme Toggle */}
          <div className="absolute top-1/2 right-[1%] -translate-y-1/2">
            <ThemeToggle />
          </div>

          {/* Mobile: Hamburger */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-foreground z-50 absolute top-1/2 right-[8%] -translate-y-1/2"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileMenuOverlay
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </>
  );
};
