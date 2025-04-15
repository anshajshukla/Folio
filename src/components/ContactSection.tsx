"use client";

import type React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send the form data to a server
    console.log('Form submitted:', formData);
    alert('Message sent! (Demo only - no data is actually sent)');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="text-white scroll-mt-[80px] min-h-[60vh]">
      <div>
        <h2 className="relative text-3xl font-bold my-6 text-center">
          <span className="gradient-text md:text-4xl lg:text-5xl xl:text-7xl">
            Let's Connect
          </span>
        </h2>
      </div>

      <div className="mt-6">
        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-5xl bg-gradient-to-b from-slate-900 rounded-md"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="ml-auto space-y-4">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a href="mailto:email@example.com" className="text-gray-300 hover:text-white">
                Email: contact@anshaj.com
              </a>
            </div>
            <div className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-gray-300">
                Phone: +91-7819098052
              </span>
            </div>
            <div className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-gray-300">
                Location: New Delhi, India
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Send me a message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full bg-slate-800 placeholder-slate-300 text-white rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full bg-slate-800 placeholder-slate-300 text-white rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  required
                  className="w-full bg-slate-800 placeholder-slate-300 text-white rounded-md px-4 border text-sm pt-2.5 outline-none focus:border-blue-500"
                  value={formData.message}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="rounded-md text-sm px-4 py-2.5 w-full !mt-6 gradient-bg hover:bg-slate-200 text-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="hidden sm:block">
            <Image
              src="https://ext.same-assets.com/465178323/2287592536.svg"
              alt="Contact Illustration"
              width={400}
              height={300}
              className="max-w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
