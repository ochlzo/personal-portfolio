import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const MobileMenuOverlay = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div
      className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center md:hidden",
        "transition-all duration-300",
        isMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-4 right-4 text-foreground"
        aria-label="Close menu"
      >
        <X size={32} />
      </button>

      <div className="flex flex-col space-y-8">
        {navItems.map((item, key) => (
          <a
            key={key}
            className="text-foreground/80 hover:text-primary text-xl"
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};
