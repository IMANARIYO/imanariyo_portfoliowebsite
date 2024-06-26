import "slick-carousel/slick/slick.css";
import React, { useState } from "react";
import Slider from "react-slick";
import TestimonialSlide from "./TestimonialSlide";
import Title from "../layouts/Title";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { RiStarFill } from "react-icons/ri";
import { quote, testimonialOne, testimonialTwo } from "../../assets";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}
const testimonials = [
  
  {
    image: `${testimonialOne}`,
    name: 'Chris Lee',
    title: 'Software Engineer',
    designation: 'Innovative Tech',
    testimonymessage: 'Their expertise in software development is unparalleled. They delivered a robust solution that has greatly improved our efficiency. The team’s innovative approach and commitment to excellence were evident in every phase of the project, making them an invaluable partner in our digital transformation journey.',
    date: 'via Upwork - Apr 20, 2022 - Dec 10, 2022',
    head: 'Mobile App Designing'
  },
  {
    image: `${testimonialTwo}`,
    name: 'Emily Davis',
    title: 'Product Manager',
    designation: 'E-Commerce Co.',
    testimonymessage: 'The project was completed ahead of schedule and exceeded all our expectations. Their team is incredibly talented and professional. Their ability to understand our vision and translate it into a functional and aesthetically pleasing product was truly impressive. We couldn’t have asked for a better partnership.',
    date: 'via LinkedIn - May 1, 2021 - Jan 20, 2023'
  },
];
const Testimonial = () => {
      const [dotActive, setDocActive] = useState(0);
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
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
       ),
     };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex items-center justify-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl p-16 mx-auto ">
       
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialSlide
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              title={testimonial.title}
              designation={testimonial.designation}
              testimonymessage={testimonial.testimonymessage}
              date={testimonial.date}
              head={testimonial.head}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial