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
    <section className="relative w-full min-h-screen py-24 bg-transparent text-[#F7F5F2] overflow-hidden">
      {/* Background decoration watermark text */}
      <div className="absolute right-6 top-1/3 text-[10vw] font-bold serif opacity-[0.015] text-[#FF6B00] select-none pointer-events-none tracking-widest leading-none hidden xl:block">
        CONTACT
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl z-10 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-2 serif">
            GET IN <span className="text-[#FF6B00] italic font-normal drop-shadow-[0_0_15px_rgba(255,107,0,0.15)]">TOUCH</span>
          </h2>
          <div className="w-16 h-[1px] bg-white/10 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Information cards styled with thin glass panels */}
          <div className="lg:col-span-4 flex flex-col space-y-8">
            <div>
              <h3 className="text-xl font-bold uppercase tracking-widest text-neutral-300 mb-3 font-mono">
                Don't be shy !
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            {/* Info cards - Glassmorphic pills */}
            <div className="space-y-4">
              
              {/* Mail Box */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#FF6B00]/35 hover:bg-[#FF6B00]/5 transition-all duration-300 group shadow-lg cursor-pointer"
              >
                <div className="p-3 bg-white/5 border border-white/10 text-[#FF6B00] rounded-xl group-hover:bg-[#FF6B00] group-hover:text-[#0E0E10] shadow-md transition-colors duration-300">
                  <Mail className="w-4.5 h-4.5 stroke-[2]" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-neutral-400 font-mono font-bold mb-0.5">
                    Mail Me
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-white group-hover:text-[#FF6B00] transition break-all">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              {/* Call Box */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#FF6B00]/35 hover:bg-[#FF6B00]/5 transition-all duration-300 group shadow-lg cursor-pointer"
              >
                <div className="p-3 bg-white/5 border border-white/10 text-[#FF6B00] rounded-xl group-hover:bg-[#FF6B00] group-hover:text-[#0E0E10] shadow-md transition-colors duration-300">
                  <PhoneCall className="w-4.5 h-4.5 stroke-[2]" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-neutral-400 font-mono font-bold mb-0.5">
                    Call Me
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-white group-hover:text-[#FF6B00] transition">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>

              {/* Address Box */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-300 shadow-lg cursor-default">
                <div className="p-3 bg-white/5 border border-white/10 text-[#FF6B00] rounded-xl shadow-md">
                  <MapPin className="w-4.5 h-4.5 stroke-[2]" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-neutral-400 font-mono font-bold mb-0.5">
                    Location
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-white">
                    {personalInfo.address}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Sending form box */}
          <div className="lg:col-span-8 bg-neutral-900/60 backdrop-blur-md border border-white/10 p-6 sm:p-10 rounded-3xl relative min-h-[460px] flex flex-col justify-center shadow-2xl cursor-default">
            
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
                      <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2 font-mono">
                        Username <span className="text-[#FF6B00]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="px-5 py-3.5 bg-neutral-950/60 border border-white/10 focus:border-[#FF6B00]/60 focus:ring-1 focus:ring-[#FF6B00]/20 text-sm text-white focus:outline-none transition font-medium rounded-full placeholder-neutral-500"
                        placeholder="e.g. John Doe"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2 font-mono">
                        Email Address <span className="text-[#FF6B00]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="px-5 py-3.5 bg-neutral-950/60 border border-white/10 focus:border-[#FF6B00]/60 focus:ring-1 focus:ring-[#FF6B00]/20 text-sm text-white focus:outline-none transition font-medium rounded-full placeholder-neutral-500"
                        placeholder="e.g. john@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2 font-mono">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="px-5 py-3.5 bg-neutral-950/60 border border-white/10 focus:border-[#FF6B00]/60 focus:ring-1 focus:ring-[#FF6B00]/20 text-sm text-white focus:outline-none transition font-medium rounded-full placeholder-neutral-500"
                      placeholder="Discussing a project..."
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2 font-mono">
                      Message <span className="text-[#FF6B00]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="px-5 py-3.5 bg-neutral-950/60 border border-white/10 focus:border-[#FF6B00]/60 focus:ring-1 focus:ring-[#FF6B00]/20 text-sm text-white focus:outline-none transition resize-none font-medium rounded-2xl placeholder-neutral-500"
                      placeholder="Write your note here..."
                    />
                  </div>

                  <div className="flex justify-start">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      className="group flex items-center justify-between gap-6 pl-8 pr-2.5 py-2.5 bg-white/5 border border-white/10 hover:border-[#FF6B00]/40 text-white rounded-full font-bold uppercase text-[10px] tracking-[0.25em] relative overflow-hidden transition-all duration-300 shadow-lg cursor-pointer"
                    >
                      <span>Send Message</span>
                      <span className="p-2.5 bg-[#FF6B00] text-[#0E0E10] rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex items-center justify-center">
                        <Send className="w-3.5 h-3.5 stroke-[2]" />
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
                  <Loader className="w-10 h-10 text-[#FF6B00] animate-spin" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#FF6B00] animate-pulse font-mono">
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
                    <CheckCircle className="w-14 h-14 text-[#FF6B00] drop-shadow-[0_0_15px_rgba(255,107,0,0.4)]" />
                  </motion.div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold uppercase tracking-widest text-white font-mono">
                      Message Sent !
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                      Thank you for getting in touch! Aron Gebru will review your request and get back to you immediately.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitState('idle')}
                    className="px-6 py-3 bg-[#FF6B00] hover:bg-[#FF802B] text-[#0E0E10] text-[10px] font-bold uppercase tracking-widest rounded-full transition shadow-lg cursor-pointer"
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

