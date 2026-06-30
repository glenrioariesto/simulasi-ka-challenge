import { ArrowRight } from 'lucide-react';
const logoPusbuk = `${import.meta.env.BASE_URL}logo-pusbuk.webp`;
import { InteractiveGridBg } from '../../components/InteractiveGridBg';

interface SplashPageProps {
  onStart: () => void;
}

export function SplashPage({ onStart }: SplashPageProps) {
  return (
    <div className="relative max-h-screen h-screen w-full flex flex-col items-center justify-center p-6 text-center overflow-hidden bg-[#FEF8F0] selection:bg-indigo-500/30 font-sans leading-relaxed">
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

      {/* Background Decorative Glow Circles */}
      <div className="absolute -top-[20%] -left-[20%] w-[60%] aspect-square rounded-full bg-[#f4a261]/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-[20%] -right-[20%] w-[60%] aspect-square rounded-full bg-[#e76f51]/5 blur-[120px] pointer-events-none"></div>

      {/* Centered Splash Hero Panel */}
      <div className="z-10 max-w-xl flex flex-col items-center">
        {/* Tech Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f4a261]/20 border border-[#e76f51]/30 rounded-full text-[11px] sm:text-xs font-bold text-[#1C1917] mb-6 uppercase tracking-widest animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-[#e76f51] animate-pulse"></span>
          Kecerdasan Artifisial (KA)
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1C1917] leading-tight mb-5 animate-fadeIn" style={{ animationDelay: '100ms' }}>
          Detektor Pintar KA
        </h1>

        {/* Subtext description */}
        <p className="text-xs sm:text-sm md:text-base text-[#57534E] max-w-md sm:max-w-lg leading-relaxed mb-8 px-4 animate-fadeIn" style={{ animationDelay: '200ms' }}>
          Temukan objek-objek bermata di dalam ruangan. Uji kemampuan analisismu untuk membedakan manakah sistem teknologi cerdas (AI/KA) atau sekadar sensor otomatis konvensional biasa!
        </p>

        {/* Start Button */}
        <div className="animate-fadeIn" style={{ animationDelay: '300ms' }}>
          <button
            onClick={onStart}
            className="px-8 py-4 bg-[#e76f51] hover:bg-[#d65f42] border-[3px] border-black text-white font-bold text-sm sm:text-base rounded-2xl cursor-pointer shadow-[4px_4px_0px_rgba(28,25,23,1)] hover:scale-[1.02] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_rgba(28,25,23,1)] transition-all flex items-center gap-2"
          >
            Mulai Simulasi <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Decorative Bottom Slogan */}
      <div className="absolute bottom-6 text-[10px] sm:text-xs text-[#78716C] font-mono tracking-wider select-none animate-fadeIn">
        KATEGORI: SAINS KOMPUTER • KECERDASAN ARTIFISIAL • IDENTIFIKASI
      </div>
    </div>
  );
}
