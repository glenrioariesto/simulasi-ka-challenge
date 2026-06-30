import { useState } from 'react';
import type { ObjectWithEyes, UserAnswer } from '../types';
import { OBJECTS_DATA } from '../data/objects';

export function useGameState() {
  const [pageView, setPageView] = useState<'splash' | 'arena' | 'result'>('splash');
  const [activeRoom, setActiveRoom] = useState<number>(1);
  const [activeObject, setActiveObject] = useState<ObjectWithEyes | null>(null);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
  const [answers, setAnswers] = useState<Record<string, UserAnswer>>({});

  const startInvestigation = () => {
    setPageView('arena');
    setActiveRoom(1);
    setActiveObject(null);
    setFeedback(null);
    setAnswers({});
  };

  const selectObject = (obj: ObjectWithEyes) => {
    // If already answered, don't reopen or let them play again if we want.
    // The user requirement says: "Klik objek yang memiliki mata, muncul pop up..."
    // If they already answered, we can either allow viewing the explanation or prevent re-answering.
    // Preventing re-answering is standard to keep score accurate, but we can show the explanation if already answered!
    // Let's check: if already answered, we don't open the "YA/BUKAN" popup, or we open a read-only details popup.
    // That is very user friendly!
    setActiveObject(obj);
    setFeedback(null);
  };

  const handleAnswer = (chosenIsAI: boolean) => {
    if (!activeObject) return;

    const isCorrect = activeObject.isAI === chosenIsAI;
    const answerKey = activeObject.id;

    // Save answer
    const newAnswer: UserAnswer = {
      objectId: activeObject.id,
      chosenIsAI,
      isCorrect
    };

    setAnswers(prev => ({
      ...prev,
      [answerKey]: newAnswer
    }));

    // Generate feedback message based on requirements:
    // "Saat jawaban benar, maka akan menampilkan tulisan berbeda, yaitu 'Yeay, kamu berhasil menebak siapa aku dengan benar'"
    // "Tapi jika jawabannya salah, tulisan yang muncul adalah 'Yah… sepertinya kamu salah menebak siapa aku, sebenarnya aku adalah ……'"
    let message = '';
    if (isCorrect) {
      message = `Yeay, kamu berhasil menebak siapa aku dengan benar! 🎉 Sebenarnya aku adalah ${activeObject.explanation}`;
    } else {
      message = `Yah… sepertinya kamu salah menebak siapa aku. Sebenarnya aku adalah ${activeObject.explanation}`;
    }

    setFeedback({
      isCorrect,
      message
    });
  };

  const closePopup = () => {
    setActiveObject(null);
    setFeedback(null);
    
    // Check if all 12 objects have been answered
    const totalAnswered = Object.keys(answers).length;
    if (totalAnswered === OBJECTS_DATA.length) {
      setPageView('result');
    }
  };

  const changeRoom = (roomNum: number) => {
    if (roomNum >= 1 && roomNum <= 4) {
      setActiveRoom(roomNum);
      setActiveObject(null);
      setFeedback(null);
    }
  };

  const getScore = () => {
    return Object.values(answers).filter(a => a.isCorrect).length;
  };

  const restartInvestigation = () => {
    setPageView('splash');
    setAnswers({});
    setActiveRoom(1);
    setActiveObject(null);
    setFeedback(null);
  };

  return {
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
  };
}
