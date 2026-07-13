import React from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import AudiencePaths from "./audiencePaths/AudiencePaths";
import CurrentWork from "./currentWork/CurrentWork";
import People from "./people/People";
import Blogs from "./blogs/Blogs";
import ScrollToTopButton from "./topbutton/Top";
import Footer from "../components/footer/Footer";
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
          <AudiencePaths />
          <CurrentWork />
          <Blogs />
          <Skills />
          <People />
        </main>
        <Footer />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
};

export default Main;
