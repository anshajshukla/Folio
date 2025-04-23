"use client";

import type React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProjectItemProps {
  title: string;
  description: string[];
  id: string;
  index: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  id,
  index,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.li
      ref={ref}
      className="mb-10 ml-4 md:ml-12 px-6 py-3 border-slate-200 border-b-4 bg-gradient-to-b from-slate-900 rounded-md"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="flex items-center mb-3 text-lg md:text-xl font-semibold text-white">
        {title}
      </h3>
      <ul className="mb-4 text-xs md:text-base font-normal text-gray-400 list-disc">
        {description.map((item, idx) => (
          <li key={`${id}-${item.substring(0, 15).replace(/\s+/g, '-')}`} className="mb-2 ml-4">
            {item}
          </li>
        ))}
      </ul>
    </motion.li>
  );
};

const ProjectsSection: React.FC = () => {
  // Projects data
  const projects = [
    {
      id: 'project-forecasting',
      title: 'Electric Load Forecasting using Deep Learning and GNNs',
      description: [
        'Engineered a hybrid LSTM-GRU + GNN model achieving 97.3% accuracy on load predictions for a grid serving 10 million residents.',
        'Integrated real time weather, holiday and time-based parameters, reducing blackouts risk by 20%.',
        'Automated anomaly detection and deployed real time predictions dashboards using AWS, Docker, and Flask, cutting manual intervention time by 50%.'
      ],
    },
    {
      id: 'project-bitcoin',
      title: 'Bitcoin Prediction Using Machine Learning Models',
      description: [
        'Developed an ensemble model combining LSTM, Bi-Prophet, SARIMA and XGBoost techniques, boosting prediction accuracy by 20%.',
        'Processed and analyzed 7TB of historical data, leading to a 15% improvement in investor returns.',
        'The goal is to develop an optimal model for highly accurate Bitcoin prediction using various global trends.'
      ],
    },
    {
      id: 'project-stock',
      title: 'Stock Performance Analysis & Dashboard System',
      description: [
        'Built an interactive Python dashboard to correlate stock performance trends for Tesla and GameStop, reducing analysis time by 7%.',
        'Employed web scraping with vfinance to extract revenue data, which improved forecasting precision by 12% for key financial metrics.'
      ],
    },
  ];

  return (
    <section id="projects" className="scroll-mt-[80px]">
      <div>
        <h2 className="relative text-3xl font-bold my-6 text-center">
          <span className="gradient-text md:text-4xl lg:text-5xl xl:text-7xl">
            My Projects
          </span>
        </h2>
      </div>
      <ol className="relative border-s border-gray-700 mx-auto w-auto md:w-3/4 lg:w-2/3">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            id={project.id}
            index={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </ol>
    </section>
  );
};

export default ProjectsSection;
