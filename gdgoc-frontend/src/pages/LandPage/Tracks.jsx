import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Tracks = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span> EXPLORE YOUR INTERESTS
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
          Three ways in. Plenty of ways<br className="hidden md:block" /> forward.
        </h2>
        <p className="text-gray-600 text-lg">
          These pathways are starting points, not boxes. Follow one deeply or bring different skills together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Research */}
        <div className="border border-gray-200 rounded-[2rem] bg-white flex flex-col h-full relative overflow-visible">
          <div className="h-56 flex items-center justify-center relative rounded-t-[2rem] overflow-hidden bg-gradient-to-b from-blue-100 via-blue-50 to-white">
            <img src="/Hustler.png" alt="bg" className="absolute left-1/2 -translate-x-1/2 top-2/2 -translate-y-1/2 w-500 h-500 object-contain scale-120 z-0 opacity-50 mix-blend-multiply pointer-events-none" />
            <img src="/magnify.png" alt="icon" className="relative z-10 w-32 h-32 object-contain animate-float drop-shadow-md" style={{ animationDelay: '0s' }} />
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent z-0"></div>
          </div>
          <div className="p-8 flex flex-col flex-grow relative z-10 bg-white rounded-b-[2rem]">
            <span className="text-xs font-bold tracking-wide mb-3 block text-blue-600">EXPLORE THE WHY</span>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Research & discovery</h3>
            <p className="text-[15px] text-gray-600 mb-8 flex-grow leading-relaxed">
              Ask better questions, understand people, and turn insight into a clear problem worth solving.
            </p>
            <hr className="border-gray-200 mb-4" />
            <p className="text-sm text-gray-500 mb-6 font-medium">Problem framing · User research · Product thinking</p>
            <Link to="/overview?track=research-discovery" className="font-semibold text-[15px] transition hover:opacity-70 flex items-center gap-2 text-blue-600">
              Explore this track <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Card 2: Design */}
        <div className="border border-gray-200 rounded-[2rem] bg-white flex flex-col h-full relative overflow-visible">
          <div className="h-56 flex items-center justify-center relative rounded-t-[2rem] overflow-hidden bg-gradient-to-b from-amber-100 via-amber-50 to-white">
            <img src="/UI.png" alt="bg" className="absolute left-1/2 -translate-x-1/2 top-2/2 -translate-y-1/2 w-500 h-500 object-contain scale-120 z-0 opacity-50 mix-blend-multiply pointer-events-none" />
            <img src="/Paintbrush.png" alt="icon" className="relative z-10 w-32 h-32 object-contain animate-float drop-shadow-md" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent z-0"></div>
          </div>
          <div className="p-8 flex flex-col flex-grow relative z-10 bg-white rounded-b-[2rem]">
            <span className="text-xs font-bold tracking-wide mb-3 block text-amber-600">MAKE IT MEANINGFUL</span>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Design & creativity</h3>
            <p className="text-[15px] text-gray-600 mb-8 flex-grow leading-relaxed">
              Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.
            </p>
            <hr className="border-gray-200 mb-4" />
            <p className="text-sm text-gray-500 mb-6 font-medium">UI/UX · Visual storytelling · Prototyping</p>
            <Link to="/overview?track=design-creativity" className="font-semibold text-[15px] transition hover:opacity-70 flex items-center gap-2 text-amber-600">
              Explore this track <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Card 3: Development */}
        <div className="border border-gray-200 rounded-[2rem] bg-white flex flex-col h-full relative overflow-visible">
          <div className="h-56 flex items-center justify-center relative rounded-t-[2rem] overflow-hidden bg-gradient-to-b from-emerald-100 via-emerald-50 to-white">
            <img src="/Hacker.png" alt="bg" className="absolute left-1/2 -translate-x-1/2 top-2/2 -translate-y-1/2 w-500 h-500 object-contain scale-120 z-0 opacity-50 mix-blend-multiply pointer-events-none" />
            <img src="/Code.png" alt="icon" className="relative z-10 w-32 h-32 object-contain animate-float drop-shadow-md" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent z-0"></div>
          </div>
          <div className="p-8 flex flex-col flex-grow relative z-10 bg-white rounded-b-[2rem]">
            <span className="text-xs font-bold tracking-wide mb-3 block text-emerald-600">BRING IDEAS TO LIFE</span>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Development</h3>
            <p className="text-[15px] text-gray-600 mb-8 flex-grow leading-relaxed">
              Learn the tools, write the code, and build useful things with people who enjoy figuring it out.
            </p>
            <hr className="border-gray-200 mb-4" />
            <p className="text-sm text-gray-500 mb-6 font-medium">Web & mobile · Cloud · AI foundations</p>
            <Link to="/overview?track=development" className="font-semibold text-[15px] transition hover:opacity-70 flex items-center gap-2 text-emerald-600">
              Explore this track <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Tracks;