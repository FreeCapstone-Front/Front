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
