export type DreamStats = {
  totalDreams: number;
  avgSleepHours: number;
  avgSleepQuality: number;
  mostFrequentMood: string;
  topKeywords: string[];
};

export type MoodKey =
  | "행복한"
  | "평범한"
  | "불안한"
  | "신비로운"
  | "무서운"
  | "슬픈"
  | "흥분되는"
  | "평화로운"
  | "혼란스러운";

export type MoodCountStats = Record<MoodKey, number>;

export type trendResponse = trend[];

export type trend = {
  date: string;
  sleepQuality: number;
};

//인사이트
export type insight = {
  title: string;
  description: string;
};

export type insightResponse = insight[];

//추천
export type recommendation = {
  title: string;
  description: string;
};

export type recommendationResponse = recommendation[];

export type keyword = {
  keyword: string;
  count: number;
};

export type topKeywordResponse = keyword[];
