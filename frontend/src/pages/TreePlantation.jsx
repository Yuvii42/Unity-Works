import { FaTree, FaLeaf, FaSeedling, FaGlobe, FaHandsHelping, FaRecycle } from "react-icons/fa";

const TreePlantation = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="relative bg-green-800 text-white text-center py-20 bg-[url('https://source.unsplash.com/1600x900/?forest,tree-plantation')] bg-cover bg-center">
        <div className="absolute inset-0 bg-green-900 opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold">Plant Trees, Save the Future 🌱</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Join us in making the world greener by planting trees and restoring nature for future generations.
          </p>
          <a href="#get-involved" className="mt-6 inline-block bg-yellow-500 text-green-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition">
            Get Involved
          </a>
        </div>
      </header>

      {/* Why Tree Plantation? */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-6">Why Tree Plantation Matters?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard icon={<FaTree className="text-green-600 text-5xl" />} title="Cleaner Air" description="Trees absorb carbon dioxide and release oxygen, making our air cleaner and healthier." />
          <InfoCard icon={<FaGlobe className="text-blue-600 text-5xl" />} title="Climate Change Control" description="Trees help combat global warming by reducing greenhouse gases." />
          <InfoCard icon={<FaRecycle className="text-yellow-600 text-5xl" />} title="Sustainable Future" description="A greener planet means a better future for generations to come." />
        </div>
      </section>

      {/* Steps to Get Involved */}
      <section id="get-involved" className="bg-green-100 py-12 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-6">How You Can Help</h2>
        <div className="grid md:grid-cols-3 gap-6 px-6">
          <ActionCard icon={<FaHandsHelping className="text-orange-600 text-5xl" />} title="Become a Volunteer" description="Join our team and help plant trees in your community." />
          <ActionCard icon={<FaLeaf className="text-green-700 text-5xl" />} title="Donate for Trees" description="Support our mission by funding tree-planting initiatives." />
          <ActionCard icon={<FaSeedling className="text-teal-600 text-5xl" />} title="Plant a Tree" description="Take the initiative to plant a tree in your own backyard!" />
        </div>
      </section>

      {/* Success Statistics */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-6">Our Impact</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <StatsCard number="50,000+" text="Trees Planted" />
          <StatsCard number="10,000+" text="Volunteers Engaged" />
          <StatsCard number="100+" text="Communities Benefited" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-6">What People Say</h2>
        <div className="max-w-4xl mx-auto px-6">
          <Testimonial name="Emily Johnson" quote="Planting trees with this organization was a life-changing experience. It feels amazing to give back to nature!" />
          <Testimonial name="Mark Robinson" quote="Seeing the positive impact of our efforts keeps me motivated to plant more trees!" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-800 text-white text-center py-12">
        <h2 className="text-4xl font-bold">Join the Green Movement 🌍</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Be part of the solution. Together, we can make a difference!
        </p>
        <a href="#get-involved" className="mt-6 inline-block bg-yellow-500 text-green-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition">
          Get Started
        </a>
      </section>
    </div>
  );
};

// Information Card
const InfoCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
    {icon}
    <h3 className="text-2xl font-bold mt-3">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

// Action Card
const ActionCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center transition transform hover:scale-105 duration-300">
    {icon}
    <h3 className="text-2xl font-bold mt-3">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

// Statistics Card
const StatsCard = ({ number, text }) => (
  <div className="bg-green-200 shadow-lg p-6 rounded-lg flex flex-col items-center">
    <h3 className="text-3xl font-bold text-green-900">{number}</h3>
    <p className="text-gray-700">{text}</p>
  </div>
);

// Testimonial Component
const Testimonial = ({ name, quote }) => (
  <div className="bg-white shadow-lg p-6 rounded-lg mb-6 text-center">
    <p className="italic text-gray-700">"{quote}"</p>
    <h4 className="text-green-800 font-bold mt-3">— {name}</h4>
  </div>
);

export default TreePlantation;
