'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
  ];

  const isActive = (href: string) => {
    return pathname === href || (href !== '/' && pathname.startsWith(href));
  };

  return (
    <nav className="relative bg-white">
      <div className="max-w-[1442px] mx-auto px-4 py-3">
        <div className="flex justify-between items-center h-16 bg-[rgba(0,0,0,0.03)] rounded-2xl px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/owly-logo.svg"
              alt="Owly Logo"
              width={99}
              height={30}
              className="h-[30px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-black'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2.5 font-medium text-black border-2 border-black rounded-full hover:bg-neutral-50 transition-colors duration-200">
              Book a Demo
            </button>
            <button className="px-6 py-2.5 font-medium text-white bg-black rounded-full hover:bg-neutral-800 transition-colors duration-200">
              Try it free
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-black hover:text-neutral-700 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <div className="px-6 pt-4 pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block py-2 font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-black'
                    : 'text-neutral-700 hover:text-black'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="space-y-3 pt-4 border-t border-neutral-200">
              <button className="w-full px-6 py-2.5 font-medium text-black border-2 border-black rounded-full hover:bg-neutral-50 transition-colors duration-200">
                Book a Demo
              </button>
              <button className="w-full px-6 py-2.5 font-medium text-white bg-black rounded-full hover:bg-neutral-800 transition-colors duration-200">
                Try it free
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
