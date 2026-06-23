// app/(site)/contact/page.tsx
'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.message) {
      alert("Please fill in your name and message.");
      return;
    }

    // Format the WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `*New Inquiry from Website*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email || 'Not provided'}\n` +
      `📞 *Phone:* ${formData.phone || 'Not provided'}\n\n` +
      `💬 *Message:*\n${formData.message}\n\n` +
      `──────────────────\n` +
      `Sent from Artisan Embroidery Website`
    );

    // Your WhatsApp Business Number (Change this to your real number)
    const whatsappNumber = "923001234567"; // Remove + sign, use country code

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');

    // Optional: Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif mb-4">Get In Touch</h1>
        <p className="text-xl text-gray-600">
          Tell us about your dream design — we'll reply on WhatsApp
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-12 shadow-xl border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Your Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ahmed Khan"
              className="w-full border border-gray-300 p-4 focus:outline-none focus:border-gold transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ahmed@example.com"
              className="w-full border border-gray-300 p-4 focus:outline-none focus:border-gold transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full border border-gray-300 p-4 focus:outline-none focus:border-gold transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Describe Your Requirements *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={7}
            placeholder="I want a custom school badge with our logo, 50 pieces, with gold thread..."
            className="w-full border border-gray-300 p-4 focus:outline-none focus:border-gold resize-y transition"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#25D366] hover:bg-[#20ba5c] text-white py-6 text-lg font-medium uppercase tracking-widest transition-all flex items-center justify-center gap-3"
        >
          💬 Send Message on WhatsApp
        </button>

        <p className="text-center text-sm text-gray-500">
          You will be redirected to WhatsApp to send the message
        </p>
      </form>
    </div>
  );
}