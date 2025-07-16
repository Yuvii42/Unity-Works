import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaTree, FaHandsHelping, FaRecycle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold">🌱 Community Projects</h3>
            <p className="mt-2 text-gray-300">
            Empowering communities to build a greener, more sustainable future. Together, we can create lasting change and make a real impact! 💚✨
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold">🔗 Quick Links</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-green-300 transition">About Us</a></li>
              <li><a href="/ourprojects" className="hover:text-green-300 transition">Our Projects</a></li>
              <li><a href="/volunteer" className="hover:text-green-300 transition">Volunteer</a></li>
              <li><a href="/donate" className="hover:text-green-300 transition">Donate</a></li>
              

            </ul>
          </div>

          {/* Sustainability Efforts */}
          <div>
            <h3 className="text-xl font-bold">🌱 Sustainability Efforts</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li><a href="/tree-plantation" className="hover:text-green-300 transition flex items-center gap-2"> <FaTree/> Tree Plantation</a></li>
              <li><a href="/zero-waste" className="hover:text-green-300 transition flex items-center gap-2"> <FaRecycle/>Zero Waste Initiative</a></li>
              <li><a href="/community-volunteering" className="hover:text-green-300 transition flex items-center gap-2"> <FaHandsHelping/>Community Volunteering</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-bold">📬 Stay Updated</h3>
            <p className="mt-2 text-gray-300">Subscribe to our newsletter for the latest updates.</p>
            <form className="mt-3 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-full rounded-l bg-white text-green-900 focus:outline-none"
              />
              <button className="bg-green-600 px-4 py-2 rounded-r hover:bg-green-500 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-between items-center mt-10 border-t border-green-700 pt-6">
          <p className="text-gray-300 text-sm">&copy; {new Date().getFullYear()} Community Projects. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="hover:text-green-300 transition text-xl"><FaFacebookF /></a>
            <a href="https://x.com/" className="hover:text-green-300 transition text-xl"><FaTwitter /></a>
            <a href="https://www.instagram.com/" className="hover:text-green-300 transition text-xl"><FaInstagram /></a>
            <a href="https://www.linkedin.com/" className="hover:text-green-300 transition text-xl"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
