export type dreamCoachStartResponse = {
  sessionId: string;
};

//챗봇 대화 타입 정의
export interface DreamCoachTurnAnalysis {
  themes: string[];
  emotions: string[];
  signals: string[];
}

export interface DreamCoachTurn {
  type: string;
  reply: string;
  question: string;
  analysis: DreamCoachTurnAnalysis;
  advice: string;
}

export interface DreamCoachMsgResponse {
  sessionId: string;
  turn: DreamCoachTurn;
}

export interface DreamCoachMsgRequestBody {
  sessionId: string;
  message: string;
}

export interface DreamCoachSummaryResponse {
  sessionId: string;
  content: string;
}
