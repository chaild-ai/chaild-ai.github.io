import React, { useContext } from "react";
import "./Footer.scss";
import StyleContext from "../../contexts/StyleContext";
import { footerSection } from "../../portfolio";
import oxfordCsLogo from "../../assets/images/logos/oxford-cs.svg";
import oxfordPhilosophyLogo from "../../assets/images/logos/oxford-philosophy.png";
import uclLogo from "../../assets/images/logos/ucl.svg";
import ukriLogo from "../../assets/images/logos/ukri.svg";

const partners = [
  {
    name: "University of Oxford, Department of Computer Science",
    logo: oxfordCsLogo,
    url: "https://www.cs.ox.ac.uk/"
  },
  {
    name: "University of Oxford, Faculty of Philosophy",
    logo: oxfordPhilosophyLogo,
    url: "https://www.philosophy.ox.ac.uk/"
  },
  {
    name: "UCL Institute of Education, Knowledge Lab",
    logo: uclLogo,
    url: "https://www.ucl.ac.uk/ioe/departments-and-centres/centres/ucl-knowledge-lab"
  },
  {
    name: "UK Research and Innovation (UKRI)",
    logo: ukriLogo,
    url: "https://www.ukri.org/"
  }
];

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  const textClass = isDark ? "dark-mode footer-text" : "footer-text";
  const year = new Date().getFullYear();

  return (
    <footer className="footer-div fade-in-up">
      <ul className="footer-partner-logos">
        {partners.map((partner) => (
          <li key={partner.name}>
            <a
              href={partner.url}
              target="_blank"
              rel="noreferrer"
              title={partner.name}
            >
              <img src={partner.logo} alt={partner.name} />
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
