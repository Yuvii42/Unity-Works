import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
// import ProjectForm from "./pages/ProjectFrom";
import ProjectDetails from "./pages/ProjectDetails";
import AdminDashboard from "./pages/AdminDashboard";
import Footer from "./components/Footer";
import ProjectForm from "./pages/ProjectFrom";
import AboutUs from "./pages/AboutUs";
import OurProjects from "./pages/OurProjects";
import Volunteer from "./pages/Volunteer";
import Donate from "./pages/Donate";
import TreePlantation from "./pages/TreePlantation";
import ZeroWaste from "./pages/ZeroWaste";
import CommunityVolunteering from "./pages/CommunityVolunteering";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<ProjectForm />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/ourprojects" element={<OurProjects />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/tree-plantation" element={<TreePlantation />} />
        <Route path="/zero-waste" element={<ZeroWaste />} />
        <Route path="/community-volunteering" element={<CommunityVolunteering />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
