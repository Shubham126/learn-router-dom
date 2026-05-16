import { NavLink, Outlet } from "react-router-dom";

function About() {

  const subLinkStyles = ({ isActive }) => {
    return isActive
      ? "bg-cyan-400 text-black"
      : "bg-white/5 text-white hover:bg-white/10";
  };

  return (
    <section>

      <div className="mb-10">

        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
          About Section
        </p>

        <h2 className="text-4xl font-bold mb-4">
          Learn More About Me
        </h2>

        <p className="text-gray-400 max-w-2xl leading-8">
          This page demonstrates nested routing in React Router DOM.
          The buttons below navigate to nested child routes.
        </p>

      </div>

      <div className="flex gap-4 mb-10">

        <NavLink
          to="about-me"
          className={subLinkStyles}
        >
          <button className="px-5 py-2 rounded-full transition duration-300">
            About Me
          </button>
        </NavLink>

        <NavLink
          to="projects"
          className={subLinkStyles}
        >
          <button className="px-5 py-2 rounded-full transition duration-300">
            Projects
          </button>
        </NavLink>

      </div>

      <div className="border border-white/10 rounded-2xl p-6 bg-white/5">

        <Outlet />

      </div>

    </section>
  );
}

export default About;