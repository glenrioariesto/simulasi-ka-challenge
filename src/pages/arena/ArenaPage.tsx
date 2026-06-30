import { ArrowLeft, Check, X, HelpCircle, AlertCircle, Sparkles } from 'lucide-react';
import type { ObjectWithEyes, UserAnswer } from '../../types';
import { OBJECTS_DATA, ROOMS_NAMES } from '../../data/objects';
import kaSimulasiSvg from '../../assets/ka-simulasi.svg';

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
  activeRoom,
  activeObject,
  feedback,
  answers,
  selectObject,
  handleAnswer,
  closePopup,
  changeRoom,
  getScore,
  restartInvestigation
}: ArenaPageProps) {
  
  // Calculate total resolved questions
  const totalSolved = Object.keys(answers).length;
  const currentScore = getScore();

  return (
    <div className="h-screen w-screen bg-[#07060f] text-indigo-200 flex flex-col font-sans overflow-hidden relative select-none">
      
      {/* Navigation & Status Header */}
      <header className="border-b border-indigo-950 bg-[#0f0e26]/90 backdrop-blur-md px-4 py-3 flex items-center justify-between z-10 shrink-0 select-none">
        <button
          type="button"
          onClick={restartInvestigation}
          className="flex items-center gap-1 text-[10px] sm:text-xs font-mono font-bold text-indigo-400 hover:text-indigo-200 transition-colors uppercase cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-indigo-400" />
          <span>Keluar</span>
        </button>

        <div className="flex flex-col items-center">
          <span className="text-[10px] sm:text-xs font-mono text-indigo-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            {ROOMS_NAMES[activeRoom - 1]}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] sm:text-xs font-mono text-indigo-400">Skor:</span>
          <span className="font-mono text-xs sm:text-sm font-black text-indigo-300 bg-indigo-950/50 border border-indigo-900/60 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(99,102,241,0.2)]">
            {currentScore} / {OBJECTS_DATA.length}
          </span>
        </div>
      </header>

      {/* Main Room Viewport */}
      <main className="flex-1 p-3 md:p-4 min-h-0 flex flex-col items-center justify-center relative select-none">
        
        {/* SVG Viewport Container (aspect-video ratio fits perfectly) */}
        <div className="w-full max-w-4xl aspect-[16/9] bg-black/80 border border-indigo-950/60 rounded-2xl overflow-hidden relative shadow-2xl">
          
          {/* Animated Zoom Grid Container */}
          <div 
            className="absolute w-[200%] h-[200%] transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1)"
            style={{
              transform: activeRoom === 1 ? 'translate(0%, 0%)' :
                         activeRoom === 2 ? 'translate(-50%, 0%)' :
                         activeRoom === 3 ? 'translate(0%, -50%)' :
                         'translate(-50%, -50%)'
            }}
          >
            {/* The main SVG simulation map */}
            <object 
              data={kaSimulasiSvg} 
              type="image/svg+xml"
              className="w-full h-full object-fill pointer-events-none"
            >
              Peta Ruang Simulasi
            </object>

            {/* Interactive Eye Hotspots */}
            {OBJECTS_DATA.map((obj) => {
              const ans = answers[obj.id];
              const isAnswered = !!ans;
              
              // Only render interactive items that belong to the active room quadrant area
              // (This prevents clicking hidden characters in other quadrants)
              if (obj.room !== activeRoom) return null;

              return (
                <button
                  type="button"
                  key={obj.id}
                  onClick={() => selectObject(obj)}
                  className="absolute cursor-pointer flex items-center justify-center -translate-x-1/2 -translate-y-1/2 group outline-none"
                  style={{
                    left: `${obj.x}%`,
                    top: `${obj.y}%`,
                    width: '36px',
                    height: '36px'
                  }}
                >
                  {/* Outer Pulsing Indicator (only if not answered yet) */}
                  {!isAnswered && (
                    <span className="absolute inset-0 rounded-full bg-indigo-500/30 border border-indigo-400/40 animate-pulse-ring"></span>
                  )}

                  {/* Core Indicator Node */}
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 shadow-md ${
                    isAnswered
                      ? ans.isCorrect 
                        ? 'bg-emerald-950/80 border-emerald-500 text-emerald-400 scale-95 shadow-emerald-500/20' 
                        : 'bg-rose-950/80 border-rose-500 text-rose-450 scale-95 shadow-rose-500/20'
                      : 'bg-indigo-950/80 border-indigo-400 text-indigo-300 group-hover:scale-110 group-hover:border-fuchsia-400 group-hover:text-fuchsia-300'
                  }`}>
                    {isAnswered ? (
                      ans.isCorrect ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />
                    ) : (
                      <span className="w-2 h-2 bg-indigo-400 rounded-full group-hover:bg-fuchsia-400 animate-pulse"></span>
                    )}
                  </div>
                  
                  {/* Label tooltip on hover */}
                  {!isAnswered && (
                    <div className="absolute top-9 left-1/2 -translate-x-1/2 bg-[#0f0e26] border border-indigo-900 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                      Periksa Objek
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Guide Overlay Grid Help (Shows only when 0 solved to help starting) */}
          {totalSolved === 0 && (
            <div className="absolute top-4 right-4 bg-indigo-950/60 backdrop-blur-sm border border-indigo-850 px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono text-indigo-300 select-none pointer-events-none animate-bounce">
              <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
              <span>Temukan objek bermata di ruangan ini dan klik!</span>
            </div>
          )}
        </div>
      </main>

      {/* Navigation Footer (Room Switch Tabs) */}
      <footer className="border-t border-indigo-950 bg-[#0f0e26]/90 backdrop-blur-md px-4 py-3 shrink-0 z-10 select-none">
        <div className="max-w-xl mx-auto flex items-center justify-between gap-1.5 md:gap-3">
          {[1, 2, 3, 4].map((roomNum) => {
            const isActive = activeRoom === roomNum;
            
            // Count completed objects in this room
            const roomObjects = OBJECTS_DATA.filter(o => o.room === roomNum);
            const roomCompleted = roomObjects.filter(o => !!answers[o.id]).length;
            const isCompleted = roomCompleted === roomObjects.length;

            return (
              <button
                type="button"
                key={roomNum}
                onClick={() => changeRoom(roomNum)}
                className={`flex-1 py-2 sm:py-2.5 px-1.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-b from-indigo-950/40 to-indigo-900/30 border-indigo-500/80 text-white shadow-[0_0_15px_rgba(99,102,241,0.15)] scale-[1.02]'
                    : isCompleted
                      ? 'bg-emerald-950/15 border-emerald-950/40 text-emerald-500/70 hover:text-emerald-400'
                      : 'bg-transparent border-indigo-950 hover:bg-indigo-950/20 text-indigo-400 hover:text-indigo-300'
                }`}
              >
                <span className="text-[9px] sm:text-[10px] font-display font-black tracking-wider uppercase leading-none">
                  Ruang {roomNum}
                </span>
                
                {/* Dots indicator for room progress */}
                <div className="flex gap-1 mt-0.5">
                  {roomObjects.map((obj) => {
                    const ans = answers[obj.id];
                    return (
                      <span
                        key={obj.id}
                        className={`w-1.5 h-1.5 rounded-full ${
                          ans 
                            ? ans.isCorrect 
                              ? 'bg-emerald-500' 
                              : 'bg-rose-500' 
                            : 'bg-indigo-950 border border-indigo-800'
                        }`}
                      ></span>
                    );
                  })}
                </div>
              </button>
            );
          })}
        </div>
      </footer>

      {/* OBJECT DETAILS / GUESSING MODAL OVERLAY */}
      {activeObject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn">
          <div className="w-full max-w-md bg-[#0f0e26] border-2 border-indigo-800 rounded-2xl p-5 shadow-2xl relative font-mono text-indigo-200">
            
            {/* Header info */}
            <div className="flex items-center gap-2 border-b border-indigo-950 pb-2.5 mb-3.5 select-none">
              <HelpCircle className="w-4 h-4 text-indigo-400 shrink-0" />
              <h3 className="text-[10px] md:text-xs font-bold text-indigo-100 uppercase tracking-wider font-mono">
                Identifikasi Sistem Teknologi
              </h3>
            </div>

            {/* Character greeting */}
            <div className="text-center mb-4 select-none">
              <h4 className="text-base font-black text-white font-display mb-1.5">
                {activeObject.name}
              </h4>
              <p className="text-xs text-indigo-300 leading-relaxed font-sans px-2">
                "Halo! {activeObject.question}"
              </p>
            </div>

            {/* Guessing area */}
            {!feedback ? (
              <div className="bg-indigo-950/30 border border-indigo-900/60 rounded-xl p-3.5 mb-4 text-center select-none">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block mb-3 font-mono">
                  Coba tebak, apakah aku termasuk KA?
                </span>
                
                <div className="flex gap-3 justify-center">
                  <button
                    type="button"
                    onClick={() => handleAnswer(true)}
                    className="flex-1 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer transition-colors shadow-md active:scale-95"
                  >
                    YA (KA)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAnswer(false)}
                    className="flex-1 py-2.5 bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer transition-colors shadow-md active:scale-95"
                  >
                    BUKAN
                  </button>
                </div>
              </div>
            ) : (
              // Feedback Message
              <div className="bg-indigo-950/30 border border-indigo-900/60 rounded-xl p-4 mb-4 select-none">
                <div className="flex items-center gap-2 mb-2">
                  {feedback.isCorrect ? (
                    <Check className="w-4 h-4 text-emerald-450 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-rose-450 shrink-0" />
                  )}
                  <span className={`text-[10px] font-bold uppercase tracking-wider font-mono ${
                    feedback.isCorrect ? 'text-emerald-400' : 'text-rose-400'
                  }`}>
                    {feedback.isCorrect ? 'Benar!' : 'Kurang Tepat!'}
                  </span>
                </div>
                
                <p className="text-xs md:text-sm text-indigo-100 leading-relaxed font-sans text-justify font-medium">
                  {feedback.message}
                </p>
              </div>
            )}

            {/* Action buttons */}
            <div className="select-none">
              {feedback ? (
                <button
                  type="button"
                  onClick={closePopup}
                  className="w-full py-2.5 bg-indigo-900 hover:bg-indigo-850 border border-indigo-750 text-indigo-100 rounded-xl text-xs font-bold tracking-wider transition-colors cursor-pointer text-center"
                >
                  Kembali ke Ruangan
                </button>
              ) : (
                <button
                  type="button"
                  onClick={closePopup}
                  className="w-full py-2 bg-transparent text-indigo-400 hover:text-indigo-200 rounded-xl text-[10px] font-mono transition-colors cursor-pointer text-center"
                >
                  Tutup Berkas
                </button>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
