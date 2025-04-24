// @ts-nocheck
"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Animation variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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
          className="lg:w-[60%] md:text-[1.35rem] text-justify space-y-4"
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.p variants={item}>
            I specialize in{' '}
            <span className="gradient-text-skills font-extrabold md:text-2xl hover:scale-110 transition-transform">
              Machine Learning
            </span>{' '}
            and{' '}
            <span className="gradient-text-skills font-extrabold md:text-2xl hover:scale-110 transition-transform">
              Data Science
            </span>{' '}
            with expertise in{' '}
            <span className="gradient-text-skills font-extrabold md:text-2xl hover:scale-110 transition-transform">
              Python
            </span>{', '}
            <span className="gradient-text-skills font-extrabold md:text-2xl hover:scale-110 transition-transform">
              TensorFlow
            </span>{', '}
            <span className="gradient-text-skills font-extrabold md:text-2xl hover:scale-110 transition-transform">
              AWS
            </span>{', and '}
            <span className="gradient-text-skills font-extrabold md:text-2xl hover:scale-110 transition-transform">
              Docker
            </span>{'.'}
          </motion.p>

          <motion.p variants={item}>
            My core skills include{' '}
            <span className="gradient-text-skills font-extrabold md:text-2xl hover:scale-110 transition-transform">
              Data Structures & Algorithms
            </span>{', '}
            <span className="gradient-text-skills font-extrabold md:text-2xl hover:scale-110 transition-transform">
              Probability & Statistics
            </span>{', and '}
            <span className="gradient-text-skills font-extrabold md:text-2xl hover:scale-110 transition-transform">
              OOPS
            </span>{'.'}
          </motion.p>

          <motion.p variants={item}>
            I am educated at{' '}
            <span className="gradient-text-skills font-extrabold md:text-2xl hover:scale-110 transition-transform">
              Lovely Professional University
            </span>{' '}
            with a{' '}
            <span className="gradient-text-skills font-extrabold md:text-2xl hover:scale-110 transition-transform">
              Bachelor of Technology
            </span>{' '}
            in Computer Science and Engineering, where I achieved a{' '}
            <span className="gradient-text-skills font-extrabold md:text-2xl hover:scale-110 transition-transform">
              CGPA of 8.87
            </span>{'.'}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
