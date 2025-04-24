// @ts-nocheck
"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ResumeSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isPdfFullscreen, setIsPdfFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const cvLink = "https://drive.google.com/file/d/1lDgDzGK07w1MHIHZ_ZO9tBpUNx5JGDcV/view?usp=drive_link";
  const cvDownloadLink = "https://drive.google.com/uc?export=download&id=1lDgDzGK07w1MHIHZ_ZO9tBpUNx5JGDcV";
  
  const handleZoomIn = () => {
    if (zoomLevel < 200) {
      setZoomLevel(prevZoom => prevZoom + 25);
    }
  };
  
  const handleZoomOut = () => {
    if (zoomLevel > 50) {
      setZoomLevel(prevZoom => prevZoom - 25);
    }
  };
  
  const handleFullscreen = () => {
    setIsPdfFullscreen(!isPdfFullscreen);
  };
  
  return (
    <section id="resume" className="scroll-mt-[80px] py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -left-20 top-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 bottom-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        <h2 className="gradient-text text-4xl md:text-5xl lg:text-6xl font-bold mb-4">My Resume</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">A detailed overview of my skills, experience, and qualifications.</p>
      </motion.div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl shadow-lg border border-slate-700/60 hover:border-blue-600/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">Experience & Skills</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▹</span>
                <span>Machine Learning & Data Science</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▹</span>
                <span>Python, TensorFlow, PyTorch</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▹</span>
                <span>Web Development with React & Next.js</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▹</span>
                <span>Data Analysis & Visualization</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl shadow-lg border border-slate-700/60 hover:border-blue-600/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold">Bachelor of Technology</h4>
                <p className="text-blue-400">Computer Science & Engineering</p>
                <p className="text-gray-400 text-sm">CGPA: 8.87</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Certifications</h4>
                <p className="text-gray-300">ML Specialization, Data Science, Algorithms</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="flex justify-center gap-4 mb-12">
          <motion.a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold flex items-center gap-2 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <line x1="10" y1="9" x2="8" y2="9"/>
            </svg>
            View Full Resume
            <motion.span
              animate={isHovered ? { x: [0, 5, 0] } : { x: 0 }}
              transition={{ repeat: isHovered ? Infinity : 0, duration: 1 }}
            >
              →
            </motion.span>
          </motion.a>
          
          <motion.a 
            href="mailto:contact@anshaj.com" 
            className="px-8 py-4 rounded-lg border border-blue-500 text-blue-400 font-bold flex items-center gap-2 transition-all duration-300 hover:bg-blue-500/10"
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Contact Me
          </motion.a>
        </div>
        
        <motion.div 
          className={`mt-8 rounded-xl shadow-xl ${isPdfFullscreen ? 'fixed inset-0 z-50 bg-black/90 rounded-none p-4' : 'relative'}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-slate-800 p-3 flex items-center justify-between rounded-t-xl">
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleZoomOut}
                className="p-2 rounded-md bg-slate-700 text-gray-300 hover:text-white hover:bg-slate-600 transition-colors"
                aria-label="Zoom out"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </motion.button>
              
              <span className="text-gray-300 text-sm">{zoomLevel}%</span>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleZoomIn}
                className="p-2 rounded-md bg-slate-700 text-gray-300 hover:text-white hover:bg-slate-600 transition-colors"
                aria-label="Zoom in"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </div>
            
            <div className="flex items-center gap-2">
              <motion.a
                href={cvDownloadLink}
                download="Anshaj_Shukla_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center gap-1 text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleFullscreen}
                className="p-2 rounded-md bg-slate-700 text-gray-300 hover:text-white hover:bg-slate-600 transition-colors"
                aria-label={isPdfFullscreen ? "Exit fullscreen" : "Fullscreen"}
              >
                {isPdfFullscreen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 10a1 1 0 01-1-1V5a1 1 0 011-1h1a1 1 0 110 2H6v3a1 1 0 01-1 1zm5-7a1 1 0 01-1 1h-.01a1 1 0 110-2H9a1 1 0 011 1zM14 10a1 1 0 01-1-1V6h-.01a1 1 0 110-2H14a1 1 0 011 1v4a1 1 0 01-1 1zM15 15a1 1 0 01-1 1h-1v-1a1 1 0 112 0zm-8 0a1 1 0 01-1 1H5a1 1 0 01-1-1v-4a1 1 0 112 0v3h1a1 1 0 011 1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V9a1 1 0 01-2 0V5a1 1 0 011-1zm6 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L12.586 5H10a1 1 0 010-2zm-6 10a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 16.414V19a1 1 0 01-2 0v-4a1 1 0 011-1zm11-1a1 1 0 010 2h-1.586l2.293 2.293a1 1 0 01-1.414 1.414L12 16.414V19a1 1 0 01-2 0v-4a1 1 0 011-1h4z" clipRule="evenodd" />
                  </svg>
                )}
              </motion.button>
              
              {isPdfFullscreen && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPdfFullscreen(false)}
                  className="p-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              )}
            </div>
          </div>
          
          <div className="overflow-hidden bg-slate-900 rounded-b-xl" style={{ height: isPdfFullscreen ? 'calc(100vh - 120px)' : '600px' }}>
            <iframe 
              ref={iframeRef}
              src="https://drive.google.com/file/d/1lDgDzGK07w1MHIHZ_ZO9tBpUNx5JGDcV/preview" 
              width="100%" 
              height="100%" 
              className="border-none transform-gpu" 
              style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top left' }}
              allow="autoplay"
            />
          </div>
          
          {isPdfFullscreen && (
            <div className="absolute inset-0 pointer-events-none border-2 border-blue-500 rounded-xl animate-pulse" style={{ opacity: 0.3 }}></div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
