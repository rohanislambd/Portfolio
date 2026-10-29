import React from 'react';
import { FaCode, FaPalette, FaLightbulb, FaBookOpen, FaLaptop } from 'react-icons/fa';

const aboutContent = {
  subtitle: "GET TO KNOW ME",
  title: "About Me & My Coding Journey",
  interestsHeading: "Beyond the Code",

  story: {
    heading: "Turning Ideas Into Reality",
    paragraphs: [
      "I'm Rohan Islam, a Frontend Developer focused on building modern, responsive, and user-friendly web applications. I enjoy turning ideas into clean, functional, and visually appealing digital experiences.",
      "I work with React, Next.js, TypeScript, and Tailwind CSS to build web applications. Currently, I'm expanding my knowledge of backend development and learning how to build complete web solutions."
    ],
    quote:
      "I believe in writing clean code, solving real problems, and continuously learning to create better digital experiences.",
    whatIEnjoy:
      "Creating intuitive UI designs, building practical projects, exploring new technologies, and improving my problem-solving skills."
  },

  interests: [
    {
      id: 1,
      title: "UI/UX Design",
      description:
        "Exploring clean layouts, thoughtful colors, and user-friendly interfaces.",
      icon: "Palette",
      color: "text-violet-400"
    },
    {
      id: 2,
      title: "Problem Solving",
      description:
        "Finding efficient solutions through logical thinking and coding.",
      icon: "Lightbulb",
      color: "text-cyan-400"
    },
    {
      id: 3,
      title: "Continuous Learning",
      description:
        "Exploring new technologies and improving my development skills.",
      icon: "BookOpen",
      color: "text-emerald-400"
    },
    {
      id: 4,
      title: "Building Projects",
      description:
        "Turning creative ideas into practical web applications.",
      icon: "Laptop",
      color: "text-pink-400"
    }
  ]
};

const iconMap = {
  Palette: FaPalette,
  Lightbulb: FaLightbulb,
  BookOpen: FaBookOpen,
  Laptop: FaLaptop,
} as const;

const About = () => {
    return (
        <section id="about" className="relative bg-[#0F172A] py-20 lg:py-28">
            {/* Section header */}
            <div className="text-center">
                <p className="text-[#06b6d4] font-mono text-sm tracking-[0.2em] uppercase">
                    {aboutContent.subtitle}
                </p>
                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white">
                    {aboutContent.title}
                </h2>
                <div className="mt-5 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#a855f7]" />
            </div>

            <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                {/* Left: Story */}
                <div>
                    <h3 className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-white">
                        <FaCode className="text-[#06b6d4] text-lg" />
                        {aboutContent.story.heading}
                    </h3>

                    <div className="mt-6 space-y-5 text-slate-400 leading-relaxed">
                        {aboutContent.story.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="mt-8 rounded-xl border border-cyan-500/40 bg-cyan-500/5 px-6 py-5">
                        <p className="italic text-slate-300 leading-relaxed">
                            &ldquo;{aboutContent.story.quote}&rdquo;
                        </p>
                    </blockquote>

                    {/* What I Enjoy */}
                    <p className="mt-8 text-slate-400 leading-relaxed">
                        <span className="font-semibold text-white">What I Enjoy: </span>
                        {aboutContent.story.whatIEnjoy}
                    </p>
                </div>

                {/* Right: Interests */}
                <div>
                    <h3 className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-white">
                       
                        {aboutContent.interestsHeading}
                    </h3>

                    <div className="mt-6 grid sm:grid-cols-2 gap-5">
                        {aboutContent.interests.map((interest) => {
                            const Icon = iconMap[interest.icon as keyof typeof iconMap];
                            return (
                                <div
                                    key={interest.id}
                                    className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5 hover:border-cyan-500/40 hover:bg-slate-800/70 transition-colors"
                                >
                                    <span className={`flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 ${interest.color}`}>
                                        {Icon ? <Icon /> : <FaPalette />}
                                    </span>
                                    <h4 className="mt-4 text-sm font-bold text-white">
                                        {interest.title}
                                    </h4>
                                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                                        {interest.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
