export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-float-delayed"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-8 max-w-4xl">
        {/* Animated heading */}
        <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent opacity-0 animate-fade-in-up">
          Welcome to My Creative Space
        </h1>

        {/* Animated subtitle with gradient border */}
        <div className="inline-block relative opacity-0 animate-fade-in-up [animation-delay:300ms]">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-md"></div>
          <p className="relative text-xl md:text-2xl text-gray-300 bg-gray-900 px-8 py-4 rounded-full border border-gray-700/50">
            Turning Ideas Into <span className="text-cyan-400">Digital Reality</span>
          </p>
        </div>

        {/* Hover-animated button */}
        <button className="group relative inline-block opacity-0 animate-fade-in-up [animation-delay:600ms]">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative px-12 py-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300">
            <span className="text-2xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
              Explore Innovations
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </button>

        {/* Floating tech icons */}
        <div className="flex justify-center space-x-8 mt-12 opacity-0 animate-fade-in-up [animation-delay:900ms]">
          {['react', 'tailwind', 'js', 'node'].map((tech, i) => (
            <div key={tech} className="w-16 h-16 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-3 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2" style={{animationDelay: `${i * 100}ms`}}>
              <img 
                src={`/${tech}-icon.svg`} 
                alt={tech} 
                className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Add these animations to your Tailwind config */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s ease forwards; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float 8s ease-in-out infinite 2s; }
      `}</style>
    </div>
  );
}