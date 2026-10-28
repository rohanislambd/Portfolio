"use client";
import Image from "next/image";
import React from "react";
import { FaDownload, FaArrowRight, FaReact, FaNodeJs } from "react-icons/fa";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";

const heroContent = {
  badge: "AVAILABLE FOR NEW OPPORTUNITIES",

  name: "Rohan Islam",

  role: "Frontend Developer",

  description:
    "I'm passionate about building modern, responsive, and user-friendly web applications with React, Next.js, and TypeScript. I enjoy turning creative ideas into clean, accessible, and engaging digital experiences.",

  buttons: {
    primary: "Download CV / Resume",
    secondary: "Contact Me",
  },
};

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer"],
    loop: 0,
    typeSpeed: 110,
    deleteSpeed: 100,
    delaySpeed: 1500,
  });
  return (
    <section id="home" className="relative overflow-hidden bg-[#0F172A]">
      {/* Background glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 w-[420px] h-[420px] rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-[#06b6d4] text-xs font-semibold tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06b6d4]" />
              </span>
              {heroContent.badge}
            </span>

            {/* Heading */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-[#06b6d4] to-[#a855f7] bg-clip-text text-transparent">
                {heroContent.name}
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="mt-5 text-xl sm:text-2xl font-semibold text-white flex items-center gap-2">
              <span>I am a</span>
              <span className="font-mono text-[#06b6d4] border-b-2 border-purple-500 pb-0.5 inline-block">
                {text}
                <Cursor cursorStyle="|" />
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-slate-400 leading-relaxed">
              {heroContent.description}
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white text-sm font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all"
              >
                <FaDownload />
                {heroContent.buttons.primary}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 bg-slate-800/40 text-white text-sm font-semibold hover:border-cyan-500/60 hover:text-[#06b6d4] hover:-translate-y-0.5 transition-all"
              >
                {heroContent.buttons.secondary}
                <FaArrowRight className="text-[#06b6d4]" />
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-cyan-500/30 via-purple-500/20 to-cyan-500/30 blur-3xl" />

              {/* Gradient ring + photo */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full p-1.5 bg-gradient-to-br from-[#06b6d4] via-slate-700 to-[#8b5cf6] shadow-[0_0_60px_rgba(6,182,212,0.3)] ">
                <div className="relative  w-full h-full rounded-full overflow-hidden bg-slate-900">
                  <Image
                    src="/heros.jpg"
                    alt="Alex Rivera"
                    fill
                    sizes="(max-width: 640px) 288px, 384px"
                    className="object-cover object-center "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
