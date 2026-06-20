import React, { useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatusMessage("All form fields are strictly required.");
      setIsSuccess(false);
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/enquiry', formData);

      if (response.data.success) {
        setIsSuccess(true);
        setStatusMessage(response.data.message);
        setFormData({ name: '', email: '', phone: '' });
      }
    } catch (error) {
      console.error("❌ Submission Error:", error);
      setIsSuccess(false);
      
      if (error.response && error.response.data && error.response.data.message) {
        setStatusMessage(error.response.data.message);
      } else {
        setStatusMessage("Network connection error. Please verify your backend server is running.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="register" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="bg-brand-dark border-4 border-brand-beige rounded-[2.5rem] p-8 md:p-12 shadow-xl relative text-white">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-white mb-3">
            Secure Your Seat For Summer 2026
          </h2>
          <p className="text-brand-light-green/70 text-sm sm:text-base max-w-xl mx-auto">
            Fill out the form details below. Our academic admissions group will contact you within 24 hours with class scheduling details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
          
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-brand-light-green/95 mb-2">
              Full Name <span className="text-brand-orange">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-white/5 border border-brand-beige/35 rounded-2xl text-white placeholder-brand-light-green/30 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all font-semibold"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-brand-light-green/95 mb-2">
              Email Address <span className="text-brand-orange">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="parent@example.com"
              className="w-full px-4 py-3 bg-white/5 border border-brand-beige/35 rounded-2xl text-white placeholder-brand-light-green/30 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all font-semibold"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-brand-light-green/95 mb-2">
              Phone Number <span className="text-brand-orange">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="9876543210"
              className="w-full px-4 py-3 bg-white/5 border border-brand-beige/35 rounded-2xl text-white placeholder-brand-light-green/30 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all font-semibold"
              required
            />
          </div>

          {statusMessage && (
            <div className={`p-4 rounded-2xl border text-sm font-semibold text-center transition-all ${
              isSuccess 
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' 
                : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
            }`}>
              {statusMessage}
            </div>
          )}

          <div className="pt-2">
            <Button type="submit" variant="secondary" isLoading={isLoading} className="w-full py-4 text-base font-bold shadow-md shadow-brand-orange/20">
              Submit Workshop Registration
            </Button>
          </div>

        </form>

      </div>
    </section>
  );
}

export default RegistrationForm;