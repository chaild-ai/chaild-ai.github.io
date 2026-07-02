import React, {useContext} from "react";
import "./People.scss";
import emoji from "react-easy-emoji";
import {peopleSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function People() {
  const {isDark} = useContext(StyleContext);
  if (!peopleSection.display) {
    return null;
  }

  const renderGroup = group => (
    <div key={group.title}>
      <h3
        className={
          isDark
            ? "dark-mode subTitle people-text people-group-title"
            : "subTitle people-text people-group-title"
        }
      >
        {group.title}
      </h3>
      <ul className="people-list">
        {group.members.map((member, i) => (
          <li
            key={i}
            className={
              isDark ? "dark-mode subTitle people-text" : "subTitle people-text"
            }
          >
            <span aria-hidden="true">{emoji("⚡ ")}</span>
            {member}
          </li>
        ))}
      </ul>
    </div>
  );

  const [firstGroup, ...otherGroups] = peopleSection.peopleGroups;

  return (
    <section
      className={isDark ? "dark-mode main" : "main"}
      id="people"
      aria-labelledby="people-heading"
    >
      <div className="people-main-div">
        <Fade left duration={1000}>
          <div className="people-text-div">
            <h2
              id="people-heading"
              className={isDark ? "dark-mode people-heading" : "people-heading"}
            >
              {peopleSection.title}{" "}
            </h2>
            <p
              className={
                isDark
                  ? "dark-mode subTitle people-text-subtitle"
                  : "subTitle people-text-subtitle"
              }
            >
              {peopleSection.subTitle}
            </p>
            <div className="people-text-row-div">
              <div className="people-text-col-div">
                {renderGroup(firstGroup)}
              </div>
              <div>{otherGroups.map(renderGroup)}</div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
