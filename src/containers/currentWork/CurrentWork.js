import React, { useContext } from "react";
import "./CurrentWork.scss";
import StyleContext from "../../contexts/StyleContext";

// What the team is currently working on / what's coming next.
// Edit this list as activities change; `url` is optional.
const currentWork = {
  title: "What we're working on",
  subtitle: "Current and upcoming CHAILD activities",
  items: [
    {
      text: "Co-design studies with teenagers",
      description:
        "Working with young people to understand how generative AI supports or undermines their agency, and designing better tools together.",
      url: "/blog/youth-advisory-group-2"
    }
  ],
  display: true
};

export default function CurrentWork() {
  const { isDark } = useContext(StyleContext);

  if (!currentWork.display || currentWork.items.length === 0) {
    return null;
  }

  return (
    <div
      className={isDark ? "dark-mode current-work-card" : "current-work-card"}
    >
      <h3 className="current-work-heading">{currentWork.title}</h3>
      <p
        className={
          isDark
            ? "dark-mode current-work-subtitle"
            : "subTitle current-work-subtitle"
        }
      >
        {currentWork.subtitle}
      </p>
      <ul className="current-work-list">
        {currentWork.items.map((item) => (
          <li
            key={item.text}
            className={
              isDark ? "dark-mode current-work-item" : "current-work-item"
            }
          >
            <span className="current-work-item-title">{item.text}</span>
            {item.description && (
              <span className="current-work-item-description">
                {" — "}
                {item.description}
              </span>
            )}
            {item.url && (
              <>
                {" "}
                <a className="current-work-item-link" href={item.url}>
                  Read more →
                </a>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
