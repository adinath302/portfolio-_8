import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa6';
import { SiVite, SiTypescript, SiTailwindcss, SiGsap, SiJavascript, SiZod } from 'react-icons/si';

const techStack = [
  { name: 'React', icon: FaReact, iconColor: 'text-[#61DAFB] group-hover:text-[#61DAFB]/90 duration-200', textColor: 'text-white group-hover:text-gray-200 animate-pulse opacity-100 duration-500', url: 'https://react.dev' },
  { name: 'TypeScript', icon: SiTypescript, iconColor: 'text-[#3178C6] group-hover:text-[#3178C6]/90 duration-200', textColor: 'text-white group-hover:text-gray-200 animate-pulse opacity-100 duration-500', url: 'https://www.typescriptlang.org' },
  { name: 'JavaScript', icon: SiJavascript, iconColor: 'text-[#F7DF1E] group-hover:text-[#F7DF1E]/90 duration-200', textColor: 'text-white group-hover:text-gray-200 animate-pulse opacity-100 duration-500', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'Tailwind', icon: SiTailwindcss, iconColor: 'text-[#38BDF8] group-hover:text-[#38BDF8]/90 duration-200', textColor: 'text-white group-hover:text-gray-200 animate-pulse opacity-100 duration-500', url: 'https://tailwindcss.com' },
  { name: 'Vite', icon: SiVite, iconColor: 'text-[#646CFF] group-hover:text-[#646CFF]/90 duration-200', textColor: 'text-white group-hover:text-gray-200 animate-pulse opacity-100 duration-500', url: 'https://vitejs.dev' },
  { name: 'GSAP', icon: SiGsap, iconColor: 'text-[#239BFF] group-hover:text-[#239BFF]/90 duration-200', textColor: 'text-white group-hover:text-gray-200 animate-pulse opacity-100 duration-500', url: 'https://gsap.com' },
  { name: 'TanStack Query', icon: FaReact, iconColor: 'text-[#F6B300] group-hover:text-[#F6B300]/90 duration-200', textColor: 'text-white group-hover:text-gray-200 animate-pulse opacity-100 duration-500', url: 'https://tanstack.com/query/latest' },
  { name: 'Zustand', icon: SiZod, iconColor: 'text-[#EF4D56] group-hover:text-[#EF4D56]/90 duration-200', textColor: 'text-white group-hover:text-gray-200 animate-pulse opacity-100 duration-500', url: 'https://zustand-demo.pmnd.rs' },
  { name: 'Framer Motion', icon: FaReact, iconColor: 'text-[#0055FF] group-hover:text-[#0055FF]/90 duration-200', textColor: 'text-white group-hover:text-gray-200 animate-pulse opacity-100 duration-500', url: 'https://www.framer.com/motion' },
  { name: 'HTML', icon: FaHtml5, iconColor: 'text-[#E34F26] group-hover:text-[#E34F26]/90 duration-200', textColor: 'text-white group-hover:text-gray-200 animate-pulse opacity-100 duration-500', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', icon: FaCss3Alt, iconColor: 'text-[#1572B6] group-hover:text-[#1572B6]/90 duration-200', textColor: 'text-white group-hover:text-gray-200 animate-pulse opacity-100 duration-500', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
];

const TechStack = () => {
  return (
    <section className='px-6 mt-10.5 mb-0 min-h-50'>
      <h2 className='text-[16px] font-semibold mb-8 text-gray-700  text-start'>Tech Stack</h2>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-11 gap-4 max-w-5xl mx-auto'>
        {techStack.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className='group cursor-pointer p-3 rounded-xl bg-gray-900/30 hover:bg-gray-900/50 backdrop-blur-md flex flex-col items-center gap-2 transition-all duration-400 ease-out hover:scale-105'
              style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'both' }}
              onClick={() => window.open(tech.url, '_blank', 'noopener,noreferrer')}
              title={`${tech.name} official website`}
            >
              <div className='p-2.5 rounded-lg bg-gray-950/50 hover:bg-gray-900/70 transition-all duration-300'>
                <Icon className={`w-6 h-6 ${tech.iconColor} drop-shadow-lg`} />
              </div>
              <span className={`text-xs font-mono font-semibold ${tech.textColor} tracking-tight text-center leading-tight px-1`}>
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;

