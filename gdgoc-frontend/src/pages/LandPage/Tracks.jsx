import Hustler from '../../assets/Hustler.png';
import Magnify from '../../assets/magnify.png';
import UI from '../../assets/UI.png';
import Paintbrush from '../../assets/Paintbrush.png';
import Hacker from '../../assets/Hacker.png';
import Code from '../../assets/Code.png';

const TrackCard = ({ title, label, desc, tags, colorClass, gradientClass, linkColor, bgImage, floatImage, delay = '0s' }) => (
  <div className="border border-gray-200 rounded-[2rem] bg-white flex flex-col h-full relative overflow-visible">
    
    {/* Graphic Container */}
    <div className={`h-56 flex items-center justify-center relative rounded-t-[2rem] ${gradientClass}`}>
      <img 
        src={bgImage} 
        alt={`${title} background`} 
        className="absolute left-40 -translate-x-1/2 top-65 -translate-y-1/2 w-100 h-100 object-cover scale-125 -bottom-6 z-0 opacity-50 mix-blend-multiply pointer-events-none"
      />
      <img 
        src={floatImage} 
        alt={`${title} icon`} 
        className="relative z-10 w-32 h-32 object-contain animate-float drop-shadow-md"
        style={{ animationDelay: delay }}
      />
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent z-0"></div>
    </div>
    <div className="p-8 flex flex-col flex-grow relative z-10 bg-white rounded-b-[2rem]">
      <span className={`text-xs font-bold tracking-wide mb-3 block ${colorClass}`}>
        {label}
      </span>
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">{title}</h3>
      <p className="text-[15px] text-gray-600 mb-8 flex-grow leading-relaxed">
        {desc}
      </p>
      <hr className="border-gray-200 mb-4" />
      <p className="text-sm text-gray-500 mb-6 font-medium">
        {tags.join(' · ')}
      </p>
      <a href="#" className={`font-semibold text-[15px] transition hover:opacity-70 flex items-center gap-2 ${linkColor}`}>
        Explore this track 
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>
);

const Tracks = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span> FIND YOUR STARTING POINT
          </div>
          <h2 className="text-4xl font-semibold mb-2 text-gray-900">Many interests. One shared journey.</h2>
          <p className="text-gray-600 text-lg">Follow what excites you. Explore a track, then connect the dots with others.</p>
        </div>
        <a href="#" className="text-brand-blue font-semibold hover:opacity-70 transition whitespace-nowrap flex items-center gap-2">
          See the overview &rarr;
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TrackCard 
          title="Research & discovery" label="EXPLORE THE WHY" 
          desc="Ask better questions, understand people, and turn insight into a clear problem worth solving."
          tags={['Problem framing', 'User research', 'Product thinking']}
          colorClass="text-blue-600" 
          gradientClass="bg-gradient-to-b from-blue-100 via-blue-50 to-white"
          linkColor="text-blue-600"
          bgImage={Hustler}
          floatImage={Magnify}
          delay="0s"
        />
        <TrackCard 
          title="Design & creativity" label="MAKE IT MEANINGFUL" 
          desc="Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use."
          tags={['UI/UX', 'Visual storytelling', 'Prototyping']}
          colorClass="text-amber-600" 
          gradientClass="bg-gradient-to-b from-amber-100 via-amber-50 to-white"
          linkColor="text-amber-600"
          bgImage={UI}
          floatImage={Paintbrush}
          delay="1s"
        />
        <TrackCard 
          title="Development" label="BRING IDEAS TO LIFE" 
          desc="Learn the tools, write the code, and build useful things with people who enjoy figuring it out."
          tags={['Web & mobile', 'Cloud', 'AI foundations']}
          colorClass="text-emerald-600" 
          gradientClass="bg-gradient-to-b from-emerald-100 via-emerald-50 to-white"
          linkColor="text-emerald-600"
          bgImage={Hacker}
          floatImage={Code}
          delay="2s"
        />
      </div>
    </section>
  );
};

export default Tracks;