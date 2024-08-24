import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Details from "./components/Details";
import Languages from "./components/Languages";

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 ">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        </div>
      </div>     
      <div className="container mx-auto px-8">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Technologies />
              <Languages />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
