import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  // Default links in case the API is slow or fails
  const [links, setLinks] = useState([
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Overview', href: '/overview' },
    { label: 'Contact', href: '/contact' },
  ])

  useEffect(() => {
    const fetchNav = async () => {
      try {
        const res = await fetch('https://gdgoc-ugm-api.vercel.app/api/navigation');
        const data = await res.json();
        if (data.success) {
          setLinks(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch navigation links", error);
      }
    };
    fetchNav();
  }, []);

  const navLinkClass = ({ isActive }) =>
    `px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'bg-blue-50 text-blue-600'
        : 'text-gray-500 hover:text-gray-900'
    }`

  return (
    <nav className="font-sans bg-white w-full border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo and Text */}
        <Link to="/" className="flex items-center gap-4">
          <img 
            src="src/assets/logo.png" 
            alt="GDG Logo" 
            className="w-12 h-12 object-contain" 
          />
          
          <div className="flex flex-col justify-center">
            <span className="text-xl font-semibold text-gray-800 leading-tight">
              Google Developer Groups
            </span>
            <div className="flex items-center text-sm">
              <span className="text-blue-500 font-medium">On Campus</span>
              <span className="text-gray-400 mx-1">•</span>
              <span className="text-gray-500">Universitas Gadjah Mada</span>
            </div>
          </div>
        </Link>

        {/* Navigation Links (Mapped from API) */}
        <div className="hidden lg:flex items-center space-x-2">
          {links.map((link) => (
            <NavLink key={link.label} to={link.href} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <Link 
            to="/overview" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
          >
            Find your track
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden px-4 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link 
            to="/overview" 
            className="mt-4 w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
          >
            Find your track
          </Link>
        </div>
      )}
    </nav>
  )
}