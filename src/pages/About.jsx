import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Code, Heart } from 'lucide-react';

const AboutPage = () => {
  const [values, setValues] = useState([]);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        // Fetch values and roles in parallel
        const [valuesRes, rolesRes] = await Promise.all([
          fetch('https://gdgoc-ugm-api.vercel.app/api/values'),
          fetch('https://gdgoc-ugm-api.vercel.app/api/roles')
        ]);
        
        const valuesData = await valuesRes.json();
        const rolesData = await rolesRes.json();

        setValues(valuesData.data);
        setRoles(rolesData.data);
      } catch (error) {
        console.error("Error fetching About data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  // Show a loading state while fetching API data
  if (loading) return <div className="text-center py-20 min-h-screen">Loading...</div>;

  return (
    <main className="bg-white min-h-screen font-sans">
      
      {/* hero*/}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span> ABOUT GDGOC UGM
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6 text-gray-900">
            Built by students.<br />
            <span className="text-blue-600">For what's next.</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            We're a community of learners and makers at Universitas Gadjah Mada, connected by curiosity and the belief that technology can do good.
          </p>
          
          <p className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
            UNIVERSITAS GADJAH MADA • 2026/2027
          </p>
        </div>
        
        {/* Graphic */}
        <div className="flex-1 w-full flex justify-end">
          <div className="w-full max-w-[560px] aspect-square rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden relative bg-white">
            <img src="/about.png" alt="About GDGoC" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> WHY WE COME TOGETHER
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
              A bridge from<br />
              <span className="text-blue-600">"I wonder"</span> to<br />
              <span className="text-blue-600">"I made this."</span>
            </h2>
          </div>
          
          <div className="flex-1 pt-2 lg:pt-12">
            <p className="text-xl text-gray-900 mb-6 font-medium leading-relaxed">
              Learning feels different when there's someone to exchange ideas with, a problem you care about, and the space to give it a try.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              That's the spirit of Google Developer Groups on Campus at UGM. We create room for students to explore technology, develop practical skills, and learn from one another.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our campus is the starting point. The questions we ask and the things we build can reach beyond it.
            </p>
          </div>
        </div>
      </section>

      {/* api data*/}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span> WHAT GUIDES US
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Good technology starts with good<br className="hidden md:block"/> company.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => {
            const icons = [BookOpen, Users, Code, Heart];
            const Icon = icons[idx % icons.length];

            return (
              <div key={value.id} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col border-t-4" style={{ borderTopColor: value.color }}>
                <div className="mb-6" style={{ color: value.color }}>
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/*people api data */}
      <section className="max-w-7xl mx-auto px-6 pb-24 pt-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> PEOPLE, NOT LABELS
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900">
              There's more<br />than one way to<br />contribute.
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-sm">
              You can be learning one day and helping someone else the next. A community grows through both.
            </p>
          </div>

          <div className="flex-1">
            <div className="border-t border-gray-200">
              {roles.map((role) => (
                <div key={role.id} className="py-8 border-b border-gray-200 last:border-b-0">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{role.title}</h3>
                  <p className="text-gray-600">{role.description}</p>
                </div>
              ))}
            </div>
            
            <Link to="/contact" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:opacity-70 transition mt-8">
              Let's talk about getting involved <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* banner */}
      <section className="bg-[#FFFBF0] py-16 border-y border-yellow-100">
        <div className="max-w-7xl mx-auto px-6 flex items-start gap-4 md:gap-6">
          <div className="shrink-0 pt-1">
            <img src="/diamondy.png" alt="Diamondy Icon" className="w-12 h-12 object-contain" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900">A space to learn. A responsibility to care.</h2>
            <p className="text-gray-700 leading-relaxed">
              We want every conversation and learning experience to be respectful, inclusive, and constructive. Be kind, give credit, and make room for people who are just getting started.
            </p>
          </div>
        </div>
      </section>

      {/*cta */}
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
            <Link to="/overview" className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-700 transition flex items-center gap-2 w-full md:w-auto justify-center">
              Explore the overview <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="text-blue-600 font-semibold hover:opacity-70 transition flex items-center gap-2">
              Talk to the community <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;