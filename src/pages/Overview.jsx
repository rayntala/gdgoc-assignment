import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, ArrowDown, X } from 'lucide-react';
import { getTracks, getFormats, getJourney, getRoles } from '../services/api';

const OverviewPage = () => {
  const [data, setData] = useState({
    tracks: [],
    formats: [],
    journey: [],
    roles: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTrackId = searchParams.get('track');
  const [trackDetail, setTrackDetail] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);

  // Fetch all overview data
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [tracks, formats, journey, roles] = await Promise.all([
          getTracks(),
          getFormats(),
          getJourney(),
          getRoles()
        ]);
        setData({ tracks, formats, journey, roles });
      } catch (err) {
        console.error("Failed to fetch overview data:", err);
        setError("Could not load data. Please try again later."); 
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  // Fetch Single Track Data when URL changes 
  useEffect(() => {
    if (!selectedTrackId) {
      setTrackDetail(null);
      return;
    }

    const fetchSingleTrack = async () => {
      setDetailLoading(true);
      try {
        const res = await fetch(`https://gdgoc-ugm-api.vercel.app/api/tracks/${selectedTrackId}`);
        const result = await res.json();
        if (result.success) setTrackDetail(result.data);
      } catch (error) {
        console.error("Failed to fetch track detail", error);
      } finally {
        setDetailLoading(false);
      }
    };

    fetchSingleTrack();
  }, [selectedTrackId]);

  const closeDetail = () => {
    setSearchParams({}); 
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-xl text-gray-500">Loading overview...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-xl text-red-500">{error}</div>;
  }

  return (
    <main className="bg-white min-h-screen font-sans pb-0 scroll-smooth relative">
      
      {/* Track Detail Modal */}
      {selectedTrackId && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 md:p-12 relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <button 
              onClick={closeDetail}
              className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {detailLoading ? (
              <div className="text-center py-20 text-gray-500">Loading track details...</div>
            ) : trackDetail ? (
              <div>
                <div className="text-6xl mb-6">{trackDetail.icon}</div>
                <h2 className="text-4xl font-bold mb-2">{trackDetail.name}</h2>
                <p className="text-blue-600 font-semibold mb-6">{trackDetail.tagline}</p>
                
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">{trackDetail.description}</p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-3">What you will do</h4>
                  <p className="text-gray-800 bg-blue-50 p-4 rounded-xl">{trackDetail.what_you_do}</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-3">Skills you will build</h4>
                  <div className="flex flex-wrap gap-2">
                    {trackDetail.skills.map((skill, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                    ))}
                  </div>
                </div>

                <button onClick={closeDetail} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Close Details
                </button>
              </div>
            ) : (
              <div className="text-center py-20 text-red-500">Failed to load details.</div>
            )}
          </div>
        </div>
      )}
      
      {/* header */}
      <section className="max-w-[1400px] mx-auto px-6 pt-0 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/*Text Column */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> Overview • Programs & learning tracks
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6 text-gray-900">
              Find your spark.<br />
              <span className="text-blue-600 whitespace-nowrap">Build your own path.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Explore how research, creativity, and development connect. Start with one interest. Grow through
              practice and the people around you.
            </p>
          </div>

          {/* Graphic */}
          <div className="relative flex justify-end items-center">
            {/* Updated to point to public folder */}
            <img src="/Huster.png" alt="Graphic" className="w-auto h-[250px] md:h-[500px] object-contain drop-shadow-sm" />
          </div>

        </div>
      </section>
      
      {/* sub navigation */}
      <section className="border-y border-gray-100 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center gap-10 h-14 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <a href="#tracks" className="text-sm font-semibold text-blue-600 flex items-center gap-2 hover:opacity-80 transition">
            Learning tracks <ArrowDown className="w-3.5 h-3.5" />
          </a>
          <a href="#formats" className="text-sm font-medium text-gray-500 flex items-center gap-2 hover:text-gray-900 transition">
            Learning formats <ArrowDown className="w-3.5 h-3.5" />
          </a>
          <a href="#journey" className="text-sm font-medium text-gray-500 flex items-center gap-2 hover:text-gray-900 transition">
            Your learning journey <ArrowDown className="w-3.5 h-3.5" />
          </a>
          <a href="#roles" className="text-sm font-medium text-gray-500 flex items-center gap-2 hover:text-gray-900 transition">
            Find a starting point <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* tracks */}
      <section id="tracks" className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> Explore your interests
            </div>
            <h2 className="text-4xl font-semibold mb-2 text-gray-900">Three ways in. Plenty of ways forward.</h2>
            <p className="text-gray-600 text-lg">These pathways are starting points, not boxes. Follow one deeply or bring different skills together.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Dynamically map through API tracks */}
          {data.tracks.map((track) => {

            let bgImg, floatImg, gradientClass, textColor;
            let animDelay = '0s';

            if (track.id === 'research-discovery') {
              bgImg = '/Hustler.png'; floatImg = '/magnify.png';
              gradientClass = 'from-blue-100 via-blue-50 to-white';
              textColor = 'text-blue-600'; animDelay = '0s';
            } else if (track.id === 'design-creativity') {
              bgImg = '/UI.png'; floatImg = '/Paintbrush.png';
              gradientClass = 'from-amber-100 via-amber-50 to-white';
              textColor = 'text-amber-600'; animDelay = '1s';
            } else if (track.id === 'development') {
              bgImg = '/Hacker.png'; floatImg = '/Code.png';
              gradientClass = 'from-emerald-100 via-emerald-50 to-white';
              textColor = 'text-emerald-600'; animDelay = '2s';
            }

            return (
              <div key={track.id} className="border border-gray-200 rounded-[2rem] bg-white flex flex-col h-full relative overflow-visible hover:shadow-lg transition duration-200">
                <div className={`h-56 flex items-center justify-center relative rounded-t-[2rem] overflow-hidden bg-gradient-to-b ${gradientClass}`}>
                  <img src={bgImg} alt="bg" className="absolute left-1/2 -translate-x-1/2 top-2/2 -translate-y-1/2 w-[500px] h-[500px] object-contain scale-125 z-0 opacity-50 mix-blend-multiply pointer-events-none" />
                  <img src={floatImg} alt="icon" className="relative z-10 w-32 h-32 object-contain animate-float drop-shadow-md" style={{ animationDelay: animDelay }} />
                  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent z-0"></div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow relative z-10 bg-white rounded-b-[2rem]">
                  <span className={`text-xs font-bold tracking-wide mb-3 block ${textColor}`}>
                    {track.tagline.toUpperCase()}
                  </span>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{track.name}</h3>
                  <p className="text-[15px] text-gray-600 mb-8 flex-grow leading-relaxed">
                    {track.description}
                  </p>
                  
                  <hr className="border-gray-200 mb-4" />
                  
                  <p className="text-sm text-gray-500 mb-6 font-medium">
                    {track.skills.join(' · ')}
                  </p>
                  
                  <Link to={track.explore_link} className={`font-semibold text-[15px] transition hover:opacity-70 flex items-center gap-2 ${textColor}`}>
                    Explore this track <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* table */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">From an interest to something you can show.</h2>
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
                <tr>
                  <th className="py-4 px-6 font-medium">Pathway</th>
                  <th className="py-4 px-6 font-medium">What you can practice</th>
                  <th className="py-4 px-6 font-medium">A possible outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-900">Research & discovery</td>
                  <td className="py-4 px-6">Listening, problem framing, and testing assumptions</td>
                  <td className="py-4 px-6">A research insight and a focused problem brief</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-900">Design & creativity</td>
                  <td className="py-4 px-6">Ideation, user flows, and prototype feedback</td>
                  <td className="py-4 px-6">An interactive prototype and a design story</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-900">Development</td>
                  <td className="py-4 px-6">Coding, testing, and connecting tools</td>
                  <td className="py-4 px-6">A working demo with a clear explanation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* formats */}
      <section id="formats" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span> WAYS TO LEARN
        </div>
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-2 text-gray-900">How We Learn</h2>
          <p className="text-gray-600">Different formats for different stages of your journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.formats.map((format) => (
            <div key={format.id} className="bg-white rounded-2xl p-8 flex flex-col justify-between shadow-sm border border-gray-200">
              <div className="flex gap-4 items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl shrink-0">
                  {format.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{format.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{format.description}</p>
                </div>
              </div>
              <div className="text-xs text-blue-600 font-medium pl-16">
                Best for: "{format.cta.replace(/-/g, ' ')}"
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* journey */}
      <section id="journey" className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span> PROGRESS, NOT PERFECTION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 tracking-tight">A journey you can keep building on.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {data.journey.map((step, index) => (
              <div key={step.id} className="relative z-10 flex flex-col items-start">
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  0{step.step || index + 1}
                </div>
                <hr className="w-full border-t-2 border-gray-100 mb-6" />
                <h4 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* banner */}
      <section className="bg-[#FFFBF0] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> START WHERE YOU ARE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              New to tech?<br />That's a starting point, too.
            </h2>
          </div>
          <div className="pt-2 md:pt-10">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-lg">
              You don't need a finished portfolio or the perfect track choice. Pick a topic you're curious about. If you're unsure, tell us what interests you and we can start a conversation.
            </p>
            <Link to="/contact" className="font-semibold text-blue-600 transition hover:opacity-70 flex items-center gap-2">
              Ask about getting started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* roles */}
      <section id="roles" className="bg-[#F0F5FF] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-2 text-gray-900">There's more than one way to contribute.</h2>
            <p className="text-gray-600">You can be learning one day and helping someone else the next.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.roles.map((role) => (
              <div key={role.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="text-3xl mb-4">{role.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 pb-28">
        <div className="bg-[#EFF4FF] rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> YOUR NEXT CHAPTER
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Bring your curiosity.<br />We'll build from there.
            </h2>
            <p className="text-gray-600">
              Find a learning track, meet a collaborator, or start a conversation.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-4 shrink-0 w-full md:w-auto">
            <Link to="/overview" className="w-full md:w-auto bg-[#3B6AFF] text-white px-8 py-3.5 rounded-xl font-semibold transition hover:bg-blue-700 flex items-center justify-center gap-2">
              Explore the overview <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="text-blue-600 font-semibold transition hover:opacity-70 flex items-center justify-center gap-2 w-full md:w-auto">
              Talk to the community <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default OverviewPage;