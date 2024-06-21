import ProjectsCard from "./ProjectsCard";
import React, { useState } from "react";
import Slider from "react-slick";
import Title from "../layouts/Title";
import { GrNext, GrPrevious } from "react-icons/gr";
import { HiArrowLeft, HiArrowNarrowLeft, HiArrowRight, HiArrowSmLeft, HiOutlineArrowLeft } from "react-icons/hi";
import { projectOne, projectThree, projectTwo } from "../../assets/index";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-12 border  border-gray-300 border-solid border-red shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    ><GrNext/>
    
    </div>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 left-12 shadow-shadowOne cursor-pointer z-10 border  border-gray-300 border-solid border-red"
      onClick={onClick}
    >
      <GrPrevious/>
     
    </div>
  );
}
const Projects = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow:<SampleNextArrow />,
       prevArrow:<SamplePrevArrow />,
       beforeChange: (prev, next) => {
        setDocActive(next);
      },
      appendDots: (dots) => (
        <div
          style={{
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <ul
            style={{
              position:"absolute",
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            {" "}
            {dots}{" "}
          </ul>
        </div>
      ),
      customPaging: (i) => (
        <div
          style={
            i === dotActive
              ? {
                  width: "12px",
                  height: "12px",
                  color: "blue",
                  background: "#ff014f",
                  borderRadius: "50%",
                  cursor: "pointer",
                }
              : {
                  width: "12px",
                  height: "12px",
                  color: "blue",
                  background: "gray",
                  borderRadius: "50%",
                  cursor: "pointer",
                }
          }
        ></div>
      ), beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer"
              }
        }
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
   
  };
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      
      <div className="flex items-center justify-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>  <Slider {...settings}  className="grid grid-cols-1 gap-6 p-8 md:grid-cols-3 xl:grid-cols-3 xl:gap-14 "> 
      {/* <div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-3 xl:grid-cols-3 xl:gap-14 "> */}
    
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" A fully functional social media platform featuring user authentication, real-time messaging, and news feed with live updates.!"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="  i make the advanced e-commerce site with product listings, secure checkout, payment gateway integration, and order tracking.!"
          src={projectTwo}
        />
         <ProjectsCard
        title="FOOD DELIVERY WEBSITE"
        des="A comprehensive food delivery platform allowing users to browse local restaurants, order food online, and track deliveries."
        src={projectOne}
      />
         <ProjectsCard
        title="MARKETPLACE FOR SECOND-HAND ITEMS"
        des="A user-friendly platform that connects sellers and buyers of second-hand items."
        src={projectTwo}
      />
        <ProjectsCard
        title="MOBILE TRAVEL BOOKING APP"
        des="A mobile app enabling users to quickly search and book travel options, with features like personalized recommendations and secure payments."
        src={projectOne}
      />
        <ProjectsCard
        title="REAL ESTATE MANAGEMENT"
        des="A comprehensive platform for managing property listings, tenant applications, and lease agreements. Facilitates house renting, selling, and buying, while connecting commissioners and clients efficiently."
        src={projectOne}
      />
     
      {/* </div> */}
      </Slider>
    </section>
  );
}

export default Projects