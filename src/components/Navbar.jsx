import { NavLink } from "react-router-dom";

function Navbar() {

  const navLinkStyles = ({ isActive }) => {
    return isActive
      ? "text-cyan-400 border-b border-cyan-400 pb-1"
      : "text-gray-300 hover:text-cyan-300 transition";
  };

  return (
    <nav className="flex items-center justify-between">

      <div>
        <h1 className="text-2xl font-bold tracking-widest text-white">
          SUBHAM
        </h1>
      </div>

      <div className="flex items-center gap-8 text-sm uppercase tracking-wider">

        <NavLink to="/" className={navLinkStyles}>
          Home
        </NavLink>

        <NavLink to="/about" className={navLinkStyles}>
          About
        </NavLink>

        <NavLink to="/contact" className={navLinkStyles}>
          Contact
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;