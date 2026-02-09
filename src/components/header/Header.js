import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  skillsSection,
  peopleSection,
  blogSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewSkills = skillsSection.display;
  const viewPeople = peopleSection.display;
  const viewBlog = blogSection.display;
  
  // Detect if we're on a blog page
  const isOnBlogPage = window.location.pathname.startsWith("/blog");
  
  // Helper to create correct link based on current page.
  // Use full origin when on a different page so anchors work with custom domains.
  const getLink = (anchor) => {
    if (isOnBlogPage) {
      return `${window.location.origin}/#${anchor}`;
    }
    return `#${anchor}`;
  };

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href={getLink("skills")}>Our mission</a>
            </li>
          )}
          {viewPeople && (
            <li>
              <a href={getLink("people")}>Our people</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="/blog">News</a>
            </li>
          )}
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
