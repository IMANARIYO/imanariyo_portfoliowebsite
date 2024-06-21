import Blog from "./components/blogscomponent/BlogsComponents.jsx";
import Clients from "./components/clients/Clients.jsx";
import Contact from "./components/contact/contact/Contact.jsx";
import Features from "./components/features/Features.jsx";
import Footer from "./components/footer/Footer.jsx";
import FooterBottom from "./components/footer/FooterBottom.jsx";
import HeadNavBar from "./components/navigation/Navigation.jsx";
import Homepage from "./components/homepagecomponent/Homepage.jsx";
import LoginForm from "./components/userscomponent/Login.jsx";
import Portfolio from "./components/portfoliocomponent/Portfolio.jsx";
import Projects from "./components/projects/Projects.jsx";
import Resume from "./resume/Resume.jsx";
import Testimonial from "./components/testimonies/Testimonial.jsx";
import { useState } from "react";
import { BlogsProvider } from "./components/blogscomponent/BlogsContext.jsx";

// import Testimonial from './components/testimonies/Testimonial.jsx'
export function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const[openLogin,setOpenLogin ]=useState(false)

  const handleLogin = () => {
    setOpenLogin(true);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here, e.g., remove token from local storage and set isLoggedIn to false
    setIsLoggedIn(false);
  };
  return (
    <div>
      <HeadNavBar isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />
      {openLogin && (<LoginForm />)}
   
      <Homepage />
      <Features />
      <Projects />
      {/* <Resume />  */}
      {/* <Clients/> */}
      <Testimonial />
      <BlogsProvider>
        <Blog />
      </BlogsProvider> 
      {/* <Portfolio/> */}
      <Contact />
      <Footer />
      <FooterBottom />
{/* <LoginForm/>
<RegistrationForm/> */}
      {/* <Portfolio /> */} 
      {/* <Testimonial/> */}
      {/* <Clients/> */}
      {/* <TestimonyForm/> */}
      {/* <SingleBlogPost/>
            <Blogsmanagement />
            <LoginForm/>
            <Users /> */}
    </div>
  )
}
export default App
