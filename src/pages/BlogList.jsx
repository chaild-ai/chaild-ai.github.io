import React, { useContext } from "react";
import Header from "../components/header/Header";
import BlogCard from "../components/blogCard/BlogCard";
import ScrollToTopButton from "../containers/topbutton/Top";
import { blogSection } from "../portfolio";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Fade } from "react-reveal";
import "../containers/blogs/Blog.scss";

export default function BlogList() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        <Header />
        <Fade bottom duration={1000} distance="20px">
          <div className="main" id="blogs">
            <div className="blog-header">
              <h1 className="blog-header-text">{blogSection.title}</h1>
              <p className={isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"}>
                {blogSection.subtitle}
              </p>
            </div>
            <div className="blog-main-div">
              <div className="blog-text-div">
                {blogSection.blogs.map((blog, i) => (
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
                ))}
              </div>
            </div>
          </div>
        </Fade>
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
}