import { useState } from 'react';
import * as RadixButton from "@radix-ui/react-slot";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import '../styles/styles.css';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      {/* Navbar */}
      <nav className="p-5 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Aidan Perez</h1>
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
          href="#projects"
          className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-600 transition dark:text-white dark:bg-blue-400 dark:hover:bg-blue-500"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}>
          View My Work
        </motion.a>
      </section>

      {/* About Me */}
      <section id="about" className="p-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-lg">
          Passionate about Human-Computer Interaction, AI, and making technology accessible.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="p-10">
        <h2 className="text-3xl font-bold text-center dark:text-white">Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div className="bg-gray-300 dark:bg-gray-700 p-6 rounded-xl shadow-md text-black dark:text-white border border-gray-700"
            whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-semibold">JobIn</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">AI-powered job search insights platform.</p>
          </motion.div>
          <motion.div className="bg-gray-300 dark:bg-gray-700 p-6 rounded-xl shadow-md text-black dark:text-white border border-gray-700"
            whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-semibold">Ranch Manager</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">A full-stack tool for farm management.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-10 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4">Let's connect! Reach out to me at <a href="mailto:aidan@example.com" className="text-blue-500">aidan@example.com</a></p>
      </section>
    </div>
  );
}
