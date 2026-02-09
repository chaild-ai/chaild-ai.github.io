import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import ScrollToTopButton from "../containers/topbutton/Top";
import { blogSection } from "../portfolio";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Fade } from "react-reveal";
import "./BlogPost.scss";

export default function BlogPost({ slug }) {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [mdContent, setMdContent] = useState(null);
  const [MdRenderer, setMdRenderer] = useState(null);
  const [remarkPlugins, setRemarkPlugins] = useState([]);

  const post = blogSection.blogs.find((b) => b.slug === slug);

  useEffect(() => {
    async function loadMd() {
      try {
        const res = await fetch(`/content/blog/${slug}.md`);
        if (!res.ok) {
          setMdContent(`# ${post ? post.title : "Not found"}\n\nContent not available.`);
          return;
        }
        const text = await res.text();
        setMdContent(text);
      } catch (e) {
        setMdContent(`# ${post ? post.title : "Not found"}\n\nContent could not be loaded.`);
      }
    }

    loadMd();

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

            {mdContent ? (
              MdRenderer ? (
                <div className="blog-markdown">
                  <MdRenderer remarkPlugins={remarkPlugins}>{mdContent}</MdRenderer>
                </div>
              ) : (
                <pre style={{ whiteSpace: "pre-wrap" }}>{mdContent}</pre>
              )
            ) : (
              <p>Loading…</p>
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