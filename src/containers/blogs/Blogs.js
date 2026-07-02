import React, {useState, useEffect, useContext} from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { fetchAllBlogMetadata } from "../../utils/parseFrontmatter";

export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blog metadata from markdown files
    async function loadBlogs() {
      const blogData = await fetchAllBlogMetadata(blogSection.blogSlugs);
      setBlogs(blogData);
    }
    loadBlogs();
  }, []);

  if (!blogSection.display) {
    return null;
  }

  const displayedBlogs = blogs.slice(0, 8);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blogSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {displayedBlogs.map((blog, i) => {
              return (
                <BlogCard
                  key={i}
                  isDark={isDark}
                  blog={{
                    url: `/blog/${blog.slug}`,
                    image: blog.image,
                    title: blog.title,
                    description: blog.description
                  }}
                />
              );
            })}
            <BlogCard
              key="more-news"
              isDark={isDark}
              blog={{
                url: "/blog",
                title: "More news...",
                description: "Click here to see all our news and updates"
              }}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
