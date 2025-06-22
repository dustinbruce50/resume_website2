




import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Weather from "../components/Weather.jsx";
import Movies from "../components/Movies.jsx";


function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <Weather />
      <Movies />
    </div>
  );
}

export default HomePage;
