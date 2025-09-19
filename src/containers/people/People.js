import React, {useContext} from "react";
import "./People.scss";
// import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, peopleSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function People() {
  const {isDark} = useContext(StyleContext);
  if (!peopleSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="people">
      <div className="people-main-div">
        <Fade left duration={1000}>
          <div className="people-text-div">
            <h1
              className={isDark ? "dark-mode people-heading" : "people-heading"}
            >
              {peopleSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle people-text-subtitle"
                  : "subTitle people-text-subtitle"
              }
            >
              {peopleSection.subTitle}
            </p>
            {/* <SoftwareSkill /> */}
            <div className="people-text-row-div">
              <div className="people-text-col-div">
                {peopleSection.people1.map((people1, i) => {
                  return (
                    <p
                      key={i}
                      className={
                        isDark
                          ? "dark-mode subTitle people-text"
                          : "subTitle people-text"
                      }
                    >
                      {people1}
                    </p>
                  );
                })}
              </div>
              <div>
                {peopleSection.people2.map((people2, i) => {
                  return (
                    <p
                      key={i}
                      className={
                        isDark
                          ? "dark-mode subTitle people-text"
                          : "subTitle people-text"
                      }
                    >
                      {people2}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
