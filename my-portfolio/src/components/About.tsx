import profileImage from "../assets/Profile.jpg";

export default function About() {
  return (
    <section id="about" className="p-10 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold">About Me</h2>
      <div className="mt-6 flex flex-col items-center">
        <img src={profileImage} alt="Aidan Perez" className="w-40 h-40 rounded-full shadow-md" />
        <p className="mt-4 text-lg">Passionate about Human-Computer Interaction, AI, and making technology accessible.</p>
      </div>
    </section>
  );
}
