import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import BlogCard from "../components/blogCard/BlogCard";
import ScrollToTopButton from "../containers/topbutton/Top";
import { blogSection } from "../portfolio";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Fade } from "react-reveal";
import { fetchAllBlogMetadata } from "../utils/parseFrontmatter";
import "../containers/blogs/Blog.scss";
import "./BlogList.scss";

export default function BlogList() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [blogs, setBlogs] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    // Fetch all blog metadata from markdown files
    async function loadBlogs() {
      const blogData = await fetchAllBlogMetadata(blogSection.blogSlugs);
      setBlogs(blogData);

      // Extract unique tags from all blogs
      const tags = new Set();
      blogData.forEach((blog) => {
        if (blog.tags && Array.isArray(blog.tags)) {
          blog.tags.forEach((tag) => tags.add(tag));
        }
      });
      setAllTags(Array.from(tags).sort());
    }

    loadBlogs();
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  // Filter blogs by selected tags (show if any selected tag matches)
  const filteredBlogs =
    selectedTags.length === 0
      ? blogs
      : blogs.filter((blog) =>
          blog.tags && blog.tags.some((tag) => selectedTags.includes(tag))
        );

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
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

            {/* Tag Filter */}
            {allTags.length > 0 && (
              <div className="blog-tags-filter">
                <p className="tags-label">Filter by tags:</p>
                <div className="tags-container">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      className={`tag-button ${
                        selectedTags.includes(tag) ? "active" : ""
                      } ${isDark ? "dark-mode" : ""}`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="blog-main-div">
              <div className="blog-text-div">
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog, i) => (
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
                  ))
                ) : (
                  <p className={isDark ? "dark-mode" : ""}>
                    No blogs match the selected tags.
                  </p>
                )}
              </div>
            </div>
          </div>
        </Fade>
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
}