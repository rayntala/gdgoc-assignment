const Project = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-16 items-center">
      
      <div className="flex-1 w-full">
        <div className="bg-[#FFF7DF] rounded-[2rem] p-6 md:p-8 relative">
          <div className="flex justify-between items-center mb-6 px-2">
            <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">
              Idea &rarr; Prototype
            </span>
            <svg 
              className="w-6 h-6 text-blue-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 pt-5 pb-2 flex gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FC5C54]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD15C]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#3AC95B]"></span>
            </div>
            
            <div className="p-8 pt-4">
              <h4 className="text-2xl font-bold text-gray-900 leading-tight mb-6">
                A little less friction.<br />
                A better campus day.
              </h4>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-[#EEF3FF] text-gray-900 font-medium px-5 py-2.5 rounded-lg text-sm">
                  Discover
                </span>
                <span className="bg-[#E6F6ED] text-gray-900 font-medium px-5 py-2.5 rounded-lg text-sm">
                  Connect
                </span>
                <span className="bg-[#FDF0EF] text-gray-900 font-medium px-5 py-2.5 rounded-lg text-sm">
                  Share
                </span>
              </div>
              
              <p className="text-sm text-gray-500 font-medium">
                Start with a student need. Build a small, useful solution.
              </p>
            </div>
          </div>
          
          {/*Caption*/}
          <div className="mt-5 px-2">
            <p className="text-[10px] text-gray-400 tracking-widest uppercase font-medium">
              Example project brief — not a launched product
            </p>
          </div>
        </div>
      </div>

      {/*Content*/}
      <div className="flex-1">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span> Build something that matters
        </div>
        <h2 className="text-4xl md:text-[2.75rem] leading-tight font-semibold mb-6 text-gray-900">
          Your next project could start on campus.
        </h2>
        <p className="text-gray-600 mb-5 leading-relaxed">
          What if finding a study partner, sharing resources, or navigating campus felt easier? Small, familiar problems can be the beginning of meaningful work.
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Bring research, design, and development together. Try an idea, get feedback, and make the next version better.
        </p>
        <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition-colors inline-flex items-center gap-1">
          Explore project-based learning <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  );
};

export default Project;