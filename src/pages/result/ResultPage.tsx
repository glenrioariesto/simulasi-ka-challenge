import { useState } from 'react';
import { Award, RotateCcw, Check, BookOpen, X, List } from 'lucide-react';
import type { UserAnswer } from '../../types';
import { OBJECTS_DATA } from '../../data/objects';

interface ResultPageProps {
  score: number;
  answers: Record<string, UserAnswer>;
  onRestart: () => void;
}

export function ResultPage({ score, answers, onRestart }: ResultPageProps) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const accuracy = Math.round((score / OBJECTS_DATA.length) * 100);

  // Evaluate Rank
  let rankTitle = '';
  let rankDesc = '';
  let rankColor = '';

  if (score >= 11) {
    rankTitle = 'Detektif Teknologi Ahli 🏆';
    rankDesc = 'Luar biasa! Kamu sangat memahami perbedaan mendalam antara sistem pintar konvensional (otomatis/sensor) dengan Kecerdasan Artifisial (KA) yang adaptif dan mandiri.';
    rankColor = 'border-emerald-500 text-emerald-400 bg-emerald-950/20';
  } else if (score >= 8) {
    rankTitle = 'Analis Sistem Pratama 🔍';
    rankDesc = 'Kerja bagus! Kamu sudah bisa membedakan sebagian besar jenis teknologi dengan baik. Tinggal sedikit ketelitian lagi untuk memahami logika sistem otomatis murni.';
    rankColor = 'border-indigo-500 text-indigo-400 bg-indigo-950/20';
  } else {
    rankTitle = 'Teknisi Magang 🛠️';
    rankDesc = 'Jangan berkecil hati! Mari pelajari kembali perbedaan fitur sensor cahaya/suhu sederhana dengan sistem cerdas AI yang bisa belajar secara mandiri.';
    rankColor = 'border-rose-500 text-rose-400 bg-rose-950/20';
  }

  return (
    <div className="h-screen w-screen bg-[#0a0915] text-indigo-200 flex flex-col items-center justify-center p-4 md:p-6 scanlines overflow-hidden relative">
      {/* Decorative radial gradients */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="z-10 max-w-2xl w-full flex flex-col items-center select-none animate-fadeIn">
        
        {/* Victory Badge */}
        <div className="w-12 h-12 rounded-full bg-[#0f0e26] border-2 border-indigo-500 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(99,102,241,0.25)]">
          <Award className="w-6 h-6 text-indigo-400" />
        </div>

        {/* Headings */}
        <h2 className="text-xl md:text-2xl font-extrabold font-display mb-1 text-center uppercase tracking-wide text-white">
          Evaluasi Simulasi Identifikasi KA
        </h2>
        <p className="text-[9px] font-mono text-indigo-400 uppercase tracking-widest mb-5 font-bold">
          Misi Selesai Dievaluasi
        </p>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 w-full mb-6">
          
          {/* Circular Score Gauge */}
          <div className="sm:col-span-5 bg-[#0f0e26]/90 border border-indigo-950/40 rounded-xl p-4 flex flex-col items-center justify-center text-center">
            <span className="text-[8px] font-mono font-bold text-indigo-455 uppercase tracking-widest mb-3">
              Indeks Akurasi
            </span>
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-indigo-950"></div>
              <div 
                className="absolute inset-0 rounded-full border-4 border-indigo-500"
                style={{
                  clipPath: `polygon(50% 50%, -50% -50%, ${accuracy >= 25 ? '150% -50%' : '50% -50%'}, ${accuracy >= 50 ? '150% 150%' : '50% -50%'}, ${accuracy >= 75 ? '-50% 150%' : '50% -50%'}, ${accuracy >= 100 ? '-50% -50%' : '50% -50%'})`,
                  transform: 'rotate(45deg)'
                }}
              ></div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black font-mono text-white">{accuracy}%</span>
                <span className="text-[7px] font-mono text-indigo-400 uppercase font-bold mt-0.5">
                  {score} / {OBJECTS_DATA.length} Benar
                </span>
              </div>
            </div>
          </div>

          {/* Rank Badge description */}
          <div className="sm:col-span-7 bg-[#0f0e26]/90 border border-indigo-950/40 rounded-xl p-4 flex flex-col justify-center relative overflow-hidden">
            <span className="text-[8px] font-mono font-bold text-indigo-455 uppercase tracking-widest mb-1.5">
              Pangkat Kredibilitas
            </span>
            
            <div className={`inline-flex self-start px-2.5 py-0.5 rounded text-[10px] font-mono font-bold mb-2 border ${rankColor}`}>
              {rankTitle}
            </div>

            <p className="text-indigo-300 text-xs leading-relaxed mb-3 font-sans font-medium text-justify">
              {rankDesc}
            </p>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <button
            type="button"
            onClick={() => setIsDetailOpen(true)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0f0e26] hover:bg-indigo-950/40 border border-indigo-750 text-indigo-400 font-mono text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md"
          >
            <List className="w-4 h-4" />
            <span>Lihat Detail Temuan</span>
          </button>

          <button
            type="button"
            onClick={onRestart}
            className="group relative px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="absolute inset-px bg-[#0a0915] rounded-[10px] group-hover:bg-transparent transition-colors duration-300"></span>
            
            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black text-indigo-400 font-mono transition-colors">
              <RotateCcw className="w-4 h-4 text-indigo-400 group-hover:text-black" />
              <span>Mulai Ulang Simulasi</span>
            </span>
          </button>
        </div>
      </div>

      {/* DETAIL TABLE MODAL */}
      {isDetailOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn">
          <div className="w-full max-w-2xl bg-[#0f0e26] border-2 border-indigo-900 rounded-2xl p-5 shadow-2xl relative font-mono flex flex-col max-h-[85vh] overflow-hidden text-indigo-200">
            <button
              type="button"
              onClick={() => setIsDetailOpen(false)}
              className="absolute top-3 right-3 text-indigo-400 hover:text-indigo-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 border-b border-indigo-950 pb-3 mb-4 shrink-0">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <h3 className="font-display text-sm font-black text-white uppercase tracking-wider">
                Rekapitulasi Temuan Objek
              </h3>
            </div>

            {/* Table Scroll Area */}
            <div className="flex-1 overflow-y-auto pr-1">
              <table className="w-full text-left text-xs text-indigo-300">
                <thead>
                  <tr className="border-b border-indigo-950 text-indigo-500 pb-2 font-bold uppercase tracking-wider">
                    <th className="pb-2">Objek</th>
                    <th className="pb-2 text-center w-24">Tipe Asli</th>
                    <th className="pb-2 text-center w-24">Jawabanmu</th>
                    <th className="pb-2 text-center w-24">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-indigo-950">
                  {OBJECTS_DATA.map((obj) => {
                    const ans = answers[obj.id];
                    return (
                      <tr key={obj.id} className="hover:bg-indigo-950/20">
                        <td className="py-2.5 font-sans">
                          <div className="font-bold text-white">{obj.name}</div>
                          <div className="text-[9px] text-indigo-400 font-mono uppercase">Ruang {obj.room}</div>
                        </td>
                        <td className="py-2.5 text-center text-indigo-250">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                            obj.isAI ? 'border-violet-500/30 text-violet-400 bg-violet-950/10' : 'border-amber-500/30 text-amber-400 bg-amber-950/10'
                          }`}>
                            {obj.isAI ? 'KA' : 'Bukan KA'}
                          </span>
                        </td>
                        <td className="py-2.5 text-center text-indigo-250">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                            ans ? ans.chosenIsAI ? 'border-violet-500/30 text-violet-400 bg-violet-950/10' : 'border-amber-500/30 text-amber-400 bg-amber-950/10' : 'border-transparent text-gray-500'
                          }`}>
                            {ans ? ans.chosenIsAI ? 'KA' : 'Bukan KA' : '-'}
                          </span>
                        </td>
                        <td className="py-2.5 text-center">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold border ${
                            ans && ans.isCorrect ? 'border-emerald-500/30 text-emerald-450 bg-emerald-950/20' : 'border-rose-500/30 text-rose-450 bg-rose-950/20'
                          }`}>
                            {ans && ans.isCorrect ? (
                              <><Check className="w-3 h-3 text-emerald-450" /> Benar</>
                            ) : (
                              <><X className="w-3 h-3 text-rose-400" /> Salah</>
                            )}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 pt-3 border-t border-indigo-950 text-center shrink-0">
              <button
                type="button"
                onClick={() => setIsDetailOpen(false)}
                className="px-6 py-2 bg-indigo-950 hover:bg-indigo-900 border border-indigo-850 text-indigo-300 rounded-lg text-xs font-bold transition-colors cursor-pointer"
              >
                Tutup Rincian
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
