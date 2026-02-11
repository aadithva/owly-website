'use client';
import React from 'react';
import Image from 'next/image';
import { HiCheck } from 'react-icons/hi';
import { motion } from 'framer-motion';
import VideoTypesSection from '@/components/VideoTypesSection';
import FeaturesSection from '@/components/FeaturesSection';
import InteractiveProduct from '@/components/InteractiveProduct';
import TeamsSection from '@/components/TeamsSection';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1442px] mx-auto px-4">
      {/* Hero Section with Image Background */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[792px] overflow-hidden rounded-[14px] max-w-[1401px] mx-auto"
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden rounded-[14px]">
          <Image
            src="/images/hero/hero-background.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-transparent h-[228px]"></div>
        </div>

        {/* Content */}
        <div className="relative px-[38px] py-[46px] flex justify-between items-start">
          {/* Left side - Main headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-[554px]"
          >
            <h1 className="text-[68.6px] font-semibold text-white leading-[63px] tracking-[-4.116px]">
              Re-invent your Ad workflow
            </h1>
          </motion.div>

          {/* Right side - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-[374px]"
          >
            <p className="text-white text-[16px] leading-[25.4px] text-right">
              Owly helps performance and brand teams plan, create, iterate, and launch ad videos
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Teams Section */}
      <TeamsSection />

      {/* Try it yourself Section */}
      <div className="mt-[255px]">
        <InteractiveProduct />
      </div>

      {/* Video Formats Text Section */}
      <section className="mt-[255px] py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="flex flex-col gap-[35px] items-center text-center">
            <h2 className="text-[111.325px] font-semibold leading-[102.419px] tracking-[-6.6795px] text-[#0a0a0a]">
              Create every kind of video your marketing needs.
            </h2>
            <p className="text-[31.439px] leading-[49.814px] text-black">
              One workflow. Multiple video formats.
            </p>
          </div>
        </div>
      </section>

      {/* Video Types Gallery Section */}
      <VideoTypesSection />

      {/* Features Section */}
      <div className="mt-[255px]">
        <FeaturesSection />
      </div>

      {/* Your new secret weapon Section */}
      <section className="mt-[255px] py-20 bg-white flex items-center">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Icons/illustrations */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Your new secret<br />
                weapon for Video Ads
              </h2>

              {/* Icon placeholders */}
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-neutral-100 rounded-2xl h-24 flex items-center justify-center">
                  <div className="w-12 h-12 bg-neutral-300 rounded-lg"></div>
                </div>
                <div className="bg-neutral-100 rounded-2xl h-24 flex items-center justify-center">
                  <div className="w-12 h-12 bg-neutral-300 rounded-lg"></div>
                </div>
                <div className="bg-neutral-100 rounded-2xl h-24 flex items-center justify-center">
                  <div className="w-12 h-12 bg-neutral-300 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Right side - Dark interface mockup */}
            <div className="bg-neutral-900 rounded-3xl p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl"></div>
                  <div className="flex-1">
                    <div className="h-3 bg-neutral-700 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-neutral-700 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="bg-neutral-800 rounded-2xl p-6 space-y-3">
                  <div className="h-4 bg-neutral-700 rounded w-full"></div>
                  <div className="h-4 bg-neutral-700 rounded w-5/6"></div>
                  <div className="h-4 bg-neutral-700 rounded w-4/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still not convinced Section */}
      <section className="mt-[255px] py-20 bg-neutral-50 flex items-center">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Still not convinced
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left column */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center">
                    <HiCheck className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fast iteration cycles</h3>
                  <p className="text-neutral-600">
                    Move from concept to final video in minutes. Test multiple variations without the traditional production bottlenecks.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center">
                    <HiCheck className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Brand consistency</h3>
                  <p className="text-neutral-600">
                    Maintain your brand identity across all video content with built-in templates and guidelines.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center">
                    <HiCheck className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Data-driven decisions</h3>
                  <p className="text-neutral-600">
                    Track performance metrics and optimize based on real data. Know what works before scaling spend.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center">
                    <HiCheck className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Team collaboration</h3>
                  <p className="text-neutral-600">
                    Work together seamlessly with real-time collaboration tools designed for creative teams.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid - Want Your Business to Shine */}
      <section className="mt-[255px] py-20 bg-white flex items-center">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {/* Image placeholders - colorful grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-2 row-span-2 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl h-80 flex items-center justify-center overflow-hidden"
            >
              <div className="text-6xl">🐕</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-pink-200 to-pink-400 rounded-3xl h-40"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl h-40 flex items-center justify-center overflow-hidden"
            >
              <div className="text-4xl">🌿</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-red-400 to-rose-600 rounded-3xl h-36"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-lime-300 to-green-500 rounded-3xl h-36 flex items-center justify-center overflow-hidden"
            >
              <div className="text-4xl">🎾</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="col-span-2 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-3xl h-48"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-br from-purple-200 to-purple-400 rounded-3xl h-48"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-yellow-300 to-amber-400 rounded-3xl h-48"
            ></motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want Your Business to<br />
              Shine?
            </h2>
            <button className="px-8 py-4 bg-neutral-900 text-white rounded-full font-semibold text-lg hover:bg-neutral-800 transition-colors">
              Book a Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Get in touch today Section */}
      <section className="mt-[255px] py-20 bg-gradient-to-br from-emerald-100 via-teal-50 to-white flex items-center">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Form mockup */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white shadow-xl"
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">Name</label>
                  <div className="h-12 bg-white rounded-xl border border-neutral-200"></div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">Email</label>
                  <div className="h-12 bg-white rounded-xl border border-neutral-200"></div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">Message</label>
                  <div className="h-32 bg-white rounded-xl border border-neutral-200"></div>
                </div>
                <button className="w-full py-4 bg-neutral-900 text-white rounded-xl font-semibold hover:bg-neutral-800 transition-colors">
                  Send Message
                </button>
              </div>
            </motion.div>

            {/* Right side - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get in touch<br />
                today
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Ready to transform your ad workflow? Let's talk about how Owly can help your team create better video ads, faster.
              </p>
              <div className="space-y-4 text-neutral-600">
                <p>✓ Free consultation</p>
                <p>✓ Custom demo tailored to your needs</p>
                <p>✓ No commitment required</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
