'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselImage } from './carousel';

const VideoTypesSection = () => {
  const [activeTab, setActiveTab] = useState('UGC');

  const tabs = [
    { id: 'brand-film', label: 'Brand film' },
    { id: 'UGC', label: 'UGC' },
    { id: 'product-videos', label: 'Product videos' },
    { id: 'short-ads', label: 'Short Ads' },
  ];

  // Carousel images data
  const carouselImages: CarouselImage[] = [
    {
      id: 1,
      src: '/images/gallery/kayak-carousel.png',
      alt: 'Creator-style video showing person kayaking in dreamy landscape with pink and purple gradient',
      width: 415,
      height: 622,
    },
    {
      id: 2,
      src: '/images/gallery/kayak-carousel.png',
      alt: 'Brand video example with kayaking scene',
      width: 365,
      height: 572,
    },
    {
      id: 3,
      src: '/images/gallery/kayak-carousel.png',
      alt: 'Product video style with outdoor adventure',
      width: 323,
      height: 516,
    },
    {
      id: 4,
      src: '/images/gallery/kayak-carousel.png',
      alt: 'UGC-style video content with authentic feel',
      width: 360,
      height: 572,
    },
    {
      id: 5,
      src: '/images/gallery/kayak-carousel.png',
      alt: 'Short ad format with engaging visual',
      width: 351,
      height: 526,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="flex flex-col gap-[54px] items-center">
          {/* Tab Navigation and Description */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[254px] items-start lg:items-end w-full justify-between">
            {/* Tabs */}
            <div className="flex gap-[40px] items-center flex-wrap">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`h-[43px] px-[10px] rounded-[12px] transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-black text-white font-semibold'
                      : 'bg-white text-[#0a0a0a] font-medium border-2 border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  <span className="text-[20px] tracking-[-1px] leading-[21.327px]">
                    {tab.label}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Description */}
            <div className="max-w-[359px]">
              <p className="text-[16px] leading-[23px] text-black">
                Creator-style videos built to feel native, authentic, and high-converting.
              </p>
            </div>
          </div>

          {/* Beautiful Focus Carousel */}
          <div className="w-full group">
            <Carousel
              images={carouselImages}
              initialIndex={2}
              config={{
                infinite: true,
                showDots: true,
                showArrows: true,
                showCounter: true,
                enableKeyboard: true,
                enableTouch: true,
                enableDrag: true,
                enableShadow: true,
                enableBlur: false,
                autoPlay: false,
                pauseOnHover: true,
                autoPlayInterval: 5000,
                transitionDuration: 500,
                springConfig: {
                  stiffness: 300,
                  damping: 30,
                },
                desktop: {
                  focusWidth: 415,
                  visibleCount: 5,
                },
                tablet: {
                  focusWidth: 360,
                  visibleCount: 3,
                },
                mobile: {
                  focusWidth: 280,
                  visibleCount: 3,
                },
              }}
              onSlideChange={(index) => {
                console.log('Slide changed to:', index);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTypesSection;
