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
    "A UKRI research project defining and designing Children's agency in the age of AI"
  ),
  displayGreeting: true // Set false to hide this section, defaults to true
};


// Skills Section

const skillsSection = {
  title: "What we do",
  subTitle: "Our missions!!!",
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



const caseStudies = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

// people involved in the project
const bigProjects = {
  title: "Who we are",
  subtitle: "Researchers involved in the project",
  projects: [
    emoji(
      "⚡ Co-investigators"
    ),
    emoji(
      "⚡ Researchers"
    ),
    emoji(
      "⚡ Associated researchers"
    )
  ],
  display: true // Set false to hide this section, defaults to true
};


export {
  illustration,
  greeting,
  splashScreen,
  skillsSection,
  caseStudies,
  bigProjects
};
