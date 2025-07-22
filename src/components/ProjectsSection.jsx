import { ExternalLinkIcon, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "LNHS SIS",
    description:
      "A Student Information System built using React and Express.js.",
    image: "/projects/LNHS-SIS.png",
    tags: ["React", "Express.js", "JavaScript", "MySQL", "CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/ochlzo/LNHS-SIS",
  },

  {
    id: 2,
    title: "Menu of Applications",
    description: "A school project made for PHP exercises.",
    image: "/projects/MENU-of-APPLICATIONS.png",
    tags: ["HTML", "CSS", "PHP"],
    demoUrl: "#",
    githubUrl: "https://github.com/ochlzo/Menu-of-Applications",
  },

  {
    id: 3,
    title: "Student Registration System",
    description:
      "A Simulation of a Student Registration System built using Jasva Swing.",
    image: "/projects/STUDENT-REGISTRATION-SYSTEM-JAVA-SWING.png",
    tags: ["Java", "Java Swing"],
    demoUrl: "#",
    githubUrl: "https://github.com/ochlzo/Student-Registration-System",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group bg-card rounded-lg overflow-hidden shadow xs card-hover flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-2 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="pt-2 text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto flex justify-between items-center">
                  <div className="flex space-x-3">
                    <span className="text-foreground/80">
                      <ExternalLinkIcon size={20} />
                    </span>
                    <span className="text-foreground/80">
                      <Github size={20} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/ochlzo"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
