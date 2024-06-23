import App from "./App.jsx";
import Blog from "./components/blogscomponent/BlogsComponents.jsx";
import Clients from "./components/clients/Clients.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import LoginForm from "./components/userscomponent/Login.jsx";
import Portfolio from "./components/portfoliocomponent/Portfolio.jsx";
import Profile from "./components/userscomponent/Profile.jsx";
import SingleBlogPost from "./components/blogscomponent/SingleBlog.jsx";
import Testimonial from "./components/testimonies/Testimonial.jsx";
import UserForm from "./components/userscomponent/UserForm.jsx";
import Users from "./components/userscomponent/Users.jsx";
import { Navigate, createBrowserRouter } from "react-router-dom";

// import Contact from "./components/contact/Contactcomponent.jsx";

function ProtectedRoute({ element }) {
  const accessToken = localStorage.getItem('accessToken');
  const userRole = localStorage.getItem('userRole');

  // Check if user is logged in and has admin role
  if (accessToken && userRole === 'admin') {
    return element;
  } else if (accessToken) {
    // User is logged in but not an admin, redirect to homepage
    return <Navigate to="/" />;
  } else {
    // User is not logged in, redirect to login page
    return <Navigate to="/login" />;
  }
}const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <LoginForm />
  },
  {
    path: '/users/:id',
    element: <Profile />
  },
  {
    path: '/users',
    element: <Users />
  },
  {
    path: '/testimonies',
    element: <Testimonial/>
  },
  {
    path: '/portifolio',
    element: <Portfolio />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  // {
  //   path: '/contact',
  //   element: <Contact />
  // },
  {
    path: '/clients',
    element: <Clients />
  },
  {
    path: '/dashboard',
    // element: <Dashboard />
    element: <ProtectedRoute element={<Dashboard />} />
  },
  {
    path: '/login',
    element: <LoginForm />
  },
 
  {
    path: '/signup',
    element: <UserForm/>
  },
 
])

export default router
