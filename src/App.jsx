import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SkillPage from "./pages/SkillPage";
import ProjectPage from "./pages/ProjectPage";
import ContactListPage from "./pages/ContactListPage";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/skills" element={<SkillPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/admin" element={<ContactListPage />} />
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
