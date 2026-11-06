import diamondyIcon from "../assets/diamondy.png";
import { ArrowRight, BookOpen, Users, Code, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <main className="bg-white min-h-screen font-sans">
      
      {/*hero section*/}
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
        
        {/*Graphic*/}
        <div className="flex-1 w-full flex justify-end">
        <div className="w-full max-w-[560px] aspect-square rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden relative bg-white">
            <img
            src="src/assets/about.png"
            alt="About"
            className="w-full h-full object-cover"
            />
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
          {[
            { icon: BookOpen, title: 'Stay curious', desc: 'Ask the extra question. Be willing to learn something outside your comfort zone.', color: 'text-blue-500', border: 'border-t-blue-500' },
            { icon: Users, title: 'Make room', desc: 'Welcome different perspectives, respect each other, and help people find their voice.', color: 'text-red-500', border: 'border-t-red-500' },
            { icon: Code, title: 'Learn by building', desc: 'Try a small experiment. Share the rough version. Let feedback guide what comes next.', color: 'text-yellow-500', border: 'border-t-yellow-500' },
            { icon: Heart, title: 'Give something back', desc: 'Share a resource, explain what clicked, or help someone take their next step.', color: 'text-green-500', border: 'border-t-green-500' },
          ].map((value, idx) => (
            <div key={idx} className={`bg-white p-8 rounded-2xl border border-gray-200 shadow-sm border-t-4 ${value.border} flex flex-col`}>
              <value.icon className={`w-6 h-6 mb-6 ${value.color}`} strokeWidth={2} />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

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
              <div className="py-8 border-b border-gray-200">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Come as a learner</h3>
                <p className="text-gray-600">Explore a topic, join a discussion, and ask the question that's been on your mind.</p>
              </div>
              <div className="py-8 border-b border-gray-200">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Grow as a collaborator</h3>
                <p className="text-gray-600">Work with people whose skills complement yours. Discover what you can build together.</p>
              </div>
              <div className="py-8 border-b border-gray-200 mb-8">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Give back as a contributor</h3>
                <p className="text-gray-600">Share knowledge, support a learning session, or bring an idea for the community.</p>
              </div>
            </div>
            
            <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:opacity-70 transition">
              Let's talk about getting involved <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* banner */}
      <section className="bg-[#FFFBF0] py-16 border-y border-yellow-100">
        <div className="flex items-start gap-4 md:gap-6"> {/* Ensures the icon aligns nicely with the text */}
          {/*Icon */}
          <div className="shrink-0 pt-1">
            <img 
              src={diamondyIcon} 
              alt="Diamondy Icon" 
              className="w-15 h-15 object-contain" 
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900">A space to learn. A responsibility to care.</h2>
            <p className="text-gray-700 leading-relaxed">
              We want every conversation and learning experience to be respectful, inclusive, and constructive. Be kind, give credit, and make room for people who are just getting started.
            </p>
          </div>
        </div>
      </section>


      {/*CTA Section*/}
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

    </main>
  );
};

export default AboutPage;