/**
 * Carousel Component Types and Interfaces
 *
 * Defines the structure and configuration for a fully-featured,
 * accessible, and responsive image carousel with focus scaling.
 */

export interface CarouselImage {
  id: string | number;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface CarouselConfig {
  // Auto-play settings
  autoPlay?: boolean;
  autoPlayInterval?: number; // milliseconds
  pauseOnHover?: boolean;

  // Animation settings
  transitionDuration?: number; // milliseconds
  springConfig?: {
    stiffness: number;
    damping: number;
  };

  // Responsive settings
  desktop?: {
    focusWidth: number;
    visibleCount: number; // How many images visible at once
  };
  tablet?: {
    focusWidth: number;
    visibleCount: number;
  };
  mobile?: {
    focusWidth: number;
    visibleCount: number;
  };

  // Visual settings
  showDots?: boolean;
  showArrows?: boolean;
  showCounter?: boolean;
  enableBlur?: boolean; // Blur non-focus images
  enableShadow?: boolean; // Shadow on focus image

  // Interaction settings
  enableKeyboard?: boolean;
  enableTouch?: boolean;
  enableDrag?: boolean;
  infinite?: boolean; // Infinite scroll/loop
}

export interface CarouselItemProps {
  image: CarouselImage;
  position: number; // Position relative to focus (0 = focus, -1 = left, +1 = right)
  focusIndex: number;
  totalItems: number;
  onClick: () => void;
  config: CarouselConfig;
}

export interface CarouselProps {
  images: CarouselImage[];
  initialIndex?: number;
  config?: Partial<CarouselConfig>;
  className?: string;
  onSlideChange?: (index: number) => void;
}

export interface CarouselScale {
  scale: number;
  opacity: number;
  zIndex: number;
  blur: number; // pixels
}

/**
 * Default configuration for the carousel
 * Can be overridden via props
 */
export const DEFAULT_CAROUSEL_CONFIG: CarouselConfig = {
  autoPlay: false,
  autoPlayInterval: 5000,
  pauseOnHover: true,

  transitionDuration: 500,
  springConfig: {
    stiffness: 300,
    damping: 30,
  },

  desktop: {
    focusWidth: 600,
    visibleCount: 5,
  },
  tablet: {
    focusWidth: 400,
    visibleCount: 3,
  },
  mobile: {
    focusWidth: 320,
    visibleCount: 3,
  },

  showDots: true,
  showArrows: true,
  showCounter: true,
  enableBlur: false,
  enableShadow: true,

  enableKeyboard: true,
  enableTouch: true,
  enableDrag: true,
  infinite: true,
};

/**
 * Calculate scale, opacity, z-index, and blur based on position
 * Position 0 = focus, ±1 = adjacent, ±2 = outer
 *
 * @param position - Distance from focus position
 * @returns CarouselScale object with visual properties
 */
export function getCarouselScale(position: number): CarouselScale {
  const absPosition = Math.abs(position);

  // Scale calculation
  // Focus (0): 1.0, Adjacent (±1): 0.7, Outer (±2+): 0.5
  let scale: number;
  if (absPosition === 0) {
    scale = 1.0;
  } else if (absPosition === 1) {
    scale = 0.7;
  } else {
    scale = 0.5;
  }

  // Opacity calculation
  // Focus (0): 1.0, Adjacent (±1): 0.6, Outer (±2+): 0.3
  let opacity: number;
  if (absPosition === 0) {
    opacity = 1.0;
  } else if (absPosition === 1) {
    opacity = 0.6;
  } else {
    opacity = 0.3;
  }

  // Z-index calculation (focus is highest)
  const zIndex = 10 - absPosition;

  // Blur calculation (focus has no blur)
  const blur = absPosition === 0 ? 0 : absPosition * 2;

  return { scale, opacity, zIndex, blur };
}
