// // // import ProjectCard from "../components/ProjectCard";

// // // const projects = [
// // //   { id: 1, title: "Community Garden", description: "Create a shared garden.", image: "https://via.placeholder.com/400", category: "Environmental" },
// // //   { id: 2, title: "Mural Painting", description: "Enhance public spaces with art.", image: "https://via.placeholder.com/400", category: "Artistic" },
// // // ];

// // // const Home = () => {
// // //   return (
// // //     <div className="container mx-auto mt-6">
// // //       <h1 className="text-3xl font-bold text-center mb-4">Community Projects</h1>
// // //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //         {projects.map(project => <ProjectCard key={project.id} project={project} />)}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Home;

// // import { motion } from "framer-motion";
// // import { FaLeaf, FaHandsHelping } from "react-icons/fa";

// // export default function Home() {
// //   return (
// //     <div className="min-h-screen bg-green-50 dark:bg-gray-900">
// //       {/* Hero Section */}
// //       <header className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-20 text-center">
// //         <motion.h1
// //           className="text-4xl font-bold"
// //           initial={{ opacity: 0, y: -10 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           Empower Your Community 🌍
// //         </motion.h1>
// //         <p className="mt-4 text-lg">
// //           Propose, fund, and collaborate on **eco-friendly** local projects.
// //         </p>
// //         <motion.button
// //           whileHover={{ scale: 1.05 }}
// //           className="mt-6 bg-white text-green-600 px-6 py-3 rounded-xl font-semibold shadow-md"
// //         >
// //           Get Started
// //         </motion.button>
// //       </header>

// //       {/* Featured Projects */}
// //       <section className="container mx-auto py-16">
// //         <h2 className="text-3xl font-bold text-green-800 dark:text-green-300 text-center">
// //           🌿 Featured Sustainable Projects
// //         </h2>
// //         <div className="grid md:grid-cols-3 gap-6 mt-8">
// //           {/* Eco-Themed Project Cards */}
// //           <ProjectCard title="Solar-Powered Community Center" progress={80} />
// //           <ProjectCard title="Local Organic Garden" progress={65} />
// //           <ProjectCard title="Rainwater Harvesting System" progress={90} />
// //         </div>
// //       </section>

// //       {/* Sustainability Tip */}
// //       <section className="bg-green-100 dark:bg-green-800 py-6 mt-12">
// //         <div className="container mx-auto flex items-center justify-center">
// //           <FaLeaf className="text-green-700 dark:text-green-300 text-2xl mr-3" />
// //           <p className="text-green-800 dark:text-green-200 font-semibold">
// //             🌎 **Eco Tip:** Switching to **solar energy** can reduce carbon footprints by **80%**!
// //           </p>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // // Reusable Project Card Component
// // const ProjectCard = ({ title, progress }) => (
// //   <motion.div
// //     className="bg-white dark:bg-green-900 p-6 rounded-lg shadow-lg border border-green-300"
// //     whileHover={{ scale: 1.05 }}
// //     transition={{ duration: 0.3 }}
// //   >
// //     <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">{title}</h3>
// //     <div className="mt-4">
// //       <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
// //         <div className="bg-green-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
// //       </div>
// //       <p className="text-green-700 dark:text-green-300 mt-2">{progress}% Funded</p>
// //     </div>
// //     {progress > 75 && (
// //       <div className="mt-3 flex items-center space-x-2 text-green-600 dark:text-green-300 font-medium">
// //         <FaHandsHelping className="text-xl" />
// //         <span>🌞 Solar-Powered Initiative</span>
// //       </div>
// //     )}
// //   </motion.div>
// // );

// import { motion } from "framer-motion";
// import { FaLeaf, FaHandsHelping, FaRecycle, FaUsers, FaSun } from "react-icons/fa";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-green-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//       {/* Hero Section */}
//       <header className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-20 text-center">
//         <motion.h1
//           className="text-4xl font-bold"
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Empower Your Community 🌍
//         </motion.h1>
//         <p className="mt-4 text-lg">Propose, fund, and collaborate on <strong>eco-friendly</strong> local projects.</p>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           className="mt-6 bg-white text-green-600 px-6 py-3 rounded-xl font-semibold shadow-md"
//         >
//           Get Started
//         </motion.button>
//       </header>

//       {/* Featured Projects */}
//       <section className="container mx-auto py-16">
//         <h2 className="text-3xl font-bold text-green-800 dark:text-green-300 text-center">
//           🌱 Featured Sustainable Projects
//         </h2>
//         <div className="grid md:grid-cols-3 gap-6 mt-8">
//           <ProjectCard title="Solar-Powered Community Center" progress={80} />
//           <ProjectCard title="Local Organic Garden" progress={65} />
//           <ProjectCard title="Rainwater Harvesting System" progress={90} />
//         </div>
//       </section>

//       {/* Community Impact */}
//       <section className="bg-green-100 dark:bg-green-800 py-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold text-green-800 dark:text-green-300">💚 Our Community Impact</h2>
//           <div className="grid md:grid-cols-3 gap-8 mt-8">
//             <ImpactCard icon={<FaUsers />} title="5,000+ Volunteers" description="Engaged in eco-conscious activities." />
//             <ImpactCard icon={<FaRecycle />} title="200+ Green Projects" description="Funded and implemented." />
//             <ImpactCard icon={<FaSun />} title="50+ Solar Initiatives" description="Promoting clean energy." />
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="container mx-auto py-16">
//         <h2 className="text-3xl font-bold text-green-800 dark:text-green-300 text-center">
//           🌍 How It Works
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8 mt-8">
//           <StepCard step="1" title="Submit Your Idea" description="Propose a project that helps the community." />
//           <StepCard step="2" title="Gather Support" description="Get backing from sponsors and the community." />
//           <StepCard step="3" title="Make It Happen" description="Fund and execute the project successfully." />
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="bg-green-200 dark:bg-green-700 py-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold text-green-800 dark:text-green-300">✨ What People Say</h2>
//           <div className="grid md:grid-cols-2 gap-8 mt-8">
//             <Testimonial
//               name="Sarah L."
//               feedback="This platform helped us build a solar-powered school! The community support was amazing."
//             />
//             <Testimonial
//               name="James R."
//               feedback="I love how easy it is to propose and fund sustainable projects. A true game-changer!"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 text-center">
//         <h2 className="text-3xl font-bold text-green-800 dark:text-green-300">🌱 Ready to Make an Impact?</h2>
//         <p className="mt-4 text-lg">Join us in creating a **greener, more sustainable** future.</p>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
//         >
//           Get Involved Now
//         </motion.button>
//       </section>
//     </div>
//   );
// }

// // Reusable Project Card Component
// const ProjectCard = ({ title, progress }) => (
//   <motion.div
//     className="bg-white dark:bg-green-900 p-6 rounded-lg shadow-lg border border-green-300"
//     whileHover={{ scale: 1.05 }}
//     transition={{ duration: 0.3 }}
//   >
//     <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">{title}</h3>
//     <div className="mt-4">
//       <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//         <div className="bg-green-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
//       </div>
//       <p className="text-green-700 dark:text-green-300 mt-2">{progress}% Funded</p>
//     </div>
//   </motion.div>
// );

// // Reusable Impact Card Component
// const ImpactCard = ({ icon, title, description }) => (
//   <motion.div
//     className="bg-white dark:bg-green-900 p-6 rounded-lg shadow-md flex flex-col items-center"
//     whileHover={{ scale: 1.05 }}
//   >
//     <div className="text-green-600 dark:text-green-300 text-3xl">{icon}</div>
//     <h3 className="mt-4 text-xl font-semibold">{title}</h3>
//     <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
//   </motion.div>
// );

// // Reusable Step Card Component
// const StepCard = ({ step, title, description }) => (
//   <motion.div
//     className="bg-white dark:bg-green-900 p-6 rounded-lg shadow-md text-center"
//     whileHover={{ scale: 1.05 }}
//   >
//     <h3 className="text-green-700 dark:text-green-300 text-3xl font-bold">{step}</h3>
//     <h4 className="mt-2 text-xl font-semibold">{title}</h4>
//     <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
//   </motion.div>
// );

// // Reusable Testimonial Component
// const Testimonial = ({ name, feedback }) => (
//   <motion.div
//     className="bg-white dark:bg-green-900 p-6 rounded-lg shadow-md text-center"
//     whileHover={{ scale: 1.05 }}
//   >
//     <p className="text-gray-600 dark:text-gray-300 italic">"{feedback}"</p>
//     <h4 className="mt-4 text-lg font-semibold text-green-700 dark:text-green-300">- {name}</h4>
//   </motion.div>
// );


import { motion } from "framer-motion";
import { FaSeedling, FaHandHoldingWater, FaSolarPanel, FaTree, FaRecycle, FaUsers, FaHandsHelping } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-300 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <header className="relative text-center py-32 bg-cover bg-center" style={{ backgroundImage: "url('/images/eco-bg.jpg')" }}>
        <motion.h1
          className="text-5xl font-extrabold text-green-900 dark:text-green-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🌱 Make the Earth Greener
        </motion.h1>
        <p className="mt-4 text-lg text-green-800 dark:text-green-400">Join hands to **restore nature** and build a sustainable future.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
        >
          Get Involved
        </motion.button>
      </header>

      {/* Featured Projects */}
      <section className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-green-800 dark:text-green-300 text-center">🌍 Eco Projects in Action</h2>
        <p className="text-center mt-2 text-lg text-green-700 dark:text-green-400">Transforming communities through **sustainable projects**.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <ProjectCard title="🌞 Solar-Powered Schools" progress={85} />
          <ProjectCard title="🌲 One Million Trees Initiative" progress={92} />
          <ProjectCard title="🚰 Clean Water Access Program" progress={78} />
        </div>
      </section>

      {/* Community Impact */}
      <section className="bg-green-200 dark:bg-green-800 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-900 dark:text-green-300">💚 Our Eco Impact</h2>
          <p className="mt-2 text-lg text-green-700 dark:text-green-400">See the difference we make **together**.</p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <ImpactCard icon={<FaUsers />} title="10,000+ Volunteers" description="Actively planting trees & reducing waste." />
            <ImpactCard icon={<FaRecycle />} title="500+ Green Projects" description="Implemented globally for sustainability." />
            <ImpactCard icon={<FaSolarPanel />} title="100+ Solar Initiatives" description="Providing clean energy for all." />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-green-900 dark:text-green-300 text-center">🌿 How You Can Help</h2>
        <p className="text-center mt-2 text-lg text-green-700 dark:text-green-400">Get involved in **3 simple steps**.</p>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <StepCard step="1" title="🌎 Choose a Project" description="Select a green project to support or volunteer for." />
          <StepCard step="2" title="💚 Contribute & Share" description="Donate, participate, or spread the word!" />
          <StepCard step="3" title="🌟 See the Impact" description="Track the project’s success and inspire others." />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-300 dark:bg-green-700 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-900 dark:text-green-300">🌟 Stories from Supporters</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Testimonial name="Emily R." feedback="I love how easy it is to support local eco projects!" />
            <Testimonial name="Daniel S." feedback="Planting trees and funding solar energy projects changed my perspective!" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-gradient-to-r from-green-400 to-green-600 dark:from-green-800 dark:to-green-700 text-white">
        <h2 className="text-4xl font-bold">🌱 Ready to Make a Difference?</h2>
        <p className="mt-4 text-lg">Every small step **helps restore** our planet.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold shadow-md"
        >
          Join Us Today
        </motion.button>
      </section>
    </div>
  );
}

// Reusable Project Card Component
const ProjectCard = ({ title, progress }) => (
  <motion.div
    className="bg-white dark:bg-green-900 p-6 rounded-lg shadow-lg border border-green-300"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">{title}</h3>
    <div className="mt-4">
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-green-700 dark:text-green-300 mt-2">{progress}% Funded</p>
    </div>
  </motion.div>
);

// Reusable Impact Card Component
const ImpactCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-white dark:bg-green-900 p-6 rounded-lg shadow-md flex flex-col items-center"
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-green-600 dark:text-green-300 text-3xl">{icon}</div>
    <h3 className="mt-4 text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

// Reusable Step Card Component
const StepCard = ({ step, title, description }) => (
  <motion.div className="bg-white dark:bg-green-900 p-6 rounded-lg shadow-md text-center" whileHover={{ scale: 1.05 }}>
    <h3 className="text-green-700 dark:text-green-300 text-3xl font-bold">{step}</h3>
    <h4 className="mt-2 text-xl font-semibold">{title}</h4>
    <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

// Reusable Testimonial Component
const Testimonial = ({ name, feedback }) => (
  <motion.div className="bg-white dark:bg-green-900 p-6 rounded-lg shadow-md text-center" whileHover={{ scale: 1.05 }}>
    <p className="text-gray-600 dark:text-gray-300 italic">"{feedback}"</p>
    <h4 className="mt-4 text-lg font-semibold text-green-700 dark:text-green-300">- {name}</h4>
  </motion.div>
);
