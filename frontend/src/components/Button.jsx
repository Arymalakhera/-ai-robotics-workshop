import React from 'react';

function Button({ children, type = 'button', variant = 'primary', onClick, disabled, isLoading }) {
  const baseStyle = "px-6 py-3 font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none cursor-pointer text-sm sm:text-base shadow-sm";
  
  const variants = {
    primary: "bg-brand-forest hover:bg-brand-green-accent text-white hover:shadow-md hover:shadow-brand-forest/20",
    secondary: "bg-brand-orange hover:bg-[#c96248] text-white hover:shadow-md hover:shadow-brand-orange/20",
    outline: "border-2 border-brand-forest hover:bg-brand-forest/5 text-brand-forest font-bold"
  };

  return (
    <button
      type={type}
      className={`${baseStyle} ${variants[variant]}`}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading && (
        <svg className="animate-spin h-5 w-5 text-current" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </button>
  );
}

export default Button;