import * as RadixButton from "@radix-ui/react-slot";
import { Moon, Sun } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  return (
    <nav className="p-5 flex justify-between items-center shadow-md fixed top-0 left-0 w-full bg-white dark:bg-gray-900 z-50">
      <h1 className="text-2xl font-bold text-black">Aidan Perez</h1>
      <ul className="flex space-x-6">
        {["About", "Skills", "Experience", "Education", "Hobbies", "Projects", "Contact"].map((section) => (
          <li key={section}>
            <a href={`#${section.toLowerCase()}`} className="hover:text-blue-500">
              {section}
            </a>
          </li>
        ))}
      </ul>
      <RadixButton.Slot>
        <button onClick={toggleDarkMode} className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full">
          {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-black" />}
        </button>
      </RadixButton.Slot>
    </nav>
  );
}
