import React, { useEffect } from "react";
import Header from "../components/header/Header";
import ScrollToTopButton from "../containers/topbutton/Top";
import Footer from "../components/footer/Footer";
import { StyleProvider } from "../contexts/StyleContext";
import { useDarkTheme } from "../hooks/useDarkTheme";
import "./NotFound.scss";

export default function NotFound() {
  const [isDark, toggleTheme] = useDarkTheme();

  useEffect(() => {
    document.title = "Page not found | CHAILD";
  }, []);

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: toggleTheme }}>
        <Header />
        <main id="main-content" className="not-found-container fade-in-up">
          <h1 className={isDark ? "dark-mode not-found-title" : "not-found-title"}>
            Page not found
          </h1>
          <p className={isDark ? "dark-mode not-found-text" : "not-found-text"}>
            Sorry, we couldn't find the page you were looking for. It may have
            moved, or the link may be incorrect.
          </p>
          <a href="/" className="not-found-home-link">
            ← Back to home
          </a>
        </main>
        <Footer />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
}
