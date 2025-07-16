import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-gray-600 text-sm">{project.description.substring(0, 100)}...</p>
        <div className="flex justify-between mt-3">
          <Link to={`/projects/${project.id}`} className="text-blue-600 hover:underline">View Details</Link>
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">{project.category}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
