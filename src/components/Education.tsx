import React from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaRegClock, FaCheck } from 'react-icons/fa';

const education = [
  {
    id: 'edu-1',
    degree: 'Diploma in Engineering',
    institution: 'Pabna Polytechnic Institute',
    location: 'Pabna, Bangladesh',
    duration: 'Present',
    highlights: [
      'Studying engineering fundamentals and developing technical problem-solving skills.',
      'Building a strong foundation in programming and software development.',
    ],
    courses: [
      'Computer Programming',
      'Web Development',
      'Database Management',
      'Computer Networking',
    ],
  },
  {
    id: 'edu-2',
    degree: 'Full-Stack Web Development Program',
    institution: 'Programming Hero',
    location: 'Online',
    duration: 'Present',
    highlights: [
      'Learning modern web development with hands-on coding practice and real-world projects.',
      'Developing skills in React, Next.js, TypeScript, Node.js, Express.js, and MongoDB.',
    ],
    courses: [
      'HTML & CSS',
      'JavaScript',
      'React.js',
      'Next.js',
      'TypeScript',
      'Node.js & Express.js',
      'MongoDB',
    ],
  },
]
const educationContent = {
  subtitle: 'My academic background and professional learning journey in web development.',
  title: 'Education & Qualifications',
};

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-[#0F172A] overflow-hidden">
      {/* Subtle ambient lighting behind header */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-125 h-75 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header matching the rest of the portfolio */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {educationContent.title}
          </h2>
          {/* Cyan to purple horizontal accent bar */}
          <div className="w-14 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mb-5" />
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {educationContent.subtitle}
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="group relative p-6 sm:p-7 rounded-2xl bg-[#0c1427] border border-[#17233c] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
            >
              {/* Top Row: Icon + Degree on Left, Duration on Right */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 min-w-0">
                  <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-white/5 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <FaGraduationCap className="text-lg" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-cyan-400">
                      {item.institution}
                    </p>
                  </div>
                </div>

                {/* Duration badge */}
                <span className="flex items-center gap-1.5 shrink-0 rounded-full bg-[#080d19] border border-[#17233c] px-3 py-1 text-[11px] sm:text-xs font-medium text-slate-300">
                  <FaRegClock className="text-cyan-400 text-[10px]" />
                  {item.duration}
                </span>
              </div>

              {/* Location */}
              <p className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                <FaMapMarkerAlt className="text-slate-500 text-xs" />
                {item.location}
              </p>

              {/* Highlights */}
              {item.highlights.length > 0 && (
                <ul className="mt-5 space-y-2.5">
                  {item.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      <FaCheck className="mt-1 text-[10px] text-cyan-400 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Courses */}
              {item.courses.length > 0 && (
                <div className="mt-6 pt-5 border-t border-[#17233c]">
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-500 uppercase mb-3">
                    Key Courses
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.courses.map((course, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-[#080d19] border border-[#17233c] px-3 py-1 text-[11px] sm:text-xs text-slate-300 transition-colors duration-200 group-hover:border-cyan-500/30"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;