"use client";

import type React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="text-white scroll-mt-[80px] min-h-[60vh]">
      <div>
        <h2 className="relative text-3xl font-bold my-6 text-center">
          <span className="gradient-text md:text-4xl lg:text-5xl xl:text-7xl">
            About Me
          </span>
        </h2>
      </div>

      <div className="flex flex-col-reverse justify-center gap-6 lg:flex-row">
        <motion.div
          ref={ref}
          className="lg:w-[60%] md:text-[1.35rem] text-justify"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            I specialize in{' '}
            <span className="gradient-text-skills font-extrabold md:text-2xl">
              Machine Learning
            </span>{' '}
            and{' '}
            <span className="gradient-text-skills font-extrabold md:text-2xl">
              Data Science
            </span>{' '}
            with expertise in{' '}
            <span className="gradient-text-skills font-extrabold md:text-2xl">
              Python
            </span>{', '}
            <span className="gradient-text-skills font-extrabold md:text-2xl">
              TensorFlow
            </span>{', '}
            <span className="gradient-text-skills font-extrabold md:text-2xl">
              AWS
            </span>{', and '}
            <span className="gradient-text-skills font-extrabold md:text-2xl">
              Docker
            </span>{'. '}
            I work on{' '}
            <span className="gradient-text-skills font-extrabold md:text-2xl">
              Time Series Analysis
            </span>{', '}
            <span className="gradient-text-skills font-extrabold md:text-2xl">
              GRU
            </span>{', '}
            <span className="gradient-text-skills font-extrabold md:text-2xl">
              GNN
            </span>{', and '}
            <span className="gradient-text-skills font-extrabold md:text-2xl">
              Transformers
            </span>{' '}
            models to solve complex problems.
          </div>

          <div className="mb-4">
            My core skills include{' '}
            <span className="gradient-text-skills font-extrabold md:text-2xl">
              Data Structures & Algorithms
            </span>{', '}
            <span className="gradient-text-skills font-extrabold md:text-2xl">
              Probability & Statistics
            </span>{', and '}
            <span className="gradient-text-skills font-extrabold md:text-2xl">
              OOPS
            </span>{'. '}
            I excel at{' '}
            <span className="gradient-text-skills font-extrabold md:text-2xl">
              Problem-Solving
            </span>{', '}
            <span className="gradient-text-skills font-extrabold md:text-2xl">
              Team Collaboration
            </span>{', and '}
            <span className="gradient-text-skills font-extrabold md:text-2xl">
              Project Management
            </span>{'.'}
          </div>

          <div>
            I am educated at{' '}
            <span className="gradient-text-skills font-extrabold md:text-2xl">
              Lovely Professional University
            </span>{' '}
            with a{' '}
            <span className="gradient-text-skills font-extrabold md:text-2xl">
              Bachelor of Technology
            </span>{' '}
            in Computer Science and Engineering, where I achieved a{' '}
            <span className="gradient-text-skills font-extrabold md:text-2xl">
              CGPA of 8.87
            </span>{'.'}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
