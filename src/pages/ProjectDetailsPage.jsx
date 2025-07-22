// src/pages/ProjectDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";

export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div className="p-6">Project not found.</div>;
  }

  return (
    <div className="py-15 px-60 md:px-30 sm:px-10 relative">
      <div>
        <img src={project.image} alt={project.title} className="rounded-lg" />
      </div>

      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-muted-foreground mb-6">{project.details}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {project.screenshots.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Screenshot ${index + 1}`}
            className="rounded-md border"
          />
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
