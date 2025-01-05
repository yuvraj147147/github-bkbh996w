import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { ContactFormData } from '../../types/contact';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-navy-blue mb-6">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gradient rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-blue"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gradient rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-blue"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gradient rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-blue"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-navy-blue text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-navy-blue-dark transition-colors"
        >
          <span>Send Message</span>
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;