import React from 'react';

function DetailsSection() {
  const dataPoints = [
    { label: "Age Group", value: "8–14 Years", icon: "🧒" },
    { label: "Duration", value: "4 Weeks", icon: "📅" },
    { label: "Learning Mode", value: "100% Online", icon: "🌐" },
    { label: "Workshop Fee", value: "₹2,999", icon: "💰" },
    { label: "Batch Starts", value: "15 July 2026", icon: "🚀" }
  ];

  return (
    <section className="py-20 bg-brand-light-green/40 border-t border-b border-brand-beige/50 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-dark mb-3">
            Program Snapshot
          </h2>
          <p className="text-brand-dark/70 text-sm sm:text-base max-w-md mx-auto">
            Everything you need to know about the upcoming summer batch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {dataPoints.map((point, index) => (
            <div 
              key={index}
              className="p-6 rounded-3xl border border-brand-beige bg-white flex flex-col items-center text-center gap-2 transition-all duration-300 hover:border-brand-green-accent/30 hover:scale-[1.03] shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 rounded-full bg-brand-cream border border-brand-beige flex items-center justify-center text-2xl shadow-inner shrink-0 mb-2">
                {point.icon}
              </div>

              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-brand-green-accent mb-1">
                  {point.label}
                </span>
                <span className="block text-base sm:text-lg font-extrabold text-brand-dark leading-tight">
                  {point.value}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default DetailsSection;