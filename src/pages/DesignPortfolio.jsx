import DesignNavbar from "../sections/design/DesignNavbar.jsx";
import DesignHero from "../sections/design/DesignHero.jsx";
import DesignProjects from "../sections/design/DesignProjects.jsx";
import VideoShowcase from "../sections/design/VideoShowcase.jsx";
import DesignContact from "../sections/design/DesignContact.jsx";
import Footer from "../sections/Footer.jsx";
import { Analytics } from "@vercel/analytics/react";
import CursorTrail from "../components/CursorTrail";

const DesignPortfolio = () => {
  return (
    <>
      <CursorTrail />
      <main className="max-w-7xl mx-auto">
        <DesignNavbar />
        <DesignHero />
        <DesignProjects />
        <VideoShowcase />
        <DesignContact />
        <Footer />
        <Analytics />
      </main>
    </>
  );
};

export default DesignPortfolio;

