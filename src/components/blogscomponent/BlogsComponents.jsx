import "../../App.css";
import BlogsContext from "./BlogsContext";
import React, { useContext, useEffect, useState } from "react";
import SingleBlogPost from "./SingleBlog";
import Singleblogmodal from "./blogcard";
import Title from "../layouts/Title";

function Blog () {
  const { blogs } = useContext(BlogsContext)
  const [isSingleBlogOpen, setIsSingleBlogOpen] = useState(false)
  const showSingleBlog = () => {
    setIsSingleBlogOpen(!isSingleBlogOpen)
  }
  const closeSingleBlog = () => {
    setIsSingleBlogOpen(false)
  }
  const handleSingleBlogShowing = blog => {
    setIsSingleBlogOpen(true)

    console.log(blog)
  }
  return (
    <section className='section blog' id='blog'>
      {isSingleBlogOpen && <SingleBlogPost closeSingleBlog={closeSingleBlog} />}
      <div className='flex items-center justify-center text-center'>
        <Title title=' VISIT MY BLOG AND KEEP YOUR FEEDBACK' des='My Blogs' />
      </div>
      <div className='blogs-container'>
        {blogs
          .slice(0, 3)
          .map(blog =>
            <Singleblogmodal
              key={blog._id}
              _id={blog._id}
              category={blog.category}
              image={blog.image}
              date={blog.date}
              readmin={blog.readmin}
              title={blog.title}
              description={blog.description}
              comments={blog.comments}
              commentedBy={blog.commentedBy}
              likes={blog.likes}
              dislikes={blog.dislikes}
              onClick={() => handleSingleBlogShowing(blog)}
            />
          )}
      </div>
    </section>
  )
}

export default Blog
