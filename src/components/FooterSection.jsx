import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} personal-portfolio-psi-vert.vercel.app, All rights
        reserved.
      </p>

      <a
        href="#top"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        onClick={handleScrollTop}
      >
        <ArrowUp />
      </a>
    </footer>
  );
};
