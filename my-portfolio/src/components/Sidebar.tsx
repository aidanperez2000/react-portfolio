import { FaGithub, FaLinkedin } from "react-icons/fa";
import resumePdf from "../assets/AidanPerezResume.pdf";

export default function Sidebar() {
  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2 flex flex-col space-y-4">
      <a href="https://www.linkedin.com/in/aidan-perez/" target="_blank" rel="noopener noreferrer"
        className="bg-blue-700 text-white p-3 rounded-full shadow-md hover:bg-blue-800 transition" title="View my LinkedIn">
        <FaLinkedin size={24} />
      </a>
      <a href="https://github.com/aidanperez2000" target="_blank" rel="noopener noreferrer"
        className="bg-gray-900 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition" title="View my Github">
        <FaGithub size={24} />
      </a>
      <a href={resumePdf} download className="bg-green-600 text-white p-3 rounded-full shadow-md hover:bg-green-700 transition" title="Download my resume">
        📄
      </a>
    </div>
  );
}
