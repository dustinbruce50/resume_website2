import React from "react";
import cone from "../assets/cone.png";

function Portfolio() {
  return (
    <div
      className="bg-black text-white pt-14 mb-16 rounded-3xl pb-20 flex flex-col items-center"
      id="projects"
    >
      <h1 className="text-4xl font-bold text-center mb-2">Portfolio</h1>
      {/*<img
        src={cone}
        alt="Work in Progress"
        className="w-48 h-32 object-contain"
      />
      */}
      <h1 className="mx-auto px-8 md:px-16 lg:px-24">
        This is the beginning stages of my portfolio. As I work on and find
        interesting projets, I will create and display them here. I am also in
        the process of linking my github repo with the project files.
      </h1>
    </div>
  );
}

export default Portfolio;
