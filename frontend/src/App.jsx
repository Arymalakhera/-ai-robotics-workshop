import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-transparent text-brand-dark flex flex-col antialiased selection:bg-brand-orange/25 selection:text-brand-dark">

      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;