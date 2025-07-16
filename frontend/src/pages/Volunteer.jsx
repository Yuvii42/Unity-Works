import { useState } from "react";
import { FaHandsHelping, FaTree, FaRecycle, FaUsers, FaGlobe, FaLeaf } from "react-icons/fa";

const Volunteer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}, for volunteering! 🌱`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-green-50 text-gray-800">
      {/* Hero Section */}
      <header className="relative bg-green-800 text-white text-center py-20 bg-[url('https://source.unsplash.com/1600x900/?nature,volunteer')] bg-cover bg-center bg-opacity-60">
        <div className="absolute inset-0 bg-green-900 opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold">Make a Difference Today! 🌍</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Join our community of passionate volunteers working towards a sustainable future.
          </p>
          <a href="#signup" className="mt-6 inline-block bg-yellow-500 text-green-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition">
            Become a Volunteer
          </a>
        </div>
      </header>

      {/* Impact Stats */}
      <section className="container mx-auto px-6 py-12 text-center grid md:grid-cols-3 gap-6">
        <ImpactCard icon={<FaTree className="text-green-600 text-5xl" />} number="10,000+" text="Trees Planted" />
        <ImpactCard icon={<FaUsers className="text-blue-600 text-5xl" />} number="5,000+" text="Volunteers Joined" />
        <ImpactCard icon={<FaGlobe className="text-yellow-600 text-5xl" />} number="30+" text="Countries Impacted" />
      </section>

      {/* Volunteer Opportunities */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-8">How You Can Help</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <VolunteerCard
            icon={<FaTree className="text-green-700 text-5xl" />}
            title="Tree Plantation"
            description="Join our afforestation projects to combat climate change."
          />
          <VolunteerCard
            icon={<FaRecycle className="text-blue-700 text-5xl" />}
            title="Zero Waste Initiative"
            description="Promote recycling and reduce landfill waste in your city."
          />
          <VolunteerCard
            icon={<FaHandsHelping className="text-yellow-600 text-5xl" />}
            title="Community Support"
            description="Help with local projects to uplift underprivileged communities."
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-100 py-12">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-8">Volunteer Stories</h2>
        <div className="max-w-4xl mx-auto px-6">
          <Testimonial
            name="Emma Johnson"
            quote="Volunteering with this organization has been life-changing! The community, the mission, and the impact are truly inspiring."
          />
          <Testimonial
            name="Michael Lee"
            quote="I never imagined how fulfilling it would be to contribute to sustainability. Planting trees and helping communities feels amazing!"
          />
        </div>
      </section>

      {/* Volunteer Signup Form */}
      <section id="signup" className="container mx-auto px-6 py-12 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-6">Join Our Movement</h2>
        <p className="text-center text-lg text-gray-700 mb-6">
          Sign up today and be part of something bigger. Every small effort counts! 🌎
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Why do you want to volunteer?"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-300"
          >
            Sign Up Now
          </button>
        </form>
      </section>
    </div>
  );
};

// Impact Stats Card
const ImpactCard = ({ icon, number, text }) => (
  <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
    {icon}
    <h3 className="text-3xl font-bold mt-3">{number}</h3>
    <p className="text-gray-700">{text}</p>
  </div>
);

// Volunteer Opportunities Card
const VolunteerCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
    {icon}
    <h3 className="text-2xl font-bold mt-4">{title}</h3>
    <p className="text-gray-700 mt-2">{description}</p>
  </div>
);

// Testimonial Component
const Testimonial = ({ name, quote }) => (
  <div className="bg-white shadow-lg p-6 rounded-lg mb-6 text-center">
    <p className="italic text-gray-700">"{quote}"</p>
    <h4 className="text-green-800 font-bold mt-3">— {name}</h4>
  </div>
);

export default Volunteer;
