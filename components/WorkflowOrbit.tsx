'use client';
import React, { useEffect, useState, useId } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface WorkflowStage {
  label: string;
  icon?: React.ReactNode;
}

// Circular Gradient Tracing Component
const CircularGradientTracing: React.FC<{
  radius: number;
  strokeWidth?: number;
  gradientColors?: [string, string, string];
  animationDuration?: number;
}> = ({
  radius,
  strokeWidth = 2,
  gradientColors = ["#2EB9DF", "#9E00FF", "#2EB9DF"],
  animationDuration = 4,
}) => {
    const id = useId();
    const size = radius * 2 + strokeWidth * 2;
    const center = size / 2;
    const gradientId = `circular-gradient-${id.replace(/:/g, '')}`;

    // Create circular path
    const circlePath = `M ${center}, ${strokeWidth}
    A ${radius}, ${radius} 0 1 1 ${center - 0.01}, ${strokeWidth}`;

    return (
      <div className="absolute" style={{ width: size, height: size, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill="none"
          style={{ transform: 'rotate(-90deg)' }}
        >
          {/* Base circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke="#333"
            strokeOpacity="0.3"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Animated gradient circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke={`url(#${gradientId})`}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
          />
          <defs>
            <motion.linearGradient
              id={gradientId}
              gradientUnits="userSpaceOnUse"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: animationDuration,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ originX: '50%', originY: '50%' }}
            >
              <stop offset="0%" stopColor={gradientColors[0]} stopOpacity="0" />
              <stop offset="30%" stopColor={gradientColors[0]} />
              <stop offset="50%" stopColor={gradientColors[1]} />
              <stop offset="70%" stopColor={gradientColors[2]} />
              <stop offset="100%" stopColor={gradientColors[2]} stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
        {/* Rotating gradient overlay using conic gradient */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from 0deg, transparent 0%, ${gradientColors[0]} 10%, ${gradientColors[1]} 30%, ${gradientColors[2]} 50%, transparent 60%, transparent 100%)`,
            mask: `radial-gradient(circle at center, transparent ${radius - strokeWidth}px, black ${radius - strokeWidth}px, black ${radius + strokeWidth}px, transparent ${radius + strokeWidth}px)`,
            WebkitMask: `radial-gradient(circle at center, transparent ${radius - strokeWidth}px, black ${radius - strokeWidth}px, black ${radius + strokeWidth}px, transparent ${radius + strokeWidth}px)`,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: animationDuration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    );
  };

export const WorkflowOrbit: React.FC = () => {
  const stages: WorkflowStage[] = [
    { label: "Production" },
    { label: "Iteration" },
    { label: "Analyse" },
    { label: "Ideation" },
  ];

  const radius = 150;

  return (
    <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
      <style jsx>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-counter-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .orbit-container {
          animation: orbit-spin 30s linear infinite;
          will-change: transform;
        }
        .orbit-label {
          animation: orbit-counter-spin 30s linear infinite;
          will-change: transform;
        }
      `}</style>

      {/* Animated Gradient Circle */}
      <CircularGradientTracing
        radius={radius + 10}
        strokeWidth={0.75}
        gradientColors={["#ffffff", "#ffffff", "#ffffff"]}
        animationDuration={6}
      />

      {/* Inner Animated Gradient Circle */}
      <CircularGradientTracing
        radius={radius * 0.6}
        strokeWidth={0.5}
        gradientColors={["#666666", "#666666", "#666666"]}
        animationDuration={4}
      />

      {/* Center Owly Icon */}
      <div className="relative z-10 flex items-center justify-center w-[85px] h-[85px]">
        <Image
          src="/images/secret-weapon/owl-icon-only.svg"
          alt="Owly"
          width={50}
          height={64}
          className="object-contain"
        />
      </div>

      {/* Rotating workflow stages - single CSS rotation */}
      <div className="orbit-container absolute inset-0">
        {stages.map((stage, index) => {
          const angle = (index / stages.length) * 360 - 90;
          const rad = (angle * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          return (
            <div
              key={index}
              className="absolute flex items-center justify-center"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <div className="orbit-label px-[10px] py-[7px] rounded-[8px] bg-[#1e2025]">
                <span className="text-[13px] font-semibold text-white tracking-[-0.58px] whitespace-nowrap">
                  {stage.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkflowOrbit;
