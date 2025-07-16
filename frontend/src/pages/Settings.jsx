import { useState } from "react";
import { motion } from "framer-motion";
// import { FaFont } from "react-icons/fa"; // Correct import


import { 
    FiBell, FiMoon, FiShield, FiGlobe, FiSave, FiLock, 
    FiUser, FiTrash2 
  } from "react-icons/fi";
  

const SettingsPage = () => {
  const [notifications, setNotifications] = useState("Email Notifications");
  const [darkMode, setDarkMode] = useState(false);
  const [privacy, setPrivacy] = useState("Public");
  const [language, setLanguage] = useState("English");
  const [fontSize, setFontSize] = useState("Medium");

  return (
    <div className={`p-6 min-h-screen flex items-center justify-center bg-green-300 ${darkMode ? "bg-gray-900 text-gray-200" : "bg-green-100 text-gray-900"}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full max-w-3xl p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-green-400"} border`}
      >
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-6">⚙️ Settings</h2>

        {/* Notification Preferences */}
        <div className="mb-6">
          <label className="font-semibold mb-2 flex items-center">
            <FiBell className="mr-2 text-green-600" />
            Notification Preferences
          </label>
          <select 
            value={notifications} 
            onChange={(e) => setNotifications(e.target.value)}
            className="p-3 border rounded w-full bg-green-50"
          >
            <option>Email Notifications</option>
            <option>Push Notifications</option>
            <option>SMS Notifications</option>
          </select>
        </div>

        {/* Dark Mode Toggle */}
        <div className="mb-6 flex items-center justify-between p-3 border rounded bg-green-50">
          <span className="font-semibold flex items-center">
            <FiMoon className="mr-2 text-green-600" />
            Dark Mode
          </span>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`w-12 h-6 flex items-center ${darkMode ? "bg-green-700" : "bg-gray-300"} rounded-full p-1 transition-all`}
          >
            <div className={`w-4 h-4 bg-white rounded-full transform transition-transform ${darkMode ? "translate-x-6" : "translate-x-0"}`}></div>
          </button>
        </div>

        {/* Privacy Settings */}
        <div className="mb-6">
          <label className="font-semibold mb-2 flex items-center">
            <FiShield className="mr-2 text-green-600" />
            Privacy Settings
          </label>
          <select 
            value={privacy} 
            onChange={(e) => setPrivacy(e.target.value)}
            className="p-3 border rounded w-full bg-green-50"
          >
            <option>Public</option>
            <option>Private</option>
            <option>Only Friends</option>
          </select>
        </div>

        {/* Language Selection */}
        <div className="mb-6">
          <label className="font-semibold mb-2 flex items-center">
            <FiGlobe className="mr-2 text-green-600" />
            Language
          </label>
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
            className="p-3 border rounded w-full bg-green-50"
          >
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>Hindi</option>
          </select>
        </div>

        {/* Font Size Customization */}
        <div className="mb-6">
          <label className="font-semibold mb-2 flex items-center">
            {/* <FiFont className="mr-2 text-green-600" /> */}
            Font Size
          </label>
          <select 
            value={fontSize} 
            onChange={(e) => setFontSize(e.target.value)}
            className="p-3 border rounded w-full bg-green-50"
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        {/* Security Settings */}
        <div className="mb-6">
          <label className="font-semibold mb-2 flex items-center">
            <FiLock className="mr-2 text-green-600" />
            Security Settings
          </label>
          <button className="w-full text-left p-3 border rounded bg-green-50 hover:bg-green-200 transition">
            Change Password
          </button>
          <button className="w-full text-left p-3 border rounded bg-green-50 hover:bg-green-200 transition mt-2">
            Enable Two-Factor Authentication (2FA)
          </button>
        </div>

        {/* Account Management */}
        <div className="mb-6">
          <label className="font-semibold mb-2 flex items-center">
            <FiUser className="mr-2 text-green-600" />
            Account Management
          </label>
          <button className="w-full text-left p-3 border rounded bg-yellow-50 hover:bg-yellow-200 transition">
            Deactivate Account
          </button>
          <button className="w-full text-left p-3 border rounded bg-red-50 hover:bg-red-200 transition mt-2 flex items-center justify-center text-red-600">
            <FiTrash2 className="mr-2" />
            Delete Account
          </button>
        </div>

        {/* Save Settings Button */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-700 text-white px-6 py-3 rounded-lg flex items-center justify-center w-full"
          >
            <FiSave className="mr-2 text-lg" />
            Save Settings
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default SettingsPage;
