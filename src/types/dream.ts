export interface DreamFormData {
  date: string | null;
  sleepAt: string | null;
  wakeAt: string | null;
  title: string;
  content: string;
  mood: string;
  tags: string[];
}

export interface DreamRecordResponse {
  id: string;
  date: string; // "YYYY-MM-DD" 형식의 날짜 문자열
  title: string;
  content: string;
  mood: string;
  tags: string[];
  aiAnalyzed: boolean;
  sleepMinutes: number;
  sleepQuality: number;
  psychologySummary: string;
  keywords: string[];
  recommendation: string;
}

export type DreamCalendarItem = {
  date: string; // "2025-11-15" 형태
  mood: string | null;
  topKeywords: string[];
  title?: string; // 꿈 제목 (선택)
  dreamId?: number; // 꿈 고유 ID (선택)
};
