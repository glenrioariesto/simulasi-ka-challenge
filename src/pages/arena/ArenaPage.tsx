import { Check, X, HelpCircle, Sparkles } from 'lucide-react';
import type { ObjectWithEyes, UserAnswer } from '../../types';
import { OBJECTS_DATA } from '../../data/objects';
const kaSimulasiSvg = `${import.meta.env.BASE_URL}ka-simulasi.svg`;
import { InteractiveGridBg } from '../../components/InteractiveGridBg';

interface ArenaPageProps {
  activeRoom: number;
  activeObject: ObjectWithEyes | null;
  feedback: { isCorrect: boolean; message: string } | null;
  answers: Record<string, UserAnswer>;
  selectObject: (obj: ObjectWithEyes) => void;
  handleAnswer: (chosenIsAI: boolean) => void;
  closePopup: () => void;
  changeRoom: (roomNum: number) => void;
  getScore: () => number;
  restartInvestigation: () => void;
}

export function ArenaPage({
  activeObject,
  feedback,
  answers,
  selectObject,
  handleAnswer,
  closePopup,
  getScore,
  restartInvestigation
}: ArenaPageProps) {
  
  const totalSolved = Object.keys(answers).length;
  const currentScore = getScore();

  // Dynamic bubble positioning variables to prevent clipping
  let cardPositionClass = '-translate-x-1/2';
  let tailPositionClass = 'left-1/2 -translate-x-1/2';
  
  if (activeObject) {
    if (activeObject.x < 28) {
      cardPositionClass = '-translate-x-6';
      tailPositionClass = 'left-6';
    } else if (activeObject.x > 72) {
      cardPositionClass = '-translate-x-[calc(100%-24px)]';
      tailPositionClass = 'right-6';
    }
  }

  return (
    <div className="h-screen w-screen bg-[#FEF8F0] flex items-center justify-center p-3 sm:p-5 overflow-hidden relative select-none">
      {/* Warm Peach/Cream Interactive Grid Canvas behind the game board */}
      <InteractiveGridBg />

      {/* 16:9 Aspect Ratio Game Board - Scaled automatically to fit any device height/width */}
      {/* Note: overflow-hidden is removed here so speech bubble popups can extend slightly outside the canvas bounds without clipping */}
      <div className="relative w-full h-full max-w-[177.78vh] max-h-[56.25vw] aspect-[16/9] bg-white z-10">
        
        {/* Floating Exit Button */}
        <button
          type="button"
          onClick={restartInvestigation}
          className="absolute top-3 left-3 sm:top-4 sm:left-4 z-30 px-3 py-1.5 bg-white border-2 border-black rounded-xl text-[10px] sm:text-xs font-black uppercase text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer transition-all"
        >
          ← Keluar
        </button>

        {/* Floating Score Badge */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 px-3 py-1.5 bg-white border-2 border-black rounded-xl text-[10px] sm:text-xs font-black text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 font-mono select-none">
          <Sparkles className="w-3.5 h-3.5 text-[#e76f51]" />
          <span>Skor: {currentScore} / {OBJECTS_DATA.length}</span>
        </div>

        {/* Main SVG Simulation Map */}
        <object 
          data={kaSimulasiSvg} 
          type="image/svg+xml"
          className="w-full h-full object-fill pointer-events-none rounded-3xl"
        >
          Peta Ruang Simulasi
        </object>

        {/* Backdrop click barrier when popup is open */}
        {activeObject && (
          <div 
            onClick={closePopup}
            className="absolute inset-0 bg-black/15 backdrop-blur-[2px] z-30 cursor-pointer rounded-3xl"
          ></div>
        )}

        {/* Interactive Eye Hotspots */}
        {OBJECTS_DATA.map((obj) => {
          const ans = answers[obj.id];
          const isAnswered = !!ans;
          
          return (
            <button
              type="button"
              key={obj.id}
              onClick={() => selectObject(obj)}
              className="absolute cursor-pointer flex items-center justify-center -translate-x-1/2 -translate-y-1/2 group outline-none z-20"
              style={{
                left: `${obj.x}%`,
                top: `${obj.y}%`,
                width: '32px',
                height: '32px'
              }}
            >
              {/* Outer Pulsing Indicator (only if not answered yet) */}
              {!isAnswered && (
                <span className="absolute inset-0 rounded-full bg-[#f4a261]/25 border border-[#e76f51]/35 animate-pulse-ring"></span>
              )}

              {/* Core Indicator Node */}
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 shadow-md ${
                isAnswered
                  ? ans.isCorrect 
                    ? 'bg-[#2ecc71] border-black text-black scale-95 shadow-sm' 
                    : 'bg-[#e74c3c] border-black text-black scale-95 shadow-sm'
                  : 'bg-white border-[#1C1917] text-[#1C1917] group-hover:scale-110 group-hover:bg-[#FEF8F0]'
              }`}>
                {isAnswered ? (
                  ans.isCorrect ? <Check className="w-3 h-3 stroke-[3px]" /> : <X className="w-3 h-3 stroke-[3px]" />
                ) : (
                  <span className="w-1.5 h-1.5 bg-[#e76f51] rounded-full group-hover:bg-[#f4a261] animate-pulse"></span>
                )}
              </div>
              
              {/* Label tooltip on hover */}
              {!isAnswered && (
                <div className="absolute top-7 left-1/2 -translate-x-1/2 bg-[#1C1917] border border-black text-[#FEF8F0] text-[8px] font-mono font-bold px-1.5 py-0.5 rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                  Periksa Objek
                </div>
              )}
            </button>
          );
        })}

        {/* FLOATING SPEECH BUBBLE POPUP (overlaid on top of active character) */}
        {activeObject && (
          <div 
            className={`absolute bg-white border-[3px] border-black text-black rounded-[24px] p-5 shadow-2xl z-40 w-72 sm:w-80 select-none animate-fadeIn ${cardPositionClass} ${
              activeObject.y < 50 
                ? 'mt-5' // Place below
                : '-translate-y-full -mt-14' // Place above
            }`}
            style={{
              left: `${activeObject.x}%`,
              top: `${activeObject.y}%`
            }}
          >
            {/* Speech Bubble Tail */}
            <div className={`absolute w-3.5 h-3.5 bg-white border-black rotate-45 z-10 ${tailPositionClass} ${
              activeObject.y < 50
                ? 'border-t-[3px] border-l-[3px] -top-[9px]' // Point up
                : 'border-b-[3px] border-r-[3px] -bottom-[9px]' // Point down
            }`}></div>

            {/* Close Button */}
            <button
              type="button"
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-black transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Question state */}
            {!feedback ? (
              <div className="text-center font-sans">
                <p className="text-xs font-extrabold text-black mb-3 leading-relaxed">
                  Halo, aku {activeObject.name.split(',')[0]}, coba tebak, apakah aku termasuk KA?
                </p>
                
                {/* YA/BUKAN Action Buttons (matches comic reference style) */}
                <div className="flex gap-3 justify-center mt-4">
                  <button
                    type="button"
                    onClick={() => handleAnswer(true)}
                    className="flex-1 py-2 bg-[#2ecc71] hover:bg-[#27ae60] border-[2px] border-black text-black font-black text-xs uppercase tracking-wider rounded-xl cursor-pointer transition-colors shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_rgba(0,0,0,1)]"
                  >
                    YA!
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAnswer(false)}
                    className="flex-1 py-2 bg-[#e74c3c] hover:bg-[#c0392b] border-[2px] border-black text-black font-black text-xs uppercase tracking-wider rounded-xl cursor-pointer transition-colors shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_rgba(0,0,0,1)]"
                  >
                    BUKAN
                  </button>
                </div>
              </div>
            ) : (
              // Answer Feedback state
              <div className="font-sans">
                <div className="flex items-center gap-1.5 mb-2.5">
                  {feedback.isCorrect ? (
                    <span className="text-emerald-600 font-extrabold text-xs">✓ BENAR!</span>
                  ) : (
                    <span className="text-rose-600 font-extrabold text-xs">✗ SALAH!</span>
                  )}
                </div>
                
                <p className="text-[11px] sm:text-xs text-black leading-relaxed text-justify font-medium mb-4">
                  {feedback.message}
                </p>

                <button
                  type="button"
                  onClick={closePopup}
                  className="w-full py-2 bg-gray-100 hover:bg-gray-200 border-2 border-black text-black font-extrabold rounded-xl text-xs transition-colors cursor-pointer text-center shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_rgba(0,0,0,1)]"
                >
                  Kembali ke Ruangan
                </button>
              </div>
            )}
          </div>
        )}

        {/* Guide Overlay Help */}
        {totalSolved === 0 && (
          <div className="absolute top-12 right-3 sm:top-14 sm:right-4 z-35 bg-white/90 backdrop-blur-sm border-2 border-black px-2.5 py-1 rounded-lg flex items-center gap-1.5 text-[8px] sm:text-[9px] font-mono text-black font-extrabold select-none pointer-events-none animate-bounce">
            <HelpCircle className="w-3.5 h-3.5 text-[#e76f51]" />
            <span>Temukan objek bermata di ruangan ini dan klik!</span>
          </div>
        )}
      </div>

    </div>
  );
}
