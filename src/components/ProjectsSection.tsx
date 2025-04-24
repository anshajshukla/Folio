// @ts-nocheck
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card3D from './Card3D';

interface ProjectItemProps {
  title: string;
  description: string[];
  id: string;
  index: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, id, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.li
      ref={ref}
      className="mb-10 ml-4 md:ml-12"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card3D className="px-6 py-3 border-slate-200 border-b-4 bg-gradient-to-b from-slate-900 rounded-md hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
        <h3 className="flex items-center mb-3 text-lg md:text-xl font-semibold text-white">
          {title}
        </h3>
        <ul className="mb-4 text-xs md:text-base font-normal text-gray-400 list-disc">
          {description.map((item, idx) => (
            <li key={`${id}-${idx}`} className="mb-2 ml-4">
              {item}
            </li>
          ))}
        </ul>
      </Card3D>
    </motion.li>
  );
};

const ProjectsSection: React.FC = () => {
  const projects: Omit<ProjectItemProps, 'index'>[] = [
    {
      id: 'project-forecasting',
      title: 'Electric Load Forecasting',
      description: ['Engineered a hybrid LSTM-GRU + GNN model achieving 97.3% accuracy.'],
    },
    {
      id: 'project-bitcoin',
      title: 'Bitcoin Prediction',
      description: ['Developed an ensemble model combining LSTM, Bi-Prophet, SARIMA and XGBoost.'],
    },
    {
      id: 'project-stock',
      title: 'Stock Performance Analysis & Dashboard System',
      description: ['Built an interactive Python dashboard correlating stock trends.'],
    },
  ];

  return (
    <section id="projects" className="scroll-mt-[80px]">
      <div>
        <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
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
