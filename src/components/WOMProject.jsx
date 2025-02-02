import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewWorkOrder from "../assets/WOM/NewWorkOrder.jpg";
import register from "../assets/WOM/register.jpg";
import UpdateWorkOrder from "../assets/WOM/UpdateWorkOrder.jpg";
import workOrderTable from "../assets/WOM/workOrderTable.jpg";
import login from "../assets/WOM/login.jpg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const WOMProject = () => {
  const images = [
    login,
    register,
    NewWorkOrder,
    UpdateWorkOrder,
    workOrderTable,
  ];

  return (
    <>
      <div className="mt-12">
        <h1 className="text-center font-bold text-3xl mt-4">
          Work Order Management
        </h1>
        <p className="text-left m-4">
          I decided to build this piece because, in my current position, our
          work order system is terribly disorganized. It's comprised of an excel
          file hosted in teams, and relies on the user to email the technicians,
          and then update the work order log manually.
        </p>
        <p className="text-center font-bold text-lg m-4">Frontend</p>
        <p className="text-left m-4">
          The frontend of the work order management system is developed using
          React, with Material-UI for the UI components. The login component
          lacks some security features, like email verification or 2FA. It does
          however hash all passwords being stored on the server using
          BCrypt.NET. The dashboard displays a sortable and filterable table of
          work orders, with a search bar for quick filtering and buttons to
          toggle between active and inactive work orders. The form dialogs for
          creating and editing work orders are integrated as pop-up modals,
          allowing users to update the details of existing work orders, mark
          work orders as complete, and upload photos associated with each work
          order. Most of my experience is in coding, so apologies for the lack
          luster design.
        </p>
        <p className="text-center font-bold text-lg mt-4">Backend</p>
        <p className="text-left m-4">
          The backend of the system is built using .NET, with Entity Framework
          for ORM and a SQLite database for data storage. The backend is
          responsible for handling CRUD operations on work orders, managing user
          requests, and processing file uploads for photos associated with each
          work order. The system includes an email service implemented using
          System.Net.Mail, allowing automated email notifications for various
          actions. Security is enforced ProtecedRoutes in React, hashed
          passwords using BCrypt.NET, and user session tokens.
        </p>
      </div>

      <div className="slider-container w-[75%] max-w-4xl mx-auto">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="w-full">
              <img
                src={image}
                alt={`Screenshot ${index + 1}`}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default WOMProject;
