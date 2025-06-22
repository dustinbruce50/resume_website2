import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24 mb-4 rounded-md">
      <div className="container py-4 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline"></div>
        <div className="space-x-12">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
