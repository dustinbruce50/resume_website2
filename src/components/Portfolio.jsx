import React from "react";
import WOMProject from "./WOMProject";
import Tacos from "./Tacos";
import Chat from "./Chat";
import Transfer from "./Transfer";
import DataScienceLink from "./DataScienceLink";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

function Portfolio() {
  return (
    <div
      className="bg-black text-white pt-14 mb-16 rounded-3xl pb-20 flex flex-col items-center"
      id="projects"
    >
      <DataScienceLink />
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-2">Portfolio</h1>
        <a
          href="https://github.com/dustinbruce50"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Visit my GitHub
        </a>
        <h1>
          In my github, you can find some of my college work, along with my
          portfolio pieces.
        </h1>

        <Transfer />
        <Chat />
        <WOMProject />
        <Tacos />
      </div>
    </div>
  );
}

export default Portfolio;
