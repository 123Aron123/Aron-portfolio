import { Home, User, Briefcase, Mail } from 'lucide-react';
import { motion } from 'motion/react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:right-8 md:top-1/2 md:-translate-y-1/2 z-50">
      {/* Mobile Bar & Desktop Sidebar Dual Design */}
      <div className="flex flex-row md:flex-col gap-3 sm:gap-4 md:gap-5 bg-neutral-900/80 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border border-white/10 md:border-0 rounded-full px-4 py-2.5 sm:px-5 sm:py-3 md:p-0 shadow-2xl md:shadow-none items-center justify-center">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              id={`nav-btn-${item.id}`}
              className="group relative flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full cursor-pointer transition-all duration-300 focus:outline-none border border-white/5 shadow-md"
              style={{
                backgroundColor: isActive ? '#FF6B00' : 'rgba(255, 255, 255, 0.04)',
                boxShadow: isActive ? '0 0 15px rgba(255, 107, 0, 0.4)' : 'none',
              }}
            >
              {/* Icon */}
              <IconComponent
                className="w-4.5 h-4.5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  color: isActive ? '#0E0E10' : '#F7F5F2'
                }}
              />

              {/* Hover Tooltip (Desktop only) */}
              <div className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
                <div className="relative bg-[#0E0E10] text-[#FF6B00] border border-white/10 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
                  {item.label}
                  {/* Arrow pin */}
                  <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0E0E10] border-r border-t border-white/10 rotate-45" />
                </div>
              </div>

              {/* Active Indicator Splash Ring */}
              {isActive && (
                <motion.div
                  layoutId="navActiveSplash"
                  className="absolute inset-0 rounded-full border border-[#FF6B00] scale-125 opacity-30 pointer-events-none"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

