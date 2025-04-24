// @ts-nocheck
"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GitHubIcon } from './icons';

interface ProjectItemProps {
  id: string;
  title: string;
  description: string[];
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects: ProjectItemProps[] = [
    {
      id: 'project-1',
      title: 'Electric Load Forecasting',
      description: [
        'Engineered a hybrid LSTM-GRU + GNN model achieving 97.3% accuracy for electric load prediction, a 7% improvement over standard methods.',
        'Implemented data preprocessing pipeline for time-series electrical data.'
      ],
      technologies: ['Python', 'PyTorch', 'Deep Learning', 'Graph Neural Networks'],
      githubUrl: 'https://github.com/anshajshukla/load-forecasting',
    },
    {
      id: 'project-2',
      title: 'Bitcoin Price Prediction',
      description: [
        'Developed a multi-factor model for Bitcoin price analysis with Twitter sentiment and market data.',
        'Improved prediction accuracy by 20% compared to baseline models.'
      ],
      technologies: ['Python', 'NLP', 'Machine Learning', 'Sentiment Analysis'],
      githubUrl: 'https://github.com/anshajshukla/bitcoin-prediction',
    },
    {
      id: 'project-3',
      title: 'Weather App with ML Forecasting',
      description: [
        'Built a real-time weather application with machine learning enhanced forecasting.',
        'Integrated multiple weather APIs and implemented custom prediction algorithms.'
      ],
      technologies: ['JavaScript', 'React', 'Node.js', 'API Integration'],
      githubUrl: 'https://github.com/anshajshukla/weather-ml-app',
      liveUrl: 'https://weather-ml-app.example.com',
    },
    {
      id: 'project-4',
      title: 'Healthcare Analytics Dashboard',
      description: [
        'Designed an interactive dashboard for healthcare data visualization.',
        'Implemented statistical analysis tools and predictive patient outcome models.'
      ],
      technologies: ['Python', 'R', 'Tableau', 'Statistical Modeling'],
      githubUrl: 'https://github.com/anshajshukla/healthcare-analytics',
    },
  ];

  return (
    <section id="projects" className="scroll-mt-[80px] py-20 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-60 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-60 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="gradient-text text-4xl md:text-5xl lg:text-6xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto text-lg">Featured work showcasing my technical skills</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="h-full"
            >
              <div className="h-full p-6 rounded-xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/60 hover:border-blue-500/30 shadow-lg hover:shadow-blue-500/5 transition-all duration-300 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold mb-1 text-white">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-md bg-slate-700/80 hover:bg-slate-600 text-gray-300 hover:text-white transition-colors duration-300"
                        aria-label="View GitHub Repository"
                      >
                        <GitHubIcon />
                      </a>
                    )}
                    
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-md bg-blue-700/80 hover:bg-blue-600 text-gray-200 hover:text-white transition-colors duration-300"
                        aria-label="View Live Demo"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                          <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="mb-6 flex-grow space-y-3">
                  {project.description.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-300 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                  {project.technologies && project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-slate-700/50 text-xs rounded-full text-blue-300 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-end mt-6">
                  <div className="group relative overflow-hidden rounded-lg">
                    <a 
                      href={project.githubUrl || project.liveUrl || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg transition-all duration-300 shadow-md"
                    >
                      <span>View Details</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
