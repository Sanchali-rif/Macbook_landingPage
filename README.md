# Apple MacBook Landing Page Clone

> A pixel-perfect, interactive Apple-inspired MacBook product landing page built with React, Three.js, and GSAP — featuring smooth scroll animations, a live 3D product viewer, and a fully responsive layout.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.184-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

---

## ✨ Features

• **Hero Section** — Cinematic, full-viewport hero with animated headline and CTA buttons
• **Interactive 3D Product Viewer** — Real-time WebGL MacBook model rendered with Three.js & React Three Fiber; rotate and explore the product in 3D
• **Showcase Section** — Immersive full-screen media showcase with scroll-driven GSAP transitions
• **Performance Section** — Animated chip/performance stats reveal with scroll-synced counters
• **Features Section** — Highlighting MacBook features with smooth entrance animations
• **Highlights / Video Gallery** — Apple-style carousel / highlights reel with video playback
• **Fully Responsive** — Adapts seamlessly from mobile to ultra-wide desktop using `react-responsive`
• **Dark-first Design** — Premium dark aesthetic inspired by Apple.com

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Build Tool** | [Vite 8](https://vitejs.dev/) |
| **3D Rendering** | [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [Drei](https://github.com/pmndrs/drei) |
| **Animations** | [GSAP 3](https://gsap.com/) + ScrollTrigger |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **State Management** | [Zustand](https://zustand-demo.pmnd.rs/) |
| **Responsive** | [react-responsive](https://github.com/yocontra/react-responsive) |
| **Utilities** | [clsx](https://github.com/lukeed/clsx) |
| **Linting** | ESLint 10 + eslint-plugin-react-hooks |

---

## 📁 Project Structure

```
applewebsite/
├── public/                  # Static assets (videos, images, 3D models)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation bar
│   │   ├── Hero.jsx          # Hero / landing section
│   │   ├── ProductViewer.jsx # Interactive 3D MacBook viewer
│   │   ├── Showcase.jsx      # Full-screen product showcase
│   │   ├── Performance.jsx   # Chip performance animation section
│   │   ├── Features.jsx      # MacBook features grid
│   │   ├── Highlights.jsx    # Video highlights carousel
│   │   ├── models/           # 3D model components (React Three Fiber)
│   │   └── three/            # Three.js scene utilities & helpers
│   ├── constants/            # App-wide constants (text, colors, assets)
│   ├── store/                # Zustand global state
│   ├── App.jsx               # Root component & page assembly
│   ├── Footer.jsx            # Footer section
│   ├── index.css             # Global styles & design tokens
│   └── main.jsx              # React entry point
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/applewebsite.git
cd applewebsite

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other Commands

```bash
npm run build      # Production build → /dist
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

---

## 🎨 Design Highlights

- **GSAP ScrollTrigger** powers all scroll-based animations — elements fly in, counters tick up, and sections pin exactly as the user scrolls.
- **React Three Fiber** renders a fully interactive 3D MacBook model with orbit controls, lighting rigs, and environment maps — no canvas boilerplate required.
- **Tailwind CSS 4** (via the new Vite plugin) provides utility-first styling with zero config, enabling rapid UI iteration.
- **Zustand** manages shared viewer state (selected color, model variant) without prop drilling.

---
<p align="center">Made with ❤️ using React & Three.js</p>
