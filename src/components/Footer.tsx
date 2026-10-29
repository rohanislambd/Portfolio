import React from 'react';
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/rohanislambd",
    icon: FaLinkedinIn,
  },
  {
    name: "Gmail",
    href: "mailto:coderootbdofficial24@gmail.com",
    icon: BiLogoGmail,
  },
  {
    name: "GitHub",
    href: "https://github.com/rohanislambd",
    icon: FaGithub,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/rohanislamofficial24",
    icon: FaFacebook,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#070c18] border-t border-[#17233c] overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 sm:w-96 md:w-[31.25rem] h-48 sm:h-64 md:h-[18.75rem] bg-cyan-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 sm:pt-12 pb-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] text-white text-sm font-bold shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-200">
              RI
            </span>
            <span className="text-lg font-semibold text-white tracking-tight">
              Rohan<span className="text-[#06b6d4]"> Islam</span>
            </span>
          </a>

          {/* Nav links */}
          <nav 
            aria-label="Footer navigation" 
            className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:gap-x-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-[#17233c] bg-[#0c1427] text-slate-300 hover:text-cyan-400 hover:border-cyan-500/60 hover:bg-[#101a30] hover:shadow-[0_0_16px_rgba(6,182,212,0.2)] transition-all duration-200"
                >
                  <Icon className="text-base sm:text-lg" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 sm:mt-10 h-px w-full bg-gradient-to-r from-transparent via-[#17233c] to-transparent" />

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-slate-500">
          <p className="order-2 md:order-1 text-center md:text-left">
            &copy; {currentYear} Rohan Islam. All rights reserved.
          </p>

          <p className="order-3 md:order-2 text-center">
            Designed &amp; developed with{' '}
            <span className="text-cyan-400">&#9829;</span> using Next.js &amp; Tailwind CSS
          </p>

          <a
            href="#home"
            className="order-1 md:order-3 font-semibold text-slate-400 hover:text-cyan-400 transition-colors py-1"
          >
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;