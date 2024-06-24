import React, { useEffect, useState } from "react";
import Title from "../layouts/Title";
import Tooltip from "@mui/material/Tooltip";
import home from "../images/mypassport.png";
import { FaInstagram, FaJava, FaLinkedinIn, FaReact, FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function Homepage() {
    const [text] = useTypewriter({
    words :[
        "Web Developer",
        "UI/UX Designer",
        "Back End Developer",
        "Front end dev",
        "Mobile Developer"
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,  });

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
 


    return (
        <section className="home-page" id="home">
            <div className="p-8 left-home-page">
        
            <div className="flex flex-col gap-5">
        <h4 className="text-lg tracking-wide font-bodyFont">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold tracking-wide text-white font-bodyFont">
          Hi, I'm <span className="capitalize text-designColor"> Baptiste</span>
        </h1>
        <h2 className="text-4xl font-bold tracking-wide text-white font-bodyFont">
          a <span className="tracking-wide font-bodyFont">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base leading-6 tracking-wide font-bodyFont">
        I'm a Full Stack Developer with a passion for designing and developing web applications. Proficient in front-end technologies like React and skilled in building robust back-end systems using Node.js and Spring Boot, I have experience in both <span className="text-green-500">monolithic</span> and <span className="text-green-500">microservices</span><span className="text-blue-500"> architectures</span>. Fluent in English and Kinyarwanda, Available both online and physically, I'm ready to collaborate on exciting projects!
        </p>  
        <div className="flex gap-5">
        <div className="mt-4 download-cv">
          <Tooltip title="view my CV" arrow>
            <a
              href={"https://res.cloudinary.com/dorjr1njc/image/upload/v1719239042/ivgn0cf7ai1bz2dafnfn.pdf"}
              download
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security measure for opening links in a new tab
              className="inline-block px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Download My CV
            </a>
          </Tooltip>
        </div>
        <div className="mt-4 download-cv">
          <Tooltip title="hire  me by calling me or send message in contact section" arrow>
            <a
               href={"#contact"}
             
            
              rel="noopener noreferrer" // Security measure for opening links in a new tab
              className="inline-block px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Hire Me
            </a>
          </Tooltip>
        </div>  
        </div>
       
      </div>
          
                
                <div  className='my-intro'>
             <div className="basics">
                {/* find me on  */}
                
                <div className="findme">
          <p>Find with me</p>
          <div className="text-white findme-icons">
            <Tooltip title="Follow me on Twitter" arrow>
              <a href="https://twitter.com/Imanariyob" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className='bx' />
              </a>
            </Tooltip>
          
            <Tooltip title="Contact me on WhatsApp" arrow>
              <a href="https://wa.me/250787795163" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className='bx' />
              </a>
            </Tooltip>
            <Tooltip title="Connect with me on LinkedIn" arrow>
              <a href="https://www.linkedin.com/in/imanariyo-baptiste-046191286" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className='bx' />
              </a>
            </Tooltip>
          </div>
          </div>
                       {/* best skills */}
                        <div className="best-skill-on">
                        <Tooltip title="best skills am good  at most" arrow>  <p className="py-2">best skill on</p></Tooltip>
                            <div className="best-skill-on-icons">
                                <span>
                                {/* Figma */}
                                <Tooltip title="java" arrow>  <FaJava className='bx' /></Tooltip>
                              
                                </span>
                           <span>
                           <Tooltip title="nodejs/typescript " arrow>  <FaNodeJs className='bx' /></Tooltip>
                          
                           </span>
                           <span>
                               <Tooltip title="reactjs/ts,reactnative" arrow>  <FaReact className='bx' /></Tooltip>
                                
                           </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-home-page">
                <img src={home} alt="home"/>
            </div>
        </section>
    )
}

export default Homepage;
