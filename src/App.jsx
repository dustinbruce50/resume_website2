import "./App.css";

import "../node_modules/slick-carousel/slick/slick-theme.css";
import "../node_modules/slick-carousel/slick/slick.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio.jsx";
import Weather from "./components/Weather.jsx";
import Movies from "./components/Movies.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Weather />
      <Movies />
    </div>
  );
}

export default App;
