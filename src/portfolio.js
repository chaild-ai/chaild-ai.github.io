/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "CHAILD",
  title: "Hi, Welcome to CHAILD",
  subTitle: emoji(
    "A UKRI research project defining and designing children's agency in the age of AI"
  ),
  resumeLink: true,
  displayGreeting: true // Set false to hide this section, defaults to true
};


// Skills Section

const skillsSection = {
  title: "What we do",
  subTitle: "Our missions",
  skills: [
    "Defining children’s critical agency in the digital context",
    "Establishing approaches to assess the impact on agency",
    "Developing design principles for agency",
    "Creating new guidelines for parental and educational support",
    "Formulating policy recommendations to prioritise children’s agency"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // 
  ],
  display: true // Set false to hide this section, defaults to true
};


// People Section

const peopleSection = {
  title: "Who we are",
  subTitle: "A multidisciplinary team of researchers",
  // Each group renders as a sub-heading with a list of members.
  // The first group appears in the left column, the rest in the right.
  peopleGroups: [
    {
      title: "Co-investigators:",
      members: [
        "Professor Sir Nigel Shadbolt, University of Oxford",
        "Dr Jun Zhao, University of Oxford",
        "Professor Manolis Mavrikis, University College London",
        "Dr Carina Prunkl, University of Oxford",
        "Professor Kaśka Porayska-Pomsta, University College London",
        "Professor Wayne Holmes, University College London",
        "Baroness Beeban Kidron, 5Rights Foundation"
      ]
    },
    {
      title: "Postdoctoral researchers:",
      members: [
        "Dr Leslye Dias Duran, University of Oxford",
        "Dr Vidminas Vizgirda, University College London and University of Oxford",
        "Dr Isobel Voysey, University of Oxford",
        "Dr Zaki Pauzi, University College London"
      ]
    },
    {
      title: "Associated researchers:",
      members: [
        "Dr Sarah Turner, University College London"
      ]
    }
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  display: true // Set false to hide this section, defaults to true
};

const blogSection = {
  title: "News",
  subtitle: "Read our latest updates",
  display: true, // Set false to hide this section, defaults to true
  // Blog slugs: metadata is loaded from markdown frontmatter in /public/content/blog/<slug>.md
  blogSlugs: [
    "chaild-at-chi-2026",
    "youth-advisory-group-2",
    "youth-prism-first",
    "youth-advisory-group-kickoff",
    "agency-lit-review",
    "white-paper-2",
    "royal-society-2026",
    "mpls-ai-ethics-conf",
    "chi-workshop-2026",
    "funding-youth-advisory",
    "study-genai",
    "white-paper"
  ]
};

const socialMediaLinks = {
  twitter: "https://x.com/oxfordccai",
  github: "https://github.com/OxfordHCC",
  display: true // Set true to display this section, defaults to false
};

// Footer Section (partner logos live in Footer.js, next to their imports)
const footerSection = {
  grantName:
    "CHAILD — Children's Agency In the age of AI: Leveraging InterDisciplinarity",
  grantRef: "UKRI ref. MR/Z505882/1",
  grantUrl: "https://gtr.ukri.org/projects?ref=MR%2FZ505882%2F1",
  disclaimer:
    "Institution and funder logos are the property of their respective owners; they are shown to acknowledge our partners and funding and do not imply endorsement.",
  copyrightName: "CHAILD project"
};


export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  peopleSection,
  blogSection,
  footerSection,
};
