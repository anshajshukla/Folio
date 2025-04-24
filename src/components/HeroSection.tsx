// @ts-nocheck
"use client";

import React, { useEffect, useState } from 'react';
import TypedText from './TypedText';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LinkedInIcon, GitHubIcon, DocumentIcon } from './icons';
import Link from 'next/link';

// Animated text component for hero section with custom animation
const AnimatedText = ({ text, className, delay = 0 }: { text: string, className: string, delay?: number }) => {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * 0.3 }
    })
  };
  
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };
  
  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const HeroSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden py-20 md:py-0">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#111827]/30 to-[#0f172a]/40 z-0"></div>
      <div className="absolute top-10 left-10 bg-blue-500/15 w-[40vw] h-[40vw] rounded-full filter blur-[100px] animate-pulse animation-duration-[15s]"></div>
      <div className="absolute bottom-20 right-20 bg-purple-500/15 w-[45vw] h-[45vw] rounded-full filter blur-[120px] animate-pulse animation-duration-[20s] animation-delay-[2s]"></div>
      <div className="absolute top-1/3 right-1/4 bg-indigo-500/10 w-[30vw] h-[30vw] rounded-full filter blur-[80px] animate-pulse animation-duration-[18s] animation-delay-[1s]"></div>
      
      {/* Subtle Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.08] z-0"></div>
      
      {/* Main Content - More transparent container */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 w-full flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-between backdrop-blur-sm bg-black/5 rounded-3xl border border-white/5 p-8 md:p-12 shadow-2xl">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4"
            >
              <span className="mr-2 h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              Available for collaboration
            </motion.div>
            
            <AnimatedText 
              text="Anshaj Shukla" 
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none text-white" 
              delay={0.2} 
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="h-16"
            >
              <TypedText texts={["Machine Learning Engineer", "Data Scientist", "Python Developer"]} />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed backdrop-blur-sm bg-black/20 p-4 rounded-xl border border-white/5 shadow-lg"
            >
              Creating intelligent solutions at the intersection of machine learning and software engineering. Transforming complex data into meaningful insights and powerful applications.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Link href="#projects">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-medium rounded-lg border border-blue-700/50 shadow-lg shadow-blue-500/20 flex items-center gap-2"
                >
                  View My Work
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </Link>
              <Link href="#contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 bg-transparent hover:bg-slate-800/50 text-white font-medium rounded-lg border border-slate-700 hover:border-slate-600 transition-colors flex items-center gap-2"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex items-center gap-6 mt-8"
            >
              <a 
                href="https://www.linkedin.com/in/anshaj-shukla-a53b98218/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <LinkedInIcon />
              </a>
              <a 
                href="https://github.com/anshajshukla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <GitHubIcon />
              </a>
              <a 
                href="#resume"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <DocumentIcon />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Modernized Abstract Visual Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] flex items-center justify-center">
            {/* Floating elements */}
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 8,
                ease: "easeInOut" 
              }}
              className="absolute top-1/4 left-1/4 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl backdrop-blur-md border border-white/10 shadow-xl"
            />
            <motion.div 
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -8, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 9,
                delay: 0.5,
                ease: "easeInOut" 
              }}
              className="absolute bottom-1/4 right-1/4 w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-md border border-white/10 shadow-xl"
            />
            <motion.div 
              animate={{ 
                y: [0, 12, 0],
                rotate: [0, 15, 0],
                scale: [1, 1.08, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 10,
                delay: 1,
                ease: "easeInOut" 
              }}
              className="absolute top-1/3 right-1/3 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg backdrop-blur-md border border-white/10 shadow-xl transform rotate-12"
            />
            
            {/* Profile Image - Enlarged */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 backdrop-blur-xl rounded-full border border-white/10 overflow-hidden flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-purple-500/10 opacity-50"></div>
              <motion.div 
                className="relative z-10 h-full w-full overflow-hidden rounded-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img 
                  src="/images/profile.jpg" 
                  alt="Anshaj Shukla" 
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <a 
          href="#about" 
          className="flex flex-col items-center space-y-2 text-sm text-gray-400 hover:text-white transition-colors"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span>Explore My Work</span>
          <motion.div 
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
