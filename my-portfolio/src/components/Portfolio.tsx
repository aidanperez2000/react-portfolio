import { useState } from 'react';
import * as RadixButton from "@radix-ui/react-slot";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import '../styles/styles.css';
import profileImage from "../assets/Profile.jpg";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-gray-900 min-h-screen"}>
      {/* Navbar */}
      <nav className="p-5 flex justify-between items-center shadow-md fixed top-0 left-0 w-full bg-white dark:bg-gray-900 z-50">
        <h1 className="text-2xl font-bold">Aidan Perez</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
          <li><a href="#education" className="hover:text-blue-500">Education</a></li>
          <li><a href="#hobbies" className="hover:text-blue-500">Hobbies</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
        <RadixButton.Slot>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full">
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-black" />}
          </button>
        </RadixButton.Slot>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center p-10">
        <motion.h1 className="text-5xl font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          Hi, I'm Aidan!
        </motion.h1>
        <p className="text-xl mt-4">Software Engineer | AI & HCI Enthusiast</p>
        <motion.a
          href="#about"
          className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-800 transition dark:text-white dark:bg-blue-600 dark:hover:bg-blue-00"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}>
          About Me
        </motion.a>
      </section>

      {/* About Me */}
      <section id="about" className="p-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold">About Me</h2>
        <div className="mt-6 flex flex-col items-center">
          <img src={profileImage} alt="Aidan Perez" className="w-40 h-40 rounded-full shadow-md" />
          <p className="mt-4 text-lg">
            Passionate about Human-Computer Interaction, AI, and making technology accessible.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="p-10">
        <h2 className="text-3xl font-bold text-center">Skills</h2>
        <div className="mt-4 text-center">
          <p>C#, React, Python, AWS, .NET, SQL, JavaScript, Machine Learning, Cloud Computing</p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="p-10">
        <h2 className="text-3xl font-bold text-center">Work Experience</h2>
        <div className="mt-6 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Software Engineer - AudiencePoint</h3>
            <p className="text-gray-700 dark:text-gray-300">Developed scalable solutions using React, .NET, and AWS.</p>
          </div>
          <div className="mt-4 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Software Developer - Sawtooth Ventures</h3>
            <p className="text-gray-700 dark:text-gray-300">Built a full-stack ranch management tool.</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="p-10 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center">Education</h2>
        <div className="mt-6 text-center">
          <p>Gordon College - B.S. in Computer Science, Minor in Data Science</p>
          <p>Dean’s List, Presidential Honors, Rowing Team</p>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="p-10">
        <h2 className="text-3xl font-bold text-center">Interests & Hobbies</h2>
        <div className="mt-6 text-center">
          <p>Music (Clarinet, Jazz Band), Rowing, Game Development, AI Research, Cooking</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-10 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-semibold">JobIn</h3>
            <p>AI-powered job search insights platform.</p>
          </motion.div>
          <motion.div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-semibold">Ranch Manager</h3>
            <p>Full-stack farm management tool.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4">Let's connect! Reach out to me at <a href="mailto:aidan@perezwitt.com" className="text-blue-500">aidan@perezwitt.com</a></p>
      </section>
    </div>
  );
}
