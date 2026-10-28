"use client";

import React, { useState } from "react";
import { FaFileDownload, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] text-white text-sm font-bold shadow-lg shadow-blue-500/25">
              RI
            </span>
            <span className="text-lg font-semibold text-white tracking-tight">
              Rohan<span className="text-[#06b6d4]"> Islam</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active === link.href
                    ? "text-[#06b6d4]  bg-[#3cb0c436]"
                    : "text-slate-200  hover:text-cyan-400  hover:bg-slate-800/90 transition"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Resume button */}
          <div className="flex items-center gap-3">
            <a 
            download={`Resume.pdf`}
            href="/Resume.pdf
            ">
            <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-xl group bg-gradient-to-br from-cyan-500 to-purple-600 group-hover:from-cyan-500 group-hover:to-purple-600 hover:text-white text-white shadow-lg shadow-cyan-500/20 transition-all active:scale-95">
              <span className="relative px-4 py-2 transition-all ease-in duration-75 rounded-lg bg-slate-900 group-hover:bg-transparent flex items-center gap-2">
                <FaFileDownload className="text-cyan-400 group-hover:text-white transition-colors" />{" "}
                Resume
              </span>
            </button>
            </a>
            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-[#06b6d4] transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0F172A] border-t border-slate-800/70 px-4 pb-4 pt-2 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActive(link.href);
                setOpen(false);
              }}
              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === link.href
                  ? "text-[#06b6d4]  bg-[#3cb0c436]"
                  : "text-slate-200  hover:text-cyan-400  hover:bg-slate-800/90 transition"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
