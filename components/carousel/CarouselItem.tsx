'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CarouselItemProps, getCarouselScale } from './types';

/**
 * CarouselItem Component
 *
 * Renders an individual carousel image with dynamic scaling,
 * opacity, and positioning based on its distance from focus.
 *
 * Features:
 * - Smooth scale transitions with spring physics
 * - Dynamic opacity based on position
 * - Optional blur effect for non-focus items
 * - Shadow effect on focus item
 * - Click interaction to bring item to focus
 * - Accessibility with proper ARIA labels
 */
const CarouselItem: React.FC<CarouselItemProps> = ({
  image,
  position,
  focusIndex,
  totalItems,
  onClick,
  config,
}) => {
  // Calculate visual properties based on position
  const { scale, opacity, zIndex, blur } = getCarouselScale(position);

  // Determine if this item is in focus
  const isFocus = position === 0;

  // Responsive width calculation
  const getWidth = () => {
    if (typeof window === 'undefined') return config.desktop?.focusWidth || 600;

    if (window.innerWidth < 768) {
      return config.mobile?.focusWidth || 320;
    } else if (window.innerWidth < 1024) {
      return config.tablet?.focusWidth || 400;
    }
    return config.desktop?.focusWidth || 600;
  };

  // Calculate actual dimensions based on scale
  const baseWidth = getWidth();
  const baseHeight = baseWidth * 1.4; // 1.4:1 aspect ratio
  const actualWidth = baseWidth * scale;
  const actualHeight = baseHeight * scale;

  return (
    <motion.div
      className={`
        absolute left-1/2 top-1/2 cursor-pointer select-none
        rounded-[26.468px] overflow-hidden
        ${isFocus && config.enableShadow ? 'shadow-2xl' : 'shadow-md'}
        transition-shadow duration-300
      `}
      style={{
        width: actualWidth,
        height: actualHeight,
        zIndex,
      }}
      initial={{
        x: '-50%',
        y: '-50%',
        scale: 0.5,
        opacity: 0,
      }}
      animate={{
        x: `calc(-50% + ${position * (baseWidth * 0.75)}px)`,
        y: '-50%',
        scale,
        opacity,
      }}
      transition={{
        type: 'spring',
        stiffness: config.springConfig?.stiffness || 300,
        damping: config.springConfig?.damping || 30,
        duration: (config.transitionDuration || 500) / 1000,
      }}
      whileHover={
        !isFocus
          ? {
              scale: scale * 1.05,
              opacity: opacity * 1.2,
            }
          : {}
      }
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`${image.alt}, image ${focusIndex + 1} of ${totalItems}${
        isFocus ? ', currently focused' : ', click to focus'
      }`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Image Container */}
      <div
        className="relative w-full h-full"
        style={{
          filter: config.enableBlur && !isFocus ? `blur(${blur}px)` : 'none',
          transition: 'filter 0.3s ease-in-out',
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes={`${actualWidth}px`}
          priority={isFocus}
          quality={isFocus ? 90 : 70}
          loading={Math.abs(position) <= 2 ? 'eager' : 'lazy'}
        />

        {/* Overlay gradient for non-focus items */}
        {!isFocus && (
          <div
            className="absolute inset-0 bg-black transition-opacity duration-300"
            style={{ opacity: (1 - opacity) * 0.3 }}
          />
        )}
      </div>

      {/* Focus indicator ring (optional visual enhancement) */}
      {isFocus && (
        <div className="absolute inset-0 ring-4 ring-white/20 rounded-[26.468px] pointer-events-none" />
      )}
    </motion.div>
  );
};

export default CarouselItem;
