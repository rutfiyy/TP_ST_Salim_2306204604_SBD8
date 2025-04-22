import React from "react";
import Logo from "../assets/Logo.svg";

function Header({ setActiveSection }) {
  return (
    <header className="bg-black text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between py-6 px-8">

        <div className="flex items-center hover:scale-105 transition-transform duration-300">
          <img src={Logo} alt="Netlab Logo" className="h-28 mr-6" />
          <span className="text-xl font-bold">Network Laboratory</span>
        </div>

        
        <nav className="hidden md:flex space-x-16">
          <button
            onClick={() => setActiveSection("home")}
            className="text-xl font-semibold hover:text-gray-400 cursor-pointer"
          >
            Home
          </button>

          <button
            onClick={() => setActiveSection("sbd")}
            className="text-xl font-semibold hover:text-gray-400 cursor-pointer"
          >
            SBD
          </button>

          <button
            onClick={() => setActiveSection("dmj")}
            className="text-xl font-semibold hover:text-gray-400 cursor-pointer"
          >
            DMJ
          </button>

          <button
            onClick={() => setActiveSection("os")}
            className="text-xl font-semibold hover:text-gray-400 cursor-pointer"
          >
            OS
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;