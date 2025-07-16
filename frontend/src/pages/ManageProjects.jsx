import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiClock, FiTrendingUp } from "react-icons/fi";

const ManageProjects = () => {
  const [projects] = useState([
    { id: 1, name: "Tree Plantation Drive", description: "Planting 5,000 trees in urban areas.", progress: 80, status: "Active" },
    { id: 2, name: "Solar Panel Installation", description: "Installing solar panels for 100 homes.", progress: 50, status: "Active" },
    { id: 3, name: "Recycling Awareness Campaign", description: "Educating communities on waste management.", progress: 100, status: "Completed" },
    { id: 4, name: "Community Garden Project", description: "Creating urban community gardens.", progress: 30, status: "Upcoming" },
    { id: 5, name: "Eco-Friendly Public Transport", description: "Introducing electric buses in cities.", progress: 70, status: "Active" },
  ]);

  // Status badge colors
  const statusColors = {
    Active: "bg-green-500",
    Completed: "bg-blue-500",
    Upcoming: "bg-yellow-500",
  };

  // Icon mapping
  const statusIcons = {
    Active: <FiTrendingUp />,
    Completed: <FiCheckCircle />,
    Upcoming: <FiClock />,
  };

  return (
    <div className="p-6 bg-green-300 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-green-900 bg-opacity-90 shadow-lg rounded-2xl p-6 border border-green-600 text-green-100"
      >
        <h2 className="text-3xl font-extrabold text-center text-green-200 mb-6">
          🌍 Community Sustainability Projects
        </h2>

        <ul className="space-y-4">
          {projects.map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-lg bg-green-800 shadow-md border border-green-700 hover:bg-green-700 transition-all"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <span className={`px-3 py-1 rounded-full text-white ${statusColors[project.status]} flex items-center gap-1`}>
                  {statusIcons[project.status]} {project.status}
                </span>
              </div>
              <p className="text-green-300 mt-2">{project.description}</p>

              {/* Progress Bar */}
              <div className="w-full bg-green-700 rounded-full h-3 mt-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${project.progress}%` }}
                  transition={{ duration: 1 }}
                  className="h-3 rounded-full bg-green-400"
                ></motion.div>
              </div>
              <p className="text-green-200 text-right mt-1">{project.progress}% Completed</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default ManageProjects;
