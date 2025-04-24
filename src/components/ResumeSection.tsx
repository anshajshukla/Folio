// @ts-nocheck
"use client";

import React from 'react';
import Link from 'next/link';

const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="scroll-mt-[80px] py-8">
      <div className="text-center mb-4">
        <h2 className="gradient-text text-3xl font-bold">My Resume</h2> 
      </div>
      <div className="flex justify-center mb-8">
        <Link href="/resume" target="_blank" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          View Full Resume
        </Link>
      </div>
      <div className="mt-8">
        <iframe src="/resume.pdf" width="100%" height="600px" className="border border-gray-300" />
      </div>
    </section>
  );
};

export default ResumeSection;
