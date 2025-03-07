import { useState } from 'react';
import * as RadixButton from "@radix-ui/react-slot";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import '../styles/styles.css';
import profileImage from "../assets/Profile.jpg";
import portfolioImage from "../assets/Portfolio.png";
import springIntoActionImage from "../assets/SpringIntoAction.png";
import lightsysImage from "../assets/Lightsys.png";
import audiencePointLogo from "../assets/AudiencePoint.jpeg";
import sawtoothVenturesLogo from "../assets/SawtoothVentures.jpeg";
import gordonCollegeLogo from "../assets/GordonCollege.png";
import { FaReact, FaPython, FaAws, FaCode, FaGithub } from "react-icons/fa";
import { SiDotnet, SiJavascript, SiMysql } from "react-icons/si";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-gray-900 min-h-screen"}>
      {/* Navbar */}
      <nav className="p-5 flex justify-between items-center shadow-md fixed top-0 left-0 w-full bg-white dark:bg-gray-900 z-50">
        <h1 className="text-2xl font-bold text-black">Aidan Perez</h1>
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
      <section id="skills" className="p-10 bg-gray-100 dark:bg-gray-900 text-black">
        <h2 className="text-3xl font-bold text-center">Skills</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          
          {/* React */}
          <div className="p-6 bg-white dark:bg-black rounded-xl shadow-md hover:scale-105 transition">
            <FaReact size={40} className="text-blue-500 mx-auto" />
            <h3 className="text-lg font-semibold mt-2">React</h3>
          </div>

          {/* .NET */}
          <div className="p-6 bg-white dark:bg-black rounded-xl shadow-md hover:scale-105 transition">
            <SiDotnet size={40} className="text-indigo-600 mx-auto" />
            <h3 className="text-lg font-semibold mt-2">.NET</h3>
          </div>

          {/* Python */}
          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:scale-105 transition">
            <FaPython size={40} className="text-yellow-500 mx-auto" />
            <h3 className="text-lg font-semibold mt-2">Python</h3>
          </div>

          {/* JavaScript */}
          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:scale-105 transition">
            <SiJavascript size={40} className="text-yellow-400 mx-auto" />
            <h3 className="text-lg font-semibold mt-2">JavaScript</h3>
          </div>

          {/* AWS */}
          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:scale-105 transition">
            <FaAws size={40} className="text-orange-500 mx-auto" />
            <h3 className="text-lg font-semibold mt-2">AWS</h3>
          </div>

          {/* MySQL */}
          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:scale-105 transition">
            <SiMysql size={40} className="text-blue-600 mx-auto" />
            <h3 className="text-lg font-semibold mt-2">MySQL</h3>
          </div>

          {/* General Coding */}
          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:scale-105 transition">
            <FaCode size={40} className="text-gray-500 mx-auto" />
            <h3 className="text-lg font-semibold mt-2">Software Development</h3>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="p-10">
        <h2 className="text-3xl font-bold text-center">Work Experience</h2>
        <div className="mt-6 max-w-4xl mx-auto text-gray-700 dark:text-gray-300">
          <motion.div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md flex items-center"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}>
            <img src={audiencePointLogo} alt="AudiencePoint Logo" className="w-16 h-16 mr-4" />
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold">Software Engineer - AudiencePoint</h3>
              <p className="text-gray-600 dark:text-gray-300">May 2018 – Present</p>
              <p>Engineered a high-performance marketing analytics platform using React, .NET 8, and AWS Fargate, improving data processing speed and scalability.</p>
            </div>
          </motion.div>
          <motion.div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md flex items-center"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}>
            <img src={sawtoothVenturesLogo} alt="Sawtooth Ventures Logo" className="w-16 h-16 mr-4" />
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold">Software Developer - Sawtooth Ventures</h3>
              <p className="text-gray-600 dark:text-gray-300">Apr 2022 – Aug 2022</p>
              <p>Developed a React & Airtable-based ranch management system, enabling streamlined livestock tracking and resource management.</p>
            </div>
          </motion.div>
          <motion.div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md flex items-center"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}>
            <img src={gordonCollegeLogo} alt="Gordon College Logo" className="w-16 h-16 mr-4" />
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold">Software Developer - GoCo Labs</h3>
              <p className="text-gray-600 dark:text-gray-300">Feb 2021 – Apr 2021</p>
              <p>Optimized event filtering by redesigning Gordon College’s events website with React and C#, improving navigation and user engagement.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="p-10 bg-gray-100 dark:bg-gray-800 text-black">
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
      <section id="projects" className="p-10 bg-gray-100 dark:bg-gray-800 text-black">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Portfolio */}
          <motion.div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}>
            <img src={portfolioImage} alt="Portfolio Project Screenshot" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Portfolio</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Designed and developed a personal portfolio website using <strong>React</strong>, <strong>TailwindCSS</strong>, and <strong>Framer Motion</strong> for animations.
              Features dark mode, smooth scrolling, and project showcases.
            </p>
            <a href="https://github.com/aidanperez2000/react-portfolio" target="_blank" rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-600 mt-3">
              <FaGithub size={20} className="mr-2" /> View on GitHub
            </a>
          </motion.div>

          {/* Spring Into Action */}
          <motion.div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}>
            <img src={springIntoActionImage} alt="Spring Into Action Project Screenshot" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Spring Into Action</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Led the development of a <strong>sustainability competition website</strong> using <strong>C#</strong>, <strong>JavaScript</strong>, and <strong>HTML/CSS</strong>.
              The platform encouraged students to participate in eco-friendly challenges and track their impact.
            </p>
            <a href="https://github.com/Gordon-YECA-Projects/SustainabilityCompetition" target="_blank" rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-600 mt-3">
              <FaGithub size={20} className="mr-2" /> View on GitHub
            </a>
          </motion.div>

          {/* LightSys Events App */}
          <motion.div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}>
            <img src={lightsysImage} alt="LightSys Events Project Screenshot" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">LightSys Events App</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Developed an event management mobile application using <strong>Swift</strong> to improve scheduling and user engagement.
              The app allows users to register for events, receive notifications, and view event details in an intuitive interface.
            </p>
            <a href="https://github.com/LightSys/iOSEventApp" target="_blank" rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-600 mt-3">
              <FaGithub size={20} className="mr-2" /> View on GitHub
            </a>
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
