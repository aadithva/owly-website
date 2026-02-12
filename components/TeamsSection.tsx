'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ZoomParallax } from './ui/ZoomParallax';

const TeamsSection = () => {
  // Images for the zoom parallax effect
  const parallaxImages = [
    { src: '/images/shine/01-woman-popsicle.png', alt: 'Woman with popsicle' },
    { src: '/images/shine/02-billie-pink-product.png', alt: 'Billie product' },
    { src: '/images/shine/03-coca-cola-cans.png', alt: 'Coca-Cola cans' },
    { src: '/images/shine/04-phone-cases.png', alt: 'Phone cases' },
    { src: '/images/shine/05-tfit-skincare-beach.png', alt: 'Skincare product' },
    { src: '/images/shine/07-nike-golf-ball.png', alt: 'Nike golf ball' },
    { src: '/images/shine/08-mcdonalds-happy-meal.png', alt: 'McDonalds Happy Meal' },
  ];

  return (
    <section className="mt-[255px] bg-white relative">
      {/* Zoom Parallax Effect */}
      <ZoomParallax images={parallaxImages} />

      {/* Text Overlay - Fixed position during scroll */}
      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none sticky flex items-center" style={{ top: 0 }}>
        <div className="max-w-7xl mx-auto px-8 md:px-12 w-full">
          <div className="flex justify-end">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-[739px] flex-shrink-0 pointer-events-auto"
            >
              <h2 className="text-[107px] font-semibold leading-[99px] tracking-[-6.4px]">
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
      </div>
    </section>
  );
};

export default TeamsSection;
