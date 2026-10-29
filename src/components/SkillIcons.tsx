import React from 'react';

interface SkillIconProps {
  name: string;
  className?: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ name, className = 'w-6 h-6' }) => {
  const iconKey = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (iconKey) {
    case 'reactjs':
    case 'react':
      return (
        <svg
          viewBox="0 0 115.3 100"
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="57.65" cy="50" rx="10.5" ry="24" fill="#00D8FF" />
          <ellipse
            cx="57.65"
            cy="50"
            rx="54"
            ry="20"
            stroke="#00D8FF"
            strokeWidth="7"
            fill="none"
          />
          <ellipse
            cx="57.65"
            cy="50"
            rx="54"
            ry="20"
            stroke="#00D8FF"
            strokeWidth="7"
            transform="rotate(60 57.65 50)"
            fill="none"
          />
          <ellipse
            cx="57.65"
            cy="50"
            rx="54"
            ry="20"
            stroke="#00D8FF"
            strokeWidth="7"
            transform="rotate(120 57.65 50)"
            fill="none"
          />
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="6" fill="#F7DF1E" />
          <path
            d="M18.7 22.8c.6 1 1.4 1.7 2.8 1.7 1.2 0 2-.6 2-1.4 0-1-.8-1.4-2.1-2l-.7-.3c-2.1-.9-3.5-2-3.5-4.4 0-2.2 1.7-3.9 4.3-3.9 1.9 0 3.2.7 4.1 2.3l-2.2 1.4c-.5-.8-1-1.2-1.9-1.2-.9 0-1.5.6-1.5 1.3 0 .8.6 1.2 1.8 1.7l.7.3c2.5 1.1 3.9 2.1 3.9 4.6 0 2.6-2 4.1-4.8 4.1-2.7 0-4.4-1.3-5.2-3.1l2.3-1.4zm-7.6.2c.4.7.8 1.3 1.6 1.3.8 0 1.3-.3 1.3-1.6V12.8h2.8v9.8c0 2.8-1.6 4-3.9 4-2.1 0-3.3-1.1-4-2.6l2.2-1z"
            fill="#000000"
          />
        </svg>
      );

    case 'typescript':
    case 'ts':
      return (
        <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="6" fill="#3178C6" />
          <path
            d="M17.4 14.8h-4.3v10.5H10.5V14.8H6.2V12.5h11.2v2.3zm4.5 7.9c.7.5 1.7.9 2.7.9 1.5 0 2.3-.7 2.3-1.7 0-1-.6-1.5-2.2-2.1l-.8-.3c-2.3-.9-3.4-2-3.4-3.7 0-2.1 1.7-3.6 4.3-3.6 1.6 0 2.7.4 3.4.9l-.8 2c-.6-.4-1.4-.7-2.5-.7-1.3 0-1.9.6-1.9 1.4 0 .9.6 1.3 2.1 1.8l.8.3c2.5 1 3.5 2 3.5 3.9 0 2.2-1.7 3.8-4.7 3.8-1.8 0-3.2-.5-4-1.1l1.3-1.6z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'html':
    case 'html5':
      return (
        <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M5.3 3L7.7 27.5 16 29.8l8.3-2.3L26.7 3H5.3z" fill="#E44D26" />
          <path d="M16 5v22.6l6.6-1.8 1.9-19.8H16z" fill="#F16529" />
          <path
            d="M16 11.5H10.9l.4 4.5H16v-4.5zm0 8.7l-.1.1-2.8-.8-.2-2.1h-4.2l.4 5.1 6.7 1.9v-4.2zm0-15.2v4.5h5.5l-.5 4.5H16v4.5h4.8l-.5 5.5-4.3 1.2v4.3l7-1.9 1-13.6.4-4.5H16z"
            fill="#EBEBEB"
          />
          <path
            d="M16 11.5v4.5h4.8l-.5 5.5-4.3 1.2v4.3l7-1.9 1-13.6H16z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'css':
    case 'css3':
      return (
        <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M5.3 3L7.7 27.5 16 29.8l8.3-2.3L26.7 3H5.3z" fill="#1572B6" />
          <path d="M16 5v22.6l6.6-1.8 1.9-19.8H16z" fill="#33A9DC" />
          <path
            d="M16 11.5H10.9l.2 2.3h4.9v-2.3zm0 4.5H11.3l.4 4.5H16v-4.5zm0 6.5l-.1.1-2.8-.8-.2-2.1h-2.3l.4 4.3 5 1.4v-2.9zm0-17.5v2.3h7.6l-.3 3.4H16v2.3h7.1l-.7 7.9-6.4 1.8v2.4l8.3-2.3.9-10.8.2-2.3.2-2.4H16z"
            fill="#EBEBEB"
          />
          <path
            d="M16 11.5v2.3h4.9l-.3 3.4H16v2.3h4.4l-.7 7.9-3.7 1v2.4l5.9-1.6.9-10.8.2-2.3.2-2.4H16z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'nextjs':
    case 'next':
      return (
        <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="15" fill="#000000" stroke="#334155" strokeWidth="1.5" />
          <path
            d="M21.5 22.8L12.7 11.5H10.5V20.5H12.3V13.8L20.4 24.1c.4-.3.8-.7 1.1-1.3z"
            fill="#FFFFFF"
          />
          <rect x="19.7" y="11.5" width="1.8" height="9" fill="#FFFFFF" />
        </svg>
      );

    case 'tailwindcss':
    case 'tailwind':
      return (
        <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 13.5c1.5-3 4-4.5 7.5-4.5 5.2 0 7.5 3.8 9.5 5.2 1.3 1 2.8 1.5 4.5 1.5-1.5 3-4 4.5-7.5 4.5-5.2 0-7.5-3.8-9.5-5.2-1.3-1-2.8-1.5-4.5-1.5zm-7.5 7.5c1.5-3 4-4.5 7.5-4.5 5.2 0 7.5 3.8 9.5 5.2 1.3 1 2.8 1.5 4.5 1.5-1.5 3-4 4.5-7.5 4.5-5.2 0-7.5-3.8-9.5-5.2-1.3-1-2.8-1.5-4.5-1.5z"
            fill="#06B6D4"
          />
        </svg>
      );

    case 'daisyui':
      return (
        <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="14" fill="#1D232A" stroke="#FEE75C" strokeWidth="1.5" />
          <circle cx="16" cy="9" r="4.2" fill="#FEE75C" />
          <circle cx="16" cy="23" r="4.2" fill="#FEE75C" />
          <circle cx="9" cy="16" r="4.2" fill="#FEE75C" />
          <circle cx="23" cy="16" r="4.2" fill="#FEE75C" />
          <circle cx="16" cy="16" r="4.5" fill="#1AD1A5" />
        </svg>
      );

    case 'heroui':
      return (
        <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#18181B" stroke="#8B5CF6" strokeWidth="1.5" />
          <path
            d="M9 8h4.5v6.5h5V8H23v16h-4.5v-6.5h-5V24H9V8z"
            fill="url(#heroui-grad)"
          />
          <defs>
            <linearGradient id="heroui-grad" x1="9" y1="8" x2="23" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A855F7" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'shadcnui':
    case 'shadcn':
      return (
        <svg
          viewBox="0 0 256 256"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="256" height="256" rx="56" fill="#09090B" stroke="#27272A" strokeWidth="12" />
          <line
            x1="208"
            y1="128"
            x2="128"
            y2="208"
            stroke="#FFFFFF"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="192"
            y1="40"
            x2="40"
            y2="192"
            stroke="#FFFFFF"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'nodejs':
    case 'node':
      return (
        <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 2.5l12.5 7.2v14.6L16 31.5 3.5 24.3V9.7L16 2.5z"
            fill="#339933"
          />
          <path
            d="M16 5.5l9.8 5.7v11.6L16 28.5 6.2 22.8V11.2L16 5.5z"
            fill="#215732"
          />
          <path
            d="M16 9.5c-4 0-6.5 2.2-6.5 5.5 0 3.7 2.8 4.7 5.7 5.2 2.2.4 3.3.8 3.3 1.8 0 .9-.8 1.5-2.2 1.5-1.7 0-3-.6-4.2-1.8l-1.6 2.1c1.5 1.6 3.4 2.3 5.8 2.3 3.8 0 6.6-2 6.6-5.5 0-3.6-2.8-4.7-5.8-5.3-2.1-.4-3.2-.8-3.2-1.7 0-.8.8-1.4 2.1-1.4 1.4 0 2.5.5 3.6 1.4l1.5-2.1c-1.4-1.3-3.1-2-5.1-2z"
            fill="#80BD01"
          />
        </svg>
      );

    case 'expressjs':
    case 'express':
      return (
        <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="7" fill="#0F172A" stroke="#22C55E" strokeWidth="1.2" />
          <path
            d="M18 4l-9 14h7l-3 10 11-15h-7l4-9z"
            fill="#22C55E"
          />
        </svg>
      );

    case 'restapis':
    case 'restapi':
    case 'rest':
      return (
        <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="16" r="4" fill="#06B6D4" />
          <circle cx="24" cy="16" r="4" fill="#3B82F6" />
          <path
            d="M11 14h10m-3-3l3 3-3 3M21 18H11m3 3l-3-3 3-3"
            stroke="#22D3EE"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'mongodb':
      return (
        <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 2.5s-6.5 6.8-6.5 13.8c0 5.4 3.9 9.8 6.5 12.2 2.6-2.4 6.5-6.8 6.5-12.2 0-7-6.5-13.8-6.5-13.8z"
            fill="#47A248"
          />
          <path
            d="M16 2.5v26c2.6-2.4 6.5-6.8 6.5-12.2 0-7-6.5-13.8-6.5-13.8z"
            fill="#499D4A"
          />
          <path
            d="M16 28.5c-.2 0-.4-.5-.4-1.2V4.7c0-.7.2-1.2.4-1.2s.4.5.4 1.2v22.6c0 .7-.2 1.2-.4 1.2z"
            fill="#E6F2E6"
          />
        </svg>
      );

    case 'mongoose':
      return (
        <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="7" fill="#880000" />
          <path
            d="M8 22V10h3.5l4.5 6.5L20.5 10H24v12h-3v-7.5l-5 7h-1l-5-7V22H8z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'betterauth':
      return (
        <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 3L6 7.5v7.8c0 6.6 4.3 12.7 10 14.2 5.7-1.5 10-7.6 10-14.2V7.5L16 3z"
            fill="#8B5CF6"
          />
          <path
            d="M16 11a3.5 3.5 0 00-3.5 3.5c0 1.3.7 2.4 1.8 3v3.5h3.4v-3.5c1.1-.6 1.8-1.7 1.8-3A3.5 3.5 0 0016 11z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30.4 14.5L17.5 1.6a2.2 2.2 0 00-3.1 0L12 3.9l3.9 3.9a2.6 2.6 0 013.3 3.3l3.8 3.8a2.6 2.6 0 11-1.6 1.6l-3.5-3.5v6.5a2.6 2.6 0 11-2.2 0v-6.6a2.6 2.6 0 01-1.4-3.4L10.4 5.6 1.6 14.4a2.2 2.2 0 000 3.1l12.9 12.9a2.2 2.2 0 003.1 0l12.8-12.8a2.2 2.2 0 000-3.1z"
            fill="#F05032"
          />
        </svg>
      );

    case 'github':
      return (
        <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 2C8.3 2 2 8.3 2 16c0 6.2 4 11.4 9.6 13.3.7.1 1-.3 1-.7v-2.5c-3.9.8-4.7-1.9-4.7-1.9-.6-1.6-1.5-2.1-1.5-2.1-1.3-.9.1-.9.1-.9 1.4.1 2.2 1.5 2.2 1.5 1.3 2.1 3.3 1.5 4.1 1.2.1-.9.5-1.5.9-1.9-3.1-.4-6.4-1.6-6.4-7 0-1.5.5-2.8 1.4-3.8-.1-.4-.6-1.8.1-3.7 0 0 1.2-.4 3.9 1.5 1.1-.3 2.3-.5 3.5-.5s2.4.2 3.5.5c2.7-1.9 3.9-1.5 3.9-1.5.8 1.9.3 3.4.1 3.7.9 1 1.4 2.3 1.4 3.8 0 5.4-3.3 6.6-6.4 7 .5.4 1 1.3 1 2.6v3.9c0 .4.3.8 1 .7 5.6-1.9 9.6-7.1 9.6-13.3 0-7.7-6.3-14-14-14z"
            fill="#F1F5F9"
          />
        </svg>
      );

    case 'vscode':
      return (
        <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23.9 3.2L16.2 10 9.8 4.9 3.2 9.7l7.7 6.3-7.7 6.3 6.6 4.8 6.4-5.1 7.7 6.8 5.4-2.6V5.8l-5.4-2.6z"
            fill="#007ACC"
          />
          <path
            d="M23.9 3.2l-7.7 6.8 7.7 6-7.7 6 7.7 6.8 5.4-2.6V5.8l-5.4-2.6z"
            fill="#1F9CF0"
          />
          <path
            d="M23.9 28.8V3.2L13.7 11.8l10.2 17z"
            fill="#0066B8"
          />
        </svg>
      );

    case 'vercel':
      return (
        <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M16 5l13 22H3L16 5z" fill="#FFFFFF" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      );
  }
};

