import { useState, useEffect } from "react";
import { analysisRecoomendation } from "../../apis/analysis";
import type { recommendationResponse } from "../../types/analysis";
import LoadingBox from "./LoadingBox";
import { TrendingUp } from "lucide-react";
import { bgBlack } from "../../pages/HomePage";
import { shadowStyle } from "../home/weather/WeatherLayout";
import { hoverCssAnalysis } from "../../pages/AnalysisPage";

const AnalysisRecommendation = () => {
  const [data, setData] = useState<recommendationResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    analysisRecoomendation()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("인사이트 데이터를 불러오는 데 실패했습니다.");
        setLoading(false);
        console.error(err);
      });
  }, []);

  if (loading)
    return (
      <div
        className={`w-full h-60 ${bgBlack} flex items-center justify-center text-white`}
      >
        <LoadingBox />
      </div>
    );
  if (error) return <div className="text-red-500">{error}</div>;
  if (!data || data.length === 0)
    return <div className="text-white">추천 데이터가 없습니다.</div>;

  return (
    <>
      {!loading && data && (
        <div className="w-full h-auto flex flex-col gap-y-4">
          <div className="flex gap-x-5 items-center">
            <TrendingUp color="#51A2FF" className="w-12 h-12" />
            <div className="text-white text-3xl">수면 개선 추천</div>
          </div>
          <div className="flex flex-col gap-y-3">
            {data.map((item, idx) => (
              <div
                key={idx}
                className={`${bgBlack} ${shadowStyle} ${hoverCssAnalysis} w-full flex items-center gap-x-4 p-4 h-28 rounded-xl`}
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-linear-to-b from-[#2B7FFF] to-[#615FFF] text-white font-bold text-lg">
                  {idx + 1}
                </div>
                <div className="w-full h-auto flex flex-col gap-y-2 text-white">
                  <div className="font-semibold text-2\xl">{item.title}</div>
                  {item.description && (
                    <div className="text-medium text-[#99A1AF] wrap-break-word whitespace-normal">
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AnalysisRecommendation;
