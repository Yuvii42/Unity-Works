import { FaRecycle, FaLeaf, FaTrashAlt, FaShoppingBag, FaUsers, FaHandsHelping } from "react-icons/fa";

const ZeroWaste = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="relative bg-green-800 text-white text-center py-20 bg-[url('https://source.unsplash.com/1600x900/?recycling,zero-waste')] bg-cover bg-center">
        <div className="absolute inset-0 bg-green-900 opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold">Zero Waste Initiative ♻️</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Join us in reducing waste, protecting the environment, and creating a sustainable future.
          </p>
          <a href="#get-involved" className="mt-6 inline-block bg-yellow-500 text-green-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition">
            Get Involved
          </a>
        </div>
      </header>

      {/* Why Zero Waste? */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-6">Why Zero Waste?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard icon={<FaRecycle className="text-blue-600 text-5xl" />} title="Saves Resources" description="Recycling and reducing waste conserve natural resources and energy." />
          <InfoCard icon={<FaLeaf className="text-green-600 text-5xl" />} title="Protects Nature" description="Less waste means less pollution, cleaner air, and healthier ecosystems." />
          <InfoCard icon={<FaTrashAlt className="text-red-600 text-5xl" />} title="Reduces Landfills" description="Zero waste reduces the need for landfills and prevents toxic waste buildup." />
        </div>
      </section>

      {/* How to Reduce Waste */}
      <section className="bg-green-100 py-12 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-6">How to Reduce Waste?</h2>
        <div className="grid md:grid-cols-3 gap-6 px-6">
          <ActionCard icon={<FaRecycle className="text-green-700 text-5xl" />} title="Recycle & Compost" description="Sort recyclables, compost food waste, and minimize plastic use." />
          <ActionCard icon={<FaShoppingBag className="text-orange-600 text-5xl" />} title="Sustainable Shopping" description="Buy reusable products, avoid single-use plastics, and support ethical brands." />
          <ActionCard icon={<FaHandsHelping className="text-teal-600 text-5xl" />} title="Community Cleanup" description="Participate in waste reduction programs and local clean-up drives." />
        </div>
      </section>

      {/* Success Stories */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-6">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <StatsCard number="10,000+" text="Plastic Bottles Recycled" />
          <StatsCard number="500+" text="Local Businesses Supporting Zero Waste" />
          <StatsCard number="50+" text="Zero-Waste Communities Built" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-6">What People Say</h2>
        <div className="max-w-4xl mx-auto px-6">
          <Testimonial name="Anna Martinez" quote="Switching to a zero-waste lifestyle has changed my perspective on sustainability. Every little effort counts!" />
          <Testimonial name="James Walker" quote="Being part of a zero-waste community made me realize the power of collective action. We can all make a difference!" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-800 text-white text-center py-12">
        <h2 className="text-4xl font-bold">Join the Zero Waste Movement 🌎</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Take action today! Reduce waste, recycle, and inspire others to build a greener planet.
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

export default ZeroWaste;
