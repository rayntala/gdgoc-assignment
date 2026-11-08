const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-16">
      <div className="flex-1">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span> A CAMPUS, A COMMUNITY
        </div>
        <h2 className="text-4xl font-semibold leading-tight mb-6">
          Not just learning tech.<br />Finding your people.
        </h2>
        <a href="#" className="text-brand-blue font-medium hover:opacity-70 transition">More about GDGoC UGM &rarr;</a>
      </div>
      <div className="flex-1">
        <p className="text-gray-600 mb-4">
          Google Developer Groups on Campus, Universitas Gadjah Mada brings students together around one simple idea: we can go further when we learn with each other.
        </p>
        <p className="text-gray-600 mb-6">
          From your first line of code to your next product idea, there's room to ask questions, share what you know, and try something new.
        </p>
        <div className="flex flex-wrap gap-2">
          {['Student-led', 'Peer-powered', 'Curiosity-first'].map((tag, idx) => (
            <span key={idx} className="border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-600 font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;