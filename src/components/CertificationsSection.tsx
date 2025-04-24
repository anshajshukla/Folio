"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card3D from './Card3D';

export default function CertificationsSection() {
  const certifications = [
    'Programming & Algorithms: Complete Interview Preparation - Self-Paced (Java & DSA) | GFG (18 Months)',
    'C++ & Data Structures/Algorithms | Coding Ninja (12 Months)',
    'Machine Learning & Data Science: Machine Learning Specialization (NLP) | DeepLearning.ai (6 Months)',
    'Machine Learning | IIT Kharagpur (NPTEL) (4 Months)',
    'IBM Data Science Specialization | IBM (12 Months)',
    'Statistics & Probability: Probability and Statistics | IIT Madras (NPTEL)',
    'Advanced to the final round of the Smart India Hackathon',
    'Selected as one of the top 10 innovative project teams at the intra-university level.',
    'Ranked in the top 30 in Regional Mathematics Olympiad (RMO) Uttar Pradesh',
  ];

  return (
    <section id="certifications" className="scroll-mt-[80px]">
      <div>
        <h2 className="relative text-3xl font-bold my-6 text-center">
          <span className="gradient-text md:text-4xl lg:text-5xl xl:text-7xl">
            Certifications & Achievements
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto w-auto md:w-3/4 lg:w-2/3 px-6 py-4">
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
              <Card3D className="h-full p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg border border-slate-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                <p className="text-gray-300">{cert}</p>
              </Card3D>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
