function AboutMe() {
  return (
    <div>

      <h3 className="text-3xl font-bold mb-6">
        About Me
      </h3>

      <p className="text-gray-400 leading-8 mb-6">
        I am a passionate Full Stack Developer focused on building
        modern, scalable and visually premium web applications.
        I enjoy working with React, TailwindCSS, Node.js and modern
        frontend technologies.
      </p>

      <p className="text-gray-400 leading-8 mb-6">
        This project demonstrates React Router DOM concepts like
        BrowserRouter, Routes, Route, Link, NavLink, Outlet and
        Nested Routing in a beginner-friendly practical way.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h4 className="text-cyan-400 text-lg font-semibold mb-2">
            Frontend
          </h4>
          <p className="text-gray-400 text-sm">
            React, TailwindCSS, Next.js, Framer Motion
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h4 className="text-pink-400 text-lg font-semibold mb-2">
            Backend
          </h4>
          <p className="text-gray-400 text-sm">
            Node.js, Express.js, MongoDB
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h4 className="text-blue-400 text-lg font-semibold mb-2">
            Tools
          </h4>
          <p className="text-gray-400 text-sm">
            GitHub, Docker, AWS, Kubernetes
          </p>
        </div>

      </div>

    </div>
  );
}

export default AboutMe;