// @ts-nocheck
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  icon?: React.ReactNode;
}

export default function AchievementsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const achievements: Achievement[] = [
    {
      id: 'achieve-1',
      title: 'Kaggle Competition Top 5%',
      description: 'Ranked in the top 5% globally in the Kaggle House Prices Advanced Regression Techniques competition.',
      year: '2023',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'achieve-2',
      title: 'AWS DeepRacer Championship',
      description: 'Finished 3rd place in the national AWS DeepRacer Championship using reinforcement learning.',
      year: '2022',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      id: 'achieve-3',
      title: 'Research Publication',
      description: 'Published research on computer vision techniques in the International Journal of Computer Applications.',
      year: '2023',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 'achieve-4',
      title: 'Hackathon Winner',
      description: 'First place in the University ML Hackathon for developing a real-time emotion recognition system.',
      year: '2021',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      )
    },
  ];

  return (
    <section id="achievements" className="scroll-mt-[80px] py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="gradient-text text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Achievements</h2>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto text-lg">Recognition and milestones in my journey</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="h-full"
              ref={index === 0 ? ref : undefined}
            >
              <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/60 hover:border-blue-500/30 shadow-lg hover:shadow-blue-500/5 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                    {achievement.icon || (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center w-full">
                      <h3 className="text-2xl font-bold text-white">{achievement.title}</h3>
                      <span className="text-blue-300 px-3 py-1 bg-blue-900/20 rounded-full text-sm font-medium border border-blue-500/20">
                        {achievement.year}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed flex-grow mb-4">{achievement.description}</p>
                
                <div className="pt-4 border-t border-slate-700/50 flex justify-end mt-auto">
                  <Link 
                    href="#contact" 
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm group"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span>Contact me about this</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
