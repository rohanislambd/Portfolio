'use client';

import Image from 'next/image';
import React, { useState, useMemo } from 'react';

interface Project {
  id: string;
  title: string;
  shortSummary: string;
  detailedDescription: string;
  category: string;
  featuredImage: string;
  techStack: string[];
  liveDemoUrl: string;
  githubUrl: string;
  challengesFaced: string[];
  futureImprovements: string[];
}

const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'BazarDor - Bangladesh Daily Market Price Tracker',
    shortSummary:
      'A product-based web application that helps users explore daily market prices, compare product prices across markets, and discover price trends with a clean, responsive interface.',
    detailedDescription:
      'BazarDor is a Next.js application designed to make daily market price information easier to explore. Users can browse products by category, view detailed market price comparisons, and identify the highest and lowest prices across different markets. The application includes dynamic product and category pages, sorting options, responsive UI components, and authentication using Better Auth with Google and GitHub sign-in. Built with Next.js, TypeScript, Tailwind CSS, and MongoDB integration, it focuses on usability, structured data presentation, and a smooth browsing experience.',
    category: 'Frontend',
    featuredImage:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'HeroUI',
      'Better Auth',
      'MongoDB',
    ],
    liveDemoUrl: 'https://bazar-dor-green-eight.vercel.app/',
    githubUrl: 'https://github.com/rohanislambd/bazar-dor-nextjs-app',
    challengesFaced: [
      'Handling API responses safely and displaying product data reliably across dynamic product and category pages.',
      'Implementing authentication flows and protecting pages that require users to sign in.',
      'Building responsive product listings, market comparison tables, and sorting features for a smooth user experience.',
    ],
    futureImprovements: [
      'Add historical price charts to help users understand price changes over time.',
      'Introduce product search and advanced filtering options.',
      'Add price alerts to notify users when product prices change.',
    ],
  },
  {
    id: 'proj-2',
    title: 'FitLog - Workout Planner & Fitness Tracker',
    shortSummary:
      'A responsive workout planning application that helps users explore workouts, organize daily exercise plans, and manage saved workouts with persistent browser storage.',
    detailedDescription:
      'FitLog is a fitness-focused web application built with Next.js and TypeScript. It allows users to browse workout information, organize their daily workout plans, and manage saved exercises through an intuitive interface. The application uses React Context API and localStorage to maintain workout planning state and preserve saved selections across page reloads. With responsive layouts, search and sorting features, and a dark interface with lime accents, FitLog provides a practical and user-friendly workout planning experience.',
    category: 'Frontend',
    featuredImage:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'DaisyUI',
      'Context API',
      'localStorage',
    ],
    liveDemoUrl: 'https://fit-log-nextjs-app.vercel.app/',
    githubUrl: 'https://github.com/rohanislambd/fit-log-nextjs-app',
    challengesFaced: [
      'Managing shared workout state across components using React Context API.',
      'Persisting saved workouts in localStorage so selections remain available after page reloads.',
      'Combining search, filtering, and sorting while maintaining a responsive and consistent interface.',
    ],
    futureImprovements: [
      'Add user accounts and cloud-based workout synchronization.',
      'Introduce weekly workout progress tracking and visual statistics.',
      'Add customizable workout schedules and completion history.',
    ],
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id='projects' className="bg-[#0b1120] py-20 px-6 sm:px-8 lg:px-12 text-slate-100  border-b border-gray-900 ">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#00b4d8]">
            Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
         
        </div>

        {/* Category Filter */}
        <div className="mt-8 flex justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#00b4d8] text-slate-950 font-semibold shadow-md shadow-[#00b4d8]/20'
                  : 'border border-slate-800 bg-[#131b2e] text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 ">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 hover:border-cyan-400 bg-[#111928]/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1  hover:shadow-xl"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900 ">
                <Image
                height={500}
                width={500}
                  src={project.featuredImage}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-[#00b4d8] ">
                  {project.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">
                  {project.shortSummary}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#1e293b] bg-[#1e293b]/70 px-2.5 py-1 text-xs font-medium text-[#38bdf8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-800/80">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="text-sm font-semibold text-[#00b4d8] transition-colors hover:text-white"
                  >
                    View Details &rarr;
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-slate-800 p-2 text-slate-400 hover:text-white"
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-[#00b4d8]/10 px-3 py-1.5 text-xs font-semibold text-[#00b4d8] hover:bg-[#00b4d8]/20 text-white hover:text-white"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal matching the provided reference screenshot */}
      {activeProject && (
        <div 
          onClick={() => setActiveProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm overflow-y-auto"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative my-auto w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl border border-slate-700/80 bg-[#101726] p-5 sm:p-7 shadow-2xl text-slate-200 scrollbar-thin scrollbar-thumb-slate-700"
          >
            {/* Close Cross Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-10 flex h-7 w-7 items-center justify-center rounded-md text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Project Image Banner */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-inner">
              <Image
              height={500}
              width={500}
                src={activeProject.featuredImage}
                alt={activeProject.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Title */}
            <h2 className="mt-5 text-xl sm:text-2xl font-bold tracking-tight text-white">
              {activeProject.title}
            </h2>

            {/* Tech Stack Pills */}
            <div className="mt-3.5 flex flex-wrap gap-2">
              {activeProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[#1e3a5f] bg-[#0d2238]/60 px-3 py-1 text-xs font-medium text-[#38bdf8]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300/90 font-normal">
              {activeProject.detailedDescription}
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={activeProject.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#00b4d8] px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 transition-all hover:bg-[#0096c7]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Application Demo
              </a>
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-[#162032] px-4 py-2 text-xs sm:text-sm font-semibold text-slate-200 transition-all hover:bg-[#1e2c44] hover:text-white"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Client Repository (GitHub)
              </a>
            </div>

            <div className="my-6 border-t border-slate-800/80" />

            {/* Section: Engineering Challenges Faced */}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-sm">🛡️</span>
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-amber-400">
                  Engineering Challenges Faced
                </h3>
              </div>
              <div className="mt-3 rounded-xl border border-slate-800/90 bg-[#0a0f1d] p-4">
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  {activeProject.challengesFaced.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-amber-400 text-xs mt-0.5 select-none">▲</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section: Potential Improvements & Roadmap */}
            <div className="mt-6">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 text-sm">💡</span>
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-cyan-400">
                  Potential Improvements & Roadmap
                </h3>
              </div>
              <div className="mt-3 rounded-xl border border-slate-800/90 bg-[#0a0f1d] p-4">
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  {activeProject.futureImprovements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-cyan-400 text-xs mt-0.5 select-none">🚀</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;