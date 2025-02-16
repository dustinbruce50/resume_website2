import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import driver_ready from "../assets/Transfers/driver_ready.png";
import driver_recently from "../assets/Transfers/driver_recently.png";
import homescreen from "../assets/Transfers/homescreen.png";
import loginscreen from "../assets/Transfers/loginscreen.png";
import operator_delivered from "../assets/Transfers/operator_delivered.png";
import operator_open from "../assets/Transfers/operator_open.png";
import operator_request from "../assets/Transfers/operator_request.png";
import register from "../assets/Transfers/register.png";
import successlogin from "../assets/Transfers/successlogin.png";

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
    driver_ready,
    driver_recently,
    homescreen,
    loginscreen,
    operator_delivered,
    operator_open,
    operator_request,
    register,
    successlogin,
  ];

  return (
    <div>
      <div className="mt-12">
        <h1 className="text-center font-bold text-3xl mt-4">
          Inter Site Transfer Management App - React Native
        </h1>
        <p className="text-left m-4">
          Another project that I built to learn a new technology, and doubles as
          a solution to a problem I have in my daily career. On a daily basis,
          my job requires me to communicate with up to 8 other units and
          coordinate the transfer of food and supplies. This app is a solution
          to that problem, allowing me to send a request for food that will
          notifiy all other operators of my need. <br></br>{" "}
        </p>
        <p className="text-center font-bold text-lg m-4">Front End</p>
        <p className="text-left m-4">
          The front end was built entirely on React Native, and was a great way
          to learn the framework. I avoided using Expo, because I wanted as true
          of an experience with the react native ecosystem as possible. Boy, was
          it an experience. I have a new found appreciation for keyboard
          behavior on my apps I use on a daily basis. React Native seems to
          struggle with keyboard behavior, even though the solution should be
          straight forward (KeyboardAvoidingView). I also learned a lot about
          the difference between web and mobile development, as well as the
          difference between React and React Native.The navigation is initally
          stack oriented, so from the login page, either the operator card or
          the driver card can be selected. From there, I used bottom tab
          navigation to highlight the different areas each (Driver/Operator)
          would participate in. For instance, theres no need for a driver to
          post or accept transfers, just as an Operator shouldn't be able to
          mark a transfer as "Delivered".
        </p>
        <p className="text-center font-bold text-lg mt-4">Back End</p>
        <p className="text-left m-4">
          The back end for this wasn't anything I hadn't done before. Express
          router, with API endpoints to add/register users, fetch transfers in
          various stages of their life cycle, and send updates and
          notifications.
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
        <div className="padding-top: 20px">
            <h3>To Do: </h3>
          To move this project forward, I would continue to polish the UI,
          integrate email address verification into the user registration,
          provide better security for each stack, so drivers couldn't access the
          request transfer function at all, and add a layer of loction to each user. The initial end goal for this project was to 
          allow it to create a weekly report of transfers between units, to simplify the current status quo.
        </div>
      </div>
    </div>
  );
};

export default Tacos;
