import { motion } from "framer-motion";
import audiencePointLogo from "../assets/AudiencePoint.jpeg";
import sawtoothVenturesLogo from "../assets/SawtoothVentures.jpeg";
import gordonCollegeLogo from "../assets/GordonCollege.png";

interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  description: string;
  logo: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "AudiencePoint",
    role: "Software Engineer",
    date: "May 2018 – Present",
    description: "Built a high-performance marketing analytics platform using React, .NET 8, and AWS Fargate.",
    logo: audiencePointLogo
  },
  {
    company: "Sawtooth Ventures",
    role: "Software Developer",
    date: "Apr 2022 – Aug 2022",
    description: "Developed a React & Airtable-based ranch management system, enabling streamlined livestock tracking.",
    logo: sawtoothVenturesLogo
  },
  {
    company: "GoCo Labs",
    role: "Software Developer",
    date: "Feb 2021 – Apr 2021",
    description: "Optimized event filtering by redesigning Gordon College’s events website with React and C#.",
    logo: gordonCollegeLogo
  }
];

export default function Experience() {
  return (
    <section id="experience" className="p-10">
      <h2 className="text-3xl font-bold text-center">Work Experience</h2>
      <div className="mt-6 max-w-4xl mx-auto text-gray-700 dark:text-gray-300">
        {experiences.map(({ company, role, date, description, logo }) => (
          <motion.div key={company} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md flex items-center"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}>
            <img src={logo} alt={`${company} Logo`} className="w-16 h-16 mr-4" />
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold">{role} - {company}</h3>
              <p className="text-gray-600 dark:text-gray-300">{date}</p>
              <p>{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
