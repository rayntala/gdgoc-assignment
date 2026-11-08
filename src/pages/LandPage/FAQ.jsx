import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch('https://gdgoc-ugm-api.vercel.app/api/faqs');
        const data = await res.json();
        setFaqs(data.data.slice(0, 3)); 
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-16">
      <div className="flex-1">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span> A FEW GOOD QUESTIONS
        </div>
        <h2 className="text-6xl font-semibold mb-6">Wondering where to begin?</h2>
        <Link to="/contact" className="text-blue-600 font-medium hover:opacity-70 transition flex items-center gap-2">
          Ask us a question &rarr;
        </Link>
      </div>
      
      <div className="flex-[1.5]">
        {loading ? (
          <div className="text-gray-500 py-6">Loading questions...</div>
        ) : (
          faqs.map((faq) => (
            <details key={faq.id} className="group border-b border-gray-200 py-6 first:border-t">
              <summary className="flex justify-between items-center font-medium text-lg cursor-pointer list-none">
                {faq.question}
                <span className="text-2xl text-gray-400 font-light group-open:hidden">+</span>
                <span className="text-2xl text-gray-400 font-light hidden group-open:inline">-</span>
              </summary>
              <p className="mt-4 text-gray-600 text-sm">{faq.answer}</p>
            </details>
          ))
        )}
      </div>
    </section>
  );
};

export default FAQ;