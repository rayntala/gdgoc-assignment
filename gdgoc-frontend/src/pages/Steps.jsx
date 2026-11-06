const Steps = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
        <span className="w-2 h-2 rounded-full bg-blue-500"></span> MAKE YOUR FIRST MOVE
      </div>
      <h2 className="text-4xl font-semibold mb-12">You don't need to have it all figured out.</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { num: '01', title: 'Follow your curiosity', desc: 'Explore the tracks and find a topic you want to understand better.' },
          { num: '02', title: 'Learn alongside others', desc: 'Join a learning opportunity, ask a question, and share your perspective.' },
          { num: '03', title: 'Turn learning into action', desc: 'Practice through a project, exchange feedback, and pass something on.' },
        ].map((step, idx) => (
          <div key={idx}>
            <div className="text-5xl font-bold text-brand-blue mb-4 leading-none">{step.num}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;