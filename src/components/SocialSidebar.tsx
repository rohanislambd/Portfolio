import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

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

const SocialSidebar = () => {
  return (
    <aside className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
      {socialLinks.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={name}
          aria-label={name}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 hover:text-cyan-400"
        >
          <Icon size={19} />
        </a>
      ))}
    </aside>
  );
};

export default SocialSidebar;
