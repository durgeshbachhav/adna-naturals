import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Blog from "../components/Blog";
import image from "../assets/textures/texture1.png";

import blogs from "../data/blogs/blogsdata";

const Blogpage = () => {
  return (
    <Layout>
      <HeroSection title="Our Blogs" image={image} />
      <section className="mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogs.map((blog, index) => (
              <Blog key={index} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blogpage;
