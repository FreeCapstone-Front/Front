import { useState, useEffect } from "react";
import { analysisAll } from "../../apis/analysis";
import type { DreamStats } from "../../types/analysis";
import { shadowStyle } from "../home/weather/WeatherLayout";

import clock from "../../assets/icons/clock.png";

import happyIcon from "../../assets/icons/happy.png";
import calmIcon from "../../assets/icons/calm.png";
import anxiousIcon from "../../assets/icons/anxious.png";
import mysteriousIcon from "../../assets/icons/mysterious.png";
import scaryIcon from "../../assets/icons/scary.png";
import sadIcon from "../../assets/icons/sad.png";
import excitedIcon from "../../assets/icons/excited.png";
import peacefulIcon from "../../assets/icons/peaceful.png";
import confusedIcon from "../../assets/icons/confused.png";
import { hoverCssAnalysis } from "../../pages/AnalysisPage";
import calenderVer2 from "../../assets/icons/calendarVer2.png";
import up1 from "../../assets/icons/up1.png";
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

const getMoodIcon = (mood: string | undefined): string => {
  // moodImageMap에 키가 존재하는지 확인하고 이미지를 반환합니다.
  // 키가 없거나 데이터가 로드되지 않았다면 기본값으로 clock 아이콘을 반환합니다.
  if (mood && moodImageMap[mood as MoodKey]) {
    return moodImageMap[mood as MoodKey];
  }
  return clock; // 기본 이미지 (fallback)
};

const divcss = `flex flex-col justify-center gap-y-3 w-90 h-50 bg-linear-to-b from-[#1A1625] via-[#1E1B4B] to-[#2D1B4E] ${shadowStyle} border border-[#F6339A]/40 rounded-2xl p-10 text-white`;
const AnalysisDashBoard = () => {
  const [stats, setStats] = useState<DreamStats | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await analysisAll();
        console.log("분석 데이터:", data);
        setStats(data);
      } catch (error) {
        console.error("분석 데이터 불러오기 실패:", error);
      }
    };

    fetchStats();
  }, []);
  const mostMoodIcon = getMoodIcon(stats?.mostFrequentMood);
  return (
    <div className="w-full h-auto flex justify-between gap-x-6">
      <div className={`${divcss} ${hoverCssAnalysis} `}>
        <img src={calenderVer2} className="h-15 w-15" />
        <div className="text-[#99A1AF] text-sm">총 꿈 기록</div>
        <div className="text-3xl">{stats?.totalDreams}개</div>
      </div>

      <div className={`${divcss} ${hoverCssAnalysis} `}>
        <img src={clock} className="h-15 w-15" />
        <div className="text-[#99A1AF] text-sm">평균 수면 시간</div>
        <div className="text-3xl">{stats?.avgSleepHours}시간</div>
      </div>

      <div className={`${divcss} ${hoverCssAnalysis} `}>
        <img src={up1} className="h-15 w-15" />
        <div className="text-[#99A1AF] text-sm">평균 수면 품질</div>
        <div className="text-3xl">{stats?.avgSleepQuality}%</div>
      </div>

      <div className={`${divcss} ${hoverCssAnalysis} `}>
        <img src={mostMoodIcon} className="h-15 w-15" />
        <div className="text-[#99A1AF] text-sm">가장 많은 분위기</div>
        <div className="text-3xl">{stats?.mostFrequentMood ?? "..."}</div>
      </div>
    </div>
  );
};

export default AnalysisDashBoard;
