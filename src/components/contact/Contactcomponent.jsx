// import React, { useEffect, useState } from "react";
// import Title from "../layouts/Title";
// import axios from "axios";
// import { useForm } from "react-hook-form";
// import { FaInstagram } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// import home from'../images/mypassport.png'
// // import './Contactcomponent.css'

// function Contactmine() {

//   const { register,
//     handleSubmit,
//     formState: { errors }

//   } = useForm();

// const tocontact =async (data) => {

//   try {
//     const{name,email,telephone,message,subject}=data;
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('email',email);
//     formData.append('telephone',telephone);
//     formData.append('message', message);
//     formData.append('subject',subject);
// let url=" https://myportfolioapi-8vku.onrender.com"
//     const res=await axios.post(`${url}/contact/createContact`, formData,{
//       headers: {
//         'Content-Type':'application/json'
//       }});
//     console.log(res.data.data);
//     }
//   catch (error) {
//    alert(error);
//   }
// }

//   return (
//     <div className="section contact" id="contact">

//             <div className="flex items-center justify-center text-center">

//       <Title title="contact" des="Contact With Me"/>
//             </div>

//       <div className="messages-sides">
//         <div className="left-message">
//           <div className="hand-shake">
//             <img src={home} alt="" />
//           </div>
//           <div className="basic-profile">
//             <span>rain-bow-themes</span>
//             <h3>imanariyo baptiste2</h3>
//             <div className="h6">chief operating officer</div>
//           </div>
//           <div className="contacts">
//             <p className="description">I am available for freelance work. Connect with me via and call in to my account.</p>
//             <div className="phone">0787795163</div>
//             <div className="email">imanariyobaptiste@gmail.com</div>
//           </div>
//           <div className="basics">
//           <div className="findme">
//                         <p>find with me</p>
//                         <div className="findme-icons">
//                             <FaXTwitter  className='bx'/>
//                             <FaInstagram  className='bx'/>
//                             <FaWhatsapp   className='bx' />
//                         </div>
//                     </div>

//           </div>
//         </div>
//         <div className="right-message">
//    <form className="message-form" onSubmit={handleSubmit(tocontact)}>

// <div className="contacter-phone-name">
//     <div className="contacter-name">
//     <label htmlFor="name">Name:
//     <input type="text" id="name" name="name"

//     {...register("name",{required:true})} />
//     </label>
//     </div>
//    <div className="contacter-phone">
//     <label htmlFor="telephone">Phone Number:
//     <input type="tel" id="phone" name="telephone"

//     {...register("telephone", { required: true

//     })}

//      />
//      </label>

//    </div>
//  </div>

//   <label htmlFor="email">Email:
//  <input type="email" id="email" name="email"

//  {...register("email", { required: true})}

//  /></label>

//     <label htmlFor="subject">Subject:
//     <input type="text" id="subject" name="subject"

//     {...register("subject", { required: true})}

//     /></label>

//     <label htmlFor="message">Message:
//     <textarea id="message" name="message" cols="30" rows="6"
//    {...register("message",{required:true})}

//     ></textarea></label>

//     <button type="submit">send</button>
//   </form>
// </div>

//       </div>
//     </div>
//   );
// }

// export default Contactmine;