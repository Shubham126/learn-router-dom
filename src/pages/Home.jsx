import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex flex-col justify-center min-h-[70vh]">

      <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
        Full Stack Developer
      </p>

      <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
        Building Modern & Premium Web Experiences With React
      </h1>

      <p className="mt-6 text-gray-400 max-w-2xl leading-8">
        I build scalable and modern web applications using React,
        TailwindCSS, Node.js and modern frontend technologies.
        This project is helping us learn React Router DOM deeply.
      </p>

      <div className="flex items-center gap-5 mt-10">

        <Link
          to="/about"
          className="px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition duration-300"
        >
          Explore About
        </Link>

        <Link
          to="/contact"
          className="px-6 py-3 rounded-full border border-white/20 hover:border-cyan-400 transition duration-300"
        >
          Contact Me
        </Link>

      </div>

    </section>
  );
}

export default Home;