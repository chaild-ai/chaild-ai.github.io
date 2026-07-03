import React from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import People from "./people/People";
import Blogs from "./blogs/Blogs";
import ScrollToTopButton from "./topbutton/Top";
import { StyleProvider } from "../contexts/StyleContext";
import { useDarkTheme } from "../hooks/useDarkTheme";
import "./Main.scss";

const Main = () => {
  const [isDark, toggleTheme] = useDarkTheme();

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: toggleTheme }}>
        <Header />
        <main id="main-content">
          <Greeting />
          <Blogs />
          <Skills />
          <People />
        </main>
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
};

export default Main;
