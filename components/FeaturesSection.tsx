'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState('ideate');

  const features = [
    {
      id: 'ideate',
      title: 'Ideate',
      description: 'Explore campaign ideas, remix existing ads, or clone references from anywhere to start faster.',
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
        <div className="flex flex-col lg:flex-row gap-[84px] items-center">
          {/* Left Column - Features Content */}
          <div className="w-full lg:w-[390px] flex flex-col gap-[63px]">
            {/* Text Container */}
            <div className="flex flex-col gap-[22px]">
              {/* Features Label */}
              <span className="text-[11px] font-light uppercase tracking-[6.05px] text-[#010b10]">
                Features
              </span>

              {/* Heading */}
              <h2 className="text-[44.5px] font-semibold leading-[42px] text-black">
                Create ad videos end-to-end
              </h2>

              {/* Buttons */}
              <div className="flex gap-[12px] items-center">
                <button className="bg-black text-[#fbfbef] font-semibold text-[19px] tracking-[-1.15px] px-[17px] py-[10px] h-[50px] rounded-[16px] hover:bg-neutral-800 transition-colors">
                  Try it free
                </button>
                <button className="border border-[#474747] text-[#1a2a3b] font-semibold text-[19px] tracking-[-1.15px] px-[17px] py-[10px] h-[50px] rounded-[16px] hover:bg-neutral-50 transition-colors">
                  Book a Demo
                </button>
              </div>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-[37px]">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex gap-[16px] items-start cursor-pointer"
                  onClick={() => setActiveFeature(feature.id)}
                >
                  {/* Vertical Line */}
                  <div className="flex items-center justify-center w-0 flex-shrink-0">
                    <div
                      className={`w-[2px] bg-black transition-all duration-300 ${
                        activeFeature === feature.id ? 'h-[106px]' : 'h-[33px]'
                      }`}
                    />
                  </div>

                  {/* Feature Content */}
                  <div className="flex flex-col gap-[16px]">
                    <span
                      className={`text-[28px] tracking-[-1.66px] text-[#010b10] transition-all duration-300 ${
                        activeFeature === feature.id ? 'font-bold' : 'font-light'
                      }`}
                    >
                      {feature.title}
                    </span>

                    {activeFeature === feature.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[16px] font-light leading-[22px] text-[#444] w-[374px]"
                      >
                        {feature.description}
                      </motion.p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Feature Background Image */}
          <div className="w-full lg:w-[634px] h-[571px] relative rounded-[23px] overflow-hidden flex-shrink-0">
            <Image
              src="/images/features/feature-background.png"
              alt="Feature background"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
