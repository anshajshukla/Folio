// @ts-nocheck
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card3D from './Card3D';
import Link from 'next/link';
import { GitHubIcon } from './icons';

interface ProjectItemProps {
  title: string;
  description: string[];
  id: string;
  index: number;
  githubUrl: string;
  liveUrl?: string;
  tech: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, id, index, githubUrl, liveUrl, tech }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.li
      ref={ref}
      className="mb-10 ml-4 md:ml-12"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card3D className="px-6 py-5 border-slate-200 border-b-4 bg-gradient-to-b from-slate-900 rounded-md hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg md:text-xl font-semibold text-white">
            {title}
          </h3>
          <div className="flex space-x-3">
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <GitHubIcon />
            </Link>
            {liveUrl && (
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">View Live</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </Link>
            )}
          </div>
        </div>
        <ul className="mb-4 text-xs md:text-base font-normal text-gray-400 list-disc">
          {description.map((item, idx) => (
            <li key={`${id}-${idx}`} className="mb-2 ml-4">
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((item, idx) => (
            <span 
              key={`${id}-tech-${idx}`} 
              className="text-xs px-2 py-1 bg-slate-800 text-blue-300 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </Card3D>
    </motion.li>
  );
};

const ProjectsSection: React.FC = () => {
  const projects: Omit<ProjectItemProps, 'index'>[] = [
    {
      id: 'project-forecasting',
      title: 'Electric Load Forecasting',
      description: [
        'Engineered a hybrid LSTM-GRU + GNN model achieving 97.3% accuracy for electric load prediction',
        'Implemented a novel architecture that captures both temporal and spatial dependencies in the data',
        'Reduced prediction error by 15% compared to traditional forecasting methods'
      ],
      githubUrl: 'https://github.com/anshajshukla/load-forecasting',
      tech: ['Python', 'PyTorch', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      id: 'project-bitcoin',
      title: 'Bitcoin Prediction',
      description: [
        'Developed an ensemble model combining LSTM, Bi-Prophet, SARIMA and XGBoost for cryptocurrency price prediction',
        'Improved prediction accuracy by 20% through feature engineering and model optimization',
        'Created a real-time dashboard for tracking predictions and model performance'
      ],
      githubUrl: 'https://github.com/anshajshukla/bitcoin-prediction',
      liveUrl: 'https://bitcoin-prediction-dashboard.vercel.app',
      tech: ['Python', 'TensorFlow', 'Prophet', 'Streamlit', 'XGBoost']
    },
    {
      id: 'project-stock',
      title: 'Stock Performance Analysis & Dashboard',
      description: [
        'Built an interactive Python dashboard correlating stock trends with market indicators',
        'Implemented backtesting capabilities to evaluate trading strategies',
        'Integrated sentiment analysis from news articles to enhance prediction accuracy'
      ],
      githubUrl: 'https://github.com/anshajshukla/stock-analysis',
      tech: ['Python', 'Dash', 'Plotly', 'NLTK', 'yfinance']
    },
  ];

  return (
    <section id="projects" className="scroll-mt-[80px] py-12">
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="gradient-text md:text-4xl lg:text-5xl xl:text-7xl">
            My Projects
          </span>
        </h2>
      </div>
      <ol className="relative border-s border-gray-700 mx-auto w-auto md:w-3/4 lg:w-2/3">
        {projects.map((proj, idx) => (
          <ProjectItem key={proj.id} index={idx} {...proj} />
        ))}
      </ol>
    </section>
  );
};

export default ProjectsSection;
