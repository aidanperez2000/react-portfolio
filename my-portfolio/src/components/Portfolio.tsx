import { useState } from 'react';
import '../styles/styles.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Hobbies from './Hobbies';
import Projects from './Projects';
import Contact from './Contact';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-gray-900 min-h-screen"}>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <Sidebar />
      <Hero darkMode={darkMode} />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Hobbies />
      <Projects />
      <Contact />
    </div>
  );
}
