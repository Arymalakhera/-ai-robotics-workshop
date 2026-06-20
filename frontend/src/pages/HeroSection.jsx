import React from 'react';
import Button from '../components/Button';
import classroomImg from '../assets/classroom-teaching.jpg';


function HeroSection() {
  const handleScrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="overview" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 bg-transparent">

      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-brand-yellow/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-brand-light-green/60 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 md:py-16">
          
          <div className="lg:col-span-7 text-left flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-orange text-white text-xs sm:text-sm font-extrabold mb-6 shadow-md shadow-brand-orange/25 animate-bounce">
              <span>🚀</span> Live Interactive Online Summer Workshop & Camp 2026
            </div>




            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-brand-dark">
              Empower Your Child To Build <br />
              <span className="text-brand-forest">
                The Future With AI & Robotics
              </span>
            </h1>

            <p className="text-brand-dark/70 text-base sm:text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
              An immersive, hands-on 4-week journey for young minds aged 8–14. Master programming basics, dive into automation fundamentals, and deploy real-world intelligent projects from home.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button variant="primary" onClick={handleScrollToRegister}>
                Claim Your Spot Now
              </Button>
              <button 
                onClick={() => document.getElementById('outcomes')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-brand-green-accent hover:text-brand-forest font-bold transition-colors duration-200 text-sm sm:text-base flex items-center justify-center gap-2 group cursor-pointer py-3 px-5"
              >
                Explore Curriculum 
                <span className="transform group-hover:translate-x-1 transition-transform">➔</span>
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 w-full max-w-lg">
              <div className="flex items-center gap-2 bg-white/70 p-3 rounded-2xl border border-brand-beige shadow-sm text-brand-dark/80 text-xs sm:text-sm font-semibold">
                <span>🧑‍💻</span> 1:10 Mentor Ratio
              </div>
              <div className="flex items-center gap-2 bg-white/70 p-3 rounded-2xl border border-brand-beige shadow-sm text-brand-dark/80 text-xs sm:text-sm font-semibold">
                <span>🛠️</span> Practical Projects
              </div>
              <div className="flex items-center gap-2 bg-white/70 p-3 rounded-2xl border border-brand-beige shadow-sm text-brand-dark/80 text-xs sm:text-sm font-semibold">
                <span>📜</span> Verified Certificate
              </div>
              <div className="flex items-center gap-2 bg-white/70 p-3 rounded-2xl border border-brand-beige shadow-sm text-brand-dark/80 text-xs sm:text-sm font-semibold">
                <span>⭐️</span> Rated 4.9/5 by Parents
              </div>
            </div>
            
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:-translate-y-8">
            <div className="relative w-full max-w-lg lg:max-w-xl flex justify-center">
              <div className="relative w-[92%] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-white transform hover:scale-102 transition-all duration-300">
                <img 
                  src={classroomImg} 
                  alt="ByteCamp Robotics Classroom" 
                  className="w-full h-auto object-cover" 
                />
              </div>



              <div className="absolute -top-6 right-6 text-3xl animate-bounce">✨</div>
              <div className="absolute bottom-16 -left-6 text-3xl animate-pulse">🤖</div>
            </div>
          </div>



        </div>
        <div id="scroll-anchor" />
      </div>
    </section>
  );
}

export default HeroSection;
