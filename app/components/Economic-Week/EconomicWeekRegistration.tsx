'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function EconomicWeekRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });

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
    alert('Thank you for your registration! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', organization: '', message: '' });
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-[#56290f] text-4xl lg:text-5xl font-black uppercase mb-4">
                  REGISTER NOW
                </h2>
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                  Join us for this transformative event that brings together thought leaders, business executives, and economic experts from across Africa and the world.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[#56290f] text-xl font-black uppercase mb-2">
                    Event Details
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Date:</strong> 24th – 27th July 2024</li>
                    <li><strong>Venue:</strong> Yaoundé Congress Hall, Cameroon</li>
                    <li><strong>Location:</strong> Yaoundé, Cameroon</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#56290f] text-xl font-black uppercase mb-2">
                    Contact Information
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Phone:</strong> (+237) 671 223 634</li>
                    <li><strong>Phone:</strong> (+237) 691 653 949</li>
                    <li><strong>Phone:</strong> (+237) 696 630 787</li>
                    <li><strong>Email:</strong> contact@aeda.craigsmunitions.com</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Registration Form */}
            <div className="border border-gray-200 p-8">
              <h3 className="text-[#56290f] text-2xl font-black uppercase mb-6">
                Registration Form
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#56290f]"
                    placeholder="Your Full Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                    Email Address *
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
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#56290f]"
                    placeholder="+237 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-gray-700 text-sm font-semibold mb-2">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#56290f]"
                    placeholder="Your Organization"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#56290f] resize-none"
                    placeholder="Tell us about your interest in the event..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#56290f] text-white px-8 py-4 font-bold text-base lg:text-lg hover:bg-[#4d2510] transition-colors"
                >
                  Submit Registration
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
