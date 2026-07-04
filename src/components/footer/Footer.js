import React, { useContext } from "react";
import "./Footer.scss";
import StyleContext from "../../contexts/StyleContext";
import { footerSection } from "../../portfolio";
import oxfordCsLogo from "../../assets/images/logos/oxford-cs-POS_RGB.jpg";
import oxfordCsLogoDark from "../../assets/images/logos/oxford-cs-NEG_RGB.jpg";
import ieaiLogo from "../../assets/images/logos/ieai-light.png";
import ieaiLogoDark from "../../assets/images/logos/ieai-dark.png";
import uclLogo from "../../assets/images/logos/ucl.svg";
import uclLogoDark from "../../assets/images/logos/ucl-inverted.svg";
import ukriLogo from "../../assets/images/logos/ukri.svg";
import ukriLogoDark from "../../assets/images/logos/ukri-inverted.svg";

// Each partner supplies a light-theme logo and a dark-theme variant so the
// footer strip stays legible in both themes.
const partners = [
  {
    name: "University of Oxford, Department of Computer Science",
    logo: oxfordCsLogo,
    logoDark: oxfordCsLogoDark,
    url: "https://www.cs.ox.ac.uk/"
  },
  {
    name: "University of Oxford, Institute for Ethics in AI",
    logo: ieaiLogo,
    logoDark: ieaiLogoDark,
    url: "https://www.oxford-aiethics.ox.ac.uk/"
  },
  {
    name: "UCL Institute of Education, Knowledge Lab",
    logo: uclLogo,
    logoDark: uclLogoDark,
    url: "https://www.ucl.ac.uk/ioe/departments-and-centres/centres/ucl-knowledge-lab"
  },
  {
    name: "UK Research and Innovation (UKRI)",
    logo: ukriLogo,
    logoDark: ukriLogoDark,
    url: "https://www.ukri.org/"
  }
];

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  const textClass = isDark ? "dark-mode footer-text" : "footer-text";
  const year = new Date().getFullYear();

  return (
    <footer className={isDark ? "dark-mode footer-div fade-in-up" : "footer-div fade-in-up"}>
      <ul className="footer-partner-logos">
        {partners.map((partner) => (
          <li key={partner.name}>
            <a
              href={partner.url}
              target="_blank"
              rel="noreferrer"
              title={partner.name}
            >
              <img
                src={isDark ? partner.logoDark : partner.logo}
                alt={partner.name}
              />
            </a>
          </li>
        ))}
      </ul>

      <p className={textClass}>
        {footerSection.grantName} (
        <a href={footerSection.grantUrl} target="_blank" rel="noreferrer">
          {footerSection.grantRef}
        </a>
        )
      </p>

      <p className={`${textClass} footer-disclaimer`}>
        {footerSection.disclaimer}
      </p>

      <p className={textClass}>
        © {year} {footerSection.copyrightName}
      </p>
    </footer>
  );
}
