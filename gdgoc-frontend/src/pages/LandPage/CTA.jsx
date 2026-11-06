import { ArrowRight } from 'lucide-react';
const CTA = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-[#F0F5FF] rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> YOUR NEXT CHAPTER
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900 leading-tight">
              Bring your curiosity.<br />We'll build from there.
            </h2>
            <p className="text-gray-600 text-lg">Find a learning track, meet a collaborator, or start a conversation.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4 shrink-0">
            <button className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-700 transition flex items-center gap-2 w-full md:w-auto justify-center">
              Explore the overview <ArrowRight className="w-4 h-4" />
            </button>
            <a href="#" className="text-blue-600 font-semibold hover:opacity-70 transition flex items-center gap-2">
              Talk to the community <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
  );
};

export default CTA;