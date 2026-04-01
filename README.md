<div align="center">

# Alejandro Gonzalez Lopez

### Interactive 3D Portfolio

<br/>

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://www.aleglopez.tech)
[![GitHub](https://img.shields.io/badge/Source_Code-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/aleglope/threejs-portfolio)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br/>

<img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React" />
<img src="https://img.shields.io/badge/Three.js-0.171.0-000000?style=flat-square&logo=threedotjs&logoColor=white" alt="Three.js" />
<img src="https://img.shields.io/badge/Vite-6.0.3-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
<img src="https://img.shields.io/badge/TailwindCSS-3.4.17-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
<img src="https://img.shields.io/badge/GSAP-3.12.5-88CE02?style=flat-square&logo=greensock&logoColor=white" alt="GSAP" />
<img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />

<br/><br/>

> A cutting-edge interactive portfolio combining modern web development with immersive 3D experiences. Two portfolios in one: **Development** & **Design/Video**.

<br/>

[Features](#-features) · [Architecture](#-architecture) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started) · [Projects](#-featured-projects) · [Contact](#-contact)

</div>

---

## Overview

This portfolio is a multi-page React application that showcases my work as a **Full Stack Developer** and **Creative Designer**. It features an interactive 3D landing page where visitors choose between two experiences: a development portfolio with live demos, 3D environments, and an embedded Pong game; or a design portfolio featuring graphic design, VJing, AI-generated content, and videography.

---

## Features

<table>
<tr>
<td width="50%">

### Development Portfolio
- Interactive 3D hero with HackerRoom model
- Live project demos with video previews
- Animated 3D developer avatar with multiple animations
- Interactive 3D globe showing location
- Embedded Pong game (Python via Pyodide)
- Client testimonials carousel
- Work experience timeline
- Contact form with EmailJS integration

</td>
<td width="50%">

### Design & Video Portfolio
- Brand identity & UX/UI showcase
- AI-generated advertising content
- Music event visuals & VJing gallery
- Photography & videography enhanced by AI
- Video showcase with ReactPlayer
- Project detail pages with image galleries
- Creative contact form

</td>
</tr>
</table>

### Shared Features

| Feature | Description |
|---|---|
| **Custom Cursor Trail** | Dynamic particle trail effect following mouse movement |
| **Responsive Design** | Adaptive layouts for mobile, tablet & desktop with `react-responsive` |
| **GSAP Animations** | Professional-grade transitions, scroll-triggered animations & hover effects |
| **3D Elements** | Floating cubes, React logos, rings & target models on landing page |
| **Vercel Analytics** | Performance monitoring with Speed Insights & Analytics |
| **SPA Routing** | Client-side routing with React Router DOM |

---

## Architecture

```mermaid
graph TB
    subgraph "Entry Point"
        A[App.jsx<br/>React Router] --> B["/  LandingPage"]
        A --> C["/dev  DevPortfolio"]
        A --> D["/design  DesignPortfolio"]
        A --> E["/design/project/:slug<br/>ProjectDetail"]
    end

    subgraph "Landing Page"
        B --> B1[3D Canvas<br/>Cubes, Rings, ReactLogo, Target]
        B --> B2[Portfolio Selection Cards]
        B --> B3[CursorTrail]
    end

    subgraph "Dev Portfolio Sections"
        C --> C1[Navbar]
        C --> C2[Hero - HackerRoom 3D]
        C --> C3[About - Globe 3D]
        C --> C4[Projects - Video Demos]
        C --> C5[Clients - Testimonials]
        C --> C6[Contact - EmailJS]
        C --> C7[Experience - Timeline]
        C --> C8[Pong - Pyodide Game]
        C --> C9[Footer]
    end

    subgraph "Design Portfolio Sections"
        D --> D1[DesignNavbar]
        D --> D2[DesignHero]
        D --> D3[DesignProjects]
        D --> D4[VideoShowcase]
        D --> D5[Contact]
        D --> D6[Footer]
    end

    style A fill:#6366f1,color:#fff
    style B fill:#3b82f6,color:#fff
    style C fill:#3b82f6,color:#fff
    style D fill:#ec4899,color:#fff
    style E fill:#ec4899,color:#fff
```

### Project Structure

```
threejs-portfolio/
├── public/
│   ├── assets/              # Images, SVGs, icons, brand logos
│   │   ├── poster/          # 27 event poster images
│   │   └── brands/          # Brand collaboration logos
│   ├── models/              # 3D models (.glb, .fbx)
│   │   ├── hacker-room.glb  # Main hero 3D scene
│   │   ├── computer.glb     # Demo computer model
│   │   ├── desk.glb         # Desk model
│   │   ├── react.glb        # React logo 3D
│   │   ├── cube.glb         # Animated cube
│   │   └── animations/      # Developer avatar animations
│   │       ├── developer.glb
│   │       ├── victory.fbx
│   │       ├── clapping.fbx
│   │       ├── salute.fbx
│   │       └── idle.fbx
│   ├── pong_game/           # Python Pong game modules
│   │   ├── main.py          # Game entry point
│   │   ├── canvas2d.py      # Canvas rendering bridge
│   │   ├── ball.py          # Ball physics
│   │   ├── paddle.py        # Paddle controls
│   │   ├── collision.py     # Collision detection
│   │   ├── score.py         # Score tracking
│   │   ├── AI.py            # Adaptive AI opponent
│   │   └── screen.py        # Screen management
│   └── textures/            # Textures & video previews
│       ├── project/         # 8 project demo videos (.mp4)
│       ├── desk/            # Desk component textures
│       └── globe/           # Globe cloud texture
├── src/
│   ├── components/          # Reusable 3D & UI components
│   │   ├── HackerRoom.jsx   # Main 3D room scene
│   │   ├── HeroCamera.jsx   # Dynamic camera controller
│   │   ├── Globe.jsx        # Interactive 3D globe
│   │   ├── Developer.jsx    # Animated 3D developer avatar
│   │   ├── DemoComputer.jsx # Project demo display
│   │   ├── Cube.jsx         # Animated floating cube
│   │   ├── Rings.jsx        # Decorative 3D rings
│   │   ├── ReactLogo.jsx    # 3D React logo
│   │   ├── Target.jsx       # 3D target model
│   │   ├── CursorTrail.jsx  # Custom cursor effect
│   │   ├── Button.jsx       # Reusable button component
│   │   ├── CanvasLoader.jsx # 3D loading spinner
│   │   ├── Alert.jsx        # Notification alerts
│   │   └── SketchfabModel.jsx # Sketchfab embed
│   ├── sections/            # Page sections
│   │   ├── Hero.jsx         # 3D hero section
│   │   ├── About.jsx        # About grid with globe
│   │   ├── Projects.jsx     # Project showcase
│   │   ├── Experience.jsx   # Work experience timeline
│   │   ├── Clients.jsx      # Client testimonials
│   │   ├── Contact.jsx      # Contact form (EmailJS)
│   │   ├── Pong.jsx         # Embedded Pong game
│   │   ├── Navbar.jsx       # Dev portfolio nav
│   │   ├── Footer.jsx       # Footer with socials
│   │   └── design/          # Design portfolio sections
│   │       ├── DesignHero.jsx
│   │       ├── DesignNavbar.jsx
│   │       ├── DesignProjects.jsx
│   │       └── VideoShowcase.jsx
│   ├── pages/               # Route pages
│   │   ├── LandingPage.jsx  # Portfolio selector
│   │   ├── DevPortfolio.jsx # Development portfolio
│   │   ├── DesignPortfolio.jsx # Design portfolio
│   │   └── ProjectDetail.jsx   # Design project detail
│   ├── hooks/
│   │   └── useAlert.js      # Alert state management
│   ├── constants/
│   │   ├── index.js         # Dev portfolio data
│   │   └── design.js        # Design portfolio data
│   ├── App.jsx              # Root component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles & Tailwind
├── index.html               # HTML template
├── vite.config.js           # Vite config with code splitting
├── tailwind.config.js       # Custom theme (colors, fonts)
├── postcss.config.js        # PostCSS + Autoprefixer
├── eslint.config.js         # ESLint + React Three rules
├── vercel.json              # SPA rewrite rules
└── package.json
```

---

## Tech Stack

### Core Framework

| Technology | Version | Purpose |
|---|---|---|
| ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black) | `18.3.1` | UI component library |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white) | `6.0.3` | Build tool & dev server |
| ![React Router](https://img.shields.io/badge/-React_Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white) | `7.9.5` | Client-side routing |

### 3D Graphics

| Technology | Version | Purpose |
|---|---|---|
| ![Three.js](https://img.shields.io/badge/-Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white) | `0.171.0` | 3D rendering engine |
| ![R3F](https://img.shields.io/badge/-React_Three_Fiber-000000?style=flat-square&logo=threedotjs&logoColor=white) | `8.17.10` | React renderer for Three.js |
| ![Drei](https://img.shields.io/badge/-Drei-000000?style=flat-square&logo=threedotjs&logoColor=white) | `9.120.4` | R3F utility components |
| ![react-globe.gl](https://img.shields.io/badge/-react--globe.gl-4285F4?style=flat-square&logo=googlemaps&logoColor=white) | `2.28.3` | Interactive 3D globe |

### Styling & Animation

| Technology | Version | Purpose |
|---|---|---|
| ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) | `3.4.17` | Utility-first CSS |
| ![GSAP](https://img.shields.io/badge/-GSAP-88CE02?style=flat-square&logo=greensock&logoColor=white) | `3.12.5` | Professional animations |
| ![PostCSS](https://img.shields.io/badge/-PostCSS-DD3A0A?style=flat-square&logo=postcss&logoColor=white) | `8.4.49` | CSS processing |

### Integrations

| Technology | Version | Purpose |
|---|---|---|
| ![EmailJS](https://img.shields.io/badge/-EmailJS-F4A724?style=flat-square&logo=maildotru&logoColor=white) | `4.4.1` | Contact form email service |
| ![Vercel](https://img.shields.io/badge/-Vercel_Analytics-000000?style=flat-square&logo=vercel&logoColor=white) | `1.4.1` | Performance analytics |
| ![Pyodide](https://img.shields.io/badge/-Pyodide-3776AB?style=flat-square&logo=python&logoColor=white) | CDN | Python runtime in browser |
| ![ReactPlayer](https://img.shields.io/badge/-ReactPlayer-FF0000?style=flat-square&logo=youtube&logoColor=white) | `2.16.0` | Video playback |
| ![Leva](https://img.shields.io/badge/-Leva-7B61FF?style=flat-square) | `0.9.35` | 3D debug controls |
| ![react-icons](https://img.shields.io/badge/-react--icons-E91E63?style=flat-square&logo=react&logoColor=white) | `5.5.0` | Icon library |

### Dev Tools

| Technology | Version | Purpose |
|---|---|---|
| ![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) | `9.17.0` | Code linting |
| ![Autoprefixer](https://img.shields.io/badge/-Autoprefixer-DD3735?style=flat-square&logo=autoprefixer&logoColor=white) | `10.4.20` | CSS vendor prefixes |

---

## Build Optimization

The project uses **Vite** with custom Rollup chunking for optimal load performance:

```mermaid
graph LR
    subgraph "Code Splitting Strategy"
        A[Main Bundle] --> B[three.js chunk<br/>Three.js + R3F + Drei]
        A --> C[player chunk<br/>ReactPlayer]
        A --> D[gsap chunk<br/>GSAP + @gsap/react]
        A --> E[App code<br/>Components & Pages]
    end

    style A fill:#646CFF,color:#fff
    style B fill:#000000,color:#fff
    style C fill:#FF0000,color:#fff
    style D fill:#88CE02,color:#000
    style E fill:#61DAFB,color:#000
```

---

## Getting Started

### Prerequisites

- **Node.js** v16 or higher
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/aleglope/threejs-portfolio.git

# Navigate to the project directory
cd threejs-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server on `127.0.0.1:5173` |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## Application Flow

```mermaid
flowchart TD
    START([User visits site]) --> LAND[Landing Page<br/>3D Canvas Background]
    LAND --> |"Choose Experience"| CHOICE{Select Portfolio}

    CHOICE --> |Development| DEV["/dev"]
    CHOICE --> |"Design & Video"| DESIGN["/design"]

    DEV --> NAV[Navbar]
    DEV --> HERO["Hero Section<br/>HackerRoom 3D Model<br/>Dynamic Camera"]
    DEV --> ABOUT["About Section<br/>Interactive Globe<br/>Skills Grid"]
    DEV --> PROJ["Projects Section<br/>8 Projects with Video Demos<br/>DemoComputer 3D"]
    DEV --> CLIENTS["Client Testimonials<br/>3 Reviews"]
    DEV --> CONTACT["Contact Form<br/>EmailJS Integration"]
    DEV --> EXP["Work Experience<br/>5 Positions<br/>Animated 3D Avatar"]
    DEV --> PONG["Pong Game<br/>Python via Pyodide<br/>AI Opponent"]
    DEV --> FOOTER[Footer]

    DESIGN --> DNAV[DesignNavbar]
    DESIGN --> DHERO[DesignHero]
    DESIGN --> DPROJ["Design Projects<br/>4 Categories"]
    DESIGN --> DVID[Video Showcase]
    DESIGN --> DCONTACT["Contact Form<br/>Project Type Selector"]
    DESIGN --> DFOOTER[Footer]

    DPROJ --> |"Click project"| DETAIL["/design/project/:slug<br/>Image Gallery<br/>Video Player"]

    style START fill:#10b981,color:#fff
    style CHOICE fill:#f59e0b,color:#000
    style DEV fill:#3b82f6,color:#fff
    style DESIGN fill:#ec4899,color:#fff
    style PONG fill:#8b5cf6,color:#fff
    style DETAIL fill:#ec4899,color:#fff
```

---

## Featured Projects

### Development Projects

<table>
<tr>
<td align="center" width="25%">

**Turtle Race Game**

[![Repo](https://img.shields.io/badge/-Source-181717?style=flat-square&logo=github)](https://github.com/aleglope/Turtle-Race)

`Python` `Turtle Graphics`

</td>
<td align="center" width="25%">

**Billboard to Spotify**

[![Repo](https://img.shields.io/badge/-Source-181717?style=flat-square&logo=github)](https://github.com/aleglope/Song-Search-Engine)

`Python` `Spotify API` `Scraping`

</td>
<td align="center" width="25%">

**Galicia Map Quiz**

[![Repo](https://img.shields.io/badge/-Source-181717?style=flat-square&logo=github)](https://github.com/aleglope/Game-of-Regions)

`Python` `Tkinter`

</td>
<td align="center" width="25%">

**Coworking Manager**

[![Repo](https://img.shields.io/badge/-Source-181717?style=flat-square&logo=github)](https://github.com/CampusDual/cd2024bfs5g1)

`Angular` `Spring Boot` `PostgreSQL`

</td>
</tr>
<tr>
<td align="center" width="25%">

**Groove In Club**

[![Live](https://img.shields.io/badge/-Live_Site-ec4899?style=flat-square&logo=vercel)](https://www.grooveinclub.es/)

`React` `Three.js` `TypeScript`

</td>
<td align="center" width="25%">

**GeoJSON Mapping**

[![Repo](https://img.shields.io/badge/-Source-181717?style=flat-square&logo=github)](https://github.com/aleglope/Land-Parcel-Mapping)

`Python` `Folium` `GIS`

</td>
<td align="center" width="25%">

**Real Estate App**

[![Repo](https://img.shields.io/badge/-Source-181717?style=flat-square&logo=github)](https://github.com/aleglope/Real-Estate-Backend)

`Angular` `Spring Boot` `MySQL`

</td>
<td align="center" width="25%">

**Restaurant Frontend**

[![Live](https://img.shields.io/badge/-Live_Site-3b82f6?style=flat-square&logo=vercel)](https://restaurant-phi-six.vercel.app/)

`React`

</td>
</tr>
</table>

### Design & Creative Projects

| Project | Category | Highlights |
|---|---|---|
| **Brand Identity & UX/UI Design** | Graphic Design | AI-enhanced logos, UX/UI systems, brand guidelines |
| **AI-Generated Advertising** | AI Content | AI video generation, avatars, automated content |
| **Music Event Visuals & VJing** | Music & Events | Psychedelic posters, concert visuals, live VJ sets |
| **AI-Enhanced Photography** | Photography | AI-enhanced videography and photographic art |

---

## Work Experience

```mermaid
timeline
    title Professional Journey
    2024 : Ipartek Bootcamp
         : Real Estate Solutions
         : Angular + Spring Boot + MySQL
    2024 : Groove In Club
         : Full Stack Developer
         : Immersive 3D Website with R3F
    2024-Present : Imatia Bootcamp
                 : Work Wander - Coworking Manager
                 : Angular + Ontimize + Spring Boot
    2025 : Rural Hackers 3D Gallery
         : Creative Full Stack Developer
         : Three.js Immersive Art Gallery
    2025 : La Parrilla de Champi
         : Lead Full-Stack Developer
         : Next.js 14 + Supabase + Three.js
```

---

## 3D Components

```mermaid
graph TD
    subgraph "3D Scene Components"
        HR[HackerRoom.jsx<br/>Main desk environment] --> HC[HeroCamera.jsx<br/>Mouse-reactive camera]
        DC[DemoComputer.jsx<br/>Project video display]
        DEV[Developer.jsx<br/>Animated avatar model]
        GL[Globe.jsx<br/>react-globe.gl world map]
    end

    subgraph "Decorative 3D Elements"
        CU[Cube.jsx<br/>Floating animated cube]
        RI[Rings.jsx<br/>Concentric ring animation]
        RL[ReactLogo.jsx<br/>3D React atom logo]
        TG[Target.jsx<br/>Crosshair target model]
    end

    subgraph "3D Models - public/models/"
        M1[hacker-room.glb]
        M2[computer.glb]
        M3[desk.glb]
        M4[react.glb]
        M5[cube.glb]
        M6["animations/<br/>developer.glb<br/>victory.fbx<br/>clapping.fbx<br/>salute.fbx<br/>idle.fbx"]
    end

    HR -.-> M1
    DC -.-> M2
    RL -.-> M4
    CU -.-> M5
    DEV -.-> M6

    style HR fill:#6366f1,color:#fff
    style DC fill:#6366f1,color:#fff
    style DEV fill:#6366f1,color:#fff
    style GL fill:#6366f1,color:#fff
```

---

## Pong Game

The portfolio includes a fully playable **Pong** game implemented in Python, running in the browser via **Pyodide**:

| Module | Role |
|---|---|
| `main.py` | Game entry point & loop (`requestAnimationFrame`) |
| `canvas2d.py` | JavaScript Canvas API bridge |
| `ball.py` | Ball physics & movement |
| `paddle.py` | Player paddle controls |
| `collision.py` | Collision detection system |
| `score.py` | Score tracking & display |
| `AI.py` | Adaptive difficulty AI opponent |
| `screen.py` | Screen & viewport management |

---

## Deployment

The project is deployed on **Vercel** with:

- **Automatic CI/CD** from GitHub pushes
- **Preview deployments** for every pull request
- **SPA rewrites** via `vercel.json` for client-side routing
- **Vercel Analytics** & **Speed Insights** for monitoring
- **Edge-optimized** global content delivery

---

## Responsive Design

| Breakpoint | Target | 3D Adaptation |
|---|---|---|
| `< 440px` | Small mobile | Reduced model scale, adjusted positions |
| `< 768px` | Mobile | Compact layout, touch-optimized interactions |
| `768px - 1024px` | Tablet | Medium 3D elements, balanced positioning |
| `> 1024px` | Desktop | Full 3D experience with all effects |

---

## Contact

<div align="center">

[![Email](https://img.shields.io/badge/Email-agonzlopez.11@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:agonzlopez.11@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-aleglope-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/aleglope)
[![Portfolio](https://img.shields.io/badge/Portfolio-aleglopez.tech-6366f1?style=for-the-badge&logo=googlechrome&logoColor=white)](https://www.aleglopez.tech)
[![TikTok](https://img.shields.io/badge/TikTok-@nextworldai-000000?style=for-the-badge&logo=tiktok&logoColor=white)](https://www.tiktok.com/@nextworldai)

<br/>

**Open to collaborations in:**

`Web Applications` · `3D Immersive Experiences` · `Full-Stack Systems` · `AI Integration` · `Remote Work`

<br/>

---

<sub>Built with passion by **Alejandro Gonzalez Lopez** | Full Stack Developer & Creative Designer</sub>

</div>
