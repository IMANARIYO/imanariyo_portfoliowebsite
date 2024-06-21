import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const BlogsContext = createContext()

export const BlogsProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        let url = 'https://myportfolioapi-8vku.onrender.com'
        const response = await axios.get(`${url}/Blogs/getBlogs`, {
          headers: {
            Authorization: `Bearer${localStorage.getItem('accessToken')}`
          }
        })
        setBlogs(response.data.data)
      } catch (error) {
        console.error('Error fetching blogs:', error)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <BlogsContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogsContext.Provider>
  )
}

export default BlogsContext
