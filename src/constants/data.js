import images from "./images";

export const skills = [
  {
    name: "Html5",
    icon: images.html,
  },
  {
    name: "Css3",
    icon: images.css,
  },
  {
    name: "Sass",
    icon: images.sass,
  },
  {
    name: "JavaScript",
    icon: images.js,
  },
  {
    name: "React",
    icon: images.react,
  },
  {
    name: "Redux",
    icon: images.redux,
  },
  {
    name: "MUI",
    icon: images.mu5,
  },
  {
    name: "PHP",
    icon: images.php,
  },
  {
    name: "MySQL",
    icon: images.mysql,
  },
  {
    name: "Node JS",
    icon: images.node,
  },
  {
    name: "Git",
    icon: images.git,
  },
];

export const experiences = [
  {
    year: "2017",
    works: [
      {
        name: "PSD TO HTML",
        company: "Freelancer",
        desc: "Converting PSD to HTML/CSS websites",
      },
      {
        name: "Front-End Developer",
        company: "Freelancer",
        desc: "Making more Interactive Websites using JS/JQUERY and Awesome Designs with Bootstrap",
      },
    ],
  },
  {
    year: "2019",
    works: [
      {
        name: "PHP Developer",
        company: "Freelancer",
        desc: "Start To make my Websites more Dynamic Working with PHP/MySQL",
      },
    ],
  },
  {
    year: "2021",
    works: [
      {
        name: "Front-End React Developer",
        company: "Freelancer",
        desc: "Making Front-End Skills More Effective by Working with Such framework React",
      },
      {
        name: "MERN-Stack Developer",
        company: "Freelancer",
        desc: "Adding Node JS to React to make Full Dynamic Website",
      },
    ],
  },
];
export const testimonials = [
  {
    year: "2017",

    name: "PSD TO HTML",
    company: "Freelancer",
    desc: "Converting PSD to HTML/CSS websites",
  },
  {
    year: "2018",
    name: "Front-End Developer",
    company: "Freelancer",
    desc: "Making more Interactive Websites using JS/JQUERY and Awesome Designs with Bootstrap",
  },

  {
    year: "2019",

    name: "PHP Developer",
    company: "Freelancer",
    desc: "Start To make my Websites more Dynamic Working with PHP/MySQL",
  },

  {
    year: "2021",
    name: "Front-End React Developer",
    company: "Freelancer",
    desc: "Making Front-End Skills More Effective by Working with Such framework React",
  },
  {
    year: "2021",
    name: "Node Js Developer",
    company: "Freelancer",
    desc: "Adding Node JS to React to make Full Dynamic Website",
  },
  {
    year: "Current",
    name: "Full-Stack Developer",
    company: "Freelancer",
    desc: "Full Stack Developer Mern-Stack and PHP",
  },
];

export const works = [
  {
    id: "1",
    imgUrl: images.gym1,
    name: "Gym App",
    type: "Full-Stack Website",
    projectLink: "https://fittnesgym.netlify.app/",
    codeLink: "https://github.com/colonel14/gym-react",
    title: "Gym App",
    description: "Gym Web App (Fetc All Exercies from Rapid API",
    tags: ["React Js"],
    techs: [
      { bgColor: "#80DEEA", name: "React" },
      { bgColor: "#E65100", name: "HTML" },
      { bgColor: "#007FFF", name: "MUI" },
      { bgColor: "#CF649A", name: "Sass" },
    ],
    gallery: [images.gym1, images.gym2, images.gym3, images.gym4, images.gym6],
  },
  {
    id: "2",
    imgUrl: images.reactDashboard1,
    name: "UI React Dashbaord",
    type: "Front-End Website",
    projectLink: "https://reactdashboardui.netlify.app/",
    codeLink: "https://github.com/colonel14/react-dashboard",
    title: "React Dashboard",
    description: "Dashboard-UI for Multi-Vendor eCommerce Webiste using react",
    tags: ["React Js"],
    techs: [
      { bgColor: "#80DEEA", name: "React" },
      { bgColor: "#E65100", name: "HTML" },
      { bgColor: "#007FFF", name: "MUI" },
      { bgColor: "#CF649A", name: "Sass" },
    ],
    gallery: [
      images.reactDashboard1,
      images.reactDashboard2,
      images.reactDashboard3,
      images.reactDashboard4,
    ],
  },
  {
    id: "3",
    imgUrl: images.flatRent1,
    name: "PHP Flat Rent Website",
    type: "Full-Stack Website",
    projectLink: "https://reactdashboardui.netlify.app/",
    codeLink: "https://github.com/colonel14/react-dashboard",
    title: "PHP Flat Rent Website",
    description:
      "Flat Rent Website with multiple type of users. owner who can offer his flat on the website. and customer can view differenct Flats",
    tags: ["php"],
    techs: [
      { bgColor: "#E65100", name: "HTML" },
      { bgColor: "#119CD5", name: "CSS" },
      { bgColor: "#F7E018", name: "JS" },
      { bgColor: "#4F5B93", name: "PHP" },
    ],
    gallery: [
      images.flatRent2,
      images.flatRent1,
      images.flatRent3,
      images.flatRent4,
      images.flatRent5,
      images.flatRent6,
      images.flatRent7,
      images.flatRent8,
      images.flatRent9,
    ],
  },
  {
    id: "4",
    imgUrl: images.resturant1,
    name: "React",
    type: "Full-Stack Website",
    projectLink: "https://gerichtresturant.netlify.app/",
    codeLink: "https://github.com/colonel14/gericht-resturant",
    title: "Resturant UI (React)",
    description: "The Front Design of resturant with React",
    tags: ["React Js"],
    techs: [
      { bgColor: "#E65100", name: "HTML" },
      { bgColor: "#119CD5", name: "CSS" },
      { bgColor: "#F7E018", name: "JS" },
      { bgColor: "#80DEEA", name: "React" },
    ],
    gallery: [
      images.resturant1,
      images.resturant2,
      images.resturant3,
      images.resturant4,
      images.resturant5,
      images.resturant6,
      images.resturant7,
    ],
  },
  // {
  //   id: "5",
  //   imgUrl: images.flatRent1,
  //   name: "PHP Flat Rent Website",
  //   type: "Full-Stack Website",
  //   projectLink: "https://reactdashboardui.netlify.app/",
  //   codeLink: "https://github.com/colonel14/react-dashboard",
  //   title: "Reservation App UI",
  //   description:
  //     "Flat Rent Website with multiple type of users. owner who can offer his flat on the website. and customer can view differenct Flats",
  //   tags: ["React Js"],
  //   techs: [
  //     { bgColor: "#E65100", name: "HTML" },
  //     { bgColor: "#119CD5", name: "CSS" },
  //     { bgColor: "#F7E018", name: "JS" },
  //     { bgColor: "#4F5B93", name: "PHP" },
  //   ],
  //   gallery: [
  //     images.flatRent2,
  //     images.flatRent1,
  //     images.flatRent3,
  //     images.flatRent4,
  //     images.flatRent5,
  //     images.flatRent6,
  //     images.flatRent7,
  //     images.flatRent8,
  //     images.flatRent9,
  //   ],
  // },
];
