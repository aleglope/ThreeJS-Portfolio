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
    title: "Brand Identity & UX/UI Design",
    category: "Graphic Design",
    description:
      "Complete brand identity with AI-enhanced logo design, UX/UI systems, and comprehensive brand guidelines.",
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
    title: "AI-Generated Advertising Content",
    category: "AI Content",
    description:
      "Revolutionary advertising solutions using AI-generated videos, avatars, and automated content creation for brands.",
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
    title: "Music Event Visuals & VJing",
    category: "Music & Events",
    description:
      "Psychedelic posters, stunning concert visuals, and immersive VJ performances for DJ events and music festivals.",
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
    title: "Corporate Video",
    category: "Video Editing",
    description:
      "Professional corporate video with interviews, b-roll, and animated graphics.",
    image: "/assets/MatematicAurora.jpeg",
    tags: ["Video Production", "Color Grading", "Sound Design"],
    hasDetailPage: true,
    slug: "corporate-video",
  },
];

// Detailed project data with videos
export const projectDetails = {
  "brand-identity-design": {
    id: 1,
    title: "Brand Identity & UX/UI Design",
    category: "Graphic Design",
    fullDescription:
      "Revolutionary brand identity creation combining AI-powered logo design with comprehensive UX/UI systems and strategic brand development. Our approach integrates cutting-edge AI tools for logo generation and refinement with traditional design excellence in user experience and interface design. From initial concept to full brand implementation, we create cohesive visual systems that not only look stunning but also drive user engagement and business growth. Each project includes extensive research, AI-enhanced logo variations, complete UX/UI design systems, and detailed brand guidelines that ensure consistent application across all digital and physical touchpoints.",
    client: "Multiple Tech Startups & Digital Agencies",
    year: "2024",
    duration: "8-12 weeks",
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
    coverImage: "/assets/grid1.png",
    videos: [
      {
        id: 1,
        title: "AI Logo Design Process",
        description:
          "How AI tools accelerate logo creation while maintaining design excellence",
        videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
        thumbnail: "/assets/spotlight1.png",
        duration: "5:45",
      },
      {
        id: 2,
        title: "UX/UI System Design",
        description:
          "Creating comprehensive user experience and interface design systems",
        videoUrl: "https://www.youtube.com/watch?v=TtkUrMeI-QE",
        thumbnail: "/assets/spotlight2.png",
        duration: "6:30",
      },
      {
        id: 3,
        title: "Brand Identity Implementation",
        description:
          "From logo to full brand system - complete identity rollout",
        videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
        thumbnail: "/assets/spotlight3.png",
        duration: "4:15",
      },
      {
        id: 4,
        title: "AI vs Traditional Design",
        description:
          "Balancing AI efficiency with human creativity in brand design",
        videoUrl: "https://www.youtube.com/watch?v=TtkUrMeI-QE",
        thumbnail: "/assets/spotlight4.png",
        duration: "7:20",
      },
    ],
  },
  "ai-advertising-content": {
    id: 2,
    title: "AI-Generated Advertising Content and Social Media Marketing",
    category: "AI Content",
    fullDescription:
      "Transform your brand's advertising with cutting-edge AI technology. Our AI-generated video solutions create stunning, professional-quality advertisements in record time. From custom AI avatars that represent your brand personality to automated video generation that adapts to your messaging, we deliver cost-effective, scalable advertising solutions that captivate audiences and drive engagement. Experience the future of marketing where creativity meets artificial intelligence.",
    client: "Multiple Clients",
    year: "2025",
    duration: "Instant to 72 hours",
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
        title: "Cinematic Experiences Forged with AI",
        description:
          "We demonstrate how artificial intelligence brings complex advertising ideas to life for beverage brands like Alewences. This work captures an aesthetic of luxury and nightlife with vibrant neon colors, high-end vehicles, and dynamic settings—all generated with cinematic precision. We create top-tier advertisements that position your product as the leader in its category, adhering to any specific requirements for color, model, or environment. The future of your beverage campaigns is here.",
        videoUrl: "https://www.youtube.com/shorts/W5W5vN9W628",
        thumbnail: "/assets/spotlight1.png",
        duration: "1:02",
      },
      {
        id: 2,
        title: "Convert Your Static Graphic into a Viral Ad",
        description:
          "We transform your event’s traditional graphic materials (posters, flyers) into immersive, high-impact promotional videos ready for social media. We use visual effects, animation, and strategic music to bring every detail of the poster to life, ensuring a visual hook that maximizes visibility and engagement across platforms like Instagram, TikTok, and Facebook. The result: An essential tool for your promoters to generate buzz and guarantee attendance at your next party or event.",
        videoUrl: "https://youtube.com/shorts/d0cXdWOA9TA?feature=share",
        thumbnail: "/assets/spotlight2.png",
        duration: "00:23",
      },
      {
        id: 3,
        title: "The Future of Fashion Advertising",
        description:
          "Transform your brand's advertising. Our AI Avatar technology seamlessly models your clothing line, creating high-impact, full-production video ads without the need for human models or studio intervention. Save time, reduce costs, and accelerate content creation. Every outfit, every style, instantly visualized.",
        videoUrl: "https://www.youtube.com/shorts/-48FW7i6peE",
        thumbnail: "/assets/spotlight3.png",
        duration: "00:51",
      },
      {
        id: 4,
        title: "The Evolution of DJ and Event Session Promotion",
        description:
          "We transform the static design of your musical event poster into a vibrant, effects-driven video piece ready to generate hype across all platforms. Our process strictly respects the original visual identity of the poster, incorporating dynamic movements, light effects, and rhythmic energy that mirrors the event's atmosphere. This is the perfect solution for promoters and DJs who require high-quality content to maximize ticket sales and visual impact before the party. The poster is no longer just information; it's an experience.",
        videoUrl: "https://www.youtube.com/shorts/vOZjQxlaAPY",
        thumbnail: "/assets/spotlight4.png",
        duration: "00:25",
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
        description:
          "Mind-bending concert posters blending music and psychedelic art",
        videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
        thumbnail: "/assets/spotlight1.png",
        duration: "4:15",
      },
      {
        id: 2,
        title: "Live VJ Performance",
        description:
          "Real-time visual manipulation synchronized with electronic music",
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
export const designCategories = [
  "All",
  "AI Content",
  "Music & Events",
  "Graphic Design",
  "Video Editing",
];

// Project types for contact form
export const projectTypes = [
  { value: "ai-video", label: "AI Video Generation" },
  { value: "ai-avatars", label: "AI Avatar Creation" },
  { value: "automated-ads", label: "Automated Advertising" },
  { value: "ai-logo-design", label: "AI Logo Design & Branding" },
  { value: "ux-ui-design", label: "UX/UI Design Systems" },
  { value: "vj-events", label: "VJing & Live Visuals" },
  { value: "concert-posters", label: "Concert Posters & Event Graphics" },
  { value: "music-videos", label: "Music Video Production" },
  { value: "design", label: "Graphic Design" },
  { value: "video", label: "Traditional Video Editing" },
  { value: "motion", label: "Motion Graphics" },
  { value: "branding", label: "Traditional Branding" },
  { value: "other", label: "Other" },
];

// Design & Branding skills
export const videoSkills = [
  {
    id: 1,
    title: "AI Logo & Brand Design",
    description:
      "AI-powered logo creation, brand identity systems, advanced AI design tools",
    gradient: "from-cyan-500 to-blue-600",
    icon: "ai-logo",
    iconComponent: "MdAutoAwesome", // React Icons component name
    image: "/assets/github.svg",
  },
  {
    id: 2,
    title: "UX/UI Design Systems",
    description:
      "Figma, Adobe XD, user research, interaction design, prototyping",
    gradient: "from-purple-500 to-pink-600",
    icon: "ux-ui",
    iconComponent: "MdDesignServices",
    image: "/assets/figma.svg",
  },
  {
    id: 3,
    title: "Brand Strategy & Research",
    description:
      "Market research, competitor analysis, brand positioning, target audience definition",
    gradient: "from-blue-500 to-indigo-600",
    icon: "brand-strategy",
    iconComponent: "MdAnalytics",
    image: "/assets/Python.svg",
  },
  {
    id: 4,
    title: "Typography & Visual Hierarchy",
    description:
      "Custom font selection, typography systems, visual hierarchy, readability optimization",
    gradient: "from-violet-500 to-purple-600",
    icon: "typography",
    iconComponent: "MdTextFields",
    image: "/assets/tailwindcss.png",
  },
  {
    id: 5,
    title: "Color Theory & Psychology",
    description:
      "Color palette creation, brand colors, psychological impact, accessibility compliance",
    gradient: "from-pink-500 to-rose-600",
    icon: "color-theory",
    iconComponent: "MdColorLens",
    image: "/assets/notion.svg",
  },
  {
    id: 6,
    title: "Psychedelic & Minimal Art",
    description:
      "AI-generated artwork, psychedelic designs, minimal aesthetics, custom client-inspired creations",
    gradient: "from-purple-600 to-pink-500",
    icon: "psychedelic-minimal",
    iconComponent: "MdBrush",
    image: "/assets/react.svg",
  },
  {
    id: 7,
    title: "VJing & Live Visuals",
    description:
      "Real-time video performance, audio-visual sync, Resolume Arena",
    gradient: "from-orange-500 to-red-600",
    icon: "vj",
    iconComponent: "MdVideocam",
    image: "/assets/framer.png",
  },
  {
    id: 8,
    title: "Professional Editing",
    description: "Premiere Pro, After Effects, DaVinci Resolve, Color Grading",
    gradient: "from-green-500 to-teal-600",
    icon: "video",
    iconComponent: "MdMovieEdit",
    image: "/assets/threejs.svg",
  },
  {
    id: 9,
    title: "Digital Asset Management",
    description:
      "Brand asset libraries, style guide creation, brand consistency tools",
    gradient: "from-teal-500 to-cyan-600",
    icon: "asset-management",
    iconComponent: "MdFolderSpecial",
    image: "/assets/nextjs.svg",
  },
];
