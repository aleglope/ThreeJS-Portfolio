// Navigation links for Design Portfolio
export const designNavLinks = [
  {
    id: 1,
    href: "#home",
  },
  {
    id: 2,
    href: "#design-projects",
  },
  {
    id: 3,
    href: "#video-showcase",
  },
  {
    id: 4,
    href: "#contact",
  },
];

// Design Projects data
export const designProjects = [
  {
    id: 1,
    category: "Graphic Design",
    image: "/assets/MatematicGalaxy.jpeg",
    tags: [
      "UX/UI Design",
      "AI Logo Creation",
      "Brand Identity",
      "Web Design",
      "Visual Systems",
    ],
    hasDetailPage: true,
    slug: "brand-identity-design",
  },
  {
    id: 2,
    category: "AI Content",
    videoUrl: "/assets/MandalaIA.jpeg",
    tags: [
      "AI Video Generation",
      "AI Avatars",
      "Automated Advertising",
      "Brand Storytelling",
    ],
    hasDetailPage: true,
    slug: "ai-advertising-content",
  },
  {
    id: 3,
    category: "Music & Events",
    image: "/assets/MatematicNeon.jpeg",
    tags: [
      "VJing",
      "Psychedelic Art",
      "Concert Posters",
      "Live Visuals",
      "Music Events",
    ],
    hasDetailPage: true,
    slug: "music-event-visuals",
  },
  {
    id: 4,
    image: "/assets/MatematicAurora.jpeg",
    tags: ["Video Production", "Color Grading", "Sound Design"],
    hasDetailPage: true,
    slug: "ai-photographic-art",
    category: "AI Photography",
  },
];

// Detailed project data with videos
export const projectDetails = {
  "brand-identity-design": {
    id: 1,
    year: "2024",
    tags: [
      "UX/UI Design",
      "AI Logo Creation",
      "Brand Identity",
      "Web Design",
      "Visual Systems",
      "User Experience",
      "Interface Design",
      "Brand Strategy",
      "AI-Enhanced Design",
      "Digital Branding",
    ],
    coverImage: "/assets/AIBrand.png",
    imageGallery: {
      Brand: [
        {
          id: 1,
          image: "/assets/brands/marca1.png",
        },
        {
          id: 2,
          image: "/assets/brands/marca2.png",
        },
        {
          id: 3,
          image: "/assets/brands/marca3.jpeg",
        },
        {
          id: 4,
          image: "/assets/brands/marca4.jpeg",
        },
        {
          id: 5,
          image: "/assets/brands/marca5.png",
        },
        {
          id: 6,
          image: "/assets/brands/marca6.jpeg",
        },
        {
          id: 7,
          image: "/assets/brands/marca7.jpeg",
        },
        {
          id: 8,
          image: "/assets/brands/marca8.jpeg",
        },
        {
          id: 9,
          image: "/assets/brands/marca9.png",
        },
        {
          id: 10,
          image: "/assets/brands/marca10.png",
        },
        {
          id: 11,
          image: "/assets/brands/marca11.jpeg",
        },
        {
          id: 12,
          image: "/assets/brands/marca12.jpeg",
        },
        {
          id: 13,
          image: "/assets/brands/marca13.png",
        },
        {
          id: 14,
          image: "/assets/brands/marca14.jpeg",
        },
        {
          id: 15,
          image: "/assets/brands/marca15.png",
        },
      ],
      "UI/UX Designs": [
        {
          id: 7,
          image: "/assets/MatematicGalaxy.jpeg",
        },
        {
          id: 8,
          image: "/assets/MatematicNeon.jpeg",
        },
        {
          id: 9,
          image: "/assets/MatematicAurora.jpeg",
        },
      ],
      Logos: [
        {
          id: 1,
          image: "/assets/logos/logo1.jpeg",
        },
        {
          id: 2,
          image: "/assets/logos/logo2.jpeg",
        },
        {
          id: 3,
          image: "/assets/logos/logo8.jpeg",
        },
        {
          id: 4,
          image: "/assets/logos/logo9.jpeg",
        },
        {
          id: 5,
          image: "/assets/logos/logo10.jpeg",
        },
        {
          id: 6,
          image: "/assets/logos/logo11.jpeg",
        },
        {
          id: 7,
          image: "/assets/logos/logo12.jpeg",
        },
        {
          id: 8,
          image: "/assets/logos/logo7.jpeg",
        },
        {
          id: 9,
          image: "/assets/logos/logo13.jpeg",
        },
        {
          id: 10,
          image: "/assets/logos/logo14.jpeg",
        },
        {
          id: 11,
          image: "/assets/logos/logo3.jpeg",
        },
        {
          id: 12,
          image: "/assets/logos/logo4.jpeg",
        },
        {
          id: 13,
          image: "/assets/logos/logo5.jpeg",
        },
        {
          id: 14,
          image: "/assets/logos/logo6.jpeg",
        },
      ],
    },
    videos: [
      {
        id: 1,
        videoUrl: "https://www.youtube.com/shorts/bPf5CPI8kGg",
        thumbnail: "/assets/jewelry_thumbnail.png",
        duration: "1:20",
      },
    ],
  },
  "ai-advertising-content": {
    id: 2,
    year: "2025",
    tags: [
      "AI Video Generation",
      "AI Avatars",
      "Automated Advertising",
      "Brand Storytelling",
      "Machine Learning",
      "Neural Networks",
      "Deep Learning",
      "Creative AI",
    ],
    coverImage: "/assets/AIGeneratedAdvertising.png",
    videos: [
      {
        id: 1,
        videoUrl: "https://www.youtube.com/shorts/W5W5vN9W628",
        thumbnail: "/assets/spotlight1.png",
        duration: "1:02",
      },
      {
        id: 2,
        videoUrl: "https://youtube.com/shorts/d0cXdWOA9TA?feature=share",
        thumbnail: "/assets/spotlight2.png",
        duration: "00:23",
      },
      {
        id: 3,
        videoUrl: "https://www.youtube.com/shorts/-48FW7i6peE",
        thumbnail: "/assets/spotlight3.png",
        duration: "00:51",
      },
      {
        id: 4,
        videoUrl: "https://youtube.com/shorts/P_b8DT46CHM?feature=share",
        thumbnail: "/assets/spotlight4.png",
        duration: "00:25",
      },
      {
        id: 5,
        videoUrl: "https://www.youtube.com/shorts/o0IVhvMOUqE",
        thumbnail: "/assets/spotlight5.png",
        duration: "00:30",
      },
    ],
  },
  "music-event-visuals": {
    id: 3,
    year: "2024",
    tags: [
      "VJing",
      "Psychedelic Art",
      "Concert Posters",
      "Live Visuals",
      "Music Events",
      "Electronic Music",
      "Festival Design",
      "Real-time Graphics",
      "Audio-visual Sync",
    ],
    coverImage: "/assets/photoVJing.png",
    imageGallery: {
      posters: [
        {
          id: 1,
          image: "/assets/poster/carteles1.jpg",
        },
        {
          id: 2,
          image: "/assets/poster/carteles2.jpeg",
        },
        {
          id: 3,
          image: "/assets/poster/carteles3.jpeg",
        },
        {
          id: 4,
          image: "/assets/poster/carteles4.jpeg",
        },
        {
          id: 5,
          image: "/assets/poster/carteles5.jpeg",
        },
        {
          id: 6,
          image: "/assets/poster/carteles6.jpeg",
        },
        {
          id: 7,
          image: "/assets/poster/carteles7.jpeg",
        },
        {
          id: 8,
          image: "/assets/poster/carteles8.jpeg",
        },
        {
          id: 9,
          image: "/assets/poster/carteles9.jpeg",
        },
        {
          id: 10,
          image: "/assets/poster/carteles10.jpeg",
        },
        {
          id: 11,
          image: "/assets/poster/carteles11.jpg",
        },
        {
          id: 12,
          image: "/assets/poster/carteles14.jpg",
        },
        {
          id: 13,
          image: "/assets/poster/carteles15.png",
        },
        {
          id: 14,
          image: "/assets/poster/carteles16.jpg",
        },
        {
          id: 15,
          image: "/assets/poster/carteles17.jpg",
        },
        {
          id: 16,
          image: "/assets/poster/carteles18.jpg",
        },
        {
          id: 17,
          image: "/assets/poster/carteles19.jpg",
        },
        {
          id: 18,
          image: "/assets/poster/carteles20.jpg",
        },
        {
          id: 19,
          image: "/assets/poster/carteles21.jpg",
        },
        {
          id: 20,
          image: "/assets/poster/carteles22.jpg",
        },
        {
          id: 21,
          image: "/assets/poster/carteles23.jpg",
        },
        {
          id: 22,
          image: "/assets/poster/carteles24.jpg",
        },
        {
          id: 23,
          image: "/assets/poster/carteles25.jpg",
        },
        {
          id: 24,
          image: "/assets/poster/carteles26.png",
        },
        {
          id: 25,
          image: "/assets/poster/carteles27.jpg",
        },
        {
          id: 26,
          image: "/assets/poster/carteles13.png",
        },
        {
          id: 27,
          image: "/assets/poster/carteles12.jpg",
        },
      ],
    },
    videos: [
      {
        id: 1,
        videoUrl: "https://www.youtube.com/watch?v=vOZjQxlaAPY",
        thumbnail: "/assets/spotlight1.png",
        duration: "00:25",
      },
      {
        id: 2,
        videoUrl: "https://www.youtube.com/watch?v=zwHNArb4730",
        thumbnail: "/assets/spotlight2.png",
        duration: "00:16",
      },
      {
        id: 3,
        videoUrl: "https://youtube.com/shorts/H7lUU5mzyio?feature=share",
        thumbnail: "/assets/spotlight3.png",
        duration: "02:57",
      },
      {
        id: 4,
        videoUrl: "https://www.youtube.com/watch?v=Pthshy6sEHY",
        thumbnail: "/assets/spotlight4.png",
        duration: "02:15",
      },
      {
        id: 5,
        videoUrl: "https://www.youtube.com/watch?v=1LTbk3_hLCU",
        thumbnail: "/assets/spotlight2.png",
        duration: "05:00",
      },
    ],
  },
  "ai-photographic-art": {
    id: 4,
    year: "2025",
    tags: [
      "artistic photography",
      "digital art",
      "AI photography",
      "innovative visuals",
      "AI-powered photography",
    ],
    coverImage: "/assets/photoart/art1.png",
    imageGallery: {
      photographicArt: [
        {
          id: 1,
          image: "/assets/photoart/art1.png",
        },
        {
          id: 2,
          image: "/assets/photoart/art2.jpeg",
        },
        {
          id: 3,
          image: "/assets/photoart/art3.png",
        },
        {
          id: 4,
          image: "/assets/photoart/art4.jpeg",
        },
        {
          id: 5,
          image: "/assets/photoart/art5.jpeg",
        },
        {
          id: 6,
          image: "/assets/photoart/art6.jpeg",
        },
        {
          id: 7,
          image: "/assets/photoart/art7.jpeg",
        },
        {
          id: 8,
          image: "/assets/photoart/art8.jpeg",
        },
        {
          id: 9,
          image: "/assets/photoart/art9.jpeg",
        },
        {
          id: 10,
          image: "/assets/photoart/art10.jpeg",
        },
        {
          id: 11,
          image: "/assets/photoart/art11.jpeg",
        },
        {
          id: 12,
          image: "/assets/photoart/art12.jpeg",
        },
        {
          id: 13,
          image: "/assets/photoart/art13.jpeg",
        },
        {
          id: 14,
          image: "/assets/photoart/art14.jpeg",
        },
        {
          id: 15,
          image: "/assets/photoart/art15.jpeg",
        },
        {
          id: 16,
          image: "/assets/photoart/art16.jpeg",
        },
        {
          id: 17,
          image: "/assets/photoart/art17.png",
        },
        {
          id: 18,
          image: "/assets/photoart/art18.png",
        },
      ],
    },
    videos: [
      {
        id: 1,
        videoUrl: "https://youtube.com/shorts/7UwD7YRqOLg?feature=share",
        thumbnail: "/assets/spotlight1.png",
        duration: "00:28",
      },
      {
        id: 2,
        videoUrl: "https://youtube.com/shorts/jrcoY_lo0Nw?feature=share",
        thumbnail: "/assets/spotlight2.png",
        duration: "00:41",
      },
    ],
  },
};

// Video Showcase data
export const videoShowcase = [
  {
    id: 1,
    thumbnail: "/assets/spotlight1.png",
    duration: "00:30",
    videoUrl: "https://www.youtube.com/shorts/o0IVhvMOUqE",
  },
  {
    id: 2,
    thumbnail: "/assets/spotlight2.png",
    duration: "00:28",
    videoUrl: "https://youtube.com/shorts/7UwD7YRqOLg?feature=share",
  },
  {
    id: 3,
    thumbnail: "/assets/spotlight3.png",
    duration: "00:41",
    videoUrl: "https://youtube.com/shorts/jrcoY_lo0Nw?feature=share",
  },
  {
    id: 4,
    thumbnail: "/assets/spotlight4.png",
    duration: "00:25",
    videoUrl: "https://youtube.com/shorts/P_b8DT46CHM?feature=share",
  },
  // Professional/Corporate Content
  {
    id: 5,
    thumbnail: "/assets/spotlight5.png",
    duration: "00:45",
    videoUrl: "https://www.youtube.com/shorts/W5W5vN9W628",
  },
  {
    id: 6,
    thumbnail: "/assets/spotlight1.png",
    duration: "01:15",
    videoUrl: "https://youtube.com/shorts/d0cXdWOA9TA?feature=share",
  },
  {
    id: 7,
    thumbnail: "/assets/spotlight2.png",
    duration: "00:35",
    videoUrl: "https://www.youtube.com/shorts/-48FW7i6peE",
  },
  {
    id: 8,
    thumbnail: "/assets/spotlight3.png",
    duration: "00:55",
    videoUrl: "https://youtube.com/shorts/vOZjQxlaAPY",
  },
];

// Project categories for filtering
export const designCategories = [
  "All",
  "AI Content",
  "Music & Events",
  "Graphic Design",
  "Video Editing",
];

// Project types for contact form
export const projectTypes = [
  { value: "ai-video" },
  { value: "ai-avatars" },
  { value: "automated-ads" },
  { value: "ai-logo-design" },
  { value: "ux-ui-design" },
  { value: "vj-events" },
  { value: "concert-posters" },
  { value: "music-videos" },
  { value: "design" },
  { value: "video" },
  { value: "motion" },
  { value: "branding" },
  { value: "other" },
];

// Design & Branding skills
export const videoSkills = [
  {
    id: 1,
    gradient: "from-cyan-500 to-blue-600",
    iconComponent: "MdAutoAwesome",
  },
  {
    id: 2,
    gradient: "from-purple-500 to-pink-600",
    iconComponent: "MdDesignServices",
  },
  {
    id: 3,
    gradient: "from-blue-500 to-indigo-600",
    iconComponent: "MdAnalytics",
  },
  {
    id: 4,
    gradient: "from-violet-500 to-purple-600",
    iconComponent: "MdTextFields",
  },
  {
    id: 5,
    gradient: "from-pink-500 to-rose-600",
    iconComponent: "MdColorLens",
  },
  {
    id: 6,
    gradient: "from-purple-600 to-pink-500",
    iconComponent: "MdBrush",
  },
  {
    id: 7,
    gradient: "from-orange-500 to-red-600",
    iconComponent: "MdVideocam",
  },
  {
    id: 8,
    gradient: "from-green-500 to-teal-600",
    iconComponent: "MdMovieEdit",
  },
  {
    id: 9,
    gradient: "from-teal-500 to-cyan-600",
    iconComponent: "MdFolderSpecial",
  },
];
