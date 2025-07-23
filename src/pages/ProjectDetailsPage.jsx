// src/pages/ProjectDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";

export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === parseInt(id));

  const technologies = project.tags.join(", ");

  if (!project) {
    return <div className="p-6">Project not found.</div>;
  }

  return (
    <div className="py-15 relative">
      <div className="px-5 md:px-0 lg:px-50">
        <img src={project.image} alt={project.title} className="rounded-lg" />
      </div>

      <div className="px-5 md:px-0 lg:px-50 py-6">
        <div className="border-b border-white/40 pb-6">
          <div className="flex flex-col md:flex-row md:items-start md:gap-8">
            {/* Table for headers and values */}
            <table className="min-w-max text-left md:w-auto md:mb-0 mb-6">
              <tbody>
                <tr>
                  <th className="text-primary font-bold tracking-widest text-lg pr-8 align-top">TECHNOLOGIES</th>
                  <td className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto">
                    {technologies}
                  </td>
                </tr>
                <tr>
                  <th className="text-primary font-bold tracking-widest text-lg pr-8 align-top">YEAR</th>
                  <td className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto">{project.year || '—'}</td>
                </tr>
              </tbody>
            </table>
            {/* Description: below table on mobile, right of table on desktop */}
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto">
              {project.details}
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-0 lg:px-50">
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

      <div className="flex gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-primary text-white px-4 py-2 rounded"
        >
          View Code
        </a>
        {project.demoUrl !== "#" && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-secondary text-foreground px-4 py-2 rounded"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};
