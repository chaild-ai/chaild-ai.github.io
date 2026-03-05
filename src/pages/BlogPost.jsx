import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import ScrollToTopButton from "../containers/topbutton/Top";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Fade } from "react-reveal";
import { fetchAndParseBlog } from "../utils/parseFrontmatter";
import "./BlogPost.scss";

export default function BlogPost({ slug }) {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [post, setPost] = useState(null);
  const [mdContent, setMdContent] = useState(null);
  const [MdRenderer, setMdRenderer] = useState(null);
  const [remarkPlugins, setRemarkPlugins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      const blogPost = await fetchAndParseBlog(slug);
      if (!blogPost) {
        setPost(null);
        setLoading(false);
        return;
      }
      setPost(blogPost);
      // Extract content from the parsed frontmatter result
      setMdContent(blogPost.content);
      setLoading(false);
    }

    loadPost();

    async function loadRenderer() {
      try {
        const rm = await import("react-markdown");
        const gfm = await import("remark-gfm");
        setMdRenderer(() => rm.default);
        setRemarkPlugins([gfm.default]);
      } catch (e) {
        setMdRenderer(null);
      }
    }

    loadRenderer();
  }, [slug]);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  if (loading) {
    return (
      <div className={isDark ? "dark-mode" : null}>
        <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
          <Header />
          <div className="blog-post-container">
            <p>Loading...</p>
          </div>
          <ScrollToTopButton />
        </StyleProvider>
      </div>
    );
  }

  if (!post) {
    return (
      <div className={isDark ? "dark-mode" : null}>
        <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
          <Header />
          <div className="blog-post-container">
            <h1>Post not found</h1>
            <a href="/blog">← Back to all posts</a>
          </div>
          <ScrollToTopButton />
        </StyleProvider>
      </div>
    );
  }

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        <Header />
        <Fade bottom duration={1000} distance="20px">
          <div className="blog-post-container">
            <a href="/blog" className="back-link">
              ← Back to all posts
            </a>
            <h1 className={isDark ? "dark-mode blog-post-title" : "blog-post-title"}>
              {post.title}
            </h1>
            {/* <p className={isDark ? "dark-mode blog-post-description" : "blog-post-description"}>
              {post.description}
            </p> */}

            {/* Display tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="blog-post-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className={`blog-tag ${isDark ? "dark-mode" : ""}`}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Display date */}
            {post.date && (
              <p className={`blog-post-date ${isDark ? "dark-mode" : ""}`}>
                Published: {new Date(post.date).toLocaleDateString()}
              </p>
            )}

            {mdContent ? (
              MdRenderer ? (
                <div className="blog-markdown">
                  <MdRenderer remarkPlugins={remarkPlugins}>{mdContent}</MdRenderer>
                </div>
              ) : (
                <pre style={{ whiteSpace: "pre-wrap" }}>{mdContent}</pre>
              )
            ) : (
              <p>Loading content…</p>
            )}

            {post.url && (
              <a href={post.url} target="_blank" rel="noreferrer" className="read-more-link">
                Original / Download
              </a>
            )}
          </div>
        </Fade>
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
}