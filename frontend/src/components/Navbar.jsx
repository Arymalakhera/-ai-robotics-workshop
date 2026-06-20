import React, { useState } from 'react';
import Button from './Button';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-beige/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-9 h-9 rounded-xl bg-brand-forest flex items-center justify-center font-bold text-white shadow-sm shadow-brand-forest/10">
              🤖
            </div>
            <span className="font-display font-extrabold text-xl text-brand-dark">
              ByteCamp<span className="text-brand-orange">.</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Overview', 'Outcomes', 'Benefits', 'FAQs'].map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item.toLowerCase())}
                className="text-brand-dark/70 hover:text-brand-forest font-semibold transition-colors text-sm cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Button variant="primary" onClick={() => handleScroll('register')}>
              Enroll Now
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark/70 hover:text-brand-forest focus:outline-none p-2 cursor-pointer"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100 border-b border-brand-beige/80' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-brand-cream sm:px-3 flex flex-col gap-2">
          {['Overview', 'Outcomes', 'Benefits', 'FAQs'].map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item.toLowerCase())}
              className="text-left w-full block px-3 py-2 rounded-md text-base font-semibold text-brand-dark/70 hover:bg-brand-beige/50 hover:text-brand-forest transition-colors cursor-pointer"
            >
              {item}
            </button>
          ))}
          <div className="px-3 pt-2">
            <Button variant="primary" onClick={() => handleScroll('register')} className="w-full">
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;