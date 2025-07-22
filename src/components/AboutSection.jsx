import { BookOpen, Server, Code, Palette } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-8 md:px-16 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {" "}
              Passionate BSIT Student and Aspiring Web/Software Developer
            </h3>

            <p className="text-muted-foreground">
              I'm a tech-driven 2nd-year BSIT student with a passion for solving
              real-world problems through technology. I enjoy the challenge of
              building things from the ground up—particularly focusing on
              backend logic and full-stack development using tools like React,
              JavaScript, and MySQL. Most of my experience comes from
              school-based team projects, where I've grown both as a developer
              and a collaborator. My goal is to become a full-stack developer,
              software engineer, or even pursue freelance and game development
              in the future.
            </p>

            <p className="text-muted-foreground">
              Outside of code, I find joy in sharing knowledge and helping
              others learn—something that strengthens my own skills. I'm a quick
              and curious learner, always eager to pick up new technologies and
              improve. In my downtime, you’ll find me jamming on the drums,
              exploring music, or expressing myself through small art projects.
              My creative energy and logical mindset help me approach
              development with both structure and innovations
            </p>

            <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get in Touch
              </a>

              <a
                href="/JohnBenedictCandelaria_Resume.pdf"
                target="_blank"
                className="px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                View full Resume
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Backend Development
                  </h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Building robust server-side logic and APIs using Express.js,
                    MySQL, and Express.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    CLI and Desktop Applications
                  </h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Developing functional command-line tools and Java-based GUI
                    applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Teaching & Mentoring
                  </h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Helping peers understand concepts by simplifying code and
                    sharing insights.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Creative Exploration
                  </h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Blending logic and creativity through music, art, and UI
                    design inspiration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
