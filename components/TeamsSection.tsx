'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TeamsSection = () => {
  return (
    <section className="mt-[255px] bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="flex flex-col lg:flex-row gap-[43px] items-center">
          {/* Left side - Grid Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[663.496px] w-[510.076px] flex-shrink-0"
          >
            {/* Grid of boxes matching exact Figma layout */}
            {/* Top left large box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="absolute left-[15px] top-0 w-[280.438px] h-[143.353px] bg-[#010b10] rounded-[13.317px]"
            />

            {/* Top right small box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute left-[324.42px] top-[47.79px] w-[123.769px] h-[126.119px] bg-[#010b10] rounded-[13.317px]"
            />

            {/* Middle left small box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute left-0 top-[225px] w-[123.769px] h-[114.369px] bg-[#010b10] rounded-[13.317px]"
            />

            {/* Center large horizontal box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute left-[163.84px] top-[202.1px] w-[346.24px] h-[160.586px] bg-[#010b10] rounded-[13.317px]"
            />

            {/* Bottom left large box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute left-[26.75px] top-[390.89px] w-[280.438px] h-[130.036px] bg-[#010b10] rounded-[13.317px]"
            />

            {/* Bottom center small box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute left-[171.67px] top-[549.13px] w-[123.769px] h-[114.369px] bg-[#010b10] rounded-[13.317px]"
            />

            {/* Bottom right tall box (rotated 180deg) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute left-[350.27px] top-[386.97px] w-[123.769px] h-[267.905px]"
            >
              <div className="w-full h-full bg-[#010b10] rounded-[13.317px] rotate-180" />
            </motion.div>
          </motion.div>

          {/* Right side - Text with scroll-based highlighting */}
          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-[739.018px] flex-shrink-0"
          >
            <h2 className="text-[107.295px] font-semibold leading-[98.711px] tracking-[-6.4377px]">
              <motion.span
                initial={{ opacity: 0.45 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.6 }}
                transition={{ duration: 0.6 }}
                className="text-[#0f0f0f]"
              >
                Built for teams that move{' '}
              </motion.span>
              <motion.span
                initial={{ opacity: 0.45 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.6 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[#a5a5a5]"
              >
                fast, test ideas often, and scale the video that performs.
              </motion.span>
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
