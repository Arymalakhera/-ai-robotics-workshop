import React from 'react';
import HeroSection from './HeroSection';
import DetailsSection from './DetailsSection';
import OutcomesSection from './OutcomesSection';
import BenefitsSection from './BenefitsSection';
import FaqSection from './FaqSection'; 
import RegistrationForm from './RegistrationForm';

function LandingPage() {
  return (
    <main className="flex-grow bg-transparent text-brand-dark">

      <HeroSection />
      <DetailsSection />
      <OutcomesSection />
      <BenefitsSection />
      <FaqSection /> {/* 2. Place it right above the form container */}
      <RegistrationForm />
    </main>
  );
}

export default LandingPage;