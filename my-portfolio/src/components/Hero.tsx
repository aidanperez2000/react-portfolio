import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center p-10">
      <motion.h1
        className="text-5xl font-extrabold flex"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* ✅ Apply dynamic color directly based on the darkMode prop */}
        <span style={{ color: darkMode ? "white" : "black" }}>
          <Typewriter
            words={["Hi, I'm Aidan"]}
            typeSpeed={100}
            delaySpeed={500}
          />
        </span>

        <motion.span
          className="text-blue-600 dark:text-blue-400 inline-block"
          initial={{ opacity: 0, y: -50, scale: 0.5, rotate: -30 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 5, delay: 2 }}
        >
          !
        </motion.span>
      </motion.h1>
      <p className="text-xl mt-4">Software Engineer | AI & HCI Enthusiast</p>

      <motion.a
        href="#about"
        className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-800 transition dark:text-white dark:bg-blue-600 dark:hover:bg-blue-500"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        About Me
      </motion.a>
    </section>
  );
}
