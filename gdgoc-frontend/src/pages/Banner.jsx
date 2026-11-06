
const Banner = () => {
  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-start">
        <div className="text-9xl text-emerald-600 leading-none">✦</div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Different majors. Different starting points.<br />A place for all of them.</h2>
          <p className="text-gray-600">You don't have to be the most experienced person in the room. Curiosity, kindness, and a willingness to learn are a good place to start.</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;