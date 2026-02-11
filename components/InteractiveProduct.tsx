'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiPlus, HiMicrophone } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';

const InteractiveProduct = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInteraction = () => {
    // This will trigger the sign-in flow
    // For now, we'll redirect to a sign-in page or show a modal
    // You can customize this to connect to your actual auth flow
    window.location.href = '/signin';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[68.6px] font-semibold leading-[63.111px] tracking-[-4.116px] text-[#0a0a0a] text-center mb-[68px]"
        >
          Try it yourself.
        </motion.h2>

        {/* Interactive Product Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black rounded-[11.87px] p-[7.913px] flex gap-[2.967px] max-w-[1396px] mx-auto h-[875px]"
        >
          {/* Sidebar */}
          <div className="bg-[#040404] border border-[rgba(64,64,64,0.15)] rounded-[11.589px] w-[263.659px] h-[859.547px] p-[5.795px] shadow-[0px_7.726px_30.905px_0px_rgba(0,0,0,0.3)]">
            <div className="flex flex-col justify-between h-full">
              {/* Top Section */}
              <div className="space-y-[22.213px] py-[12.555px]">
                {/* Logo */}
                <div className="flex items-center justify-between px-[10px]">
                  <div className="h-[29.329px] w-[70.502px] relative">
                    <Image
                      src="/images/interactive-product/owly-studio-logo.png"
                      alt="Owly Studio"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <button className="text-gray-500 hover:text-gray-300 transition-colors">
                    <svg className="w-[17px] h-[17px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>

                {/* Menu Items */}
                <div className="space-y-[5.795px]">
                  <div className="bg-[#111] rounded-[7.726px] px-[9.658px] py-[11.589px] flex items-center gap-[9.658px]">
                    <div className="w-[23.179px] h-[23.179px] bg-[rgba(255,255,255,0.05)] rounded-[3.863px] flex items-center justify-center">
                      <svg className="w-[13.521px] h-[13.521px] text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <span className="text-[#a8a8a8] text-[13.52px] font-medium">Create New Video</span>
                  </div>
                  <div className="rounded-[7.726px] px-[9.658px] py-[5.795px] flex items-center gap-[9.658px] hover:bg-[rgba(255,255,255,0.03)] transition-colors cursor-pointer">
                    <div className="w-[23.179px] h-[23.179px] rounded-[3.863px] flex items-center justify-center">
                      <svg className="w-[15.453px] h-[15.453px] text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <span className="text-[#a8a8a8] text-[13.52px] font-medium">Video Library</span>
                  </div>
                  <div className="rounded-[7.726px] px-[9.658px] py-[5.795px] flex items-center gap-[9.658px] hover:bg-[rgba(255,255,255,0.03)] transition-colors cursor-pointer">
                    <div className="w-[23.179px] h-[23.179px] rounded-[3.863px] flex items-center justify-center">
                      <svg className="w-[21.247px] h-[21.247px] text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <span className="text-[#a8a8a8] text-[13.52px] font-medium">Explores</span>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="space-y-[5.795px]">
                {/* Credits */}
                <div className="bg-[#131313] rounded-[8.692px] p-[6.76px] space-y-[4.829px]">
                  <div className="flex items-center justify-between">
                    <div className="w-[51.301px] h-[46.255px] relative">
                      <Image
                        src="/images/interactive-product/credits-icon.png"
                        alt="Credits"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 ml-[10px] space-y-[12.555px]">
                      <p className="text-[#a6a6a6] text-[13.521px]">45 % Credit left</p>
                      <div className="h-[3.863px] bg-[#2a2a2a] rounded-full overflow-hidden">
                        <div className="h-full w-[45%] bg-gradient-to-r from-green-400 to-green-600 rounded-full" />
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-[#050505] rounded-[7.726px] px-[9.658px] py-[15.453px] text-[#d9d9d9] text-[13.521px] font-medium hover:bg-[#0a0a0a] transition-colors">
                    Upgrade Now
                  </button>
                </div>

                {/* User Info */}
                <div className="bg-[#131313] rounded-[7.726px] p-[11.589px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[5.795px]">
                      <div className="w-[34.478px] h-[35.063px] relative rounded-full overflow-hidden">
                        <Image
                          src="/images/interactive-product/user-avatar.png"
                          alt="User"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-white text-[13.521px]">Aadith V A</p>
                        <p className="text-[#d5d5d5] text-[11.589px] truncate max-w-[110px]">aaadithaachu@gmail.com</p>
                      </div>
                    </div>
                    <svg className="w-[15.935px] h-[14.487px] text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 relative rounded-[10.881px] overflow-hidden bg-gradient-to-b from-gray-900 via-black to-black h-[854.718px]">
            {/* Background curtain effect */}
            <div className="absolute inset-0">
              <Image
                src="/images/interactive-product/main-bg.png"
                alt="Background"
                fill
                className="object-cover opacity-40"
                priority
              />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-[10px]">
              {/* Top Header */}
              <div className="bg-[rgba(0,0,0,0.59)] rounded-[5.795px] px-[17.384px] py-[9.658px] flex items-center justify-between">
                <div className="flex items-center gap-[7.828px] opacity-68">
                  <div className="w-[23.179px] h-[23.179px] bg-gradient-to-br from-purple-500 to-pink-500 rounded-full" />
                  <span className="text-[#f3f3f3] text-[11.589px] font-bold opacity-70">Quenzy</span>
                </div>
                <button className="text-gray-400 hover:text-gray-200">
                  <svg className="w-[23.179px] h-[24.145px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>

              {/* Center Content */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-[170px]">
                <h3 className="text-white text-[61.81px] font-normal leading-[54.084px] mb-4">
                  Hey Hari!
                </h3>
                <p className="text-[rgba(255,255,255,0.37)] text-[46.358px] leading-[54.084px] tracking-[-1.2362px]">
                  What are we creating today?
                </p>

                {/* Input Bar */}
                <div className="mt-[85px]">
                  <div className="bg-[#171717] rounded-[14.487px] shadow-[0px_4.329px_16.999px_0px_rgba(0,0,0,0.17)] h-[99.476px] flex items-center justify-between px-[45px]">
                    <div className="flex items-center gap-[5.795px]">
                      <button
                        onClick={handleInteraction}
                        className="w-[34.768px] h-[34.768px] bg-[#111] rounded-[7.726px] flex items-center justify-center hover:bg-[#1a1a1a] transition-colors"
                      >
                        <HiPlus className="w-[20px] h-[20px] text-gray-400" />
                      </button>

                      <div className="flex items-center gap-[5.795px]">
                        <div className="bg-[#111] rounded-[7.726px] px-[7.726px] py-[7.726px] flex items-center gap-[7.726px] h-[28.973px]">
                          <svg className="w-[13.521px] h-[13.521px] text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                          <span className="text-[#27fda7] text-[11.589px]">Create</span>
                        </div>

                        <input
                          type="text"
                          placeholder="30 sec"
                          onClick={handleInteraction}
                          onFocus={() => setIsInputFocused(true)}
                          onBlur={() => setIsInputFocused(false)}
                          className="bg-transparent text-[#9a9a9a] text-[13.521px] outline-none cursor-pointer placeholder-[#9a9a9a] w-[60px]"
                          readOnly
                        />

                        <div className="h-[16.418px] w-px bg-[#333] rotate-90" />

                        <input
                          type="text"
                          placeholder="9:16"
                          onClick={handleInteraction}
                          className="bg-transparent text-[#9a9a9a] text-[13.521px] outline-none cursor-pointer placeholder-[#9a9a9a] w-[40px]"
                          readOnly
                        />

                        <div className="h-[16.418px] w-px bg-[#333] rotate-90" />

                        <input
                          type="text"
                          placeholder="Cinematic"
                          onClick={handleInteraction}
                          className="bg-transparent text-[#9a9a9a] text-[13.521px] outline-none cursor-pointer placeholder-[#9a9a9a] w-[80px]"
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-[5.795px]">
                      <button
                        onClick={handleInteraction}
                        className="w-[34.768px] h-[34.768px] flex items-center justify-center hover:bg-[rgba(255,255,255,0.05)] rounded-full transition-colors"
                      >
                        <HiMicrophone className="w-[20px] h-[20px] text-gray-400" />
                      </button>
                      <button
                        onClick={handleInteraction}
                        className="w-[34.768px] h-[34.768px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors rotate-90"
                      >
                        <FiArrowRight className="w-[20px] h-[20px] text-black" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveProduct;
