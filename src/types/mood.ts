// MoodKey Type 정의 (감정 목록)
import happyIcon from "../../assets/icons/happy.png";
import calmIcon from "../../assets/icons/calm.png";
import anxiousIcon from "../../assets/icons/anxious.png";
import mysteriousIcon from "../../assets/icons/mysterious.png";
import scaryIcon from "../../assets/icons/scary.png";
import sadIcon from "../../assets/icons/sad.png";
import excitedIcon from "../../assets/icons/excited.png";
import peacefulIcon from "../../assets/icons/peaceful.png";
import confusedIcon from "../../assets/icons/confused.png";
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

// eslint-disable-next-line react-refresh/only-export-components
export const moodImageMap: Record<MoodKey, string> = {
  // Key (한국어 라벨) : Value (Import된 이미지 변수)
  행복한: happyIcon,
  평범한: calmIcon,
  불안한: anxiousIcon,
  신비로운: mysteriousIcon,
  무서운: scaryIcon,
  슬픈: sadIcon,
  흥분되는: excitedIcon,
  평화로운: peacefulIcon,
  혼란스러운: confusedIcon,
};
