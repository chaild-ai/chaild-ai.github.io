import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
