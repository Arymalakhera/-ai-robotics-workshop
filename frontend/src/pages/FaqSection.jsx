import React, { useState } from 'react';

function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const faqs = [
    {
      q: "Do we need to purchase any physical robotics kits beforehand?",
      a: "No physical hardware purchases are required! The first 4-week workshop & camp utilizes advanced virtual simulation sandboxes where students write logic to control fully rendered digital rovers."
    },
    {
      q: "What happens if my child misses a live online interactive session?",
      a: "Every session is recorded automatically in high definition. Recorded files along with the day's code blocks are pushed to your parental dashboard student portfolio within 2 hours."
    },
    {
      q: "Will my child receive individual guidance during the coding labs?",
      a: "Absolutely. We maintain a strict 1:10 mentor-to-student ratio. During practical sandbox labs, students can share screens with their assigned instructor in private breakout rooms."
    },
    {
      q: "Is this program suitable for a child with zero prior coding experience?",
      a: "Yes! The curriculum is designed from scratch for absolute beginners. We start with intuitive visual block logic before transitioning into structural sequence syntax."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="py-24 bg-brand-light-green/30 border-t border-b border-brand-beige/50 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark mb-3">
            Frequently Asked <span className="text-brand-forest">Questions</span>
          </h2>
          <p className="text-brand-dark/70 text-sm sm:text-base">
            Have questions about schedules, tools, or setups? Here are quick insights.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className="border border-brand-beige/85 bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-brand-green-accent/30"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-extrabold text-brand-dark hover:text-brand-forest transition-colors cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <span className={`text-brand-orange text-lg transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                  </span>
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-40 opacity-100 border-t border-brand-beige/40 bg-brand-cream/30' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 text-sm sm:text-base text-brand-dark/70 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FaqSection;