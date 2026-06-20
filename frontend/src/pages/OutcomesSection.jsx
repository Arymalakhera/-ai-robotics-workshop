import React from 'react';
import robotStudentImg from '../assets/robot-student.png';

function OutcomesSection() {
  const outcomes = [
    { title: "Introduction to AI", desc: "Understand neural concepts, interactive machine learning layers, and training smart computer models using friendly interfaces.", icon: "🧠" },
    { title: "Robotics Fundamentals", desc: "Master sensors, electronic logic gates, motor assemblies, and automation actuators that make machinery move.", icon: "🤖" },
    { title: "Programming Basics", desc: "Write control structures, logic loops, variable declarations, and structural sequences using visual tools and syntax blocks.", icon: "💻" },
    { title: "Problem Solving Skills", desc: "Deconstruct highly complex structural technical riddles and break bugs down into logical execution steps.", icon: "🧩" },
    { title: "Real-world Projects", desc: "Assemble, train, and deploy custom interactive smart apps and micro-automation scripts to show your friends.", icon: "🛠️" }
  ];

  return (
    <section id="outcomes" className="py-20 bg-brand-forest text-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            What Your Child Will <span className="text-brand-yellow font-extrabold">Master</span>
          </h2>
          <p className="text-brand-light-green/80 text-base sm:text-lg">
            Our curriculum balances foundational theories with pure interactive building blocks. Here are the core technical outcomes of the 4-week workshop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-[2rem] bg-white/10 border border-white/15 relative overflow-hidden group transition-all duration-300 hover:border-brand-yellow/40 hover:-translate-y-1 shadow-md"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-yellow/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="w-12 h-12 rounded-2xl bg-brand-yellow/20 border border-brand-yellow/30 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-yellow transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-brand-light-green/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

          <div className="p-4 rounded-[2rem] bg-white border border-brand-beige flex items-center justify-center shadow-md relative overflow-hidden hover:scale-102 transition-all duration-300">
            <img 
              src={robotStudentImg} 
              alt="Student with Robot Buddy" 
              className="h-full max-h-[170px] w-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default OutcomesSection;
