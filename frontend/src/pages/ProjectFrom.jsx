import { useState } from "react";
import { FaLeaf } from "react-icons/fa";

const ProjectForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [fundingGoal, setFundingGoal] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !category || !fundingGoal) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    alert(`Project Created: ${title}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        {/* Header */}
        <h1 className="text-3xl font-bold text-green-700 flex items-center gap-2">
          <FaLeaf className="text-green-500" /> Submit a Project
        </h1>
        <p className="text-gray-600 mt-2">
          Help your community by submitting a project for sustainability.
        </p>

        {/* Error Message */}
        {error && <p className="text-red-500 mt-4">{error}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Project Title */}
          <div>
            <label className="block text-gray-700 font-semibold">Project Title</label>
            <input
              type="text"
              placeholder="Enter project title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Project Description */}
          <div>
            <label className="block text-gray-700 font-semibold">Project Description</label>
            <textarea
              placeholder="Describe your project"
              className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none focus:ring-2 focus:ring-green-500 focus:outline-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Category Selection */}
          <div>
            <label className="block text-gray-700 font-semibold">Project Category</label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              <option value="environment">Environment</option>
              <option value="education">Education</option>
              <option value="health">Health & Wellness</option>
              <option value="sustainability">Sustainability</option>
            </select>
          </div>

          {/* Funding Goal */}
          <div>
            <label className="block text-gray-700 font-semibold">Funding Goal ($)</label>
            <input
              type="number"
              placeholder="Enter funding goal"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              value={fundingGoal}
              onChange={(e) => setFundingGoal(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
          >
            Submit Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
