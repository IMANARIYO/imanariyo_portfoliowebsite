import React, { useEffect, useState } from "react";
import Title from "../layouts/Title";
import home from "../images/mypassport.png";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base leading-6 tracking-wide font-bodyFont">
        I'm a Full Stack Developer with a passion for designing and developing web applications. Proficient in front-end technologies like React and skilled in building robust back-end systems using Node.js and Spring Boot, I have experience in both <span className="text-green-500">monolithic</span> and <span className="text-green-500">microservices</span><span className="text-blue-500"> architectures</span>. Fluent in English and Kinyarwanda, Available both online and physically, I'm ready to collaborate on exciting projects!
        </p>
      </div>
                     
                
                <div  className='my-intro'>
             <div className="basics">
                        <div className="findme">
                            <p>find with me</p>
                            <div className="findme-icons">
                                <FaXTwitter className='bx' />
                                <FaInstagram className='bx' />
                                <FaWhatsapp className='bx' />
                            </div>
                        </div>
                        <div className="best-skill-on">
                            <p>best skill on</p>
                            <div className="best-skill-on-icons">
                                <span>
                                {/* Figma */}
                                <FaFigma className='bx' />
                                </span>
                           <span>
                            {/* nodejs */}
                           <FaNodeJs className='bx' />
                           </span>
                           <span>
                                {/* react */}
                                <TbBrandReactNative className='bx' />
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
