import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiXCircle, FiSearch } from "react-icons/fi";

const ManageUsers = () => {
  const initialUsers = [
    { id: 1, name: "John Doe", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", role: "User", status: "Pending" },
    { id: 3, name: "Alex Johnson", role: "Moderator", status: "Active" },
    { id: 4, name: "Emma Brown", role: "User", status: "Inactive" },
    { id: 5, name: "Michael Green", role: "Admin", status: "Active" },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  // Filter users based on search and role
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (roleFilter === "All" || user.role === roleFilter)
  );

  // Handle approval
  const handleApprove = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, status: "Active" } : user
      )
    );
  };

  // Handle removal
  const handleRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-6 bg-green-300 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-4xl bg-green-900 bg-opacity-90 shadow-lg rounded-2xl p-6 border border-green-600 text-green-100"
      >
        <h2 className="text-3xl font-extrabold text-center text-green-200 mb-6">
          🌿 Manage Community Members
        </h2>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="relative w-full md:w-2/3">
            <FiSearch className="absolute left-3 top-3 text-green-300" />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 bg-green-800 text-green-100 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="w-full md:w-1/3 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 bg-green-800 text-green-100 shadow-sm"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option value="All">All Roles</option>
            <option value="Admin">Admins</option>
            <option value="User">Users</option>
            <option value="Moderator">Moderators</option>
          </select>
        </div>

        {/* User Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-green-700 text-green-100">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b bg-green-800 text-green-200 hover:bg-green-700 transition-all"
                  >
                    <td className="p-3 font-medium">{user.name}</td>
                    <td className="p-3">{user.role}</td>
                    <td
                      className={`p-3 font-semibold ${
                        user.status === "Active"
                          ? "text-green-300"
                          : "text-yellow-400"
                      }`}
                    >
                      {user.status}
                    </td>
                    <td className="p-3 flex gap-2">
                      {user.status !== "Active" && (
                        <button
                          className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition-all"
                          onClick={() => handleApprove(user.id)}
                        >
                          <FiCheckCircle className="mr-2" /> Approve
                        </button>
                      )}
                      <button
                        className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition-all"
                        onClick={() => handleRemove(user.id)}
                      >
                        <FiXCircle className="mr-2" /> Remove
                      </button>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="p-4 text-center text-green-300 italic"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default ManageUsers;
