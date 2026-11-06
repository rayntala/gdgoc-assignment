const Project = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-16 items-center">
      {/* Visual / Mockup */}
      <div className="flex-1 w-full">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gray-100 px-4 py-3 flex gap-2 border-b border-gray-200">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
          </div>
          <div className="p-8">
            <h4 className="text-xl font-semibold mb-4">A little less friction.<br />A better campus day.</h4>
            <div className="flex gap-2 mb-4">
              <span className="bg-gray-50 px-4 py-1.5 rounded-md text-sm text-gray-600">Discover</span>
              <span className="bg-blue-50 text-blue-600 font-medium px-4 py-1.5 rounded-md text-sm">Connect</span>
              <span className="bg-gray-50 px-4 py-1.5 rounded-md text-sm text-gray-600">Share</span>
            </div>
            <p className="text-sm text-gray-500">Start with a student need. Build a small, useful solution.</p>
          </div>
        </div>
        <p className="text-[10px] text-gray-400 mt-4 tracking-widest uppercase">Example project brief — not a launched product</p>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span> BUILD SOMETHING THAT MATTERS
        </div>
        <h2 className="text-4xl font-semibold mb-6">Your next project could start on campus.</h2>
        <p className="text-gray-600 mb-4">
          What if finding a study partner, sharing resources, or navigating campus felt easier? Small, familiar problems can be the beginning of meaningful work.
        </p>
        <p className="text-gray-600 mb-6">
          Bring research, design, and development together. Try an idea, get feedback, and make the next version better.
        </p>
        <a href="#" className="text-brand-blue font-medium hover:opacity-70 transition">Explore project-based learning &rarr;</a>
      </div>
    </section>
  );
};

export default Project;