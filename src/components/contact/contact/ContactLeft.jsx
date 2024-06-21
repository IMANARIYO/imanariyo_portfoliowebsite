import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";

// import { contactImg } from '../../assets/index'

const ContactLeft = () => {
  let image="https://www.google.com/imgres?q=handshaking&imgurl=https%3A%2F%2F53.fs1.hubspotusercontent-na1.net%2Fhubfs%2F53%2FUntitled%2520design-14.png%23keepProtocol&imgrefurl=https%3A%2F%2Fwww.hubspot.com%2Fcareers-blog%2Fwhy-your-handshake-matters-and-how-to-perfect-it&docid=Qcu9HnGBqGEkNM&tbnid=WeR_515kfgUHYM&vet=12ahUKEwiHqsPz48yGAxXp8QIHHQ4-DbUQM3oECGQQAA..i&w=560&h=315&hcb=2&ved=2ahUKEwiHqsPz48yGAxXp8QIHHQ4-DbUQM3oECGQQAA"
  return (
    <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
      <img
        className='object-cover w-full h-64 mb-2 rounded-lg'
        src={`https://53.fs1.hubspotusercontent-na1.net/hubfs/53/Untitled%20design-14.png#keepProtocol`}
        alt='contactImg'
      />
      <div className='flex flex-col gap-4'>
        <h3 className='text-3xl font-bold text-white'>imanariyo baptiste</h3>
        <p className='text-lg font-normal text-gray-400'> 
          MERN/java  Full Stack Developer
        </p>
        <p className='text-base tracking-wide text-gray-400'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p>
        <p className='flex items-center gap-2 text-base text-gray-400'>
          Phone: <span className='text-lightText'>+250787795163</span>
        </p>
        <p className='flex items-center gap-2 text-base text-gray-400'>
          Email: <span className='text-lightText'>imanariyobaptiste@gmail.com</span>
        </p>
      </div>

    <div className="basics">
          <div className="findme">
                        <p>find with me</p>
                        <div className="text-white findme-icons">
                            <FaXTwitter  className='bx'/>
                            <FaInstagram  className='bx'/>
                            <FaWhatsapp   className='bx' />
                        </div>
                    </div>
            
          </div>
    </div>
  )
}

export default ContactLeft
