import React from "react";
import headshot from "../assets/headshot.jpg";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "Dustin_Bruce_Resume.docx";
    link.download = "Dustin_Bruce_Resume.docx";
    link.click();
  };

  return (
    <div className="bg-black text-white text-center rounded-3xl mb-12 pt-6 pb-6 scroll-pb-6">
      <img
        src={headshot}
        alt="Headshot of Dustin Bruce"
        className="mx-auto mb-8 h-48 w-48 rounded-full object-cover after:transform transition-transform duration-300 hover:scale-105 "
        style={{ objectPosition: "25% center" }}
      />
      <h1>
        I'm <span className="text-white bg-clip-text">Dustin Bruce</span>
        <p className="mt-4 text-lg text-gray-300 px-4 md:px-32">
          {" "}
          Food Service Director turned Full Stack Developer
        </p>
      </h1>
      <div className="mt-8 space-x-4">
        <button className="text-black bg-gradient-to-r from-slate-100 to-slate-500 rounded-lg px-2">
          <a href="mailto:dustinbruce50@gmail.com">Contact Me</a>
        </button>
        <button
          onClick={handleDownload}
          className="bg-gradient-to-r from-slate-100 to-slate-500 rounded-lg px-2 text-black"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
