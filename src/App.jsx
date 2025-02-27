import { Outlet, useLocation, Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";

import Homepage from "./pages/Homepage.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/ContactMe.jsx";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname} // Ensures Framer Motion detects route changes
          initial={{ filter: "blur(20px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}

          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Routes>
            <Route path="/" element={<App />} />
            <Route index={true} path="/" element={<Homepage />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact-me" element={<Contact />} />
          </Routes>


        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
