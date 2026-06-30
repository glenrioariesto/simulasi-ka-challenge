export interface ObjectWithEyes {
  id: string;
  name: string;
  question: string;
  isAI: boolean;
  explanation: string;
  x: number; // percentage from left of full SVG (0 - 100)
  y: number; // percentage from top of full SVG (0 - 100)
  room: number; // 1, 2, 3, or 4
}

export interface UserAnswer {
  objectId: string;
  chosenIsAI: boolean;
  isCorrect: boolean;
}
