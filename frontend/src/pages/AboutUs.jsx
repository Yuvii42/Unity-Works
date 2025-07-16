import { FaLeaf, FaHandsHelping, FaGlobeAmericas } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-green-100 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-green-900">About Us</h1>
        <p className="mt-4 text-gray-700 text-lg">
          Empowering communities through sustainable initiatives, volunteer programs, 
          and environmental conservation projects.
        </p>
      </div>

      {/* Mission & Values Section */}
      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <FaLeaf className="text-green-500 text-5xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Sustainability</h3>
          <p className="text-gray-600 mt-2">
            We promote green initiatives like tree plantations and waste reduction programs.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <FaHandsHelping className="text-green-500 text-5xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Community</h3>
          <p className="text-gray-600 mt-2">
            Bringing people together to create impactful changes through volunteering.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <FaGlobeAmericas className="text-green-500 text-5xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Global Impact</h3>
          <p className="text-gray-600 mt-2">
            Our projects contribute to a healthier planet and sustainable future for all.
          </p>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-green-900">Join Our Movement</h2>
        <p className="mt-4 text-gray-700 text-lg">
          Be a part of the change. Support our projects or become a volunteer today!
        </p>
        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition">
          Get Involved
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
 