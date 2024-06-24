import "react-tooltip";
import LoginForm from "../userscomponent/Login";
import React, { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import logo from "../images/mypassport.png";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-scroll";

function HeadNavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const toggleNavigation = () => {
    setIsActive(!isActive);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsLoggedIn(true);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      // alert(section);
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        setActiveItem(section.getAttribute("id"));
      }
    });
  };


  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    alert("Logged out successfully!");
  };

  const toggleLoginForm = () => {
    setIsLoginFormOpen(!isLoginFormOpen);
  };

  const navItems = [
    { name: "home", label: "HOME" },
    { name: "features", label: "FEATURES" },
    { name: "projects", label: "PROJECTS" },
    { name: "testimonial", label: "TESTIMONIAL" },
    { name: "blog", label: "BLOG" },
    { name: "contact", label: "CONTACTS" },
  ];

  return (
    <div>
      <div className="head-nav-bar">
        <div className="head">
          <div className="flex main-logo">
            <img src={logo} alt="Logo" />
            <span className="charss">I.B</span>
          </div>
          <i id="open" className="bx bx-menu" onClick={toggleNavigation}>
            <CiMenuBurger />
          </i>
          <ul className={`navigation ${isActive ? "active" : ""}`} onClick={toggleNavigation}>
            <li>
              <i id="close" className="bx bx-window-close" onClick={toggleNavigation}>
                <FaWindowClose />
              </i>
            </li>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.name}
                  spy={true}
                  smooth={true}
                  offset={10}
                  activeClass="active" 
                  duration={200}
                  className={`cursor-pointer ${
                    activeItem === item.name
                      ? "px-2 border-b-4 border-gray-300 border-solid border-red rounded-sm"
                      : ""
                  }`}
                  onClick={() => handleItemClick(item.name)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            
            <li className="authentication">
              {isLoggedIn ? (
               <Tooltip title="Logout" arrow>
               <a href="#" onClick={handleLogout}>
                 <i className="bx bx-log-out-circle">
                   <AiOutlineLogout />
                 </i>
                
               </a>
             </Tooltip>
              ) : (
                <Tooltip title="Login" arrow>
          <a href="#" onClick={toggleLoginForm}>
            <i className="bx bx-log-in-circle">
              <AiOutlineLogin />
            </i>
          
          </a>
        </Tooltip>
              )}
            </li>
          </ul>
        </div>
      </div>
      
      {isLoginFormOpen && <LoginForm className="absolute top-20px" />}
    </div>
  );
}

export default HeadNavBar;
