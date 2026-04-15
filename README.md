
<p align="center">
  <img src="https://i.ibb.co/BK1Hn0x/Screenshot-2022-08-08-at-4-05-48-PM.png" alt="HooBank Banner" width="100%" />
</p>

<h1 align="center">🏦 HooBank — Modern Banking UI/UX</h1>

<p align="center">
  A stunning, fully responsive <strong>Modern Banking Landing Page</strong> built with <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and <strong>Framer Motion</strong>. Featuring scroll-triggered animations, glassmorphism effects, and a premium UI/UX design that sets the standard for modern fintech interfaces.
</p>

<p align="center">
  <a href="https://project-hoobank-peach.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/🚀 Live Demo-Visit Site-6C63FF?style=for-the-badge" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-3.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.1.6-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer Motion-12.x-FF0055?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</p>

---

## 🌐 Live Demo

> **[https://project-hoobank-peach.vercel.app/](https://project-hoobank-peach.vercel.app/)**

---

## ✨ Features

- 🎨 **Premium UI/UX Design** — Sleek dark-themed layout with gradient accents and glassmorphism
- 🎞️ **Scroll-Triggered Animations** — Smooth entrance animations powered by Framer Motion
- 📱 **Fully Responsive** — Pixel-perfect on mobile, tablet, and desktop
- 🔝 **Fixed Glassmorphic Navbar** — Sticky top navbar with blur effect and scroll-aware styling
- 🚀 **Fast Build** — Powered by Vite for lightning-fast development and optimized production builds
- 🧩 **Reusable Components** — Modular, maintainable component architecture
- 🗂️ **Centralized Constants** — All data (stats, features, testimonials, footer links) managed in one place
- 💡 **Modern JavaScript** — ES Modules with JSX syntax

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React.js](https://reactjs.org/) | 18.2.0 | UI component framework |
| [Vite](https://vitejs.dev/) | 3.0.0 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 3.1.6 | Utility-first CSS styling |
| [Framer Motion](https://www.framer.com/motion/) | 12.x | Animations & transitions |
| [PostCSS](https://postcss.org/) | 8.4.x | CSS processing pipeline |
| [Autoprefixer](https://github.com/postcss/autoprefixer) | 10.4.x | Cross-browser CSS compatibility |
| HTML5 | — | Semantic markup |
| JavaScript (ES2022) | — | Core application logic |
| CSS3 | — | Custom styles & animations |

---

## 📁 Folder Structure

```
project_hoobank-main/
│
├── public/                     # Static public assets
│
├── src/                        # Application source code
│   ├── assets/                 # Images, SVGs & icons
│   │   ├── index.js            # Asset barrel exports
│   │   ├── logo.svg
│   │   ├── robot.png
│   │   ├── card.png
│   │   ├── bill.png
│   │   ├── apple.svg
│   │   ├── google.svg
│   │   ├── people01.png
│   │   ├── people02.png
│   │   ├── people03.png
│   │   ├── airbnb.png
│   │   ├── binance.png
│   │   ├── coinbase.png
│   │   ├── dropbox.png
│   │   ├── facebook.svg
│   │   ├── instagram.svg
│   │   ├── linkedin.svg
│   │   ├── twitter.svg
│   │   ├── Send.svg
│   │   ├── Shield.svg
│   │   ├── Star.svg
│   │   ├── Discount.svg
│   │   ├── arrow-up.svg
│   │   ├── close.svg
│   │   ├── menu.svg
│   │   └── quotes.svg
│   │
│   ├── components/             # Reusable UI components
│   │   ├── index.js            # Component barrel exports
│   │   ├── Navbar.jsx          # Fixed glassmorphic navigation bar
│   │   ├── Hero.jsx            # Hero section with CTA buttons
│   │   ├── Stats.jsx           # Key statistics section
│   │   ├── Business.jsx        # Business features section
│   │   ├── Billing.jsx         # Billing info with app store links
│   │   ├── CardDeal.jsx        # Card deal showcase section
│   │   ├── Testimonials.jsx    # Customer testimonials section
│   │   ├── Clients.jsx         # Trusted client logos strip
│   │   ├── CTA.jsx             # Call-to-action section
│   │   ├── Footer.jsx          # Footer with links & social icons
│   │   ├── FeedbackCard.jsx    # Individual testimonial card
│   │   ├── GetStarted.jsx      # Circular "Get Started" button
│   │   └── Button.jsx          # Reusable button component
│   │
│   ├── constants/
│   │   └── index.js            # All app data (nav, stats, features, testimonials, footer)
│   │
│   ├── utils/                  # Utility helpers
│   │
│   ├── App.jsx                 # Root application component
│   ├── main.jsx                # React DOM entry point
│   ├── index.css               # Global styles & Tailwind directives
│   └── style.js                # Reusable Tailwind class string constants
│
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── tailwind.config.cjs         # Tailwind CSS configuration
├── postcss.config.cjs          # PostCSS configuration
├── package.json                # Project metadata & dependencies
└── .gitignore                  # Git ignore rules
```

---

## 🧩 Components Overview

| Component | Description |
|---|---|
| `Navbar` | Fixed top navigation with mobile menu, glassmorphism backdrop, and scroll-aware styling |
| `Hero` | Full-screen hero with gradient text, discount badge, and animated CTA |
| `Stats` | Animated statistics counters (users, transactions, countries) |
| `Business` | Feature highlights with icon cards and gradient list items |
| `Billing` | Side-by-side billing graphic with App Store & Google Play badges |
| `CardDeal` | Premium card visual with deal information |
| `Testimonials` | Feedback cards with star ratings and user avatars |
| `Clients` | Horizontal logo strip for trusted partner brands |
| `CTA` | Full-width call-to-action banner |
| `Footer` | Multi-column footer with social links and legal info |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 16.x
- **npm** ≥ 7.x

### Installation & Local Development

```bash
# 1. Clone the repository
git clone https://github.com/your-username/project_hoobank-main.git

# 2. Navigate into the project
cd project_hoobank-main

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be live at **[http://localhost:5173](http://localhost:5173)**

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📦 Available Scripts

| Script | Command | Description |
|---|---|---|
| Development | `npm run dev` | Start Vite dev server with HMR |
| Build | `npm run build` | Create optimized production bundle |
| Preview | `npm run preview` | Serve the production build locally |

---

## 🎨 Design Highlights

- **Color Palette** — Deep navy/dark backgrounds (`#00040f`, `#00f6ff`) with vibrant cyan-blue gradient accents
- **Typography** — Clean sans-serif font hierarchy with responsive sizing
- **Glassmorphism** — Frosted glass effect on the navbar using `backdrop-filter: blur`
- **Gradient Effects** — Text gradients, button gradients, and background gradient blobs
- **Animations** — Framer Motion scroll-triggered reveals, staggered list animations, and fade-ins

---

## 🌍 Deployment

This project is deployed on **[Vercel](https://vercel.com/)**.

**Live URL:** [https://project-hoobank-peach.vercel.app/](https://project-hoobank-peach.vercel.app/)

To deploy your own fork:

1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com/)
3. Vercel auto-detects Vite and deploys instantly ✅

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- Original design & tutorial by **[JS Mastery](https://www.jsmastery.pro/)**
- Enhanced with **Framer Motion** animations
- Deployed via **Vercel**

---

<p align="center">
  Made with ❤️ and React.js · <a href="https://project-hoobank-peach.vercel.app/">View Live</a>
</p>
