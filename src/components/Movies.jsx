import React, { useEffect, useState } from "react";
import Slider from "react-slick";
let top5 = [];

const Movies = () => {
  const [movieArray, setMovieArray] = useState();
  const [settings, setSettings] = useState();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTg0NDg1NGM5NGI2OTFjMzY0OGZkNDJlZjdlMTJhNyIsIm5iZiI6MTczMzIwNjc1MC44MDcwMDAyLCJzdWIiOiI2NzRlYTJkZTBhNWY3ZmRiMTM2OTRiOWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1o4Q_gO90jNcvJmVI8PWbx7mt6No-55omRyK7gcj9bE",
    },
  };

  const testUrl = "https://api.themoviedb.org/3/movie/now_playing";

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(testUrl, options);
      console.log(response);
      const data = await response.json();
      console.log(data);
      setMovieArray(data);
    };

    try {
      fetchMovie();
    } catch (Error) {
      console.log(Error);
    }
  }, []);

  const MovieCarousel = ({ movies }) => {
    const setting = {
      dots: true,
      infinite: true,
      speed: 500,
      slideToShow: 1,
      slideToScroll: 1,
    };
    setSettings(settings);
  };

  let maxLen = [1, 2, 3, 4, 5];
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <div className="text-white movie-carousel bg-black mt-12 rounded-3xl flex flex-col h-auto pt-6">
        <h1>
          This is a carousel I've made to display the top 20 movies currently
          showing in movie theaters. The carousel if from a library called
          slick-carousel, and the data was fetched from TMDB.org <br />
          Source:
          <div className="text-blue-600 underline">
            <a href="https://kenwheeler.github.io/slick/">slick</a> <br />
            <a href="https://www.themoviedb.org/">TMDB</a>
          </div>
        </h1>
        <h1 className="my-8 text-4xl">Now Showing</h1>
        <Slider {...settings}>
          {movieArray &&
            movieArray.results.map((movie, index) => (
              <div
                key={index}
                className="bg-black text-white movie-item max-w-96 "
              >
                <div className="">
                  <h1 className="text-3xl">{movie.title}</h1>
                  <img src={imageUrl + movie.poster_path} alt="TEST" />
                  <div className="max-w-full text-left">
                    <h1>{movie.overview}</h1>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
};

export default Movies;
