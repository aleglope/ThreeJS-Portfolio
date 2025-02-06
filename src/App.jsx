import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import WorkExperience from "./sections/Experience.jsx";
import Pong from "./sections/Pong.jsx";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Contact />
      <WorkExperience />
      <Pong />
      <Footer />
      <Analytics />
    </main>
  );
};
export default App;
