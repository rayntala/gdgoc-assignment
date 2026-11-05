const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-green-500"></span> GDGoC UGM • 2026/2027
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
          Big ideas.<br />
          <span className="text-brand-blue">Built together.</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-lg">
          A place for curious minds at Universitas Gadjah Mada to learn, connect, and build technology that matters.
        </p>
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="bg-brand-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Find your learning track &rarr;
          </button>
          <button className="border border-gray-300 bg-white text-brand-dark px-6 py-3 rounded-lg font-medium hover:border-gray-400 transition">
            Get to know us &rarr;
          </button>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          <span className="ml-2">Different backgrounds. A shared curiosity.</span>
        </div>
      </div>
      
      {/*Graphic Placeholder*/}
      <div className="flex-1 w-full min-h-[400px] bg-gradient-to-br from-blue-100 to-yellow-50 rounded-3xl flex items-center justify-center relative">
        <div className="bg-white/40 backdrop-blur-md border border-white/60 p-10 rounded-2xl shadow-xl relative animate-float">
          <div className="text-6xl font-bold text-green-600/80">&lt;/&gt;</div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-lg text-sm font-medium shadow-md whitespace-nowrap">
            hello, possibilities.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;