export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 3,
        name: 'Technologies',
        href: '#technologies',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Imatia',
        position: 'Founder',
        img: 'assets/review2.png',
        review:
            'Working with Alejandro was an excellent experience. His expertise in Angular and Ontimize helped us deliver a robust and user-friendly application.',
    },
    {
        id: 2,
        name: 'Groove In Club',
        position: 'Event Manager at Groove In Club',
        img: 'assets/review-groove.png',
        review:
            'Alejandro desarrolló un sitio web espectacular para nuestra productora de DJs, utilizando tecnología 3D para destacar nuestros eventos y artistas. Su enfoque innovador y atención al detalle llevaron nuestra presencia en línea a un nuevo nivel. ¡Altamente recomendado!',
    },
];


export const myProjects = [
    {
        title: 'Galicia Map Quiz',
        desc: 'An interactive map-based game to test knowledge of Galicia’s comarcas. Players can guess locations and improve their geographical skills.',
        subdesc:
            'Developed using Python and Tkinter, this project highlights Alejandro’s passion for education and technology.',
        href: '#',
        texture: '/textures/project/galicia-map.mp4',
        logo: '/assets/project-logo-galicia.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight-galicia.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python.svg',
            },
            {
                id: 2,
                name: 'Tkinter',
                path: '/assets/tkinter.svg',
            },
        ],
    },
    {
        title: 'Coworking Manager',
        desc: 'A complete application to manage coworking spaces, allowing users to reserve spots, manage events, and search by services.',
        subdesc:
            'Built with Angular, Ontimize Web, and Spring Boot, it features advanced filtering and CRUD operations.',
        href: '#',
        texture: '/textures/project/coworking.mp4',
        logo: '/assets/project-logo-coworking.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight-coworking.png',
        tags: [
            {
                id: 1,
                name: 'Angular',
                path: '/assets/angular.svg',
            },
            {
                id: 2,
                name: 'Ontimize',
                path: '/assets/ontimize.svg',
            },
            {
                id: 3,
                name: 'Spring Boot',
                path: '/assets/spring.svg',
            },
        ],
    },
    {
        title: 'Groove In Club Website',
        desc: 'An immersive 3D website for a DJ production house, showcasing their events, artists, and brand identity in a visually stunning format.',
        subdesc:
            'Built with React Three Fiber and TailwindCSS, this project demonstrates Alejandro’s ability to create interactive and engaging web experiences.',
        href: '#',
        texture: '/textures/project/groove-in-club.mp4',
        logo: '/assets/project-logo-groove.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight-groove.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'React Three Fiber',
                path: '/assets/react-three-fiber.svg',
            },
            {
                id: 3,
                name: 'TailwindCSS',
                path: '/assets/tailwindcss.png',
            },
        ],
    },
    {
        title: 'AWS Analytics Lab',
        desc: 'A data analytics lab to process and visualize data efficiently using AWS services like CloudFormation and S3.',
        subdesc:
            'Demonstrates Alejandro’s skills in cloud computing and data analysis using state-of-the-art AWS tools.',
        href: '#',
        texture: '/textures/project/aws-lab.mp4',
        logo: '/assets/project-logo-aws.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight-aws.png',
        tags: [
            {
                id: 1,
                name: 'AWS',
                path: '/assets/aws.svg',
            },
            {
                id: 2,
                name: 'CloudFormation',
                path: '/assets/cloudformation.svg',
            },
        ],
    },
    {
        title: 'Herramienta de Conversión y Mapeo de GeoJSON',
        desc: 'Una herramienta diseñada para convertir archivos GML del Catastro Español a GeoJSON y visualizarlos en un mapa interactivo utilizando Folium.',
        subdesc:
            'Este proyecto demuestra habilidades avanzadas en procesamiento de datos espaciales con Python, incluyendo la transformación de coordenadas y la creación de mapas interactivos para análisis geoespacial.',
        href: '#',
        texture: '/textures/project/geojson-tool.mp4',
        logo: '/assets/project-logo-geojson.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight-geojson.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python.svg',
            },
            {
                id: 2,
                name: 'Folium',
                path: '/assets/folium.svg',
            },
            {
                id: 3,
                name: 'GDAL',
                path: '/assets/gdal.svg',
            },
        ],
    },
    {
        title: 'Aplicación de Gestión Inmobiliaria',
        desc: 'Una solución integral para gestionar operaciones inmobiliarias, construida con Angular, Java Spring Boot y MySQL.',
        subdesc:
            'Este proyecto combina un potente backend en Spring Boot con una interfaz intuitiva en Angular y una base de datos MySQL para garantizar la eficiencia y confiabilidad en la gestión de datos inmobiliarios.',
        href: '#',
        texture: '/textures/project/real-estate.mp4',
        logo: '/assets/project-logo-real-estate.png',
        logoStyle: {
            backgroundColor: '#1A2B3C',
            border: '0.2px solid #2A3C4D',
            boxShadow: '0px 0px 60px 0px #3D5A6C4D',
        },
        spotlight: '/assets/spotlight-real-estate.png',
        tags: [
            {
                id: 1,
                name: 'Angular',
                path: '/assets/angular.svg',
            },
            {
                id: 2,
                name: 'Java Spring Boot',
                path: '/assets/spring-boot.svg',
            },
            {
                id: 3,
                name: 'MySQL',
                path: '/assets/mysql.svg',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Ontimize Solutions',
        pos: 'Frontend Developer',
        duration: '2023 - Present',
        title:
            'Working with Ontimize to develop robust and scalable web applications with Angular and Spring Boot. Focused on delivering seamless user experiences.',
        icon: '/assets/ontimize.svg',
        animation: 'coding',
    },
    {
        id: 2,
        name: 'Groove In Club',
        pos: 'Frontend Developer',
        duration: '2023',
        title:
            'Diseñé y desarrollé un sitio web inmersivo para Groove In Club, utilizando React Three Fiber para crear experiencias interactivas 3D que destacaron los eventos y artistas de la productora. La web mejoró significativamente la interacción del usuario y la visibilidad de la marca.',
        icon: '/assets/groove-in-club.svg',
        animation: 'music',
    },
    {
        id: 3,
        name: 'GeoData Analytics',
        pos: 'Geospatial Developer',
        duration: '2023 - Present',
        title:
            'Desarrollé herramientas avanzadas de análisis y visualización de datos espaciales, incluyendo la conversión de formatos y la generación de mapas interactivos para proyectos basados en datos catastrales.',
        icon: '/assets/gis.svg',
        animation: 'globe',
    },
    {
        id: 4,
        name: 'Real Estate Tech Solutions',
        pos: 'Full-Stack Developer',
        duration: '2022 - Present',
        title:
            'Participe en eldesarrollo de una aplicación de gestión inmobiliaria con Angular en el frontend, Java Spring Boot en el backend, y MySQL como base de datos. Enfocado en la escalabilidad, seguridad y experiencia de usuario optimizada.',
        icon: '/assets/real-estate.svg',
        animation: 'building',
    },
];
