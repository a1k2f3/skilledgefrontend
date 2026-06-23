// app/(site)/contact/page.tsx
'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Our team will contact you shortly.");
    // In real app → connect with EmailJS / Resend API
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-serif text-center mb-4">Get In Touch</h1>
      <p className="text-center text-gray-600 mb-12">Tell us about your dream design</p>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-12 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-4 focus:outline-none focus:border-gold"
            required
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 p-4 focus:outline-none focus:border-gold"
            required
          />
        </div>

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border border-gray-300 p-4 focus:outline-none focus:border-gold"
        />

        <textarea
          rows={8}
          placeholder="Describe your design requirements..."
          className="w-full border border-gray-300 p-4 focus:outline-none focus:border-gold resize-y"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-gold hover:bg-black hover:text-white text-black py-5 text-lg uppercase tracking-widest transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}