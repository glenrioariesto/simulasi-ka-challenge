import { Play } from 'lucide-react';
import logoPusbuk from '../../assets/logo-pusbuk.webp';
import { InteractiveGridBg } from '../../components/InteractiveGridBg';

interface SplashPageProps {
  onStart: () => void;
}

export function SplashPage({ onStart }: SplashPageProps) {
  return (
    <div className="min-h-screen w-screen bg-[#FEF8F0] relative flex flex-col items-center justify-center p-4 md:p-6 select-none overflow-hidden animate-fadeIn">
      {/* Warm Peach/Cream Interactive Grid Canvas */}
      <InteractiveGridBg />

      {/* Pusbuk Logo on Absolute Top Left - Responsive Size */}
      <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-50 shrink-0 animate-fadeIn">
        <img 
          src={logoPusbuk} 
          alt="Logo Pusbuk" 
          className="h-10 sm:h-14 md:h-16 w-auto object-contain"
        />
      </div>

      {/* Main Container */}
      <div className="z-10 max-w-xl w-full flex flex-col items-center text-center p-4">
        {/* Title (h1) with warm terracotta-to-peach gradient */}
        <h1 className="text-3xl md:text-5xl font-black tracking-tight font-display mb-3 select-none uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#e76f51] to-[#f4a261]">
          Detektor Pintar KA
        </h1>
        
        {/* Subtitle (h2) in Space Grotesk/sans style */}
        <h2 className="text-xs md:text-sm font-mono text-[#78716C] mb-8 uppercase tracking-widest font-black">
          Simulasi Identifikasi Kecerdasan Artifisial
        </h2>

        {/* Start Button - Matches trash sorter solid border style */}
        <button
          type="button"
          onClick={onStart}
          className="group relative px-10 py-4 bg-[#FFFFFF] hover:bg-[#FEF8F0] border-[3px] border-[#1C1917] rounded-2xl font-black text-xs md:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-[4px_4px_0px_rgba(28,25,23,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_rgba(28,25,23,1)]"
        >
          {/* Label */}
          <span className="relative z-10 flex items-center gap-2 text-[#1C1917] font-mono">
            <Play className="w-4 h-4 text-[#e76f51] fill-[#e76f51]" />
            <span>Mulai Simulasi</span>
          </span>
        </button>
      </div>
    </div>
  );
}
