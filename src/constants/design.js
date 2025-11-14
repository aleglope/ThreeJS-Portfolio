// Navigation links for Design Portfolio
export const designNavLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "Projects",
    href: "#design-projects",
  },
  {
    id: 3,
    name: "Videos",
    href: "#video-showcase",
  },
  {
    id: 4,
    name: "Contact",
    href: "#design-contact",
  },
];

// Design Projects data
export const designProjects = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "Graphic Design",
    description:
      "Complete brand identity package including logo, color palette, and brand guidelines.",
    image: "/assets/grid1.png",
    tags: ["Branding", "Logo Design", "Visual Identity"],
    hasDetailPage: true,
    slug: "brand-identity-design",
  },
  {
    id: 2,
    title: "Product Showcase Video",
    category: "Video Editing",
    description:
      "Dynamic product showcase with motion graphics and professional color grading.",
    videoUrl: "/assets/spotlight1.png",
    tags: ["Premiere Pro", "After Effects", "Motion Graphics"],
    hasDetailPage: true,
    slug: "product-showcase-video",
  },
  {
    id: 3,
    title: "Social Media Campaign",
    category: "Graphic Design",
    description:
      "Complete social media visual campaign with consistent branding across platforms.",
    image: "/assets/grid2.png",
    tags: ["Social Media", "Digital Marketing", "Photoshop"],
    hasDetailPage: true,
    slug: "social-media-campaign",
  },
  {
    id: 4,
    title: "Corporate Video",
    category: "Video Editing",
    description:
      "Professional corporate video with interviews, b-roll, and animated graphics.",
    videoUrl: "/assets/spotlight2.png",
    tags: ["Video Production", "Color Grading", "Sound Design"],
    hasDetailPage: true,
    slug: "corporate-video",
  },
];

// Detailed project data with videos
export const projectDetails = {
  "brand-identity-design": {
    id: 1,
    title: "Brand Identity Design",
    category: "Graphic Design",
    fullDescription:
      "A comprehensive brand identity project that transformed a startup's visual presence. This project involved creating a complete brand system including logo design, color palette development, typography selection, and brand guidelines. The result was a cohesive visual identity that effectively communicated the company's values and mission across all touchpoints.",
    client: "StartupXYZ",
    year: "2024",
    duration: "6 weeks",
    tags: [
      "Branding",
      "Logo Design",
      "Visual Identity",
      "Typography",
      "Color Theory",
    ],
    coverImage: "/assets/grid1.png",
    videos: [
      {
        id: 1,
        title: "Logo Design Process",
        description:
          "Complete logo design journey from concept to final design",
        videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
        thumbnail: "/assets/spotlight1.png",
        duration: "4:20",
      },
      {
        id: 2,
        title: "Brand Application",
        description:
          "How the brand identity is applied across different mediums",
        videoUrl: "https://www.youtube.com/watch?v=TtkUrMeI-QE",
        thumbnail: "/assets/spotlight2.png",
        duration: "3:15",
      },
      {
        id: 3,
        title: "Style Guide Presentation",
        description: "Complete brand guidelines and usage examples",
        videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
        thumbnail: "/assets/spotlight3.png",
        duration: "5:30",
      },
    ],
  },
  "product-showcase-video": {
    id: 2,
    title: "Product Showcase Video",
    category: "Video Editing",
    fullDescription:
      "A dynamic product showcase video that brought a revolutionary tech gadget to life. This project combined stunning cinematography, creative motion graphics, and professional post-production techniques to create an engaging narrative that highlighted the product's unique features and benefits. The video successfully increased product awareness and drove significant sales conversions.",
    client: "TechGadget Co.",
    year: "2024",
    duration: "8 weeks",
    tags: [
      "Video Production",
      "Motion Graphics",
      "Product Photography",
      "Color Grading",
      "Sound Design",
    ],
    coverImage: "/assets/spotlight1.png",
    videos: [
      {
        id: 1,
        title: "Main Product Showcase",
        description: "Complete product demonstration with motion graphics",
        videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
        thumbnail: "/assets/spotlight1.png",
        duration: "2:45",
      },
      {
        id: 2,
        title: "Feature Breakdown",
        description: "Detailed explanation of product features",
        videoUrl: "https://www.youtube.com/watch?v=TtkUrMeI-QE",
        thumbnail: "/assets/spotlight2.png",
        duration: "3:20",
      },
      {
        id: 3,
        title: "Behind the Scenes",
        description: "Production process and creative decisions",
        videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
        thumbnail: "/assets/spotlight3.png",
        duration: "4:10",
      },
      {
        id: 4,
        title: "Motion Graphics Reel",
        description: "Showcase of custom animations and effects",
        videoUrl: "https://www.youtube.com/watch?v=TtkUrMeI-QE",
        thumbnail: "/assets/spotlight4.png",
        duration: "1:55",
      },
    ],
  },
  "social-media-campaign": {
    id: 3,
    title: "Social Media Campaign",
    category: "Graphic Design",
    fullDescription:
      "A comprehensive social media campaign that increased brand engagement by 300%. This project involved creating a series of visually cohesive graphics, stories, and posts that maintained consistent branding across multiple platforms. The campaign utilized trending design styles, strategic color schemes, and compelling visual storytelling to create a strong brand presence and drive user interaction.",
    client: "FashionForward",
    year: "2024",
    duration: "12 weeks",
    tags: [
      "Social Media",
      "Digital Marketing",
      "Content Creation",
      "Brand Consistency",
      "Visual Strategy",
    ],
    coverImage: "/assets/grid2.png",
    videos: [
      {
        id: 1,
        title: "Campaign Overview",
        description: "Complete campaign strategy and results",
        videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
        thumbnail: "/assets/spotlight1.png",
        duration: "3:30",
      },
      {
        id: 2,
        title: "Design Process",
        description: "From concept to final graphics",
        videoUrl: "https://www.youtube.com/watch?v=TtkUrMeI-QE",
        thumbnail: "/assets/spotlight2.png",
        duration: "4:45",
      },
      {
        id: 3,
        title: "Platform Adaptations",
        description: "How designs were adapted for different social platforms",
        videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
        thumbnail: "/assets/spotlight3.png",
        duration: "2:50",
      },
      {
        id: 4,
        title: "Campaign Results",
        description: "Metrics and success analysis",
        videoUrl: "https://www.youtube.com/watch?v=TtkUrMeI-QE",
        thumbnail: "/assets/spotlight4.png",
        duration: "3:05",
      },
    ],
  },
  "corporate-video": {
    id: 4,
    title: "Corporate Video Production",
    category: "Video Editing",
    fullDescription:
      "A comprehensive corporate video project featuring professional interviews, cinematic b-roll footage, and custom animated graphics. This project showcases my ability to create engaging corporate content that tells a compelling story while maintaining a professional aesthetic.",
    client: "Tech Solutions Inc.",
    year: "2024",
    duration: "Multiple videos",
    tags: [
      "Video Production",
      "Color Grading",
      "Sound Design",
      "Motion Graphics",
    ],
    coverImage: "/assets/spotlight2.png",
    videos: [
      {
        id: 1,
        title: "Company Overview",
        description: "Main corporate presentation video",
        videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
        thumbnail: "/assets/spotlight1.png",
        duration: "3:45",
      },
      {
        id: 2,
        title: "Team Interviews",
        description: "Employee testimonials and interviews",
        videoUrl: "https://www.youtube.com/watch?v=TtkUrMeI-QE",
        thumbnail: "/assets/spotlight2.png",
        duration: "2:30",
      },
      {
        id: 3,
        title: "Product Demo",
        description: "Detailed product demonstration",
        videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
        thumbnail: "/assets/spotlight3.png",
        duration: "4:15",
      },
      {
        id: 4,
        title: "Behind the Scenes",
        description: "Making of the corporate video",
        videoUrl: "https://www.youtube.com/watch?v=TtkUrMeI-QE",
        thumbnail: "/assets/spotlight4.png",
        duration: "1:50",
      },
    ],
  },
};

// Video Showcase data
export const videoShowcase = [
  {
    id: 1,
    title: "Showreel 2024",
    thumbnail: "/assets/spotlight1.png",
    duration: "2:30",
    description: "A compilation of my best work from 2024",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  },
  {
    id: 2,
    title: "DJ Event Poster Animation",
    thumbnail: "/assets/spotlight2.png",
    duration: "0:16",
    description:
      "This video showcases a poster I designed for a DJ event. I applied effects and created motion graphics to bring the event poster to life.",
    videoUrl: "https://www.youtube.com/watch?v=TU_VIDEO_ID_AQUI",
  },
  {
    id: 3,
    title: "Motion Graphics Reel",
    thumbnail: "/assets/spotlight3.png",
    duration: "3:15",
    description: "Collection of motion graphics and animations",
    videoUrl: "https://www.youtube.com/watch?v=TtkUrMeI-QE",
  },
  {
    id: 4,
    title: "Documentary Short",
    thumbnail: "/assets/spotlight4.png",
    duration: "5:00",
    description: "Short documentary with cinematic storytelling",
    videoUrl: "https://www.youtube.com/watch?v=TtkUrMeI-QE",
  },
];

// Project categories for filtering
export const designCategories = ["All", "Graphic Design", "Video Editing"];

// Project types for contact form
export const projectTypes = [
  { value: "design", label: "Graphic Design" },
  { value: "video", label: "Video Editing" },
  { value: "motion", label: "Motion Graphics" },
  { value: "branding", label: "Branding" },
  { value: "other", label: "Other" },
];

// Video production skills
export const videoSkills = [
  {
    id: 1,
    title: "Video Editing",
    description: "Premiere Pro, Final Cut Pro, DaVinci Resolve",
    gradient: "from-pink-500 to-purple-600",
    icon: "video",
  },
  {
    id: 2,
    title: "Motion Graphics",
    description: "After Effects, Cinema 4D, Blender",
    gradient: "from-purple-500 to-blue-600",
    icon: "motion",
  },
  {
    id: 3,
    title: "Sound Design",
    description: "Audition, Pro Tools, Sound Mixing",
    gradient: "from-orange-500 to-red-600",
    icon: "sound",
  },
];
