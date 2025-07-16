// const Profile = () => {
//     return (
//       <div className="container mx-auto p-6">
//         <h1 className="text-2xl font-bold mb-4">My Profile</h1>
//         <p className="text-gray-600">Welcome to your profile page. Here, you can manage your projects and contributions.</p>
//       </div>
//     );
//   };
  
//   export default Profile;
  

import { useState } from "react";
import { FiEdit, FiLogOut } from "react-icons/fi";
import { FaLeaf, FaSeedling } from "react-icons/fa";

const Profile = () => {
  const [user] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Eco-Warrior",
    avatar: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?t=st=1741228730~exp=1741232330~hmac=fb71dd6ac7636dcf5667134be3867ad5b6a9bbbf5ab96b613e34c0fc2e73eecf&w=900", // Replace with actual profile image
    sustainabilityPoints: 120, // Points earned for eco-friendly contributions
    projects: [
      { name: "Community Tree Planting", status: "Completed" },
      { name: "Solar-Powered Streetlights", status: "Ongoing" },
      { name: "Recycling Awareness Campaign", status: "Pending Approval" },
    ],
  });

  return (
    <div className="max-w-4xl mx-auto p-6 bg-green-50 dark:bg-gray-900 rounded-lg shadow-lg pt-8">
      {/* Profile Header */}
      <div className="flex items-center space-x-6">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-20 h-20 rounded-full shadow-md border-4 border-green-400"
        />
        <div>
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-300">{user.name}</h2>
          <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
          <span className="inline-block mt-1 text-sm bg-green-200 text-green-800 px-3 py-1 rounded-md">
            {user.role}
          </span>
        </div>
      </div>

      {/* Sustainability Badge */}
      <div className="mt-4 flex items-center space-x-2 bg-green-100 dark:bg-green-800 p-3 rounded-lg shadow-md">
        <FaLeaf className="text-green-600 dark:text-green-300 text-xl" />
        <p className="text-green-700 dark:text-green-200 font-semibold">
          {user.sustainabilityPoints} Eco-Points Earned 🌱
        </p>
      </div>

      {/* Profile Actions */}
      <div className="mt-6 flex space-x-4">
        <button className="flex items-center px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg shadow">
          <FiEdit className="mr-2" /> Edit Profile
        </button>
        <button className="flex items-center px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg shadow">
          <FiLogOut className="mr-2" /> Logout
        </button>
      </div>

      {/* User Projects */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-green-700 dark:text-green-300">My Eco Projects</h3>
        <div className="mt-4 space-y-4">
          {user.projects.map((project, index) => (
            <div
              key={index}
              className="flex justify-between p-4 bg-green-200 dark:bg-green-700 rounded-lg shadow-md"
            >
              <span className="text-green-800 dark:text-white font-medium">{project.name}</span>
              <span
                className={`px-2 py-1 text-sm rounded-lg ${
                  project.status === "Completed"
                    ? "bg-green-500 text-white"
                    : project.status === "Ongoing"
                    ? "bg-yellow-400 text-gray-900"
                    : "bg-red-400 text-white"
                }`}
              >
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Sustainability Tip */}
      <div className="mt-8 bg-green-100 dark:bg-green-800 p-4 rounded-lg shadow-md flex items-center">
        <FaSeedling className="text-green-600 dark:text-green-300 text-xl mr-3" />
        <p className="text-green-700 dark:text-green-200">
          🌍 Did you know? Planting just **one tree** can absorb **48 lbs of CO2 per year**!
        </p>
      </div>
    </div>
  );
};

export default Profile;
