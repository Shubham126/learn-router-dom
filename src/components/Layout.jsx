import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";

function Layout() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">

      <div className="max-w-7xl mx-auto px-6 py-6">

        <Navbar />

        <main className="mt-10 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-lg p-8 shadow-2xl min-h-[80vh]">

          <Outlet />

        </main>

        <SocialLinks />

      </div>

    </div>
  );
}

export default Layout;