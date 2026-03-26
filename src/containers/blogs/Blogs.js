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
  const [mediumBlogs, setMediumBlogs] = useState([]);
  
  function setMediumBlogsFunction(array) {
    setMediumBlogs(array);
  }
  
  //Medium API returns blogs' content in HTML format. Below function extracts blogs' text content within paragraph tags
  function extractTextContent(html) {
    return typeof html === "string"
      ? html
          .split("p>")
          .filter(el => !el.includes(">"))
          .map(el => el.replace("</", ".").replace("<", ""))
          .join(" ")
      : NaN;
  }
  
  useEffect(() => {
    // Fetch blog metadata from markdown files
    async function loadBlogs() {
      const blogData = await fetchAllBlogMetadata(blogSection.blogSlugs);
      setBlogs(blogData);
    }
    loadBlogs();

    if (blogSection.displayMediumBlogs === "true") {
      const getProfileData = () => {
        fetch("/blogs.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            setMediumBlogsFunction(response.items);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error Blogs section could not be displayed. Blogs section has reverted to default)`
            );
            setMediumBlogsFunction("Error");
            blogSection.displayMediumBlogs = "false";
          });
      };
      getProfileData();
    }
  }, []);
  
  if (!blogSection.display) {
    return null;
  }
  
  const isUsingMedium = blogSection.displayMediumBlogs === "true" && mediumBlogs !== "Error";
  const displayedBlogs = isUsingMedium ? mediumBlogs.slice(0, 8) : blogs.slice(0, 8);
  
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
                    url: isUsingMedium ? blog.link : `/blog/${blog.slug}`,
                    image: isUsingMedium ? null : blog.image,
                    title: blog.title,
                    description: isUsingMedium ? extractTextContent(blog.content) : blog.description
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