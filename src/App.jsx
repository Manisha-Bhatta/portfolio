import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Navbar } from "./components/Navbar.jsx"; // import Navbar
import { SkillsSection } from "./components/SkillsSection.jsx";
function App() {
  return (
    <BrowserRouter>
      {/* Navbar will appear on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
