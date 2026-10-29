"use client"
import { Mail, Phone, MessageCircle, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  // Bamer contact info gulo dynamic array hishebe rakha hoyeche
const contactDetails = [
  {
    id: 1,
    title: "DIRECT EMAIL",
    value: "coderootbdofficial24@gmail.com",
    link: "mailto:coderootbdofficial24@gmail.com",
    icon: Mail,
    iconColor: "text-cyan-400",
    hasButton: false,
  },
  {
    id: 2,
    title: "PHONE CALL",
    value: "+8801308477409",
    link: "tel:+8801308477409",
    icon: Phone,
    iconColor: "text-purple-400",
    hasButton: false,
  },
  {
    id: 3,
    title: "WHATSAPP CHAT",
    value: "+8801308477409",
    link: "https://wa.me/8801308477409",
    icon: MessageCircle,
    iconColor: "text-emerald-400",
    hasButton: true,
    buttonText: "Chat",
  },
  {
    id: 4,
    title: "LOCATION",
    value: "Pabna, Rajshahi, Bangladesh",
    link: "https://maps.google.com/?q=Pabna,+Rajshahi,+Bangladesh",
    icon: MapPin,
    iconColor: "text-blue-400",
    hasButton: false,
  },
];

  return (
    <div id='contact' className=" bg-[#080d1a] text-white flex flex-col items-center justify-center p-6 md:p-12 font-sans">
      {/* Header Section */}
      <div className="text-center mb-12">
        <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
          Get In Touch
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold mt-2 text-white">
          Let&apos;s Work Together
        </h1>
        <p className="text-slate-400 text-sm md:text-base mt-3 max-w-lg mx-auto">
          Have a project in mind, a question, or just want to say hi? Drop me a message below!
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mx-auto mt-4"></div>
      </div>
      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl w-full">
        {/* Left Side: Array map  */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {contactDetails.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
  key={item.id}
  className="flex items-center justify-between p-5 rounded-2xl bg-[#111927] border border-slate-800/80 transition shadow-lg hover:border-cyan-400"
>
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-xl bg-[#172234] flex items-center justify-center shrink-0">
      <IconComponent className={`w-5 h-5 ${item.iconColor}`} />
    </div>
    <div>
      <h4 className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
        {item.title}
      </h4>
      
      {/* Click korle mailto: ba tel: trigger korbe */}
      {item.link ? (
        <a
          href={item.link}
          className="text-sm font-bold text-white mt-0.5 break-all hover:text-cyan-300 transition block"
        >
          {item.value}
        </a>
      ) : (
        <p className="text-sm font-bold text-white mt-0.5 break-all">
          {item.value}
        </p>
      )}
    </div>
  </div>

  {item.hasButton && (
    <a
      href="https://wa.me/8801308477409"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 transition ml-2 shrink-0 hover:bg-emerald-500 hover:text-white cursor-pointer">
        {item.buttonText}
        <Send className="w-3 h-3" />
      </button>
    </a>
  )}
</div>
            );
          })}
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-7 bg-[#111927] border border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-xl">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-[#0a101d] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-[#0a101d] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project Inquiry / Job Opportunity"
                className="w-full bg-[#0a101d] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about your project or inquiry..."
                className="w-full bg-[#0a101d] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:opacity-95 shadow-lg shadow-cyan-500/10 transition active:scale-[0.99]"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;