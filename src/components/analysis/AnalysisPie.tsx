import { useState, useEffect } from "react";
import type { MoodCountStats } from "../../types/analysis";
import { analysisPie } from "../../apis/analysis";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import type { MoodKey } from "../../types/mood";
import { hoverCssAnalysis } from "../../pages/AnalysisPage";
import { shadowStyle } from "../home/weather/WeatherLayout";
import pie from "../../assets/icons/pie.png";
// 감정별 정보 테이블: label/color 등 관리
const MOOD_INFO: {
  key: MoodKey;
  label: string;
  color: string;
  text: string;
}[] = [
  { key: "행복한", label: "행복한", color: "#ec4899", text: "text-pink-400" },
  { key: "슬픈", label: "슬픈", color: "#60a5fa", text: "text-blue-400" },
  { key: "평범한", label: "평범한", color: "#a1a1aa", text: "text-gray-400" },
  {
    key: "흥분되는",
    label: "흥분되는",
    color: "#fbbf24",
    text: "text-yellow-400",
  },
  { key: "불안한", label: "불안한", color: "#a78bfa", text: "text-purple-400" },
  {
    key: "평화로운",
    label: "평화로운",
    color: "#4ade80",
    text: "text-green-400",
  },
  {
    key: "신비로운",
    label: "신비로운",
    color: "#818cf8",
    text: "text-indigo-400",
  },
  {
    key: "혼란스러운",
    label: "혼란스러운",
    color: "#fbcfe8",
    text: "text-pink-200",
  },
  { key: "무서운", label: "무서운", color: "#f87171", text: "text-red-400" },
];
// PieLabel 렌더 함수 파라미터 타입
type PieLabelRenderProps = {
  cx?: number;
  cy?: number;
  midAngle?: number;
  outerRadius?: number;
  percent?: number;
  index?: number;
};

const AnalysisPie = () => {
  const [moodData, setMoodData] = useState<MoodCountStats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    analysisPie()
      .then((data) => {
        setMoodData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("데이터를 불러오는 데 실패했습니다.");
        setLoading(false);
        console.log(err);
      });
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;
  if (!moodData) return null;

  // 감정별 값 + 스타일 통합후 value가 0 이상만 추출
  const chartData = MOOD_INFO.map((mood) => ({
    name: mood.label,
    value: moodData[mood.key] ?? 0,
    color: mood.color,
    text: mood.text,
  })).filter((d) => d.value > 0);

  // 라벨: chartData에서 정보 추출하여 스타일 적용
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle = 0,
    outerRadius = 0,
    percent = 0,
    index = 0,
  }: PieLabelRenderProps) => {
    const datum = chartData[index];
    if (!datum || datum.value === 0) return null;
    const RADIAN = Math.PI / 180;
    const radius = outerRadius * 1.18;
    const x = cx! + radius * Math.cos(-midAngle * RADIAN);
    const y = cy! + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill={datum.color}
        textAnchor={x > cx! ? "start" : "end"}
        dominantBaseline="central"
        fontSize={22}
        fontWeight={600}
        style={{ textShadow: "0 1px 6px #222" }}
      >
        {`${datum.name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div
      className={`
    w-1/2
    h-[460px]
    flex
    flex-col
    items-center
    justify-center
    gap-y-5
    rounded-3xl
    py-5
    ${hoverCssAnalysis}
    ${shadowStyle}
  `}
      style={{
        background: "radial-gradient(circle at 50% 50%, #24184f, #140d2f 80%)",
      }}
    >
      <div className="flex gap-x-3 w-full items-center justify-center">
        <img src={pie} className="h-12 w-12" />
        <div className="text-white text-2xl">꿈의 분위기 분포</div>
      </div>
      <PieChart width={700} height={360}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          outerRadius={140}
          dataKey="value"
          label={renderCustomizedLabel}
          labelLine={false}
          isAnimationActive={false}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default AnalysisPie;
