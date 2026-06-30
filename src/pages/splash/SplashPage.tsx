import { Play } from 'lucide-react';
import logoPusbuk from '../../assets/logo-pusbuk.webp';
import { InteractiveGridBg } from '../../components/InteractiveGridBg';

interface SplashPageProps {
  onStart: () => void;
}

export function SplashPage({ onStart }: SplashPageProps) {
  return (
    <div className="min-h-screen w-screen bg-[#0a0915] relative flex flex-col items-center justify-center p-4 md:p-6 text-indigo-200 scanlines select-none overflow-hidden animate-fadeIn">
      {/* Interactive Canvas Background Grid */}
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
        {/* Title (h1) */}
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display mb-3 select-none uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-500">
          Detektor Pintar KA
        </h1>
        
        {/* Subtitle (h2) */}
        <h2 className="text-xs md:text-sm font-mono text-indigo-400 mb-8 uppercase tracking-widest font-black">
          Simulasi Identifikasi Kecerdasan Artifisial
        </h2>

        {/* Start Button */}
        <button
          type="button"
          onClick={onStart}
          className="group relative px-10 py-4 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 rounded-xl font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.03] active:scale-[0.98]"
        >
          {/* Inner Glow Border */}
          <span className="absolute inset-px bg-[#0a0915] rounded-[10px] group-hover:bg-transparent transition-colors duration-300"></span>
          
          {/* Label */}
          <span className="relative z-10 flex items-center gap-2 group-hover:text-white text-indigo-300 font-mono transition-colors">
            <Play className="w-4 h-4 text-indigo-400 group-hover:text-white fill-none" />
            <span>Mulai Simulasi</span>
          </span>
        </button>
      </div>
    </div>
  );
}
