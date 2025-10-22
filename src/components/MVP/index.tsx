import { LinkOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';

const mvpData = [
  {
    accentColor: 'bg-[#7a2837]',
    textColor: 'text-[#4e1c24]',
    gradientColor: 'from-[#7a2837] to-[#4e1c24]',
    title: 'Biddius',
    path: 'https://www.biddius.com',
    description:
      'Discover treasures at Biddius — where bidding meets buying. Join online auctions and find unique items to buy and sell with excitement!'
  },
  {
    accentColor: 'bg-[#94B0F8]',
    textColor: 'text-[#5A78E6]',
    gradientColor: 'from-[#94B0F8] to-[#5A78E6]',
    title: 'FixServ',
    path: 'https://www.fixserv.co',
    description:
      'FixServ is a digital marketplace connecting users with professional artisans specializing in gadget repairs and services.'
  },
  {
    accentColor: 'bg-[#00a63e]',
    textColor: 'text-[#007028]',
    gradientColor: 'from-[#00a63e] to-[#007028]',
    title: 'Phlouriche NG',
    path: 'https://www.phlouriche.com',
    description:
      'Phlouriche Nigeria Limited delivers innovative engineering solutions tailored for the energy sector.'
  },
  {
    accentColor: 'bg-[#bcec04]',
    textColor: 'text-[#94b800]',
    gradientColor: 'from-[#bcec04] to-[#94b800]',
    title: 'Evant',
    path: 'https://evantsolutions.com/',
    description:
      "Nigeria's first EV charging marketplace. Find, book, and pay for charging stations with ease. Making electric vehicle adoption simple and accessible."
  },
  {
    accentColor: 'bg-[#19aad2]',
    textColor: 'text-[#0e6fa3]',
    gradientColor: 'from-[#19aad2] to-[#0e6fa3]',
    title: 'MedicPadi',
    path: 'https://www.medicpadi.com',
    description:
      "Experience quality healthcare from the comfort of your home. Easy consultations, affordable prescriptions, and trusted medical professionals at your fingertips."
  }
];

const MVP = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mvpData.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? mvpData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mvpData.length);
  };

  const currentMVP = mvpData[currentIndex];

  return (
    <section className="my-32 w-full px-4 md:px-8 lg:px-10 max-w-7xl mx-auto">
      {/* Header with gradient accent */}
      <div className="mb-16 relative">
        <div className={`absolute -left-4 top-0 w-1 h-16 ${currentMVP.accentColor} rounded-full`}></div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
          Built MVPs
        </h2>
        <p className="text-gray-500 mt-3 text-lg">Innovative solutions brought to life</p>
      </div>

      {/* Modern Display Card */}
      <div
        onClick={() => window.open(currentMVP.path, '_blank')}
        className="relative group cursor-pointer"
      >
        <div className="mb-4 bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 transition-all duration-500 hover:bg-white/95">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h3 className={`font-bold text-2xl bg-gradient-to-r ${currentMVP.gradientColor} bg-clip-text text-transparent`}>
                  {currentMVP.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed max-h-0 opacity-0 overflow-hidden group-hover:max-h-32 group-hover:opacity-100 transition-all duration-700 ease-out">
                {currentMVP.description}
              </p>
            </div>
            <a
              href={currentMVP.path}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-shrink-0 w-8 h-8 flex items-center justify-center hover:drop-shadow-md hover:scale-110 transition-all duration-300`}
            >
              <LinkOutlined className={`text-lg ${currentMVP.textColor}`} />
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Container with glassmorphism */}
      <div 
        className="relative overflow-hidden rounded-3xl shadow-2xl"
        onMouseEnter={() => setIsHovered(false)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>

        {/* MVP Card */}
        <div className="relative group">
          {/* Iframe Container with border gradient */}
          <div
            onClick={() => window.open(currentMVP.path, '_blank')}
            className="relative p-1 rounded-2xl m-6"
          >
            <iframe
              src={currentMVP.path}
              title={currentMVP.title}
              className="w-full h-[75vh] md:h-[80vh] border-0 rounded-xl bg-white transition-all duration-700 group-hover:shadow-2xl"
            />
          </div>
          <div 
            onClick={() => window.open(currentMVP.path, '_blank')}
            className="absolute inset-0 opacity-5 rounded-xl group-hover:opacity-30 transition-all duration-500 cursor-pointer flex items-center justify-center"
          >
          </div>
        </div>

        {/* Modern Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white/90 backdrop-blur-md hover:bg-white text-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/20"
          aria-label="Previous"
        >
          <LeftOutlined className="text-xl" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white/90 backdrop-blur-md hover:bg-white text-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/20"
          aria-label="Next"
        >
          <RightOutlined className="text-xl" />
        </button>

        {/* Modern Progress Indicators */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3 bg-white/90 backdrop-blur-md px-4 py-3 rounded-full shadow-lg border border-white/20">
          {mvpData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`transition-all duration-500 rounded-full ${
                i === currentIndex 
                  ? `w-8 h-3 ${currentMVP.accentColor} hover:scale-110` 
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-8 right-8 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
          <span className={`text-sm font-semibold bg-gradient-to-r ${currentMVP.gradientColor}  bg-clip-text text-transparent`}>
            {currentIndex + 1} / {mvpData.length}
          </span>
        </div>
      </div>

    </section>
  );
};

export default MVP;