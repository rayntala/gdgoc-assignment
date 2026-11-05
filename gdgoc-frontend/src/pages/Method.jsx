const Method = () => {
  const methods = [
    { icon: '📖', title: 'Study together', desc: 'Work through foundations in peer learning sessions. Bring your questions; leave with a next step.', tag: 'Study groups & guided practice' },
    { icon: '🛠️', title: 'Try it hands-on', desc: 'Explore a tool or technique in a workshop, then put it to work in a small experiment.', tag: 'Workshops & technical sessions' },
    { icon: '👥', title: 'Share the process', desc: 'Exchange feedback, explain your decisions, and learn from different ways of thinking.', tag: 'Project circles & sharing sessions' },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span> MORE THAN A CLASSROOM
        </div>
        <h2 className="text-4xl font-semibold mb-2">Less watching. More making.</h2>
        <p className="text-gray-600 mb-12">Learn in a way that turns a new concept into something you can actually use.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methods.map((m, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="text-2xl mb-4">{m.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{m.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{m.desc}</p>
              <span className="inline-block bg-gray-50 px-2.5 py-1 rounded-md text-xs text-gray-500">{m.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;