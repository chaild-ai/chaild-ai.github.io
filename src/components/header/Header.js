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
          {viewBlog && (
            <li>
              <a href="#blogs">News</a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#skills">Our mission</a>
            </li>
          )}
          {viewPeople && (
            <li>
              <a href="#people">Our people</a>
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
