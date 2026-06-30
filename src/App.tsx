import { useGameState } from './hooks/useGameState';
import { SplashPage } from './pages/splash/SplashPage';
import { ArenaPage } from './pages/arena/ArenaPage';
import { ResultPage } from './pages/result/ResultPage';
import { PortraitWarning } from './components/PortraitWarning';

export default function App() {
  const {
    pageView,
    activeRoom,
    activeObject,
    feedback,
    answers,
    startInvestigation,
    selectObject,
    handleAnswer,
    closePopup,
    changeRoom,
    getScore,
    restartInvestigation
  } = useGameState();

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#0a0915] flex flex-col antialiased text-indigo-200 relative">
      {/* Landscape orientation warning for mobile */}
      <PortraitWarning />

      {/* Pages Switcher */}
      {pageView === 'splash' && (
        <SplashPage onStart={startInvestigation} />
      )}

      {pageView === 'arena' && (
        <ArenaPage
          activeRoom={activeRoom}
          activeObject={activeObject}
          feedback={feedback}
          answers={answers}
          selectObject={selectObject}
          handleAnswer={handleAnswer}
          closePopup={closePopup}
          changeRoom={changeRoom}
          getScore={getScore}
          restartInvestigation={restartInvestigation}
        />
      )}

      {pageView === 'result' && (
        <ResultPage
          score={getScore()}
          answers={answers}
          onRestart={restartInvestigation}
        />
      )}
    </div>
  );
}
