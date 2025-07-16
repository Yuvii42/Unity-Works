import { useState } from "react";
import { FaHandHoldingHeart, FaLeaf, FaGlobe, FaDollarSign, FaDonate } from "react-icons/fa";

const Donate = () => {
  const [amount, setAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleDonation = (value) => {
    setSelectedAmount(value);
    setAmount(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your generous donation of $${amount}! 💖`);
    setAmount("");
    setSelectedAmount(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="relative bg-green-800 text-white text-center py-20 bg-[url('https://source.unsplash.com/1600x900/?donation,charity')] bg-cover bg-center bg-opacity-60">
        <div className="absolute inset-0 bg-green-900 opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold">Every Contribution Makes a Difference 💖</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Your donation helps us create a greener and more sustainable future. Make an impact today!
          </p>
          <a href="#donate" className="mt-6 inline-block bg-yellow-500 text-green-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition">
            Donate Now
          </a>
        </div>
      </header>

      {/* Impact Stats */}
      <section className="container mx-auto px-6 py-12 text-center grid md:grid-cols-3 gap-6">
        <ImpactCard icon={<FaDollarSign className="text-green-600 text-5xl" />} number="$500,000+" text="Funds Raised" />
        <ImpactCard icon={<FaLeaf className="text-blue-600 text-5xl" />} number="100+" text="Eco Projects Supported" />
        <ImpactCard icon={<FaGlobe className="text-yellow-600 text-5xl" />} number="50+" text="Countries Impacted" />
      </section>

      {/* Donation Options */}
      <section id="donate" className="container mx-auto px-6 py-12 bg-white shadow-lg rounded-lg text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-8">Choose Your Donation Amount</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[10, 25, 50].map((value) => (
            <DonationCard key={value} amount={value} selectedAmount={selectedAmount} onClick={() => handleDonation(value)} />
          ))}
        </div>
        <p className="text-lg font-semibold text-gray-700">Or enter a custom amount:</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
          <input
            type="number"
            min="1"
            placeholder="Enter amount ($)"
            className="w-full p-3 border border-gray-300 rounded-lg text-center text-lg"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold mt-4 hover:bg-green-800 transition duration-300 flex justify-center items-center"
          >
            <FaDonate className="mr-2" /> Donate Now
          </button>
        </form>
      </section>

      {/* Testimonials */}
      <section className="bg-green-100 py-12">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-8">What Our Donors Say</h2>
        <div className="max-w-4xl mx-auto px-6">
          <Testimonial
            name="Sarah Thompson"
            quote="I'm proud to support this initiative. Knowing my donation is making a real impact is priceless!"
          />
          <Testimonial
            name="James Carter"
            quote="Every dollar counts! The transparency and results this organization provides are truly remarkable."
          />
        </div>
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

// Donation Card Component
const DonationCard = ({ amount, selectedAmount, onClick }) => (
  <button
    className={`p-6 bg-white shadow-lg rounded-lg text-2xl font-bold border ${
      selectedAmount === amount ? "border-green-500 bg-green-100" : "border-gray-300"
    } transition transform hover:scale-105 duration-300`}
    onClick={onClick}
  >
    ${amount}
  </button>
);

// Testimonial Component
const Testimonial = ({ name, quote }) => (
  <div className="bg-white shadow-lg p-6 rounded-lg mb-6 text-center">
    <p className="italic text-gray-700">"{quote}"</p>
    <h4 className="text-green-800 font-bold mt-3">— {name}</h4>
  </div>
);

export default Donate;
