"use client"
import React, { useState } from 'react';
import { SkillIcon } from './SkillIcons';
  const  skills = [
    // Frontend
    {
      id: 'skill-react',
      name: 'React.js',
      category: 'Frontend',
      level: 92,
      proficiency: 'Advanced',
      iconKey: 'react',
      gradient: 'from-cyan-400 to-teal-400',
      textColor: 'text-cyan-400',
    },
    {
      id: 'skill-js',
      name: 'JavaScript',
      category: 'Frontend',
      level: 90,
      proficiency: 'Advanced',
      iconKey: 'javascript',
      gradient: 'from-amber-400 to-orange-400',
      textColor: 'text-amber-400',
    },
    {
      id: 'skill-tailwind',
      name: 'Tailwind CSS',
      category: 'Frontend',
      level: 95,
      proficiency: 'Expert',
      iconKey: 'tailwindcss',
      gradient: 'from-teal-400 to-cyan-400',
      textColor: 'text-cyan-400',
      isHighlighted: true,
    },
    {
      id: 'skill-next',
      name: 'Next.js',
      category: 'Frontend',
      level: 90,
      proficiency: 'Advanced',
      iconKey: 'nextjs',
      gradient: 'from-slate-100 to-cyan-400',
      textColor: 'text-cyan-300',
    },
    {
      id: 'skill-ts',
      name: 'TypeScript',
      category: 'Frontend',
      level: 88,
      proficiency: 'Advanced',
      iconKey: 'typescript',
      gradient: 'from-sky-400 to-blue-500',
      textColor: 'text-sky-400',
    },
    {
      id: 'skill-html',
      name: 'HTML',
      category: 'Frontend',
      level: 95,
      proficiency: 'Expert',
      iconKey: 'html',
      gradient: 'from-orange-500 to-amber-400',
      textColor: 'text-orange-400',
    },
    {
      id: 'skill-css',
      name: 'CSS',
      category: 'Frontend',
      level: 92,
      proficiency: 'Advanced',
      iconKey: 'css',
      gradient: 'from-blue-500 to-cyan-400',
      textColor: 'text-cyan-400',
    },
    {
      id: 'skill-daisyui',
      name: 'DaisyUI',
      category: 'Frontend',
      level: 88,
      proficiency: 'Proficient',
      iconKey: 'daisyui',
      gradient: 'from-yellow-400 to-amber-500',
      textColor: 'text-yellow-400',
    },
    {
      id: 'skill-heroui',
      name: 'HeroUI',
      category: 'Frontend',
      level: 85,
      proficiency: 'Proficient',
      iconKey: 'heroui',
      gradient: 'from-violet-400 to-purple-500',
      textColor: 'text-violet-400',
    },
    {
      id: 'skill-shadcnui',
      name: 'ShadcnUI',
      category: 'Frontend',
      level: 80,
      proficiency: 'Proficient',
      iconKey: 'shadcnui',
      gradient: 'from-blue-400 to-green-500',
      textColor: 'text-violet-400',
    },

    // Backend & Database
    {
      id: 'skill-node',
      name: 'Node.js',
      category: 'Backend & DB',
      level: 88,
      proficiency: 'Advanced',
      iconKey: 'nodejs',
      gradient: 'from-emerald-400 to-green-500',
      textColor: 'text-emerald-400',
    },
    {
      id: 'skill-express',
      name: 'Express.js',
      category: 'Backend & DB',
      level: 86,
      proficiency: 'Advanced',
      iconKey: 'expressjs',
      gradient: 'from-emerald-400 to-teal-400',
      textColor: 'text-emerald-400',
    },
    {
      id: 'skill-rest',
      name: 'REST APIs',
      category: 'Backend & DB',
      level: 90,
      proficiency: 'Advanced',
      iconKey: 'restapis',
      gradient: 'from-cyan-400 to-blue-500',
      textColor: 'text-cyan-400',
    },
    {
      id: 'skill-mongodb',
      name: 'MongoDB',
      category: 'Backend & DB',
      level: 85,
      proficiency: 'Advanced',
      iconKey: 'mongodb',
      gradient: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-400',
    },
    {
      id: 'skill-mongoose',
      name: 'Mongoose',
      category: 'Backend & DB',
      level: 84,
      proficiency: 'Proficient',
      iconKey: 'mongoose',
      gradient: 'from-red-500 to-amber-500',
      textColor: 'text-red-400',
    },
    {
      id: 'skill-betterauth',
      name: 'Better Auth',
      category: 'Backend & DB',
      level: 85,
      proficiency: 'Proficient',
      iconKey: 'betterauth',
      gradient: 'from-purple-400 to-indigo-500',
      textColor: 'text-purple-400',
    },

    // DevOps & Tools
    {
      id: 'skill-git',
      name: 'Git',
      category: 'DevOps & Tools',
      level: 90,
      proficiency: 'Advanced',
      iconKey: 'git',
      gradient: 'from-orange-500 to-red-500',
      textColor: 'text-orange-400',
    },
    {
      id: 'skill-github',
      name: 'GitHub',
      category: 'DevOps & Tools',
      level: 90,
      proficiency: 'Advanced',
      iconKey: 'github',
      gradient: 'from-slate-200 to-purple-400',
      textColor: 'text-slate-200',
    },
    {
      id: 'skill-vscode',
      name: 'VS Code',
      category: 'DevOps & Tools',
      level: 92,
      proficiency: 'Expert',
      iconKey: 'vscode',
      gradient: 'from-blue-500 to-sky-400',
      textColor: 'text-blue-400',
    },
    {
      id: 'skill-vercel',
      name: 'Vercel',
      category: 'DevOps & Tools',
      level: 88,
      proficiency: 'Advanced',
      iconKey: 'vercel',
      gradient: 'from-sky-400 to-cyan-300',
      textColor: 'text-cyan-300',
    },
  ]
  const filterOptions = [
  'All Skills',
  'Frontend',
  'Backend & DB',
  'DevOps & Tools',
];
export const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All Skills');

  const filteredSkills =
    activeFilter === 'All Skills'
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  return (
    <section
      id="skills"
      className="py-20 md:py-28 relative bg-[#070c18] overflow-hidden"
    >
      {/* Subtle ambient lighting behind header */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-125 h-75 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header matching reference screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-cyan-400 uppercase mb-2">
            Technical Arsenal
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Skills & Expertise
          </h2>
          {/* Cyan to purple horizontal accent bar */}
          <div className="w-14 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto" />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-12 sm:mb-14">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 select-none ${
                  isActive
                    ? 'bg-cyan-400 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.55)] scale-[1.02]'
                    : 'bg-[#0f172a]/90 text-slate-300 hover:text-white border border-slate-700/60 hover:border-slate-500 hover:bg-[#152238]'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* 3-Column Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredSkills.map((skill) => {
            const isHighlighted = skill.isHighlighted;

            return (
              <div
                key={skill.id}
                className={`group relative p-5 sm:p-6 rounded-2xl bg-[#0c1427] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  isHighlighted
                    ? 'border border-cyan-500/70 shadow-[0_0_22px_rgba(6,182,212,0.22)]'
                    : 'border border-[#17233c] hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]'
                }`}
              >
                {/* Top Row: Icon + Skill Name on Left, Percentage on Right */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <SkillIcon name={skill.iconKey} className="w-6 h-6 object-contain" />
                    </div>
                    <span className="text-white font-bold text-sm sm:text-base tracking-tight truncate">
                      {skill.name}
                    </span>
                  </div>

                  {/* Percentage label in matching accent color */}
                  <span
                    className={`font-mono font-bold text-sm sm:text-base shrink-0 ${skill.textColor}`}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Bottom Row: Recessed Track & Gradient Progress Bar */}
                <div className="w-full h-2 sm:h-2.5 rounded-full bg-[#080d19] overflow-hidden p-px">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.gradient} transition-all duration-700 ease-out shadow-sm`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
