// @ts-nocheck
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  url: string;
}

const CertificationCard: React.FC<CertificationProps> = ({ title, issuer, date, url }) => {
  return (
    <div className="p-6 rounded-lg bg-slate-800/80 border border-slate-700 shadow-lg h-full flex flex-col">
      <div className="flex-grow">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
              <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
            </svg>
            <span>Issuer: {issuer}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
            </svg>
            <span>Date: {date}</span>
          </div>
        </div>
      </div>
      
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="px-4 py-2 rounded-lg bg-blue-600 text-white flex items-center gap-2 mt-2 w-fit hover:bg-blue-700 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
          <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
        </svg>
        View Certificate
      </a>
    </div>
  );
};

export default function CertificationsSection() {
  const certifications: CertificationProps[] = [
    {
      title: 'Programming & Algorithms: Complete Interview Preparation - Self-Paced (Java & DSA)',
      issuer: 'GeeksForGeeks',
      date: 'May 2023',
      url: 'https://www.geeksforgeeks.org/courses/dsa-self-paced',
    },
    {
      title: 'C++ & Data Structures/Algorithms',
      issuer: 'Coding Ninja',
      date: 'January 2022',
      url: 'https://www.codingninjas.com/',
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'Coursera',
      date: 'August 2023',
      url: 'https://www.coursera.org/specializations/machine-learning-introduction',
    },
    {
      title: 'Deep Learning Specialization',
      issuer: 'Coursera',
      date: 'November 2023',
      url: 'https://www.coursera.org/specializations/deep-learning',
    },
    {
      title: 'IBM Data Science Specialization',
      issuer: 'IBM',
      date: 'December 2023',
      url: 'https://www.ibm.com/training/badge/data-science-professional-certificate',
    },
    {
      title: 'Probability and Statistics',
      issuer: 'IIT Madras (NPTEL)',
      date: 'March 2023',
      url: 'https://nptel.ac.in/courses/111106131',
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="scroll-mt-[80px] py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="gradient-text text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Certifications</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Professional qualifications and achievements</p>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={ref}>
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id || index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="h-full"
          >
            <CertificationCard
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              url={cert.url}
            />
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
