GDGoC UGM - Open Recruitment Website
A modern, responsive, data-driven frontend application for Google Developer Groups on Campus (GDGoC) Universitas Gadjah Mada. This project was built to fulfill the open recruitment frontend assignment, focusing on clean UI/UX, seamless routing, and dynamic API consumption.

-Features
Fully Responsive Design: Optimized for mobile, tablet, and desktop viewing using Tailwind CSS.

Dynamic API Consumption: All data (Tracks, Formats, Journey, Roles, FAQs, Stats, Navigation) is fetched dynamically from a live REST API.

Track Detail Modal: Clicking "Explore this track" opens a dynamic, URL-driven modal that fetches specific track details (/api/tracks/:id) without reloading the page.

Robust State Handling: Implements loading indicators and error fallbacks for a smooth user experience even if the network fails.

Interactive UI Elements: Floating animations on track cards, accordion-style FAQs, and smooth scroll navigation.

-Tech Stack
Framework: React.js (via Vite)

Styling: Tailwind CSS v4

Routing: React Router DOM

Icons: Lucide React

-Project Structure
text
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
-API Reference
This project consumes the following live API: https://gdgoc-ugm-api.vercel.app/api

Endpoints used:

GET /tracks - All learning tracks

GET /tracks/:id - Specific track details

GET /values - Community values (About page)

GET /formats - Learning formats (Overview page)

GET /journey - 4-step learning journey (Overview page)

GET /roles - Contribution roles (About/Overview pages)

GET /faqs - Frequently asked questions (Landing page)

GET /stats - Community statistics (Landing page Hero)

GET /navigation - Site navigation links (Navbar)

-Setup Instructions
Follow these steps to run the project locally:

Prerequisites
Make sure you have Node.js (v18 or higher) installed on your machine.

1. Clone the repository
bash
git clone https://github.com/your-username/gdgoc-frontend.git
cd gdgoc-frontend
2. Install dependencies
bash
npm install
3. Run the development server
bash
npm run dev
Open http://localhost:5173 in your browser to view the application.

4. Build for production
To create an optimized production build, run:

bash
npm run build
5. Preview the production build
To test the production build locally (especially to verify that images load correctly from the public folder), run:

bash
npm run preview

-Notes for Evaluation
Favicon: The tab icon has been set to logo.png located in the public 

Images: All static images are stored in the public folder and referenced using absolute paths (e.g., /logo.png) to ensure they resolve correctly in both development and production environments.

API Handling: The application uses Promise.all to fetch data in parallel on the Overview page for maximum performance.