import React from "react";
import "./Blog.css";
import { blog1, blog2, blog3 } from "../../assets";

const Blog = () => {
  return (
    <section id="blog-info">
      <h2 className="light">Latest Posts</h2>
      <div className="blog-content">
        <div className="posts-container">
          <div className="daw">
            <a href="#" className="daw-btn">
              DAW
            </a>
            <img src={blog1} alt="" />
            <p>How To Use Drum Machine in Logic Pro X</p>
          </div>
          <div className="daw">
            <a href="#" className="daw-btn">
              Mixing
            </a>
            <img src={blog2} alt="" />
            <p>How To Mix Guitars Effectively</p>
          </div>
          <div className="daw">
            <a href="#" className="daw-btn">
              Vox
            </a>
            <img src={blog3} alt="" />
            <p>The Real Power of Harmonies in Music Production</p>
          </div>
        </div>
        <a href="#" className="all-posts">
          All Posts
        </a>
      </div>
    </section>
  );
};

export default Blog;
