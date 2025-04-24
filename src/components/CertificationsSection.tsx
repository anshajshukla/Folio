// @ts-nocheck
"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card3D from './Card3D';
import Link from 'next/link';

interface Certification {
  title: string;
  provider: string;
  duration: string;
  link: string;
}

export default function CertificationsSection() {
  const certifications: Certification[] = [
    {
      title: 'Programming & Algorithms: Complete Interview Preparation',
      provider: 'GeeksforGeeks',
      duration: '18 Months',
      link: 'https://www.geeksforgeeks.org/courses/dsa-self-paced'
    },
    {
      title: 'C++ & Data Structures/Algorithms',
      provider: 'Coding Ninjas',
      duration: '12 Months',
      link: 'https://www.codingninjas.com/courses/c-plus-plus-data-structures-and-algorithms'
    },
    {
      title: 'Machine Learning Specialization (NLP)',
      provider: 'DeepLearning.ai',
      duration: '6 Months',
      link: 'https://www.deeplearning.ai/courses/machine-learning-specialization/'
    },
    {
      title: 'Machine Learning',
      provider: 'IIT Kharagpur (NPTEL)',
      duration: '4 Months',
      link: 'https://nptel.ac.in/courses/106105152'
    },
    {
      title: 'IBM Data Science Specialization',
      provider: 'IBM',
      duration: '12 Months',
      link: 'https://www.ibm.com/training/badge/data-science-professional-certificate'
    },
    {
      title: 'Probability and Statistics',
      provider: 'IIT Madras (NPTEL)',
      duration: '3 Months',
      link: 'https://nptel.ac.in/courses/111106131'
    }
  ];

  return (
    <section id="certifications" className="scroll-mt-[80px] py-12">
      <div>
        <h2 className="relative text-3xl font-bold my-6 text-center">
          <span className="gradient-text md:text-4xl lg:text-5xl xl:text-7xl">
            Certifications
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto w-auto md:w-4/5 lg:w-3/4 px-6 py-8">
        {certifications.map((cert, idx) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });
          
          return (
            <motion.div
              key={idx}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={cert.link} target="_blank" rel="noopener noreferrer" className="block h-full group">
                <Card3D className="h-full p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg border border-slate-700 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-400 transition-all duration-300 cursor-pointer flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{cert.title}</h3>
                  <div className="flex justify-between text-gray-300 mb-3">
                    <p>{cert.provider}</p>
                    <p>{cert.duration}</p>
                  </div>
                  <div className="mt-auto pt-3 border-t border-slate-700 flex items-center">
                    <span className="text-blue-400 text-sm flex items-center gap-1">
                      View Certificate
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </span>
                  </div>
                </Card3D>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
