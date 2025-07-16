import { FaTree, FaRecycle, FaHandsHelping, FaWater, FaSolarPanel } from "react-icons/fa";

const projects = [
  {
    title: "Tree Plantation",
    description: "Join us in planting trees to restore nature and fight climate change.",
    icon: <FaTree className="text-green-600 text-5xl mx-auto" />,
  },
  {
    title: "Zero Waste Initiative",
    description: "Reducing waste through recycling, composting, and sustainable practices.",
    icon: <FaRecycle className="text-green-600 text-5xl mx-auto" />,
  },
  {
    title: "Community Volunteering",
    description: "Empowering communities through social service and environmental work.",
    icon: <FaHandsHelping className="text-green-600 text-5xl mx-auto" />,
  },
  {
    title: "Clean Water Access",
    description: "Providing safe and clean drinking water to underserved communities.",
    icon: <FaWater className="text-green-600 text-5xl mx-auto" />,
  },
  {
    title: "Renewable Energy",
    description: "Promoting solar and wind energy for a cleaner, greener future.",
    icon: <FaSolarPanel className="text-green-600 text-5xl mx-auto" />,
  },
];

const OurProjects = () => {
  return (
    <div className="bg-green-100 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-green-900">Our Projects</h1>
        <p className="mt-4 text-gray-700 text-lg">
          We work towards sustainability, environmental conservation, and community welfare. Explore our key projects.
        </p>
      </div>

      {/* Projects Grid Section */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 text-center"
          >
            {project.icon}
            <h3 className="text-xl font-semibold mt-4 text-green-800">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-green-900">Get Involved</h2>
        <p className="mt-4 text-gray-700 text-lg">
          Want to contribute? Join us in making a difference for our planet and communities!
        </p>
        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default OurProjects;
