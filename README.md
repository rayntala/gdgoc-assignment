# GDGoC UGM - Open Recruitment Website

A modern, responsive, data-driven frontend application for Google Developer Groups on Campus (GDGoC) Universitas Gadjah Mada. This project was built to fulfill the open recruitment frontend assignment, focusing on clean UI/UX, seamless routing, and dynamic API consumption.

## -Features

- **Fully Responsive Design:** Optimized for mobile, tablet, and desktop viewing using Tailwind CSS.
- **Dynamic API Consumption:** All data (Tracks, Formats, Journey, Roles, FAQs, Stats, Navigation) is fetched dynamically from a live REST API.
- **Track Detail Modal:** Clicking "Explore this track" opens a dynamic, URL-driven modal that fetches specific track details (`/api/tracks/:id`) without reloading the page.
- **Robust State Handling:** Implements loading indicators and error fallbacks for a smooth user experience even if the network fails.
- **Interactive UI Elements:** Floating animations on track cards, accordion-style FAQs, and smooth scroll navigation.

## -Tech Stack

- **Framework:** [React.js](https://react.dev/) (via [Vite](https://vitejs.dev/))
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## -Project Structure

```text
gdgoc-frontend/
├── public/                 # Static assets (images, icons) served directly
├── src/
│   ├── assets/             # Original source assets (if any remain)
│   ├── components/         # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/              # Page components
│   │   ├── AboutPage.jsx
│   │   ├── Overview.jsx
│   │   ├── LandingPage.jsx # Wrapper for landing page sections
│   │   └── LandPage/       # Landing page section components
│   ├── services/
│   │   └── api.js          # Centralized API fetching logic
│   ├── App.jsx             # Main routing and layout wrapper
│   ├── index.css           # Tailwind imports and global styles
│   └── main.jsx            # React application entry point
├── .gitignore
├── index.html              # HTML template and favicon setup
├── package.json
├── vite.config.js
└── README.md
