import { FaReact, FaPython, FaAws, FaCode } from "react-icons/fa";
import { SiDotnet, SiJavascript, SiMysql } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} className="text-blue-500 mx-auto" /> },
  { name: ".NET", icon: <SiDotnet size={40} className="text-indigo-600 mx-auto" /> },
  { name: "Python", icon: <FaPython size={40} className="text-yellow-500 mx-auto" /> },
  { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-400 mx-auto" /> },
  { name: "AWS", icon: <FaAws size={40} className="text-orange-500 mx-auto" /> },
  { name: "MySQL", icon: <SiMysql size={40} className="text-blue-600 mx-auto" /> },
  { name: "Software Development", icon: <FaCode size={40} className="text-gray-500 mx-auto" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="p-10 bg-gray-100 dark:bg-gray-900 text-black">
      <h2 className="text-3xl font-bold text-center">Skills</h2>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
        {skills.map(({ name, icon }) => (
          <div key={name} className="p-6 bg-white dark:bg-black rounded-xl shadow-md hover:scale-105 transition">
            {icon}
            <h3 className="text-lg font-semibold mt-2">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
