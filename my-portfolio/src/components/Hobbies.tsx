import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

// Import images
import GospelChoir from "../assets/gospelChoir.png";
import Hiking from "../assets/hiking.png";
import RowingInWater from "../assets/rowingInWater.png";
import RowingOnDock from "../assets/rowingOnDock.png";
import SantaBarbara from "../assets/santaBarbara.png";
import Sunset from "../assets/sunset.png";
import SunsetOverBeach from "../assets/sunsetOverBeach.png";

const hobbies = [
  { name: "Music", emoji: "🎵", description: "Plays Clarinet & Bass Clarinet in symphonic bands." },
  { name: "Rowing", emoji: "🚣‍♂️", description: "Former collegiate rower passionate about teamwork & endurance." },
  { name: "Cooking", emoji: "👨‍🍳", description: "Loves experimenting with new recipes." },
  { name: "Travel", emoji: "✈️", description: "Enjoys discovering new places & cultures." }
];

// List of images for the carousel
const hobbyImages = [
  { src: RowingInWater, alt: "Rowing on the water" },
  { src: RowingOnDock, alt: "Rowing from a dock" },
  { src: GospelChoir, alt: "Singing in a gospel choir" },
  { src: Hiking, alt: "Hiking at waterfall in Costa Rica" },
  { src: SunsetOverBeach, alt: "Sunset over the ocean" },
  { src: SantaBarbara, alt: "At the beach in Santa Barbara" },
  { src: Sunset, alt: "Sunset on Signal Mountain" }
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="p-10 bg-gray-100 dark:bg-gray-800 text-black">
      <h2 className="text-3xl font-bold text-center">Interests & Hobbies</h2>
      
      {/* Hobby Icons */}
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

      {/* Image Carousel */}
      <div className="mt-10 max-w-3xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-xl shadow-lg"
          style={{ width: "100%", minHeight: "320px" }} // Ensure proper sizing
        >
          {hobbyImages.map(({ src, alt }, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img src={src} alt={alt} className="w-full h-80 object-cover rounded-xl" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
