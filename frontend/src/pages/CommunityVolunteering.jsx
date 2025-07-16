import { FaLeaf, FaHandsHelping, FaUsers, FaTree, FaSeedling, FaGlobe, FaCalendarAlt, FaHeart } from "react-icons/fa";

const CommunityVolunteering = () => {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800">
      {/* Hero Section */}
      <header className="relative bg-green-700 text-white text-center py-20 bg-[url('https://source.unsplash.com/1600x900/?nature,volunteers')] bg-cover bg-center">
        <div className="absolute inset-0 bg-green-900 opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold">🌱 Community Volunteering</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Join hands to protect nature and support local communities. Together, we can make a greener world! 🌍
          </p>
          <a href="#volunteer-now" className="mt-6 inline-block bg-yellow-500 text-green-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition">
            Become a Volunteer 🌿
          </a>
        </div>
      </header>

      {/* Why Volunteer? */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-6">🌍 Why Volunteer?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard icon={<FaLeaf className="text-green-600 text-5xl" />} title="Protect Nature" description="Help plant trees, clean up parks, and promote sustainability." />
          <InfoCard icon={<FaHandsHelping className="text-yellow-600 text-5xl" />} title="Build Community" description="Support local projects and uplift underprivileged groups." />
          <InfoCard icon={<FaGlobe className="text-teal-600 text-5xl" />} title="Make an Impact" description="Every small action contributes to a better future." />
        </div>
      </section>

      {/* Ways to Volunteer */}
      <section className="bg-green-100 py-12 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-6">🌱 Ways to Volunteer</h2>
        <div className="grid md:grid-cols-3 gap-6 px-6">
          <ActionCard icon={<FaTree className="text-green-700 text-5xl" />} title="Tree Planting" description="Join reforestation projects and make our planet greener!" />
          <ActionCard icon={<FaSeedling className="text-yellow-600 text-5xl" />} title="Sustainable Farming" description="Help farmers with organic and eco-friendly farming methods." />
          <ActionCard icon={<FaHeart className="text-red-600 text-5xl" />} title="Community Support" description="Volunteer for shelters, food drives, and elderly care." />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-6">📅 Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <EventCard date="March 15, 2025" event="🌿 Park Clean-Up Drive" location="Riverdale Park" />
          <EventCard date="April 2, 2025" event="🍏 Organic Food Donation" location="Downtown Community Center" />
          <EventCard date="April 22, 2025" event="🌳 Earth Day Tree Planting" location="City Green Belt" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-200 py-12">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-6">💬 Volunteer Testimonials</h2>
        <div className="max-w-4xl mx-auto px-6">
          <Testimonial name="Sarah Greenfield" quote="Volunteering for tree planting gave me a deeper love for nature. It’s truly fulfilling!" />
          <Testimonial name="Michael Waters" quote="Seeing my community thrive because of small efforts makes every moment worthwhile!" />
        </div>
      </section>

      {/* Call to Action */}
      <section id="volunteer-now" className="bg-green-800 text-white text-center py-12">
        <h2 className="text-4xl font-bold">🌍 Be a Change Maker</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Join our passionate community of volunteers and help make the world a greener, kinder place.
        </p>
        <a href="#signup" className="mt-6 inline-block bg-yellow-500 text-green-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition">
          Sign Up Now 🌱
        </a>
      </section>
    </div>
  );
};

// Info Card Component
const InfoCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center border border-green-300">
    {icon}
    <h3 className="text-2xl font-bold mt-3 text-green-800">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

// Action Card Component
const ActionCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center transition transform hover:scale-105 duration-300 border border-green-400">
    {icon}
    <h3 className="text-2xl font-bold mt-3 text-green-800">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

// Event Card Component
const EventCard = ({ date, event, location }) => (
  <div className="bg-green-300 shadow-lg p-6 rounded-lg flex flex-col items-center">
    <h3 className="text-lg font-bold text-green-900">{date}</h3>
    <p className="text-gray-700 text-xl">{event}</p>
    <p className="text-gray-600">{location}</p>
  </div>
);

// Testimonial Component
const Testimonial = ({ name, quote }) => (
  <div className="bg-white shadow-lg p-6 rounded-lg mb-6 text-center border border-green-300">
    <p className="italic text-gray-700">"{quote}"</p>
    <h4 className="text-green-800 font-bold mt-3">— {name}</h4>
  </div>
);

export default CommunityVolunteering;
