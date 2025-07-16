// import { useState } from "react";
// import { FiUsers, FiBriefcase, FiDollarSign, FiSettings, FiMenu } from "react-icons/fi";

// const AdminDashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
//       {/* Sidebar */}
//       <aside className={`bg-white dark:bg-gray-800 w-64 p-6 transition-all duration-300 ${isSidebarOpen ? "block" : "hidden"} md:block`}>
//         <h1 className="text-2xl font-bold text-gray-700 dark:text-white mb-6">Admin Dashboard</h1>
//         <nav>
//           <ul>
//             <li className="mb-4 flex items-center text-gray-700 dark:text-white">
//               <FiUsers className="mr-2" /> Manage Users
//             </li>
//             <li className="mb-4 flex items-center text-gray-700 dark:text-white">
//               <FiBriefcase className="mr-2" /> Manage Projects
//             </li>
//             <li className="mb-4 flex items-center text-gray-700 dark:text-white">
//               <FiDollarSign className="mr-2" /> Funding Overview
//             </li>
//             <li className="flex items-center text-gray-700 dark:text-white">
//               <FiSettings className="mr-2" /> Settings
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {/* Top Bar */}
//         <div className="flex justify-between items-center mb-6">
//           <button
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//             className="text-gray-700 dark:text-white md:hidden"
//           >
//             <FiMenu size={24} />
//           </button>
//           <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Dashboard Overview</h2>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
//             <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Total Users</h3>
//             <p className="text-2xl font-bold text-gray-900 dark:text-gray-300">1,245</p>
//           </div>
//           <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
//             <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Active Projects</h3>
//             <p className="text-2xl font-bold text-gray-900 dark:text-gray-300">34</p>
//           </div>
//           <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
//             <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Total Funds Raised</h3>
//             <p className="text-2xl font-bold text-green-600">$50,000</p>
//           </div>
//         </div>

//         {/* Recent Projects */}
//         <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
//           <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Project Submissions</h3>
//           <table className="w-full text-left">
//             <thead>
//               <tr className="border-b border-gray-300 dark:border-gray-700">
//                 <th className="p-2">Project</th>
//                 <th className="p-2">Status</th>
//                 <th className="p-2">Funding</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b border-gray-200 dark:border-gray-700">
//                 <td className="p-2">Community Garden</td>
//                 <td className="p-2 text-green-500">Approved</td>
//                 <td className="p-2">$2,500</td>
//               </tr>
//               <tr className="border-b border-gray-200 dark:border-gray-700">
//                 <td className="p-2">Neighborhood Cleanup</td>
//                 <td className="p-2 text-yellow-500">Pending</td>
//                 <td className="p-2">$1,200</td>
//               </tr>
//               <tr>
//                 <td className="p-2">Mural Art Project</td>
//                 <td className="p-2 text-red-500">Rejected</td>
//                 <td className="p-2">$0</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import { useState } from "react";
import { FiUsers, FiBriefcase, FiDollarSign, FiSettings, FiMenu, FiSun, FiMoon } from "react-icons/fi";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import ManageUsers from "./ManageUser";
import ManageProjects from "./ManageProjects";
import FundingOverview from "./FundingOverview";
import Settings from "./Settings";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedPage, setSelectedPage] = useState("Dashboard");
  const [darkMode, setDarkMode] = useState(false);

  const chartData = [
    { name: "Jan", users: 400, projects: 240 },
    { name: "Feb", users: 600, projects: 300 },
    { name: "Mar", users: 800, projects: 450 },
    { name: "Apr", users: 1200, projects: 500 },
    { name: "May", users: 1500, projects: 600 },
  ];

  const renderContent = () => {
    switch (selectedPage) {
      case "ManageUsers":
        return <ManageUsers />;
      case "ManageProjects":
        return <ManageProjects />;
      case "FundingOverview":
        return <FundingOverview />;
      case "Settings":
        return <Settings />;
      default:
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Dashboard Overview</h2>
            
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-green-100 dark:bg-green-800 p-6 rounded-lg shadow-md flex flex-col items-center">
                <FiUsers size={40} className="text-green-600 dark:text-green-300" />
                <h3 className="text-lg font-semibold text-gray-700 dark:text-white mt-3">Total Users</h3>
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-300">1,245</p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-800 p-6 rounded-lg shadow-md flex flex-col items-center">
                <FiBriefcase size={40} className="text-blue-600 dark:text-blue-300" />
                <h3 className="text-lg font-semibold text-gray-700 dark:text-white mt-3">Active Projects</h3>
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-300">34</p>
              </div>
              <div className="bg-yellow-100 dark:bg-yellow-800 p-6 rounded-lg shadow-md flex flex-col items-center">
                <FiDollarSign size={40} className="text-yellow-600 dark:text-yellow-300" />
                <h3 className="text-lg font-semibold text-gray-700 dark:text-white mt-3">Total Funds Raised</h3>
                <p className="text-3xl font-bold text-green-600">$50,000</p>
              </div>
            </div>

            {/* Chart */}
            <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">User & Project Growth</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <XAxis dataKey="name" stroke="#8884d8" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="users" fill="#4caf50" barSize={40} />
                  <Bar dataKey="projects" fill="#2196f3" barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
        {/* Sidebar */}
        <aside className={`bg-white dark:bg-gray-800 w-72 p-6 transition-all duration-300 ${isSidebarOpen ? "block" : "hidden"} md:block`}>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-700 dark:text-white">Admin Dashboard</h1>
            <button onClick={() => setDarkMode(!darkMode)} className="text-gray-700 dark:text-white">
              {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
          </div>
          <nav>
            <ul>
              <li className="mb-4 flex items-center text-gray-700 dark:text-white cursor-pointer hover:bg-green-200 dark:hover:bg-green-700 p-2 rounded-lg"
                onClick={() => setSelectedPage("ManageUsers")}>
                <FiUsers className="mr-2" /> Manage Users
              </li>
              <li className="mb-4 flex items-center text-gray-700 dark:text-white cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-700 p-2 rounded-lg"
                onClick={() => setSelectedPage("ManageProjects")}>
                <FiBriefcase className="mr-2" /> Manage Projects
              </li>
              <li className="mb-4 flex items-center text-gray-700 dark:text-white cursor-pointer hover:bg-yellow-200 dark:hover:bg-yellow-700 p-2 rounded-lg"
                onClick={() => setSelectedPage("FundingOverview")}>
                <FiDollarSign className="mr-2" /> Funding Overview
              </li>
              <li className="flex items-center text-gray-700 dark:text-white cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-lg"
                onClick={() => setSelectedPage("Settings")}>
                <FiSettings className="mr-2" /> Settings
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-6">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-700 dark:text-white md:hidden">
              <FiMenu size={24} />
            </button>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{selectedPage}</h2>
          </div>

          {/* Render Selected Page */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
