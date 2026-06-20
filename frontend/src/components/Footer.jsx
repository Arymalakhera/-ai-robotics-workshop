import React from 'react';

function Footer() {
  return (
    <footer className="bg-brand-beige border-t border-brand-beige/50 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
        
        <div className="flex items-center gap-2">
          <span className="text-xl">🤖</span>
          <span className="font-display font-extrabold text-brand-dark">ByteCamp<span className="text-brand-orange">.</span></span>
        </div>

        <p className="text-sm text-brand-dark/60 font-medium">
          &copy; {new Date().getFullYear()} ByteCamp. All rights reserved.
        </p>

        <p className="text-sm text-brand-dark/80 font-semibold">
          Contact: <span className="text-brand-orange">support@bytecamp.edu</span>
        </p>

      </div>
    </footer>
  );
}

export default Footer;