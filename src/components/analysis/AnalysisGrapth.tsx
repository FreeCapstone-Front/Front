import { useState, useEffect } from "react";
import type { trendResponse } from "../../types/analysis";
import { analysisGraph } from "../../apis/analysis";
import {
  filterBestSleepQuality,
  aggregateMonthly,
  fillMissingMonths,
} from "../../utils/format";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { hoverCssAnalysis } from "../../pages/AnalysisPage";
import { shadowStyle } from "../home/weather/WeatherLayout";
import graph from "../../assets/icons/graphNew.png";
const AnalysisGraph = () => {
  const [trendData, setTrendData] = useState<trendResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    analysisGraph()
      .then((data) => {
        setTrendData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("데이터를 불러오는 데 실패했습니다.");
        setLoading(false);
        console.error(err);
      });
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;
  if (!trendData) return null;

  // 중복 날짜에서 수면 퀄리티 최고값만 필터링
  const bestTrend = filterBestSleepQuality(trendData);

  // 월별 평균 집계

  const monthlyData = fillMissingMonths(aggregateMonthly(bestTrend));

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
        <img src={graph} className="h-12 w-12" />
        <div className="text-white text-2xl">수면 품질 추이</div>
      </div>
      <ResponsiveContainer width="90%" height="80%">
        <LineChart
          data={monthlyData}
          margin={{ top: 20, right: 10, bottom: 20, left: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tickFormatter={(str) => str.slice(5)} // "YYYY-MM" 에서 "MM" 만 표시
            minTickGap={20}
          />
          <YAxis domain={[0, 100]} width={30} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="avgSleepQuality" //avgSleepQuality
            stroke="#F6339A"
            strokeWidth={3}
            dot={false}
            animationDuration={1000}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalysisGraph;
