const FAQ = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-16">
      <div className="flex-1">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span> A FEW GOOD QUESTIONS
        </div>
        <h2 className="text-4xl font-semibold mb-6">Wondering where to begin?</h2>
        <a href="#" className="text-brand-blue font-medium hover:opacity-70 transition">Ask us a question &rarr;</a>
      </div>
      
      <div className="flex-[1.5]">
        {[
          { q: 'Do I need to know how to code?', a: 'No. Start with an interest in technology and a willingness to learn. Research and design are part of the journey, too.' },
          { q: 'Is this only for computer science students?', a: 'Different disciplines bring different perspectives. Explore the overview to find a starting point that fits your interests.' },
          { q: 'How can I find learning opportunities?', a: 'Keep an eye on @gdgoc.ugm for community updates. You can also use the contact page to ask about getting involved.' },
        ].map((item, idx) => (
          <details key={idx} className="group border-b border-gray-200 py-6 first:border-t">
            <summary className="flex justify-between items-center font-medium text-lg cursor-pointer list-none">
              {item.q}
              <span className="text-2xl text-gray-400 font-light group-open:hidden">+</span>
              <span className="text-2xl text-gray-400 font-light hidden group-open:inline">−</span>
            </summary>
            <p className="mt-4 text-gray-600 text-sm">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;