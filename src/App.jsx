export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6">
        {/* Main heading with gradient text */}
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to My Portfolio!
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl text-gray-600 mt-4">
          Crafting beautiful digital experiences with modern technologies
        </p>

        {/* Animated button */}
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg 
                          hover:bg-blue-600 transition-all duration-300
                          transform hover:scale-105 shadow-lg">
          Explore My Work
        </button>
      </div>
    </div>
  );
}