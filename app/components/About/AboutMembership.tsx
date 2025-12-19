'use client';

import { useState } from 'react';

export default function AboutMembership() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const membershipBenefits = [
    'Free 6 Months Project Management by AEDA team',
    'Free Attendance to AEDA events',
    'Speaking opportunities at AEDA events',
    'One-to-One meetings with investors',
    'Media and PR support',
    'Free Business set up',
    'Free Brand Promotion for Global Visibility'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your membership request! We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-[#56290f] text-4xl lg:text-5xl font-black uppercase mb-4">
              MEMBERSHIP
            </h2>
            <p className="text-gray-700 text-xl lg:text-2xl font-semibold mb-4">
              Creating Sustainable Partnerships for net worth Growth.
            </p>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
              Get premium access to a network of international Entrepreneurs, Investors, Political Figures, Business and Thought Leaders etc.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Benefits List */}
            <div className="border border-gray-200 p-8 lg:p-10">
              <h3 className="text-[#56290f] text-xl lg:text-2xl font-black uppercase mb-6">
                Membership Benefits
              </h3>
              <ul className="space-y-4">
                {membershipBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-[#56290f] flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-gray-700 text-base lg:text-lg leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Membership Form */}
            <div className="border border-gray-200 p-8 lg:p-10">
              <h3 className="text-[#56290f] text-xl lg:text-2xl font-black uppercase mb-6">
                Your Membership Request
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#56290f]"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#56290f]"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#56290f] resize-none"
                    placeholder="Tell us about your interest in membership..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#56290f] text-white px-8 py-4 font-bold text-base lg:text-lg hover:bg-[#4d2510] transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

