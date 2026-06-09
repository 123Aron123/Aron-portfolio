/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, PhoneCall, MapPin, Send, CheckCircle, Loader } from 'lucide-react';
import { personalInfo } from '../data';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitState('loading');
    
    // Simulate submission delay
    setTimeout(() => {
      setSubmitState('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1800);
  };

  return (
    <section className="relative w-full min-h-screen py-24 bg-[#F7F5F2] text-[#1A1A1A] overflow-hidden">
      {/* Background decoration watermark text */}
      <div className="absolute right-6 top-1/3 text-[10vw] font-bold serif opacity-[0.02] select-none pointer-events-none tracking-widest leading-none hidden xl:block">
        CONTACT
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl z-10 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-2 serif">
            GET IN <span className="text-[#B35D43] italic font-normal">TOUCH</span>
          </h2>
          <div className="w-16 h-[1px] bg-[#1A1A1A]/30 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Information cards styled with thin editorial borders */}
          <div className="lg:col-span-4 flex flex-col space-y-8">
            <div>
              <h3 className="text-xl font-bold uppercase tracking-widest text-[#1A1A1A]/85 mb-3 font-mono">
                Don't be shy !
              </h3>
              <p className="text-xs sm:text-sm text-[#1A1A1A]/60 font-normal leading-relaxed">
                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            {/* Info cards - Squared & high contrast look */}
            <div className="space-y-4">
              
              {/* Mail Box */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-none bg-[#F0EDE9]/50 border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 transition-all duration-350 group shadow-sm animate-fade-in"
              >
                <div className="p-3 bg-[#1A1A1A] rounded-none text-[#F7F5F2] group-hover:bg-[#B35D43] group-hover:text-[#F7F5F2] transition duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-[#1A1A1A]/50 font-mono font-bold mb-0.5">
                    Mail Me
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-[#1A1A1A] group-hover:text-[#B35D43] transition break-all">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              {/* Call Box */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-none bg-[#F0EDE9]/50 border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 transition-all duration-350 group shadow-sm"
              >
                <div className="p-3 bg-[#1A1A1A] rounded-none text-[#F7F5F2] group-hover:bg-[#B35D43] group-hover:text-[#F7F5F2] transition duration-300">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-[#1A1A1A]/50 font-mono font-bold mb-0.5">
                    Call Me
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-[#1A1A1A] group-hover:text-[#B35D43] transition">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>

              {/* Address Box */}
              <div className="flex items-center gap-4 p-4 rounded-none bg-[#F0EDE9]/50 border border-[#1A1A1A]/10 shadow-sm">
                <div className="p-3 bg-[#1A1A1A] rounded-none text-[#F7F5F2]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-[#1A1A1A]/50 font-mono font-bold mb-0.5">
                    Location
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-[#1A1A1A]">
                    {personalInfo.address}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Sending form box */}
          <div className="lg:col-span-8 bg-[#F0EDE9]/80 border border-[#1A1A1A]/12 p-6 sm:p-10 rounded-none relative min-h-[460px] flex flex-col justify-center shadow-md">
            
            <AnimatePresence mode="wait">
              {submitState === 'idle' && (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 mb-2 font-mono">
                        Username <span className="text-[#B35D43]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="px-5 py-3.5 bg-[#F7F5F2] border border-[#1A1A1A]/15 focus:border-[#B35D43] focus:ring-1 focus:ring-[#B35D43]/20 text-sm text-[#1A1A1A] focus:outline-none transition font-medium rounded-none placeholder-[#1A1A1A]/30"
                        placeholder="e.g. John Doe"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 mb-2 font-mono">
                        Email Address <span className="text-[#B35D43]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="px-5 py-3.5 bg-[#F7F5F2] border border-[#1A1A1A]/15 focus:border-[#B35D43] focus:ring-1 focus:ring-[#B35D43]/20 text-sm text-[#1A1A1A] focus:outline-none transition font-medium rounded-none placeholder-[#1A1A1A]/30"
                        placeholder="e.g. john@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 mb-2 font-mono">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="px-5 py-3.5 bg-[#F7F5F2] border border-[#1A1A1A]/15 focus:border-[#B35D43] focus:ring-1 focus:ring-[#B35D43]/20 text-sm text-[#1A1A1A] focus:outline-none transition font-medium rounded-none placeholder-[#1A1A1A]/30"
                      placeholder="Discussing a project..."
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 mb-2 font-mono">
                      Message <span className="text-[#B35D43]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="px-5 py-3.5 bg-[#F7F5F2] border border-[#1A1A1A]/15 focus:border-[#B35D43] focus:ring-1 focus:ring-[#B35D43]/20 text-sm text-[#1A1A1A] focus:outline-none transition resize-none font-medium rounded-none placeholder-[#1A1A1A]/30"
                      placeholder="Write your note here..."
                    />
                  </div>

                  <div className="flex justify-start">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      className="group flex items-center justify-between gap-6 px-8 py-3.5 bg-[#1A1A1A] border border-[#1A1A1A] text-[#F7F5F2] hover:bg-transparent hover:text-[#1A1A1A] rounded-none font-bold uppercase text-[10px] tracking-[0.2em] relative overflow-hidden transition-all duration-300 cursor-pointer shadow-md"
                    >
                      <span>Send Message</span>
                      <span className="p-1 px-1.5 bg-[#B35D43] text-white rounded-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex items-center justify-center">
                        <Send className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  </div>
                </motion.form>
              )}

              {submitState === 'loading' && (
                <motion.div
                  key="contact-loading"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center space-y-4"
                >
                  <Loader className="w-10 h-10 text-[#B35D43] animate-spin" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#B35D43] animate-pulse font-mono">
                    Delivering Your Message...
                  </p>
                </motion.div>
              )}

              {submitState === 'success' && (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center space-y-6 max-w-sm mx-auto"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle className="w-14 h-14 text-[#B35D43]" />
                  </motion.div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold uppercase tracking-widest text-[#1A1A1A] font-mono">
                      Message Sent !
                    </h4>
                    <p className="text-xs sm:text-sm text-[#1A1A1A]/60 font-light leading-relaxed">
                      Thank you for getting in touch! Aron Gebru will review your request and get back to you immediately.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitState('idle')}
                    className="px-6 py-2.5 bg-[#1A1A1A] hover:bg-[#B35D43] text-[#F7F5F2] hover:text-white text-[10px] font-bold uppercase tracking-widest rounded-none transition cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
