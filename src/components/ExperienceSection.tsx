"use client";

import type React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceItemProps {
  title: string;
  company: string;
  employmentType: string;
  period: string;
  location: string;
  responsibilities: string[];
  isCurrent?: boolean;
  index: number;
  id: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  employmentType,
  period,
  location,
  responsibilities,
  isCurrent = false,
  index,
  id,
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
      <h3 className="flex items-center mb-1 text-lg md:text-xl font-semibold text-white">
        {title}{' '}
        {isCurrent && (
          <span className="text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-green-900 text-green-300 ms-3">
            Current
          </span>
        )}
      </h3>
      <span className="block mb-2 text-sm md:text-md font-normal leading-none text-gray-300">
        {company} · {employmentType}
      </span>
      <time className="block mb-2 text-xs md:text-sm font-light leading-none text-blue-500">
        {period} | {location}
      </time>
      <ul className="mb-4 text-xs md:text-base font-normal text-gray-400 list-disc">
        {responsibilities.map((item, idx) => (
          <li key={`${item.substring(0, 10)}-${idx}`} className="mb-2 ml-4">
            {item}
          </li>
        ))}
      </ul>
    </motion.li>
  );
};

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

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      id: 'exp-valor',
      title: 'Software Engineer',
      company: 'Valor PayTech',
      employmentType: 'Full-time',
      period: 'December 2024 - Present',
      location: 'Chennai, India - Onsite',
      responsibilities: [
        'Implement feature enhancements based on user feedback, contributing to continuous improvement and increased customer satisfaction',
        'Identify and Resolve software bugs through thorough testing and debugging, ensuring a seamless user experience and maintaining application stability',
        'Collaborated with multiple internal teams to gather requirements and prioritize bug fixes and feature requests, ensuring alignment with overall project objectives',
        'Conduct peer reviews fostering a culture of collaboration and continuous learning within the team.',
      ],
      isCurrent: true,
    },
    {
      id: 'exp-zealeye',
      title: 'Software Developer',
      company: 'Zealeye.AI Tech Solution',
      employmentType: 'Full-time',
      period: 'March 2023 - November 2024',
      location: 'Chennai, India - Onsite',
      responsibilities: [
        'Led a team in backend development, managing the complete lifecycle of backend processes and APIs',
        'Enhanced system performance and reliability by implementing best practices and utilizing AWS cloud services.',
        'Designed infrastructure for real-time data handling in an IoT project, employing modern event-driven architecture.',
        'Provided mentorship and technical support to team members, facilitating the successful delivery of project goals.',
      ],
    },
    {
      id: 'exp-cognizant',
      title: 'Systems Engineer',
      company: 'Cognizant Technology Solutions',
      employmentType: 'Full-time',
      period: 'March 2022 - March 2023',
      location: 'Chennai, India - Remote',
      responsibilities: [
        'Ensured compliance with ITIL protocols in incident, problem, and change management processes.',
        'Communicated effectively with stakeholders to provide updates on incident status, enhancing overall satisfaction.',
        'Improved operational efficiency by optimizing SQL queries, significantly reducing ticket resolution times.',
        'Maintained thorough documentation and closed tickets efficiently, contributing to service level agreement (SLA) compliance.',
      ],
    },
  ];

  const projects = [
    {
      id: 'project-forecasting',
      title: 'New-Delhi Load Forecasting (SIH Hackathon PSIH 16231)',
      description: [
        'Solved unpredictable power demand challenges by reducing blackouts and optimizing grid efficiency.',
        'Engineered a hybrid LSTM-GRU + GNN model achieving 97.3% accuracy on load predictions for a grid serving 10 million residents.',
        'Integrated real time weather, holiday and time-based parameters, reducing blackouts risk by 20%.',
        'Automated anomaly detection and deployed real time predictions dashboards using AWS, Docker, and Flask, cutting manual intervention time by 50%.'
      ],
    },
    {
      id: 'project-bitcoin',
      title: 'Bitcoin Prediction Using Machine Learning Models',
      description: [
        'Predicting the future price of Bitcoin is a challenging and essential task for investors and analysts.',
        'Developed an ensemble model combining LSTM, Bi-Prophet, SARIMA and XGBoost techniques, boosting prediction accuracy by 20%.',
        'Processed and analyzed 7TB of historical data, leading to a 15% improvement in investor returns.',
        'The goal is to Develop an optimal model for highly accurate Bitcoin prediction using the various global trends.'
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
    {
      id: 'project-certificates',
      title: 'Certifications & Achievements',
      description: [
        'Programming & Algorithms: Complete Interview Preparation - Self-Paced (Java & DSA) | GFG (18 Months)',
        'C++ & Data Structures/Algorithms | Coding Ninja (12 Months)',
        'Machine Learning & Data Science: Machine Learning Specialization (NLP) | DeepLearning.ai (6 Months)',
        'Machine Learning | IIT Kharagpur (NPTEL) (4 Months)',
        'IBM Data Science Specialization | IBM (12 Months)',
        'Statistics & Probability: Probability and Statistics | IIT Madras (NPTEL)',
        'Advanced to the final round of the Smart India Hackathon',
        'Selected as one of the top 10 innovative project teams at the intra-university level.',
        'Ranked in the top 30 in Regional Mathematics Olympiad (RMO) Uttar Pradesh',
        'Among 51k+ participants in LeetCode BiWeekly Contest',
        'Among 51k+ participants in Codeforces Round 1004*'
      ],
    },
  ];

  return (
    <section id="experience" className="scroll-mt-[80px]">
      <div>
        <h2 className="relative text-3xl font-bold my-6 text-center">
          <span className="gradient-text md:text-4xl lg:text-5xl xl:text-7xl">
            My Experience
          </span>
        </h2>
      </div>
      <ol className="relative border-s border-gray-700 mx-auto w-auto md:w-3/4 lg:w-2/3">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={exp.id}
            id={exp.id}
            index={index}
            title={exp.title}
            company={exp.company}
            employmentType={exp.employmentType}
            period={exp.period}
            location={exp.location}
            responsibilities={exp.responsibilities}
            isCurrent={exp.isCurrent}
          />
        ))}
      </ol>
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

export default ExperienceSection;
