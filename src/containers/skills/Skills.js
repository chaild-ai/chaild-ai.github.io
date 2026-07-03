import React, {useContext} from "react";
import "./Skills.scss";
import emoji from "react-easy-emoji";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <section
      className={isDark ? "dark-mode main" : "main"}
      id="skills"
      aria-labelledby="skills-heading"
    >
      <div className="skills-main-div">
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h2
              id="skills-heading"
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h2>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <ul className="skills-list">
              {skillsSection.skills.map((skill, i) => {
                return (
                  <li
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    <span aria-hidden="true">{emoji("⚡ ")}</span>
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        </Fade>
      </div>
    </section>
  );
}
