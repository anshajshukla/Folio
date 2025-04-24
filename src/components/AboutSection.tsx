// @ts-nocheck
"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Animation variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  // Skill items with links
  const skills = [
    { name: "Machine Learning", link: "https://www.tensorflow.org/" },
    { name: "Data Science", link: "https://scikit-learn.org/" },
    { name: "Python", link: "https://www.python.org/" },
    { name: "TensorFlow", link: "https://www.tensorflow.org/" },
    { name: "AWS", link: "https://aws.amazon.com/" },
    { name: "Docker", link: "https://www.docker.com/" },
  ];
  
  // Core skills
  const coreSkills = [
    { name: "Data Structures & Algorithms", link: "#projects" },
    { name: "Probability & Statistics", link: "#projects" },
    { name: "OOPS", link: "#projects" },
  ];

  return (
    <section id="about" className="text-white scroll-mt-[80px] min-h-[60vh] py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-center font-bold mb-16">
          <span className="gradient-text text-4xl md:text-5xl lg:text-6xl">
            About Me
          </span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-8 text-lg leading-relaxed"
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            ref={ref}
          >
            <motion.div variants={item} className="text-gray-300">
              <h3 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-slate-700 inline-block">My Background</h3>
              <p className="mb-4">I'm a machine learning engineer and data scientist specializing in creating intelligent solutions that solve real-world problems. With a strong foundation in computer science and mathematics, I build systems that extract meaningful insights from complex data.</p>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-3">Technical Expertise</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skills.map((skill, index) => (
                    <Link 
                      key={index}
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-slate-800 hover:bg-blue-900/30 border border-blue-500/30 text-blue-300 transition-colors duration-300 hover:text-blue-200"
                    >
                      {skill.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-3">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {coreSkills.map((skill, index) => (
                    <Link 
                      key={index}
                      href={skill.link}
                      className="px-4 py-2 rounded-full bg-slate-800 hover:bg-purple-900/30 border border-purple-500/30 text-purple-300 transition-colors duration-300 hover:text-purple-200"
                    >
                      {skill.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Education</h4>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                  <h5 className="font-bold text-white">Lovely Professional University</h5>
                  <p className="text-blue-300">Bachelor of Technology in Computer Science and Engineering</p>
                  <div className="mt-2 inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium">
                    CGPA: 8.87
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="pt-6 flex justify-center gap-6">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>View my projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-all duration-300 border border-slate-700 hover:border-slate-600"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Contact me</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
