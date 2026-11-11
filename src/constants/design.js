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
    hasDetailPage: true,
    slug: "brand-identity-design",
  },
  {
    id: 2,
    category: "AI Content",
    videoUrl: "/assets/MandalaIA.jpeg",
    hasDetailPage: true,
    slug: "ai-advertising-content",
  },
  {
    id: 3,
    category: "Music & Events",
    image: "/assets/MatematicNeon.jpeg",
    hasDetailPage: true,
    slug: "music-event-visuals",
  },
  {
    id: 4,
    image: "/assets/MatematicAurora.jpeg",
    hasDetailPage: true,
    slug: "ai-photographic-art",
    category: "AI Photography",
  },
];

// Text and tags are localized in src/locales. Video dimensions come from docs/qa/mobile-2026-11-11.json.
export const projectDetails = {
  "brand-identity-design": {
    id: 1,
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
      "Visual Studies": [
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
        width: 720, height: 720,
        thumbnail: "https://i.ytimg.com/vi/bPf5CPI8kGg/hqdefault.jpg",
        duration: "1:20",
      },
    ],
  },
  "ai-advertising-content": {
    id: 2,
    coverImage: "/assets/AIGeneratedAdvertising.png",
    videos: [
      {
        id: 1,
        videoUrl: "https://www.youtube.com/shorts/W5W5vN9W628",
        width: 720, height: 1280,
        thumbnail: "https://i.ytimg.com/vi/W5W5vN9W628/hqdefault.jpg",
        duration: "1:02",
      },
      {
        id: 2,
        videoUrl: "https://youtube.com/shorts/d0cXdWOA9TA?feature=share",
        width: 720, height: 1280,
        thumbnail: "https://i.ytimg.com/vi/d0cXdWOA9TA/hqdefault.jpg",
        duration: "0:22",
      },
      {
        id: 3,
        videoUrl: "https://www.youtube.com/shorts/-48FW7i6peE",
        width: 720, height: 820,
        thumbnail: "https://i.ytimg.com/vi/-48FW7i6peE/hqdefault.jpg",
        duration: "0:51",
      },
      {
        id: 4,
        videoUrl: "https://youtube.com/shorts/P_b8DT46CHM?feature=share",
        width: 720, height: 1280,
        thumbnail: "https://i.ytimg.com/vi/P_b8DT46CHM/hqdefault.jpg",
        duration: "0:13",
      },
      {
        id: 5,
        videoUrl: "https://www.youtube.com/shorts/o0IVhvMOUqE",
        width: 592, height: 1072,
        thumbnail: "https://i.ytimg.com/vi/o0IVhvMOUqE/hqdefault.jpg",
        duration: "0:12",
      },
    ],
  },
  "music-event-visuals": {
    id: 3,
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
        width: 480, height: 480,
        thumbnail: "https://i.ytimg.com/vi/vOZjQxlaAPY/hqdefault.jpg",
        duration: "0:24",
      },
      {
        id: 2,
        videoUrl: "https://www.youtube.com/watch?v=zwHNArb4730",
        width: 854, height: 480,
        thumbnail: "https://i.ytimg.com/vi/zwHNArb4730/hqdefault.jpg",
        duration: "0:16",
      },
      {
        id: 3,
        videoUrl: "https://youtube.com/shorts/H7lUU5mzyio?feature=share",
        width: 720, height: 1280,
        thumbnail: "https://i.ytimg.com/vi/H7lUU5mzyio/hqdefault.jpg",
        duration: "2:57",
      },
      {
        id: 4,
        videoUrl: "https://www.youtube.com/watch?v=Pthshy6sEHY",
        width: 640, height: 360,
        thumbnail: "https://i.ytimg.com/vi/Pthshy6sEHY/hqdefault.jpg",
        duration: "2:14",
      },
      {
        id: 5,
        videoUrl: "https://www.youtube.com/watch?v=1LTbk3_hLCU",
        width: 356, height: 640,
        thumbnail: "https://i.ytimg.com/vi/1LTbk3_hLCU/hqdefault.jpg",
        duration: "5:01",
      },
    ],
  },
  "ai-photographic-art": {
    id: 4,
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
        width: 720, height: 720,
        thumbnail: "https://i.ytimg.com/vi/7UwD7YRqOLg/hqdefault.jpg",
        duration: "0:28",
      },
      {
        id: 2,
        videoUrl: "https://youtube.com/shorts/jrcoY_lo0Nw?feature=share",
        width: 720, height: 1280,
        thumbnail: "https://i.ytimg.com/vi/jrcoY_lo0Nw/hqdefault.jpg",
        duration: "0:40",
      },
    ],
  },
};

// Project categories for filtering
export const designCategories = [
  "All",
  "Client Work",
  "AI Content",
  "Music & Events",
  "Graphic Design",
  "AI Photography",
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
