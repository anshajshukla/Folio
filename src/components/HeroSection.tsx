"use client";

import type React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TypedText from './TypedText';
import { LinkedInIcon, GitHubIcon, DocumentIcon } from './icons';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[95vh] flex flex-col justify-evenly">
      <div className="grid grid-cols-1 lg:grid-cols-12 my-4">
        {/* Profile Image - Using a placeholder image since we don't have Anshaj's photo */}
        <motion.div
          className="col-span-4 place-self-center mt-4 lg:mt-0 lg:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 relative w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] overflow-hidden mb-6">
            <div className="bg-[#121212] rounded-full w-full h-full flex items-center justify-center text-white text-5xl font-bold">
              AS
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="col-span-8 place-self-center place-items-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-2 lg:mb-4 font-extrabold">
            <span className="gradient-text text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
              Hi <span className="text-white">👋</span> I'm{' '}
            </span>
            <span className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-white">
              <TypedText strings={['Anshaj Shukla', 'a ML Engineer', 'a Developer']} />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-sm lg:text-xl mb-6">
            Passionate developer specializing in Machine Learning and Data Science.
            With experience in Python, TensorFlow, and AWS, I build solutions that solve
            real-world problems through data-driven approaches.
          </p>
          <div className="flex">
            <Link
              href="#contact"
              aria-label="resume"
              className="gradient-bg hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4"
            >
              <span className="flex align-middle gap-2">
                Contact Me
              </span>
            </Link>
            <div className="flex gap-2">
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                aria-label="linkedin"
                className="gradient-bg px-1 py-1 rounded-full"
              >
                <div className="m-2 text-white">
                  <LinkedInIcon />
                </div>
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                aria-label="github"
                className="gradient-bg px-1 py-1 rounded-full"
              >
                <div className="m-2 text-white">
                  <GitHubIcon />
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="container mx-auto px-4 py-8 rounded-md shadow-sm shadow-gray-700 border-[1px] border-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto">
          <div className="flex-1 flex gap-4 items-center justify-center">
            <div className="text-3xl lg:text-5xl font-extrabold">
              <span>97.3</span>%
            </div>
            <div className="text-sm">Load Prediction Accuracy</div>
          </div>
          <div className="flex-1 flex gap-4 items-center justify-center">
            <div className="text-3xl lg:text-5xl font-extrabold">
              <span>20</span>%
            </div>
            <div className="text-sm">Bitcoin Prediction Improvement</div>
          </div>
          <div className="flex-1 flex gap-4 items-center justify-center">
            <div className="text-3xl lg:text-5xl font-extrabold">
              <span>8.87</span>
            </div>
            <div className="text-sm">CGPA</div>
          </div>
          <div className="flex-1 flex gap-4 items-center justify-center">
            <div className="text-3xl lg:text-5xl font-extrabold">
              <span>Top</span>30
            </div>
            <div className="text-sm">Regional Mathematics Olympiad</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
