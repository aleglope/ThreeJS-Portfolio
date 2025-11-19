import DesignNavbar from "../sections/design/DesignNavbar.jsx";
import DesignHero from "../sections/design/DesignHero.jsx";
import DesignProjects from "../sections/design/DesignProjects.jsx";
import VideoShowcase from "../sections/design/VideoShowcase.jsx";
import Contact from "../sections/Contact.jsx";
import Footer from "../sections/Footer.jsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import CursorTrail from "../components/CursorTrail";
import { projectTypes } from "../constants/design.js";

const DesignPortfolio = () => {
  return (
    <>
      <CursorTrail />
      <main className="max-w-7xl mx-auto">
        <DesignNavbar />
        <DesignHero />
        <DesignProjects />
        <VideoShowcase />
        <Contact 
          title="Let's Create Together"
          description="Looking for creative design or video production? Let's bring your vision to life with stunning visuals and compelling storytelling."
          showProjectType={true}
          projectTypes={projectTypes}
          buttonClassName="field-btn bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
        />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </main>
    </>
  );
};

export default DesignPortfolio;

