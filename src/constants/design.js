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
    title: "AI-Generated Advertising Content",
    category: "AI Content",
    description:
      "Revolutionary advertising solutions using AI-generated videos, avatars, and automated content creation for brands.",
    videoUrl: "/assets/spotlight1.png",
    tags: ["AI Video Generation", "AI Avatars", "Automated Advertising", "Brand Storytelling"],
    hasDetailPage: true,
    slug: "ai-advertising-content",
  },
  {
    id: 3,
    title: "Music Event Visuals & VJing",
    category: "Music & Events",
    description:
      "Psychedelic posters, stunning concert visuals, and immersive VJ performances for DJ events and music festivals.",
    image: "/assets/grid2.png",
    tags: ["VJing", "Psychedelic Art", "Concert Posters", "Live Visuals", "Music Events"],
    hasDetailPage: true,
    slug: "music-event-visuals",
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
  "ai-advertising-content": {
    id: 2,
    title: "AI-Generated Advertising Content",
    category: "AI Content",
    fullDescription:
      "Transform your brand's advertising with cutting-edge AI technology. Our AI-generated video solutions create stunning, professional-quality advertisements in record time. From custom AI avatars that represent your brand personality to automated video generation that adapts to your messaging, we deliver cost-effective, scalable advertising solutions that captivate audiences and drive engagement. Experience the future of marketing where creativity meets artificial intelligence.",
    client: "Multiple Fortune 500 Brands",
    year: "2024",
    duration: "Instant to 48 hours",
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
    coverImage: "/assets/spotlight1.png",
    videos: [
      {
        id: 1,
        title: "AI Avatar Showcase",
        description: "Custom AI-generated avatars bringing brands to life with personality",
        videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
        thumbnail: "/assets/spotlight1.png",
        duration: "3:15",
      },
      {
        id: 2,
        title: "Automated Video Generation",
        description: "How AI creates professional advertisements from simple text prompts",
        videoUrl: "https://www.youtube.com/watch?v=TtkUrMeI-QE",
        thumbnail: "/assets/spotlight2.png",
        duration: "4:30",
      },
      {
        id: 3,
        title: "Brand Storytelling with AI",
        description: "Transforming brand messages into compelling visual narratives",
        videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
        thumbnail: "/assets/spotlight3.png",
        duration: "5:20",
      },
      {
        id: 4,
        title: "AI vs Traditional Production",
        description: "Comparing AI-generated content with traditional video production",
        videoUrl: "https://www.youtube.com/watch?v=TtkUrMeI-QE",
        thumbnail: "/assets/spotlight4.png",
        duration: "6:45",
      },
    ],
  },
  "music-event-visuals": {
    id: 3,
    title: "Music Event Visuals & VJing",
    category: "Music & Events",
    fullDescription:
      "Immerse audiences in unforgettable music experiences through psychedelic art, dynamic VJ performances, and cutting-edge visual storytelling. From mind-bending concert posters that capture the essence of electronic music to real-time visual manipulations that sync perfectly with DJ sets, our work transforms ordinary events into extraordinary journeys. We blend traditional graphic design with live video performance, creating visual landscapes that enhance the musical experience and leave lasting impressions on festival-goers and club attendees alike.",
    client: "Various Music Festivals & DJ Collectives",
    year: "2024",
    duration: "2-8 weeks per project",
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
    coverImage: "/assets/grid2.png",
    videos: [
      {
        id: 1,
        title: "Psychedelic Poster Collection",
        description: "Mind-bending concert posters blending music and psychedelic art",
        videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
        thumbnail: "/assets/spotlight1.png",
        duration: "4:15",
      },
      {
        id: 2,
        title: "Live VJ Performance",
        description: "Real-time visual manipulation synchronized with electronic music",
        videoUrl: "https://www.youtube.com/watch?v=TtkUrMeI-QE",
        thumbnail: "/assets/spotlight2.png",
        duration: "5:30",
      },
      {
        id: 3,
        title: "Festival Visual Identity",
        description: "Complete visual branding for music festivals and events",
        videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
        thumbnail: "/assets/spotlight3.png",
        duration: "3:45",
      },
      {
        id: 4,
        title: "Audio-Visual Synergy",
        description: "How visuals enhance and complement musical performances",
        videoUrl: "https://www.youtube.com/watch?v=TtkUrMeI-QE",
        thumbnail: "/assets/spotlight4.png",
        duration: "6:20",
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
export const designCategories = ["All", "AI Content", "Music & Events", "Graphic Design", "Video Editing"];

// Project types for contact form
export const projectTypes = [
  { value: "ai-video", label: "AI Video Generation" },
  { value: "ai-avatars", label: "AI Avatar Creation" },
  { value: "automated-ads", label: "Automated Advertising" },
  { value: "vj-events", label: "VJing & Live Visuals" },
  { value: "concert-posters", label: "Concert Posters & Event Graphics" },
  { value: "music-videos", label: "Music Video Production" },
  { value: "design", label: "Graphic Design" },
  { value: "video", label: "Traditional Video Editing" },
  { value: "motion", label: "Motion Graphics" },
  { value: "branding", label: "Branding" },
  { value: "other", label: "Other" },
];

// Video production skills
export const videoSkills = [
  {
    id: 1,
    title: "AI Video Generation",
    description: "Runway ML, Pika Labs, Synthesia, Custom AI Models",
    gradient: "from-cyan-500 to-blue-600",
    icon: "ai",
  },
  {
    id: 2,
    title: "VJing & Live Visuals",
    description: "Real-time video performance, audio-visual sync, Resolume Arena",
    gradient: "from-purple-500 to-pink-600",
    icon: "vj",
  },
  {
    id: 3,
    title: "Psychedelic Art Design",
    description: "Psychedelic graphics, trippy visuals, music-inspired artwork",
    gradient: "from-orange-500 to-red-600",
    icon: "psychedelic",
  },
  {
    id: 4,
    title: "Professional Editing",
    description: "Premiere Pro, After Effects, DaVinci Resolve, Color Grading",
    gradient: "from-green-500 to-teal-600",
    icon: "video",
  },
];
