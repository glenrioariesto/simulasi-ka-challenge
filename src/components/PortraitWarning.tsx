import { RotateCw, Smartphone } from 'lucide-react';

export function PortraitWarning() {
  return (
    <div className="hidden portrait:flex fixed inset-0 z-[9999] bg-[#FEF8F0] text-[#1C1917] flex-col items-center justify-center text-center p-6 select-none font-mono">
      <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
        {/* Phone frame with custom rotate animation */}
        <div 
          className="w-12 h-20 border-4 border-[#1C1917] rounded-xl bg-white flex items-center justify-center transition-transform" 
          style={{ 
            animation: 'portraitRotate 0.9s ease-in-out infinite' 
          }}
        >
          <Smartphone className="w-6 h-6 text-[#e76f51]" />
        </div>
        
        {/* Curved arrow indicator */}
        <RotateCw className="w-8 h-8 text-[#f4a261] absolute -top-1 -right-1 animate-spin" />
      </div>

      <h2 className="text-sm font-black tracking-wider text-[#1C1917] mb-2 uppercase font-display">
        Gunakan Orientasi Horizontal
      </h2>
      <p className="text-xs text-[#78716C] max-w-xs leading-relaxed font-sans font-medium">
        Silakan putar perangkat Anda ke lanskap (horizontal) untuk kenyamanan melihat ruang simulasi dan mencari objek bermata.
      </p>

      {/* Embedded keyframes for custom phone rotation animation */}
      <style>{`
        @keyframes portraitRotate {
          0%, 20% { transform: rotate(0deg); }
          50%, 80% { transform: rotate(-90deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
