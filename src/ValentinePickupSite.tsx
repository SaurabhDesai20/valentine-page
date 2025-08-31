import  { useState } from 'react';
import { Heart, RefreshCw, ArrowLeft } from 'lucide-react';

const ValentinePickupSite = () => {
  const [currentPage, setCurrentPage] = useState('intro'); // 'intro' or 'main'
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const pickupLines = [
    "Are you a magician? Because whenever I look at you, everyone else disappears. ✨",
    "Do you have a map? Because I just got lost in your eyes. 🗺️",
    "If you were a vegetable, you'd be a cute-cumber. 🥒",
    "Are you Wi-Fi? Because I'm really feeling a connection. 📶",
    "Do you believe in love at first sight, or should I walk by again? 👀",
    "Are you made of copper and tellurium? Because you're Cu-Te! ⚗️",
    "If kisses were snowflakes, I'd send you a blizzard. ❄️",
    "Are you a parking ticket? Because you've got 'fine' written all over you. 🎫",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you. 🩹",
    "Are you a time traveler? Because I see you in my future. ⏰",
    "If you were a triangle, you'd be acute one. 📐",
    "Are you a camera? Because every time I look at you, I smile. 📸",
    "Do you have a sunburn, or are you always this hot? ☀️",
    "Are you Google? Because you have everything I've been searching for. 🔍",
    "If beauty were time, you'd be an eternity. ⏳",
    "Are you a star? Because your beauty lights up the night. ⭐",
    "Do you have a name, or can I call you mine? 💕",
    "Are you a loan from a bank? Because you have my interest. 🏦",
    "If you were a fruit, you'd be a fine-apple. 🍍",
    "Are you electricity? Because you're electrifying! ⚡"
  ];

  const getNewPickupLine = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentLineIndex((prev) => (prev + 1) % pickupLines.length);
      setIsAnimating(false);
    }, 300);
  };

  const handleYesClick = () => {
    setCurrentPage('main');
  };

  const handleNoClick = () => {
    setShowPopup(true);
  };

  const handlePopupClick = () => {
    setShowPopup(false);
    setCurrentPage('main');
  };

  const handleBackClick = () => {
    setCurrentPage('intro');
  };

  // Generate random hearts for background animation
  const generateHearts = () => {
    return Array.from({ length: 15 }, (_, i) => (
      <div
        key={i}
        className="absolute animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 2}s`
        }}
      >
        <Heart 
          className="text-pink-300 opacity-20" 
          size={Math.random() * 30 + 10}
          fill="currentColor"
        />
      </div>
    ));
  };

  // Intro Page Component
  const IntroPage = () => (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-red-50 to-purple-100">
      
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {generateHearts()}
      </div>
      
      {/* Animated Hearts that fall */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`falling-${i}`}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              animationIterationCount: 'infinite'
            }}
          >
            <Heart 
              className="text-red-400 opacity-40" 
              size={20}
              fill="currentColor"
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 mb-4 animate-pulse">
            💕 ARYU 💕
          </h1>
          <p className="text-xl text-gray-700 font-medium">
            Sweet words straight from the heart
          </p>
        </div>

        {/* Intro Card */}
        <div className="max-w-2xl w-full">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-pink-200 transform hover:scale-105 transition-all duration-300">
            
            {/* Decorative hearts around the card */}
            <div className="relative">
              <Heart className="absolute -top-4 -left-4 text-red-400" size={24} fill="currentColor" />
              <Heart className="absolute -top-4 -right-4 text-pink-400" size={20} fill="currentColor" />
              <Heart className="absolute -bottom-4 -left-4 text-pink-400" size={20} fill="currentColor" />
              <Heart className="absolute -bottom-4 -right-4 text-red-400" size={24} fill="currentColor" />
              
              {/* Intro Text */}
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 leading-relaxed mb-8">
                  "Let's move ahead Aryu (bandu)"
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleNoClick}
            className="group relative px-8 py-4 bg-gradient-to-r from-gray-400 to-gray-600 text-white font-bold text-xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            <div className="flex items-center space-x-3">
              <span>No, I am sad 😤</span>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-300 to-gray-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
          </button>
          
          <button
            onClick={handleYesClick}
            className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold text-xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            <div className="flex items-center space-x-3">
              <span>Yes, please 🫠</span>
              <Heart className="animate-pulse" size={24} fill="currentColor" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-red-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
          </button>
        </div>

        {/* Footer Message */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 font-medium">
            Made with 💖 to bring smiles and melt hearts
          </p>
          <div className="flex justify-center space-x-2 mt-4">
            <Heart className="text-red-400 animate-pulse" size={16} fill="currentColor" />
            <Heart className="text-pink-400 animate-pulse" size={20} fill="currentColor" style={{animationDelay: '0.5s'}} />
            <Heart className="text-red-400 animate-pulse" size={16} fill="currentColor" style={{animationDelay: '1s'}} />
          </div>
        </div>
      </div>

      {/* Additional floating hearts for extra romance */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`extra-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            <Heart 
              className="text-pink-200 opacity-30" 
              size={Math.random() * 25 + 15}
              fill="currentColor"
            />
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-pink-200 max-w-md w-full transform animate-pulse">
            <div className="text-center">
              <div className="mb-6">
                <Heart className="mx-auto text-red-500 animate-bounce" size={48} fill="currentColor" />
              </div>
              <button
                onClick={handlePopupClick}
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold text-xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <span>I know you want to 😉</span>
                  <Heart className="animate-pulse" size={24} fill="currentColor" />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-red-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </div>
  );

  // Main Pickup Lines Page Component
  const MainPage = () => (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-red-50 to-purple-100">
      
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="absolute top-6 left-6 z-20 group p-3 bg-gradient-to-r from-pink-500 to-red-500 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-pink-200"
      >
        <ArrowLeft className="text-white group-hover:text-pink-100 transition-colors" size={24} />
      </button>
      
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {generateHearts()}
      </div>
      
      {/* Animated Hearts that fall */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`falling-${i}`}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              animationIterationCount: 'infinite'
            }}
          >
            <Heart 
              className="text-red-400 opacity-40" 
              size={20}
              fill="currentColor"
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 mb-4 animate-pulse">
            💕 ARYU 💕
          </h1>
          <p className="text-xl text-gray-700 font-medium">
            Sweet words straight from the heart
          </p>
        </div>

        {/* Pickup Line Card */}
        <div className="max-w-2xl w-full">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-pink-200 transform hover:scale-105 transition-all duration-300">
            
            {/* Decorative hearts around the card */}
            <div className="relative">
              <Heart className="absolute -top-4 -left-4 text-red-400" size={24} fill="currentColor" />
              <Heart className="absolute -top-4 -right-4 text-pink-400" size={20} fill="currentColor" />
              <Heart className="absolute -bottom-4 -left-4 text-pink-400" size={20} fill="currentColor" />
              <Heart className="absolute -bottom-4 -right-4 text-red-400" size={24} fill="currentColor" />
              
              {/* Pickup Line Display */}
              <div className={`text-center transition-all duration-300 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
                <div className="text-3xl font-bold text-gray-800 leading-relaxed mb-8 min-h-[120px] flex items-center justify-center">
                  "{pickupLines[currentLineIndex]}"
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Pickup Line Button */}
        <button
          onClick={getNewPickupLine}
          disabled={isAnimating}
          className="mt-8 group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold text-xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="flex items-center space-x-3">
            <RefreshCw className={`${isAnimating ? 'animate-spin' : ''} transition-transform`} size={24} />
            <span>New ❤️ for you</span>
          </div>
          
          {/* Button glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-red-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
        </button>

        {/* Footer Message */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 font-medium">
            Made with 💖 to bring smiles and melt hearts
          </p>
          <div className="flex justify-center space-x-2 mt-4">
            <Heart className="text-red-400 animate-pulse" size={16} fill="currentColor" />
            <Heart className="text-pink-400 animate-pulse" size={20} fill="currentColor" style={{animationDelay: '0.5s'}} />
            <Heart className="text-red-400 animate-pulse" size={16} fill="currentColor" style={{animationDelay: '1s'}} />
          </div>
        </div>
      </div>

      {/* Additional floating hearts for extra romance */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`extra-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            <Heart 
              className="text-pink-200 opacity-30" 
              size={Math.random() * 25 + 15}
              fill="currentColor"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </div>
  );

  // Render based on current page
  if (currentPage === 'intro') {
    return <IntroPage />;
  }

  return <MainPage />;
};

export default ValentinePickupSite;