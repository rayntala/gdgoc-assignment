import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('https://gdgoc-ugm-api.vercel.app/api/stats');
        const data = await res.json();
        setStats(data.data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    fetchStats();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span> GDGoC UGM • 2026/2027
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-gray-900">
          Big ideas.<br />
          <span className="text-blue-600">Built together.</span>
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 max-w-lg">
          A place for curious minds at Universitas Gadjah Mada to learn, connect, and build technology that matters.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <Link to="/overview" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Find your learning track &rarr;
          </Link>
          <Link to="/about" className="border border-gray-300 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:border-gray-400 transition">
            Get to know us &rarr;
          </Link>
        </div>
        
        {/* dynamic stats from /api/stats */}
        {stats && (
          <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-gray-100">
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.community_members}+</p>
              <p className="text-sm text-gray-500">Community Members</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.workshops_held}</p>
              <p className="text-sm text-gray-500">Workshops Held</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.projects_shipped}</p>
              <p className="text-sm text-gray-500">Projects Shipped</p>
            </div>
          </div>
        )}

        <div className="flex items-center gap-1 text-sm text-gray-500 mt-8">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-600"></span>
          <span className="w-3 h-3 rounded-full bg-blue-500"></span>
          <span className="ml-2">Different backgrounds. A shared curiosity.</span>
        </div>
      </div>
      
      {/* Graphic */}
      <div className="relative w-full max-w-[600px] aspect-square lg:w-[600px] lg:h-[600px] flex items-center justify-center">
        <img src="/something2.png" alt="something" className="w-full h-full object-contain" />
        <div className="absolute bottom-[40%] left-[10%] animate-float">
          <div className="bg-white px-6 py-3 rounded-lg text-lg font-medium shadow-md whitespace-nowrap">
            hello, possibilities_
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;