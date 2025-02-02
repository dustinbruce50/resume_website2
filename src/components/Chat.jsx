import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chat from "../assets/Chat/chat.jpeg";
import login_register from "../assets/Chat/login_register.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Chat = () => {
  const images = [login_register, chat];
  return (
    <div>
      <div className="mt-12">
        <h1 className="text-center font-bold text-3xl mt-4">
          Chat Application
        </h1>
        <p className="text-left m-4">
          This application I built because it sounded like a refreshing break
          from other front end focused projects. This is a chat application
          built on Socket.IO and ExpressJS
        </p>
        <p className="text-center font-bold text-lg m-4">Front End</p>
        <p className="text-left m-4">
          I left the front end extremely simple, because I wanted to focus on
          back end functionality.
        </p>
        <p className="text-center font-bold text-lg mt-4">Back End</p>
        <p className="text-left m-4">
          This back end was the most complex i've built by far. It relies on an
          ExpressJS server using Socket.IO and MongoDB to run a real time chat
          application. The APIs are very simple (getMessages, sendMessage,
          login, register). The front end sends the message through the API, the
          server saves the message to the MongoDB Collection, and emits to the
          front end clients when a message has been sent. The inital load relies
          on pulling messages from the database collection, but all subsequent
          messages are sent through the sockets.
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

export default Chat;
