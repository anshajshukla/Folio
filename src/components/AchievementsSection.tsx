// @ts-nocheck
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card3D from './Card3D';
import Link from 'next/link';

interface Achievement {
  title: string;
  description: string;
  link?: string;
}

export default function AchievementsSection() {
  const achievements: Achievement[] = [
    {
      title: 'Smart India Hackathon Finalist',
      description: 'Advanced to the final round of the Smart India Hackathon, showcasing innovative problem-solving skills.',
      link: 'https://www.sih.gov.in'
    },
    {
      title: 'Top 10 Innovative Project',
      description: 'Selected as one of the top 10 innovative project teams at the intra-university level.',
      link: '#projects'
    },
    {
      title: 'Regional Mathematics Olympiad',
      description: 'Ranked in the top 30 in Regional Mathematics Olympiad (RMO) Uttar Pradesh, demonstrating exceptional analytical abilities.',
      link: 'https://olympiads.hbcse.tifr.res.in/olympiads/mathematics/mathematical-olympiad/'
    },
    {
      title: 'High Academic Achievement',
      description: 'Maintained a CGPA of 8.87 in Bachelor of Technology in Computer Science and Engineering.',
      link: '#about'
    }
  ];

  return (
    <section id="achievements" className="scroll-mt-[80px] py-12">
      <div>
        <h2 className="relative text-3xl font-bold my-6 text-center">
          <span className="gradient-text md:text-4xl lg:text-5xl xl:text-7xl">
            Achievements
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto w-auto md:w-3/4 lg:w-2/3 px-6 py-4">
        {achievements.map((achievement, idx) => {
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
              <Link 
                href={achievement.link || '#'} 
                className="block h-full" 
                target={achievement.link?.startsWith('http') ? '_blank' : '_self'}
                rel={achievement.link?.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                <Card3D className="h-full p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg border border-slate-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer">
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-300">{achievement.description}</p>
                </Card3D>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
