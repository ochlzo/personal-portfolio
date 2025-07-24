// src/pages/ProjectDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { ExternalLinkIcon, Github } from "lucide-react";
import { useEffect } from "react";
import { useNavigationType } from "react-router-dom";
import { Link } from "react-router-dom";

export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const navigationType = useNavigationType();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  const project = projects.find((p) => p.id === parseInt(id));
  const projectIndex = projects.findIndex((p) => p.id === parseInt(id));
  const nextProject = projects[projectIndex + 1];
  const prevProject = projects[projectIndex - 1];
  const isFirstProject = project && project.id === 1;
  const isLastProject = project && projectIndex === projects.length - 1;
  const technologies = project ? project.tags.join(", ") : "";

  if (!project) {
    return (
      <div className="p-6">
        Project not found.
        <div className="flex gap-4 justify-center mt-6">
          <button className="text-sm bg-primary text-white px-4 py-2 rounded opacity-50 cursor-not-allowed pointer-events-none">Next Project</button>
          <button className="text-sm bg-primary text-white px-4 py-2 rounded opacity-50 cursor-not-allowed pointer-events-none">Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-15 relative">
      <div className="px-5 md:px-0 lg:px-0 xl:px-40 2xl:px-50">
        <img src={project.image} alt={project.title} className="rounded-4xl" />
      </div>

      <div className="px-5 md:px-0 lg:px-0 xl:px-40 2xl:px-50">
        <div className="bg-card rounded-lg shadow xs card-hover sm:max-w-sm max-w-lg my-6 py-2">
          <p className="text-4xl md:text-6xl text-foreground font-bold transition-colors duration-300 tracking-tight py-3">{project.title}</p>
        </div>
        <div className="py-0 flex flex-col md:flex-row md:items-start gap-0 md:gap-10 lg:gap-20 xl:gap-40 2xl:gap-50 border-t border-foreground/40">
          {/* Table for headers and values */}
          <table className="min-w-0 w-full md:w-auto mb-6 md:mb-0 text-left table-fixed">
            <tbody>
              <tr className="align-top">
                <th className="text-primary font-bold tracking-widest text-lg pr-10 align-top whitespace-nowrap tracking-tight py-3">TECHNOLOGIES</th>
                <td className="text-lg md:text-xl text-muted-foreground break-words whitespace-normal max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl py-3">
                  {technologies}
                </td>
              </tr>
              <tr className="align-top">
                <th className="text-primary font-bold tracking-widest text-lg align-top whitespace-nowrap tracking-tight py-3">YEAR</th>
                <td className="text-lg md:text-xl text-muted-foreground break-words whitespace-normal max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl py-3">
                  {project.year || '—'}
                </td>
              </tr>
              <tr className="align-top">
                <th className="text-primary font-bold tracking-widest text-lg align-top whitespace-nowrap tracking-tight py-3">TEAM</th>
                <td className="text-lg md:text-xl text-muted-foreground break-words whitespace-normal max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl py-3">
                  {project.team || '—'}
                </td>
              </tr>
            </tbody>
          </table>
          {/* Description: below table on mobile, right of table on desktop */}
          <div className="flex flex-col md:items-start md:gap-4">
            <p className="text-left text-lg md:text-xl text-muted-foreground max-w-full mx-auto py-3 tracking-tight">
              {project.details}
            </p>
            <div className="mt-auto flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80">
                      <ExternalLinkIcon size={20} />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
          </div>
          
          
        </div>
      </div>

      <div className="px-5 md:px-0 lg:px-0 xl:px-40 2xl:px-50">
        {project.screenshots.map((src, index) => (
          <div className="py-6">
            <img
              key={index}
              src={src}
              alt={`Screenshot ${index + 1}`}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      <div className="flex gap-4 justify-center mt-8">
        {/* Next Project Button */}
        {nextProject ? (
          <Link
            to={`/projects/${nextProject.id}`}
            className="text-sm bg-primary text-white px-4 py-2 rounded hover:bg-primary/80"
          >
            Next Project
          </Link>
        ) : (
          <button
            className="text-sm bg-primary text-white px-4 py-2 rounded opacity-50 cursor-not-allowed pointer-events-none"
            disabled
          >
            Next Project
          </button>
        )}

        {/* Back Button */}
        {isFirstProject ? (
          <Link
            to="/"
            state={{ scrollTo: "projects" }}
            className="text-sm bg-primary text-white px-4 py-2 rounded hover:bg-primary/80"
          >
            Back to Projects
          </Link>
        ) : prevProject ? (
          <Link
            to={`/projects/${prevProject.id}`}
            className="text-sm bg-primary text-white px-4 py-2 rounded hover:bg-primary/80"
          >
            Back
          </Link>
        ) : (
          <button
            className="text-sm bg-primary text-white px-4 py-2 rounded opacity-50 cursor-not-allowed pointer-events-none"
            disabled
          >
            Back
          </button>
        )}
      </div>
    </div>
  );
};
