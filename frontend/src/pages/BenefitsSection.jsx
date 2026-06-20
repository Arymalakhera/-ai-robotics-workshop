import React from 'react';

function BenefitsSection() {
  const benefits = [
    {
      title: "Interactive Live Coding Ecosystem",
      desc: "No boring pre-recorded lectures. Children learn via real-time collaborative sandbox platforms alongside active industrial mentors.",
      accent: "bg-brand-forest"
    },
    {
      title: "Gamified Capstone Milestones",
      desc: "Students don't just complete homework—they build custom miniature automated features to earn ranking badges and physical project milestones.",
      accent: "bg-brand-orange"
    },
    {
      title: "Lifetime Alumnus Portfolio Vault",
      desc: "Every deployed smart application and micro-logic sequence is archived in a shareable cloud portal that student creators can feature on future applications.",
      accent: "bg-brand-yellow"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-transparent relative scroll-mt-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark mb-4">
            Why Forward-Thinking Parents <span className="text-brand-orange font-extrabold">Choose Us</span>
          </h2>
          <p className="text-brand-dark/70 text-base sm:text-lg">
            We provide an engineering launchpad tailored specifically to ignite computational intuition in young minds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="p-8 rounded-[2rem] bg-white border border-brand-beige shadow-sm relative overflow-hidden flex flex-col justify-between group hover:border-brand-green-accent/30 hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className={`w-12 h-2 rounded-full ${benefit.accent} mb-6`} />
                
                <h3 className="text-xl font-extrabold text-brand-dark mb-4 group-hover:text-brand-forest transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-brand-dark/70 text-sm sm:text-base leading-relaxed">
                  {benefit.desc}
                </p>
              </div>

              <div className="text-right text-6xl font-black text-brand-forest/10 select-none mt-6 font-mono">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BenefitsSection;