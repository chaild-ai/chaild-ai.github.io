/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

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
    emoji(
      "⚡ Defining children’s critical agency in the digital context"
    ),
    emoji("⚡ Establishing approaches to assess the impact on agency"),
    emoji(
      "⚡ Developing design principles for agency"
    ),
    emoji(
      "⚡ Creating new guidelines for parental and educational support"
    ),
    emoji(
      "⚡ Formulating policy recommendations to prioritise children’s agency"
    )
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
  people1: [
    "Co-investigators:",
    emoji(
      "⚡ Professor Sir Nigel Shadbolt, University of Oxford"
    ),
    emoji("⚡ Dr Jun Zhao, University of Oxford"),
    emoji(
      "⚡ Professor Manolis Mavrikis, University College London"
    ),
    emoji(
      "⚡ Dr Carina Prunkl, Utrecht University"
    ),
    emoji(
      "⚡ Professor Kaśka Porayska-Pomsta, University College London"
    ),
    emoji(
      "⚡ Professor Wayne Holmes, University College London"
    ),
    emoji(
      "⚡ Baroness Beeban Kidron, 5Rights Foundation"
    ),

  ],
  people2: [
    "Researchers:",
    emoji(
      "⚡ Vidminas Vizgirda, University College London and University of Oxford"
    ),
    emoji(
      "⚡ Dr Isobel Voysey, University of Oxford"
    ),
    "Associated researchers:",
    emoji(
      "⚡ Zaki Pauzi, University College London"
    ),
    emoji(
      "⚡ Dr Sarah Turner, University College London"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  display: true // Set false to hide this section, defaults to true
};

const blogSection = {
  title: "News",
  subtitle: "Read our latest updates",
  display: true, // Set false to hide this section, defaults to true
  displayMediumBlogs: "true", // Set true or false to display Medium blogs, defaults to false
  blogs: [
    {
      url: "https://oxfordccai.org/cfp/20-24-07-llm/",
      image: require("./assets/images/developerActivity.svg"),
      title: "Our new research study with children and genAI",
      description: "Support children's use of genAI and making better sense of genAI outputs"
    },
    {
      url: "./static/media/WhitePaper.653df15585af837b56f0.pdf",
      title: "Our first white paper",
      description:
        "Missions and challenges of the CHAILD project"
    }
  ]
};

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

const socialMediaLinks = {
  twitter: "https://x.com/oxfordccai",
  github: "https://github.com/OxfordHCC",
  display: true // Set true to display this section, defaults to false
};


export {
  illustration,
  greeting,
  splashScreen,
  socialMediaLinks,
  skillsSection,
  peopleSection,
  blogSection,
};
