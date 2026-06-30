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
    rankColor = 'border-emerald-500 text-emerald-700 bg-emerald-50';
  } else if (score >= 8) {
    rankTitle = 'Analis Sistem Pratama 🔍';
    rankDesc = 'Kerja bagus! Kamu sudah bisa membedakan sebagian besar jenis teknologi dengan baik. Tinggal sedikit ketelitian lagi untuk memahami logika sistem otomatis murni.';
    rankColor = 'border-amber-500 text-amber-700 bg-amber-50';
  } else {
    rankTitle = 'Teknisi Magang 🛠️';
    rankDesc = 'Jangan berkecil hati! Mari pelajari kembali perbedaan fitur sensor cahaya/suhu sederhana dengan sistem cerdas AI yang bisa belajar secara mandiri.';
    rankColor = 'border-rose-500 text-rose-700 bg-rose-50';
  }

  return (
    <div className="h-screen w-screen bg-[#FEF8F0] text-[#1C1917] flex flex-col items-center justify-center p-4 md:p-6 overflow-hidden relative">
      {/* Decorative peach/cream radial gradients */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#f4a261]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#e76f51]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="z-10 max-w-2xl w-full flex flex-col items-center select-none animate-fadeIn">
        
        {/* Victory Badge */}
        <div className="w-12 h-12 rounded-full bg-white border-3 border-[#1C1917] flex items-center justify-center mb-3 shadow-[3px_3px_0px_rgba(28,25,23,1)]">
          <Award className="w-6 h-6 text-[#e76f51]" />
        </div>

        {/* Headings */}
        <h2 className="text-xl md:text-2xl font-black font-display mb-1 text-center uppercase tracking-wide text-[#1C1917]">
          Evaluasi Simulasi Identifikasi KA
        </h2>
        <p className="text-[9px] font-mono text-[#78716C] uppercase tracking-widest mb-5 font-bold">
          Misi Selesai Dievaluasi
        </p>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 w-full mb-6">
          
          {/* Circular Score Gauge */}
          <div className="sm:col-span-5 bg-white border-3 border-[#1C1917] rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-[4px_4px_0px_rgba(28,25,23,1)]">
            <span className="text-[8px] font-mono font-bold text-[#78716C] uppercase tracking-widest mb-3">
              Indeks Akurasi
            </span>
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-[#FEF8F0]"></div>
              <div 
                className="absolute inset-0 rounded-full border-4 border-[#e76f51]"
                style={{
                  clipPath: `polygon(50% 50%, -50% -50%, ${accuracy >= 25 ? '150% -50%' : '50% -50%'}, ${accuracy >= 50 ? '150% 150%' : '50% -50%'}, ${accuracy >= 75 ? '-50% 150%' : '50% -50%'}, ${accuracy >= 100 ? '-50% -50%' : '50% -50%'})`,
                  transform: 'rotate(45deg)'
                }}
              ></div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black font-mono text-[#1C1917]">{accuracy}%</span>
                <span className="text-[7px] font-mono text-[#57534E] uppercase font-bold mt-0.5">
                  {score} / {OBJECTS_DATA.length} Benar
                </span>
              </div>
            </div>
          </div>

          {/* Rank Badge description */}
          <div className="sm:col-span-7 bg-white border-3 border-[#1C1917] rounded-2xl p-4 flex flex-col justify-center relative overflow-hidden shadow-[4px_4px_0px_rgba(28,25,23,1)]">
            <span className="text-[8px] font-mono font-bold text-[#78716C] uppercase tracking-widest mb-1.5">
              Pangkat Kredibilitas
            </span>
            
            <div className={`inline-flex self-start px-2.5 py-0.5 rounded text-[10px] font-mono font-bold mb-2 border ${rankColor}`}>
              {rankTitle}
            </div>

            <p className="text-[#3C3633] text-xs leading-relaxed mb-3 font-sans font-medium text-justify">
              {rankDesc}
            </p>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <button
            type="button"
            onClick={() => setIsDetailOpen(true)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-[#FEF8F0] border-3 border-[#1C1917] text-[#1C1917] font-mono text-xs font-bold rounded-xl transition-all cursor-pointer shadow-[3px_3px_0px_rgba(28,25,23,1)] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-[1.5px_1.5px_0px_rgba(28,25,23,1)]"
          >
            <List className="w-4 h-4 text-[#e76f51]" />
            <span>Lihat Detail Temuan</span>
          </button>

          <button
            type="button"
            onClick={onRestart}
            className="group relative px-6 py-3 bg-white hover:bg-[#FEF8F0] border-3 border-[#1C1917] text-[#1C1917] rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-[3px_3px_0px_rgba(28,25,23,1)] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-[1.5px_1.5px_0px_rgba(28,25,23,1)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 font-mono">
              <RotateCcw className="w-4 h-4 text-[#e76f51]" />
              <span>Mulai Ulang Simulasi</span>
            </span>
          </button>
        </div>
      </div>

      {/* DETAIL TABLE MODAL */}
      {isDetailOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4 animate-fadeIn">
          <div className="w-full max-w-2xl bg-white border-3 border-[#1C1917] rounded-2xl p-5 shadow-2xl relative font-mono flex flex-col max-h-[85vh] overflow-hidden text-[#1C1917]">
            <button
              type="button"
              onClick={() => setIsDetailOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 border-b-2 border-[#EED4B7] pb-3 mb-4 shrink-0">
              <BookOpen className="w-4 h-4 text-[#e76f51]" />
              <h3 className="font-sans text-sm font-black text-[#1C1917] uppercase tracking-wider">
                Rekapitulasi Temuan Objek
              </h3>
            </div>

            {/* Table Scroll Area */}
            <div className="flex-1 overflow-y-auto pr-1">
              <table className="w-full text-left text-xs text-[#44403C]">
                <thead>
                  <tr className="border-b border-[#EED4B7] text-[#78716C] pb-2 font-bold uppercase tracking-wider">
                    <th className="pb-2">Objek</th>
                    <th className="pb-2 text-center w-24">Tipe Asli</th>
                    <th className="pb-2 text-center w-24">Jawabanmu</th>
                    <th className="pb-2 text-center w-24">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3E2CF]">
                  {OBJECTS_DATA.map((obj) => {
                    const ans = answers[obj.id];
                    return (
                      <tr key={obj.id} className="hover:bg-[#FEF8F0]/60">
                        <td className="py-2.5 font-sans">
                          <div className="font-bold text-[#1C1917]">{obj.name}</div>
                          <div className="text-[9px] text-[#78716C] font-mono uppercase">Ruang Tamu</div>
                        </td>
                        <td className="py-2.5 text-center">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                            obj.isAI ? 'border-violet-500/30 text-violet-750 bg-violet-50' : 'border-amber-600/30 text-amber-700 bg-amber-50'
                          }`}>
                            {obj.isAI ? 'KA' : 'Bukan KA'}
                          </span>
                        </td>
                        <td className="py-2.5 text-center">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                            ans ? ans.chosenIsAI ? 'border-violet-500/30 text-violet-750 bg-violet-50' : 'border-amber-600/30 text-amber-700 bg-amber-50' : 'border-transparent text-gray-400'
                          }`}>
                            {ans ? ans.chosenIsAI ? 'KA' : 'Bukan KA' : '-'}
                          </span>
                        </td>
                        <td className="py-2.5 text-center">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold border ${
                            ans && ans.isCorrect ? 'border-emerald-500/30 text-emerald-700 bg-emerald-50' : 'border-rose-500/30 text-rose-700 bg-rose-50'
                          }`}>
                            {ans && ans.isCorrect ? (
                              <><Check className="w-3 h-3 text-emerald-650 stroke-[3px]" /> Benar</>
                            ) : (
                              <><X className="w-3 h-3 text-rose-600 stroke-[3px]" /> Salah</>
                            )}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 pt-3 border-t border-[#EED4B7] text-center shrink-0">
              <button
                type="button"
                onClick={() => setIsDetailOpen(false)}
                className="px-6 py-2 bg-white hover:bg-[#FEF8F0] border-2 border-[#1C1917] text-black font-bold text-xs rounded-lg transition-colors cursor-pointer shadow-[2px_2px_0px_rgba(28,25,23,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_rgba(28,25,23,1)]"
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
