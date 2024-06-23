import LoginForm from "../userscomponent/Login";
import React, { useEffect, useRef, useState } from "react";
import logo from "../images/mypassport.png";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";
import { FaWindowClose } from "react-icons/fa";

function HeadNavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false); 
  const [activeItem, setActiveItem] = useState('home');


  const toggleNavigation = () => {
    setIsActive(!isActive);
  };
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []); 

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false); // Update isLoggedIn state upon logout
    alert('Logged out successfully!');
  };

  const toggleLoginForm = () => {
    setIsLoginFormOpen(!isLoginFormOpen);
  };

  return (
    <div>

      <div className="head-nav-bar" >
        <div className="head">
          <div className="flex main-logo">
            <img src={logo} alt="Logo" />
            <span className="charss">I.B</span>
          </div>
          <i id="open" className='bx bx-menu' onClick={toggleNavigation}><CiMenuBurger/></i>
      
          <ul className={`navigation ${isActive ? 'active' : ''}`}  onClick={toggleNavigation}>
            <li>  
              <i id="close" className='bx bx-window-close' onClick={toggleNavigation}><FaWindowClose /></i>
            </li> 
            <li ><a  className={`cursor-pointer ${activeItem === 'home' ? ' px-2 border  border-gray-300 border-solid border-red rounded-sm ' : 'hover:bg-black-1000'}`}  onClick={() => handleItemClick('home')} href="#home">HOME</a></li>
            
            <li><a  className={`cursor-pointer ${activeItem === 'FEATURES' ? ' px-2 border border-1 border-gray-300 rounded-sm border-solid border-red' : 'hover:bg-black-1000'}`}  onClick={() => handleItemClick('FEATURES')} href="#features">FEATURES</a></li>
            
            {/* <li><a  className={`cursor-pointer ${activeItem === 'PORTFOLIO' ? 'px-2 border border-1 border-gray-300 rounded-sm border-solid border-red' : 'hover:bg-black-1000'}`}  onClick={() => handleItemClick('PORTFOLIO')} href="#portfolio">PORTFOLIO</a></li> */}
            {/* <li><a className={`cursor-pointer ${activeItem === 'RESUME' ? 'px-2 border border-1 border-gray-300 rounded-sm border-solid border-red' : 'hover:bg-black-1000'}`}  onClick={() => handleItemClick('RESUME')} href="#resume">RESUME</a></li> */}
            <li><a className={`cursor-pointer ${activeItem === 'TESTIMONIAL' ? ' px-2 border border-1 border-gray-300 rounded-sm border-solid border-red' : 'hover:bg-black-1000'}`}  onClick={() => handleItemClick('TESTIMONIAL')} href="#testimonial">TESTIMONIAL</a></li>
            {/* <li><a className={`cursor-pointer ${activeItem === 'CLIENTS' ? ' px-2 border border-1 border-gray-300 rounded-sm border-solid border-red' : 'hover:bg-black-1000'}`}  onClick={() => handleItemClick('home')} href="#clients">CLIENTS</a></li> */}
            <li><a className={`cursor-pointer ${activeItem === 'BLOG' ? ' px-2 border border-1 border-gray-300 rounded-sm border-solid border-red' : 'hover:bg-black-1000'}`}  onClick={() => handleItemClick('BLOG')} href="#blog">BLOG</a></li>
            <li><a className={`cursor-pointer ${activeItem === 'CONTACTS' ? 'px-2 border border-1 border-gray-300 rounded-sm border-solid border-red' : 'hover:bg-black-1000'}`}  onClick={() => handleItemClick('CONTACTS')} href="#contact">CONTACTS</a></li>
            <li className="authentication">
              {isLoggedIn ? (
                // If logged in, display Logout button
                <a href="#" onClick={handleLogout}>
                  <i className='bx bx-log-out-circle'><AiOutlineLogout/></i>
                  <span className="login">Logout</span>
                </a>
              ) : (
                // If not logged in, display Login button
                <a href="#" onClick={toggleLoginForm}>
                  <i className='bx bx-log-in-circle'><AiOutlineLogin /></i>
                  <span className="login">Login</span>
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
      
      {/* Conditionally render the LoginForm component based on isLoginFormOpen state */}
      {isLoginFormOpen && <LoginForm className='absolute top-20px'/>}
      
    </div>
  );
}

export default HeadNavBar;
