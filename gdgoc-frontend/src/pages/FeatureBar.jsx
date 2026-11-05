const FeatureBar = () => {
  const features = [
    { text: 'Learn by doing', color: 'bg-blue-500' },
    { text: 'Connect across disciplines', color: 'bg-yellow-500' },
    { text: 'Build with purpose', color: 'bg-green-500' },
  ];

  return (
    <div className="border-y border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4">
        {features.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 font-medium text-sm">
            <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBar;