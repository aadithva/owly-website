'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ZoomParallax } from './ui/ZoomParallax';

const TeamsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

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

  const text = "Built for teams that move fast, test ideas often, and scale the video that performs.";
  const words = text.split(' ');

  return (
    <section ref={containerRef} className="mt-[255px] bg-white relative z-0 pb-[255px]">
      {/* Zoom Parallax Effect */}
      <ZoomParallax images={parallaxImages} />

      {/* Text Overlay - Fixed position during scroll */}
      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none sticky flex items-center justify-center z-10 bg-white" style={{ top: 0 }}>
        <div className="max-w-[900px] mx-auto px-8 md:px-12 w-full">
          <div className="flex justify-center">
            <h2 className="text-[107px] font-semibold leading-[99px] tracking-[-6.4px] text-center">
              {words.map((word, i) => {
                // Calculate the scroll range for each word - tighter range for faster response
                const start = i / words.length;
                const end = (i + 1) / words.length;

                return (
                  <Word
                    key={i}
                    word={word}
                    progress={scrollYProgress}
                    range={[start * 0.35 + 0.15, end * 0.35 + 0.15]}
                  />
                );
              })}
            </h2>
          </div>
        </div>
      </div>

    </section>
  );
};

interface WordProps {
  word: string;
  progress: any;
  range: [number, number];
}

const Word = ({ word, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0.3, 1]);
  const color = useTransform(
    progress,
    range,
    ['#a5a5a5', '#0f0f0f']
  );

  return (
    <motion.span
      style={{ color, opacity }}
      className="inline-block mr-[0.25em]"
    >
      {word}
    </motion.span>
  );
};

export default TeamsSection;
