import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-6 bg-background/80 backdrop-blur-md shadow-xs" : "py-8"
      )}
    >
      <div className="container flex items-center">
        <div className="absolute top-1/2 left-[1%] -translate-y-1/2">
          <a
            className="text-xl font-bold text-primary flex-items ml-5"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground"> Cholo </span>{" "}
              Candelaria
            </span>
          </a>
        </div>

        {/* desktop navbar */}
        <div className="hidden md:flex space-x-8 absolute top-1/2 right-[10%] -translate-y-1/2">
          {navItems.map((item, key) => (
            <a
              key={key}
              className="text-foreground/80 hover:text-primary transiyion-colors duration-300"
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile navbar */}
        <div className="absolute top-1/2 right-[1%] -translate-y-1/2">
          <ThemeToggle />
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 absolute top-1/2 right-[8%] -translate-y-1/2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                className="text-foreground/80 hover:text-primary transiyion-colors duration-300"
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
