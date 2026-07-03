import React, { useContext } from "react";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import childrenWaving from "../../assets/lottie/childrenWaving";
import childrenWavingStill from "../../assets/images/childrenWaving.svg";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <section
      className="greet-main fade-in-up"
      id="greeting"
      aria-labelledby="greeting-heading"
    >
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1
              id="greeting-heading"
              className={isDark ? "dark-mode greeting-text" : "greeting-text"}
            >
              {" "}
              {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode greeting-text-p"
                  : "greeting-text-p subTitle"
              }
            >
              {greeting.subTitle}
            </p>
            <div className="button-greeting-div">
              {greeting.resumeLink && (
                <Button
                  text="Download our white paper"
                  href="/static/media/CHAILD-white-paper-1.pdf"
                  download="CHAILD-white-paper-1.pdf"
                  className="download-link-button"
                />
              )}
            </div>
          </div>
        </div>
        <div className="greeting-image-div" aria-hidden="true">
          {prefersReducedMotion ? (
            <img alt="" src={childrenWavingStill} />
          ) : (
            <DisplayLottie animationData={childrenWaving} />
          )}
        </div>
      </div>
    </section>
  );
}
