
# GDGoC UGM - Open Recruitment Website

A modern, responsive, data-driven frontend application for Google Developer Groups on Campus (GDGoC) Universitas Gadjah Mada.

This project was built to fulfill the open recruitment frontend assignment, focusing on clean UI/UX, seamless routing, and dynamic API consumption.
**Live Website:** [https://gdgoc-assignment-eight.vercel.app/](https://gdgoc-assignment-eight.vercel.app/)

## Features

- **Fully Responsive Design:** Optimized for mobile, tablet, and desktop viewing using Tailwind CSS.
- **Dynamic API Consumption:** All data (Tracks, Formats, Journey, Roles, FAQs, Stats, and Navigation) is fetched dynamically from a live REST API.
- **Track Detail Modal:** Clicking "Explore this track" opens a dynamic, URL-driven modal that fetches specific track details (`/api/tracks/:id`) without reloading the page.
- **Robust State Handling:** Implements loading indicators and error fallbacks for a smooth user experience, even if the network fails.
- **Interactive UI Elements:** Floating animations on track cards, accordion-style FAQs, and smooth scroll navigation.

## Tech Stack

- **Framework:** [React.js](https://react.dev/) (via [Vite](https://vitejs.dev/))
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Project Structure

```text
gdgoc-assignment/
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
```

## API Reference

This project uses the following live API:

**Base URL:** https://gdgoc-ugm-api.vercel.app/api

### Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/tracks` | Get all learning tracks |
| GET | `/tracks/:id` | Get details of a specific track |
| GET | `/values` | Get community values (About page) |
| GET | `/formats` | Get learning formats (Overview page) |
| GET | `/journey` | Get the 4-step learning journey (Overview page) |
| GET | `/roles` | Get contribution roles (About/Overview pages) |
| GET | `/faqs` | Get frequently asked questions (Landing page) |
| GET | `/stats` | Get community statistics (Landing page Hero) |
| GET | `/navigation` | Get site navigation links (Navbar) |

---

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your machine.

### 1. Clone the Repository

```bash
git clone https://github.com/rayntala/gdgoc-assignment.git
cd gdgoc-assignment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 4. Build for Production

To create an optimized production build, run:

```bash
npm run build
```

### 5. Preview the Production Build

To test the production build locally, especially to verify that images load correctly from the `public` folder, run:

```bash
npm run preview
```

---

## Notes for Evaluation

- **Favicon:** The browser tab icon is set to `logo.png`, located in the `public` folder.
- **Images:** All static images are stored in the `public` folder and referenced using absolute paths (e.g., `/logo.png`). This ensures they work correctly in both development and production environments.
- **API Handling:** The Overview page uses `Promise.all` to fetch multiple API endpoints in parallel, improving data-loading performance.
