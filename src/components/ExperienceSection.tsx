// @ts-nocheck
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  points: string[];
  technologies?: string[];
}

const ExperienceSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences: ExperienceItem[] = [
    {
      id: 'exp-cashfree',
      role: 'Software Engineer Intern — Payment Infrastructure',
      company: 'Cashfree Payments',
      location: 'Bengaluru, India',
      period: 'Jan 2026 – Present',
      points: [
        'Designed and deployed a dynamic payment routing system across UPI, cards, netbanking and wallets with real-time gateway selection and intelligent fallback strategies; improved transaction success rate by 6% during peak load while maintaining 99.9% uptime.',
        'Reduced the payment infrastructure security vulnerability surface by 40% through automated CVE scanning, targeted patching and security policy enforcement across all production dependencies; implemented infrastructure-as-code compliance.',
        'Owned full-stack infrastructure reliability — from system design to production deployment, monitoring and incident response — for payment processing systems handling millions of transactions.',
      ],
      technologies: ['Payments', 'System Design', 'CVE Scanning', 'Infrastructure-as-Code', 'Monitoring'],
    },
    {
      id: 'exp-outlier',
      role: 'Infrastructure & Automation Specialist',
      company: 'Outlier (Scale AI) & Personal Projects',
      period: 'Dec 2024 – Present',
      points: [
        'Designed and executed automated testing infrastructure for complex systems; built CI/CD pipelines with comprehensive evaluation hooks and audit trail logging for production workflows.',
        'Developed ETL pipelines and data processing infrastructure handling large-scale datasets with data quality guardrails and automated error detection; optimized performance across multiple systems.',
      ],
      technologies: ['CI/CD', 'ETL Pipelines', 'Python', 'Automation'],
    },
  ];

  return (
    <section id="experience" className="scroll-mt-[80px] py-20 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-40 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="gradient-text text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Experience</h2>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto text-lg">Where I've been building production systems</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/60 hover:border-blue-500/30 shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-blue-300">
                      {exp.company}{exp.location ? `, ${exp.location}` : ''}
                    </p>
                  </div>
                  <span className="text-blue-300 px-3 py-1 bg-blue-900/20 rounded-full text-sm font-medium border border-blue-500/20 whitespace-nowrap w-fit">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3 text-gray-300 mb-6">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-blue-400 mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                  {exp.technologies && exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700/50 text-xs rounded-full text-blue-300 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
