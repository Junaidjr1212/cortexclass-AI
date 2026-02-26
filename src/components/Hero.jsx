export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0c0c12] to-black"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 py-24">

        {/* LEFT TEXT */}
        <div className="text-left">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Meet Your Smart <br />
            <span className="text-orange-500 hover:drop-shadow-[0_0_20px_orange] transition">
              AI Teacher
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8">
            CortexClass AI helps students learn faster, solve doubts instantly,
            generate quizzes, and build personalized study plans using intelligent automation.
          </p>

          <div className="flex gap-5 flex-wrap">
            <button className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-4 rounded-full font-semibold shadow-lg shadow-orange-500/40 transition duration-300">
              Get Started
            </button>

            <button className="border border-orange-500 px-8 py-4 rounded-full hover:bg-orange-500 hover:text-black transition duration-300">
              Learn More
            </button>
          </div>

        </div>

        {/* RIGHT LOGO STYLE ROBOT */}
        <div className="flex justify-center md:justify-end">

          <div className="relative group">

            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-orange-500 blur-3xl opacity-30 group-hover:opacity-50 transition"></div>

            {/* Circle Frame */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-orange-500 flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(255,120,0,0.5)]">

              <img
                src="/robot.png"
                alt="AI Robot"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}