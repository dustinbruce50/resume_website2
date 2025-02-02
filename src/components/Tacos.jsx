import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cart from "../assets/Taco/cart.jpeg";
import full_height_menu from "../assets/Taco/full_height_menu.jpeg";
import full_home from "../assets/Taco/full_home.jpeg";
import full_width_menu from "../assets/Taco/full_width_menu.jpeg";
import post_cart_checkout from "../assets/Taco/post_cart_checkout.jpeg";
import stripe_checkout from "../assets/Taco/stripe_checkout.jpeg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Tacos = () => {
  const images = [
    cart,
    full_height_menu,
    full_home,
    full_width_menu,
    post_cart_checkout,
    stripe_checkout,
  ];

  return (
    <div>
      <div className="mt-12">
        <h1 className="text-center font-bold text-3xl mt-4">
          ECommerce Taco Website
        </h1>
        <p className="text-left m-4">
          For this project, I decided to use a technology I hadn't used before,
          so I gave Angular a go. While most of my experience has been with
          React, my senior project group in college built the UI for our website
          with Angular, and I remember the front end group raving about it. In
          the end, I don't think it's as intuitive as React, but it was still a
          refreshing break from my usual. Writing with TypeScript forced me to
          build some better habits in how I passed arguments between a bunch of
          functions, and really crystalized some JS knowledge I was shaky on.{" "}
        </p>
        <p className="text-center font-bold text-lg m-4">Front End</p>
        <p className="text-left m-4">
          The front end was really fun to work on, as Angular makes generating
          front end componenets really easy. On top of that, I really enjoyed
          the way Angular has a great methodology of seperation of concerns.
          Each component has it's own CSS, HTML, and Typescript file. This
          helped me conceptualize each component a littl easier than when i've
          built projects using React.
        </p>
        <p className="text-center font-bold text-lg mt-4">Back End</p>
        <p className="text-left m-4">
          In keeping with the theme, I wanted to build a backend with features I
          had never used before, so I spent a majority of my time integrating a
          payment solution. I went with Stripe, because it seemed to have great
          API documentation, as well as different levels of implementation. I
          went with an embedded stripe page, but there are no-code options that
          simply redirect to a payment page, as well as more in depth
          implementations.
        </p>
      </div>
      <div className="slider-container w-[75%] max-w-4xl mx-auto ">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="w-full">
              <img
                src={image}
                alt={`Screenshot ${index + 1}`}
                className=" object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Tacos;
