import { motion } from "framer-motion";
import portfolioImage from "../assets/Portfolio.png";
import springIntoActionImage from "../assets/SpringIntoAction.png";
import lightsysImage from "../assets/Lightsys.png";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Portfolio",
    image: portfolioImage,
    description: "Designed and developed a personal portfolio using React, TailwindCSS, and Framer Motion.",
    github: "https://github.com/aidanperez2000/react-portfolio"
  },
  {
    name: "Spring Into Action",
    image: springIntoActionImage,
    description: "Led the development of a sustainability competition website using C#, JavaScript, and HTML/CSS.",
    github: "https://github.com/Gordon-YECA-Projects/SustainabilityCompetition"
  },
  {
    name: "LightSys Events App",
    image: lightsysImage,
    description: "Developed an event management app using Swift, improving scheduling and engagement.",
    github: "https://github.com/LightSys/iOSEventApp"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="p-10 bg-gray-100 dark:bg-gray-800 text-black">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map(({ name, image, description, github }) => (
          <motion.div key={name} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}>
            <img src={image} alt={name} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
            <a href={github} target="_blank" rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-600 mt-3">
              <FaGithub size={20} className="mr-2" /> View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
