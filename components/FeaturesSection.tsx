'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiChevronDown, HiChevronRight } from 'react-icons/hi';

const FeaturesSection = () => {
  const [expandedFeature, setExpandedFeature] = useState('ideate');

  const features = [
    {
      id: 'ideate',
      title: 'Ideate',
      description: 'Kick-off creative brainstorming and ad concepting with your team, performance data and AI-assistance.',
    },
    {
      id: 'create',
      title: 'Create',
      description: 'Build engaging ad videos with our intuitive creation tools.',
    },
    {
      id: 'iterate',
      title: 'Iterate',
      description: 'Refine and improve your videos based on feedback and performance.',
    },
    {
      id: 'publish',
      title: 'Publish',
      description: 'Launch your ad campaigns across multiple platforms seamlessly.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="flex flex-col lg:flex-row gap-[84px] items-start">
          {/* Left Column - Features Text */}
          <div className="w-full lg:w-[390px]">
            {/* Features Label */}
            <div className="mb-6">
              <span className="text-[12px] font-semibold uppercase tracking-[6.0494px] text-neutral-500">
                FEATURES
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[44.535px] font-bold leading-tight text-black mb-8">
              Create ad videos end-to-end
            </h2>

            {/* Buttons */}
            <div className="flex gap-4 mb-[63px]">
              <button className="px-6 py-2.5 font-medium text-white bg-black rounded-full hover:bg-neutral-800 transition-colors duration-200">
                Try it free
              </button>
              <button className="px-6 py-2.5 font-medium text-black border-2 border-black rounded-full hover:bg-neutral-50 transition-colors duration-200">
                Book a Demo
              </button>
            </div>

            {/* Feature List */}
            <div className="space-y-[37px]">
              {features.map((feature) => (
                <div key={feature.id} className="border-b border-neutral-200 pb-6">
                  <button
                    onClick={() =>
                      setExpandedFeature(expandedFeature === feature.id ? '' : feature.id)
                    }
                    className="flex items-center justify-between w-full text-left group"
                  >
                    <span className="text-[20px] font-semibold text-black group-hover:text-neutral-700 transition-colors">
                      {feature.title}
                    </span>
                    {expandedFeature === feature.id ? (
                      <HiChevronDown className="w-5 h-5 text-black" />
                    ) : (
                      <HiChevronRight className="w-5 h-5 text-neutral-400" />
                    )}
                  </button>

                  {expandedFeature === feature.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3"
                    >
                      <p className="text-[16px] leading-[23px] text-neutral-600">
                        {feature.description}
                      </p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Screenshot */}
          <div className="w-full lg:w-[634px] lg:h-[571px] relative">
            <div className="relative w-full h-full rounded-[23px] overflow-hidden bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50 flex items-center justify-center">
              {/* Placeholder for product screenshot */}
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-black/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-black/30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-neutral-400 text-sm">Product Screenshot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
