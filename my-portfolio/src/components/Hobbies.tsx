import { motion } from "framer-motion";

const hobbies = [
  { name: "Music", emoji: "🎵", description: "Plays Clarinet & Bass Clarinet in symphonic bands." },
  { name: "Rowing", emoji: "🚣‍♂️", description: "Former collegiate rower passionate about teamwork & endurance." },
  { name: "Cooking", emoji: "👨‍🍳", description: "Loves experimenting with new recipes." },
  { name: "Travel", emoji: "✈️", description: "Enjoys discovering new places & cultures." }
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="p-10 bg-gray-100 dark:bg-gray-800 text-black">
      <h2 className="text-3xl font-bold text-center">Interests & Hobbies</h2>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
        {hobbies.map(({ name, emoji, description }) => (
          <motion.div key={name} className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:scale-105 transition flex flex-col items-center"
            whileHover={{ scale: 1.05 }}>
            <span className="text-4xl">{emoji}</span>
            <h3 className="text-lg font-semibold mt-2">{name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
