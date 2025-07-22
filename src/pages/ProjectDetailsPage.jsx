import { useParams } from "react-router-dom";

export const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Project Details for ID: {id}</h1>
      {/* Fetch and render project data here */}
    </div>
  );
};
