"use client";

import type React from 'react';

const CertificationsSection: React.FC = () => {
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
    'Among 51k+ participants in LeetCode BiWeekly Contest',
    'Among 51k+ participants in Codeforces Round 1004*'
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
      <ul className="relative border-s border-gray-700 mx-auto w-auto md:w-3/4 lg:w-2/3 text-gray-400 list-disc px-6 py-4">
        {certifications.map((cert, idx) => (
          <li key={idx} className="mb-2 ml-4">
            {cert}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CertificationsSection;
