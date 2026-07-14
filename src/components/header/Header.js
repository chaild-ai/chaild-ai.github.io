import React, {useContext, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {greeting, blogSection} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const viewBlog = blogSection.display;

  const closeMenu = () => setIsMenuOpen(false);

  const menuClasses = [
    "menu",
    isDark ? "dark-menu" : "",
    isMenuOpen ? "menu-open" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <button
          type="button"
          className="menu-icon"
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
          aria-label="Menu"
          onClick={() => setIsMenuOpen(open => !open)}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </button>
        <nav aria-label="Main">
          <ul id="nav-menu" className={menuClasses}>
            <li>
              <a href="/" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="/publications" onClick={closeMenu}>
                Publications
              </a>
            </li>
            <li>
              <a href="/resources" onClick={closeMenu}>
                Resources
              </a>
            </li>
            {viewBlog && (
              <li>
                <a href="/blog" onClick={closeMenu}>
                  News
                </a>
              </li>
            )}
            <li className="switch-item">
              <ToggleSwitch />
            </li>
          </ul>
        </nav>
      </header>
    </Headroom>
  );
}
export default Header;
