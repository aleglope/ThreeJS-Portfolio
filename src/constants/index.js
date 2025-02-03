export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 3,
    name: "Technologies",
    href: "#technologies",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Imatia",
    position: "senior developer at Imatia",
    img: "assets/review2.png",
    review:
      "Working with Alejandro was an excellent experience. His expertise in Angular and Ontimize helped us deliver a robust and user-friendly application.",
  },
  {
    id: 2,
    name: "Groove In Club",
    position: "Event Manager at Groove In Club",
    img: "assets/djbrenlla.png",
    review:
      "Alejandro developed a spectacular website for our DJ production house, using 3D technology to highlight our events and artists. His innovative approach and attention to detail took our online presence to a new level. Highly recommended!",
  },
];

export const myProjects = [
  {
    title: "Turtle Race Game",
    desc: "A fun Python-based game using the turtle module where players bet on turtles of specific colors and compete to win coins.",
    subdesc:
      "This project showcases Alejandro’s skills in Python and game development using the standard library, emphasizing logic and user interaction.",
    href: "#",
    texture: "/textures/project/TurtleRace.mp4",
    logo: "/assets/turtle.png",
    logoStyle: {
      backgroundColor: "#5C4C00",
      background:
        "linear-gradient(0deg, rgba(92, 76, 0, 0.5), rgba(92, 76, 0, 0.5)), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(92, 76, 0, 1)",
      boxShadow: "0px 0px 60px 0px rgba(92, 76, 0, 0.5)",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/Python.svg",
      },
    ],
    sourceCode: "https://github.com/aleglope/Turtle-Race",
  },
  {
    title: "Billboard to Spotify Playlist",
    desc: "A Python-based program to create Spotify playlists from Billboard Hot 100 songs for a specific date. Ideal for music enthusiasts and developers looking to integrate APIs.",
    subdesc:
      "Developed using Python, this project demonstrates proficiency in web scraping, API integration, and automation.",
    href: "#",
    texture: "/textures/project/SearchSongs.mp4",
    logo: "/assets/spotify.png",
    logoStyle: {
      backgroundColor: "#1DB954",
      background:
        "linear-gradient(0deg, #1DB95450, #1DB95450), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(29, 185, 84, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/Python.svg",
      },
      {
        id: 2,
        name: "Web Scraping",
        path: "/assets/beautifulsoup.png",
      },
      {
        id: 3,
        name: "Requests",
        path: "/assets/request.png",
      },
    ],
    sourceCode: "https://github.com/aleglope/Song-Search-Engine",
  },
  {
    title: "Galicia Map Quiz",
    desc: "An interactive map-based game to test knowledge of Galicia’s comarcas. Players can guess locations and improve their geographical skills.",
    subdesc:
      "Developed using Python and Tkinter, this project highlights Alejandro’s passion for education and technology.",
    href: "#",
    texture: "/textures/project/Regions.mp4",
    logo: "/assets/galicia.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/Python.svg",
      },
    ],
    sourceCode: "https://github.com/aleglope/Game-of-Regions",
  },
  {
    title: "Coworking Manager",
    desc: "A complete application to manage coworking spaces, allowing users to reserve spots, manage events, and search by services.",
    subdesc:
      "Built with Angular, Ontimize Web, and Spring Boot, it features advanced filtering and CRUD operations.",
    href: "#",
    texture: "/textures/project/Coworking.mp4",
    logo: "/assets/sidenav-opened.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Ontimize",
        path: "/assets/ontimize.svg",
      },
      {
        id: 2,
        name: "Angular",
        path: "/assets/angular.svg",
      },
      {
        id: 3,
        name: "Java",
        path: "/assets/java.svg",
      },
      {
        id: 4,
        name: "Spring Boot",
        path: "/assets/springboot.svg",
      },
      {
        id: 5,
        name: "PostgreSQL",
        path: "/assets/Postgresql.svg",
      },
    ],
    sourceCode: "https://github.com/CampusDual/cd2024bfs5g1",
  },
  {
    title: "Groove In Club Website",
    desc: "An immersive 3D website for a DJ production house, showcasing their events, artists, and brand identity in a visually stunning format.",
    subdesc:
      "Built with React Three Fiber and TailwindCSS, this project demonstrates Alejandro’s ability to create interactive and engaging web experiences.",
    href: "https://www.grooveinclub.es/",
    texture: "/textures/project/Groove.mp4",
    logo: "/assets/LOGO GROOVE.svg",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Three.js",
        path: "/assets/threejs.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 4,
        name: "Next.js",
        path: "/assets/nextjs.svg",
      },
      {
        id: 5,
        name: "Typescript.js",
        path: "/assets/typescript.png",
      },
    ],
    sourceCode: "#",
  },
  {
    title: "GeoJSON Conversion and Mapping Tool",
    desc: "A tool designed to convert GML files from the Spanish Cadastre to GeoJSON and visualize them on an interactive map using Folium.",
    subdesc:
      "This project showcases advanced skills in spatial data processing with Python, including coordinate transformation and the creation of interactive maps for geospatial analysis.",
    href: "/assets/mapa_con_geojson.html",
    texture: "/textures/project/GeoJson.mp4",
    logo: "/assets/map.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/Python.svg",
      },
    ],
    sourceCode: "https://github.com/aleglope/Land-Parcel-Mapping",
  },
  {
    title: "Real Estate Management Application",
    desc: "An all-in-one solution for managing real estate operations, built with Angular, Java Spring Boot, and MySQL.",
    subdesc:
      "This project combines a backend in Spring Boot with an intuitive Angular interface and a MySQL database for real estate data management",
    href: "#",
    texture: "/textures/project/RealState.mp4",
    logo: "/assets/inmobiliaria.png",
    logoStyle: {
      backgroundColor: "#1A2B3C",
      border: "0.2px solid #2A3C4D",
      boxShadow: "0px 0px 60px 0px #3D5A6C4D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Angular",
        path: "/assets/angular.svg",
      },
      {
        id: 2,
        name: "Java Spring Boot",
        path: "/assets/springboot.svg",
      },
      {
        id: 3,
        name: "MySQL",
        path: "/assets/Mysql.svg",
      },
    ],
    sourceCode: "https://github.com/aleglope/Real-Estate-Backend",
  },
  {
    title: "Restaurant Frontend in React",
    desc: "A modern and attractive frontend application designed for a restaurant. The interface enhances user experience with well-defined sections such as the restaurant introduction, special menu, chef, gallery, and more.",
    subdesc:
      "This project leverages React components to ensure a clean, modular architecture, providing an efficient and scalable solution for frontend development.",
    href: "https://restaurant-phi-six.vercel.app/",
    texture: "/textures/project/RestFront.mp4",
    logo: "/assets/restaurant.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/react.svg",
      },
    ],
    sourceCode: "https://github.com/aleglope/Restaurant-Menu",
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Imatia Bootcamp - Work Wander",
    pos: "Full-Stack Developer Trainee",
    duration: "2024 - Present",
    title:
      "Currently participating in an intensive bootcamp at Imatia, focusing on full-stack development with Angular, Ontimize framework, and Spring Boot. Learning enterprise-level application development and best practices.",
    icon: "/assets/sidenav-opened.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "Groove In Club",
    pos: "Fulstack Developer",
    duration: "2024",
    title:
      "Designed and developed an immersive website for Groove In Club using React Three Fiber to create interactive 3D experiences highlighting the producer's events and artists. The website significantly improved user engagement and brand visibility.",
    icon: "/assets/LOGO GROOVE.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Ipartek Bootcamp - Real Estate Solutions",
    pos: "Full-Stack Developer Trainee",
    duration: "2024",
    title:
      "Contributed to the development of a real estate management application using Angular for frontend, Java Spring Boot for backend, and MySQL for database. Focused on scalability, security, and optimized user experience.",
    icon: "/assets/inmobiliaria.png",
    animation: "salute",
  },
];
