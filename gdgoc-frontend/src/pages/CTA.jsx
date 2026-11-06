const CTA = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">
      <div className="bg-blue-50 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="max-w-lg">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span> YOUR NEXT CHAPTER
          </div>
          <h2 className="text-4xl font-semibold mb-4">Bring your curiosity.<br />We'll build from there.</h2>
          <p className="text-gray-600">Find a learning track, meet a collaborator, or start a conversation.</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <button className="bg-brand-blue text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition w-full md:w-auto">
            Explore the overview &rarr;
          </button>
          <a href="#" className="text-brand-blue font-medium hover:opacity-70 transition">Talk to the community &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;