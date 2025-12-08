# 🚀 Afsal Majeed - Portfolio Website

A premium, high-performance personal portfolio website built with **React**, **Vite**, and **Vanilla CSS**. This project showcases my skills, experience, and projects in a modern, responsive interface with dark mode support.

🔗 **Live Demo:** [https://CodeWhizAfsal.github.io/portfolio/](https://CodeWhizAfsal.github.io/portfolio/)

---

## ✨ Key Features

- **🎨 Modern Aesthetic**: Clean UI with a professional color palette, glassmorphism effects, and smooth animations.
- **🌓 Dark/Light Mode**: Fully supported theming with persistent user preference (localStorage).
- **📱 Fully Responsive**: Optimized for all devices, from large desktops to mobile phones.
- **⚡ High Performance**: Built with Vite for lightning-fast reloading and optimized production builds.
- **🛠️ Tech Stack Showcase**: Dedicated sections for Skills (with proficiency levels), Experience (Timeline), and Projects.
- **📨 Functional UI**: Interactive contact form layout and social media integration.

---

## 🛠️ Technology Stack

- **Frontend Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (Variables, Flexbox, Grid, Media Queries)
- **Routing**: [React Router DOM](https://reactrouter.com/) (HashRouter for GitHub Pages compatibility)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: GitHub Pages

---

## 📂 Project Structure

```bash
resume/
├── public/              # Static assets (via Vite)
├── src/
│   ├── assets/          # Images and media files
│   │   ├── profile.jpg
│   │   ├── project-buzz.png
│   │   └── ...
│   ├── components/      # Reusable UI components
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── pages/           # Main page views
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── *.css        # Page-specific styles
│   ├── App.jsx          # Main application layout & routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & theme variables
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/CodeWhizAfsal/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start development server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

### Build for Production

To create an optimized production build:
```bash
npm run build
```
The output will be in the `dist/` directory.

---

## 🌍 Deployment

This project is configured for **GitHub Pages**.

1.  **Deploy script**:
    ```bash
    npm run deploy
    ```
    This script runs the build command and pushes the `dist` folder to the `gh-pages` branch.

2.  **Configuration**:
    - `vite.config.js`: Sets `base: '/portfolio/'`.
    - `package.json`: Sets `homepage` to the GitHub Pages URL.
    - `App.jsx`: Uses `HashRouter` to handle client-side routing on static hosts.

---

## 👤 Author

**Afsal Majeed**
- **GitHub**: [@CodeWhizAfsal](https://github.com/CodeWhizAfsal)
- **LinkedIn**: [Afsal Majeed](https://www.linkedin.com/in/afsal-majeed-997ba81b9/)
- **Email**: majeedafsal00@gmail.com

---

© 2025 Afsal Majeed. All Rights Reserved.
