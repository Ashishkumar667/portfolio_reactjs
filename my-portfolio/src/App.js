import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer'; 



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStack/>
      <Projects />
      <Resume />
      <Contact />
      <Footer /> 
    </>
  );
}

export default App;
