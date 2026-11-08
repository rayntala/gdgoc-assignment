import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-200 pt-16 pb-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <img 
            src="/logo.png" 
            alt="GDG Logo" 
            className="w-30 h-30 object-contain" 
          />
          
          <h4 className="font-semibold mb-2">Google Developer Groups<br />On Campus · Universitas Gadjah Mada</h4>
          <p className="text-sm text-gray-600 max-w-xs">A student community for curious minds, shared learning, and technology with purpose.</p>
        </div>
        <div>
          <h5 className="font-semibold mb-4">Explore</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            {/* Changed to Link tags */}
            <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-600 transition">About</Link></li>
            <li><Link to="/overview" className="hover:text-blue-600 transition">Overview</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-4">Keep in the loop</h5>
          <a href="https://instagram.com/gdgoc.ugm" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:opacity-70 transition">@gdgoc.ugm</a>
          <div className="flex gap-3 my-4 text-xl">
            <span>
              <img 
                src="/insta.png" 
                alt="instagram" 
                className="w-10 h-10 object-contain" 
              />
            </span> 
            <span>
              <img 
                src="/youtube.png" 
                alt="youtube" 
                className="w-10 h-10 object-contain" 
              />
            </span>
          </div>
          <p className="text-sm text-gray-600">Learn together. Build together.</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© GDGoC Universitas Gadjah Mada • 2026/2027</p>
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
        </div>
        <p>Made for the campus. Open to possibilities.</p>
      </div>
    </footer>
  );
};

export default Footer;