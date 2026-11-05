const TrackCard = ({ title, label, desc, tags, colorClass, bgClass, linkColor }) => (
  <div className="border border-gray-200 rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition duration-200 bg-white">
    <div className={`h-40 flex items-center justify-center text-5xl ${bgClass}`}>
      {title === 'Research & discovery' ? '🔍' : title === 'Design & creativity' ? '🎨' : '💻'}
    </div>
    <div className="p-6">
      <span className={`text-xs font-semibold mb-2 block ${colorClass}`}>{label}</span>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{desc}</p>
      <div className="mb-6 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="bg-gray-50 px-2.5 py-1 rounded-md text-xs text-gray-500">{tag}</span>
        ))}
      </div>
      <a href="#" className={`font-medium text-sm transition hover:opacity-70 ${linkColor}`}>Explore this track &rarr;</a>
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
          <h2 className="text-4xl font-semibold mb-2">Many interests. One shared journey.</h2>
          <p className="text-gray-600">Follow what excites you. Explore a track, then connect the dots with others.</p>
        </div>
        <a href="#" className="text-brand-blue font-medium hover:opacity-70 transition whitespace-nowrap">See the overview &rarr;</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TrackCard 
          title="Research & discovery" label="EXPLORE THE WHY" 
          desc="Ask better questions, understand people, and turn insight into a clear problem worth solving."
          tags={['Problem framing', 'User research', 'Product thinking']}
          colorClass="text-blue-600" bgClass="bg-blue-50" linkColor="text-blue-600"
        />
        <TrackCard 
          title="Design & creativity" label="MAKE IT MEANINGFUL" 
          desc="Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use."
          tags={['UI/UX', 'Visual storytelling', 'Prototyping']}
          colorClass="text-amber-600" bgClass="bg-amber-50" linkColor="text-amber-600"
        />
        <TrackCard 
          title="Development" label="BRING IDEAS TO LIFE" 
          desc="Learn the tools, write the code, and build useful things with people who enjoy figuring it out."
          tags={['Web & mobile', 'Cloud', 'AI foundations']}
          colorClass="text-emerald-600" bgClass="bg-emerald-50" linkColor="text-emerald-600"
        />
      </div>
    </section>
  );
};

export default Tracks;