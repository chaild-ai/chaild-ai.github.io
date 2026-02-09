import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

function App() {
  const pathname = window.location.pathname;
  const blogMatch = pathname.match(/^\/blog\/(.+)$/);

  if (blogMatch) {
    return <BlogPost slug={blogMatch[1]} />;
  }

  if (pathname === "/blog") {
    return <BlogList />;
  }

  return <Main />;
}

export default App;
