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
  },
  {
    id: 2,
    title: "Product Showcase Video",
    category: "Video Editing",
    description:
      "Dynamic product showcase with motion graphics and professional color grading.",
    videoUrl: "/assets/spotlight1.png",
    tags: ["Premiere Pro", "After Effects", "Motion Graphics"],
  },
  {
    id: 3,
    title: "Social Media Campaign",
    category: "Graphic Design",
    description:
      "Complete social media visual campaign with consistent branding across platforms.",
    image: "/assets/grid2.png",
    tags: ["Social Media", "Digital Marketing", "Photoshop"],
  },
  {
    id: 4,
    title: "Corporate Video",
    category: "Video Editing",
    description:
      "Professional corporate video with interviews, b-roll, and animated graphics.",
    videoUrl: "/assets/spotlight2.png",
    tags: ["Video Production", "Color Grading", "Sound Design"],
  },
];

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
