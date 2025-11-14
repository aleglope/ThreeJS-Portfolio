import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import DevPortfolio from "./pages/DevPortfolio.jsx";
import DesignPortfolio from "./pages/DesignPortfolio.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dev" element={<DevPortfolio />} />
        <Route path="/design" element={<DesignPortfolio />} />
        <Route path="/design/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
