import React from "react";
import "./BlogCard.scss";

export default function BlogCard({blog, isDark}) {
  function handleClick() {
    if (!blog.url) {
      console.log(`URL for ${blog.title} not found`);
      return;
    }
    // Check if it's an internal link
    if (blog.url.startsWith("/")) {
      window.location.href = blog.url;
    } else {
      // External link
      var win = window.open(blog.url, "_blank");
      win.focus();
    }
  }

  return (
    <div onClick={handleClick}>
      <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        <a
          className={
            isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
          }
          href="#blog"
        >
          <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
            {blog.title}
          </h3>
          <p className={isDark ? "small-dark small" : "small"}>
            {blog.description}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
