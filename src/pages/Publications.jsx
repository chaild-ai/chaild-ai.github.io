import React, { useEffect } from "react";
import Header from "../components/header/Header";
import ScrollToTopButton from "../containers/topbutton/Top";
import Footer from "../components/footer/Footer";
import { StyleProvider } from "../contexts/StyleContext";
import { useDarkTheme } from "../hooks/useDarkTheme";
import { publications, publicationSections } from "../publications";
import "./Publications.scss";

export default function Publications() {
  const [isDark, toggleTheme] = useDarkTheme();

  useEffect(() => {
    document.title = "Publications | CHAILD";
  }, []);

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: toggleTheme }}>
        <Header />
        <main id="main-content" className="publications-container fade-in-up">
          <h1
            className={
              isDark ? "dark-mode publications-title" : "publications-title"
            }
          >
            Publications
          </h1>
          <p
            className={
              isDark
                ? "dark-mode publications-intro"
                : "subTitle publications-intro"
            }
          >
            Papers, talks, and reports by the CHAILD team and our collaborators.
          </p>

          {publicationSections.map((section) => {
            const items = publications
              .filter((p) => p.type === section.type)
              .sort((a, b) => b.year - a.year);
            if (items.length === 0) {
              return null;
            }
            return (
              <section
                key={section.type}
                className="publications-section"
                aria-label={section.title}
              >
                <h2
                  className={
                    isDark
                      ? "dark-mode publications-section-title"
                      : "publications-section-title"
                  }
                >
                  {section.title}
                </h2>
                <ul className="publications-list">
                  {items.map((pub, i) => (
                    <li
                      key={`${pub.title}-${i}`}
                      className={
                        isDark ? "dark-mode publication" : "publication"
                      }
                    >
                      {pub.authors && (
                        <span className="publication-authors">
                          {pub.authors}{" "}
                        </span>
                      )}
                      <span className="publication-year">({pub.year}). </span>
                      <span className="publication-work-title">
                        {pub.title}
                      </span>
                      {pub.venue && (
                        <span className="publication-venue">. {pub.venue}</span>
                      )}
                      <span className="publication-links">
                        {pub.url && (
                          <>
                            {" "}
                            <a
                              href={pub.url}
                              target="_blank"
                              rel="noreferrer"
                              className="publication-link"
                            >
                              Link
                            </a>
                          </>
                        )}
                        {pub.post && (
                          <>
                            {" · "}
                            <a
                              href={`/blog/${pub.post}`}
                              className="publication-link"
                            >
                              Our news
                            </a>
                          </>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </main>
        <Footer />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
}
