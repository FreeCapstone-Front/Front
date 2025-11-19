import { useState, useEffect } from "react";
import type { insightResponse } from "../../types/analysis";
import { analysisInsight } from "../../apis/analysis";
import { Brain } from "lucide-react";
import icon1 from "../../assets/icons/heartNew.png";
import InsightCard from "./InsightCard";
import LoadingBox from "./LoadingBox";
const AnalysisInsight = () => {
  const [insightData, setInsightData] = useState<insightResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    analysisInsight()
      .then((data) => {
        setInsightData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("인사이트 데이터를 불러오는 데 실패했습니다.");
        setLoading(false);
        console.error(err);
      });
  }, []);
  if (loading) return <LoadingBox />;
  if (error) return <div>{error}</div>;
  if (!insightData) return null;

  return (
    <>
      {!loading && insightData && (
        <div className="w-full h-auto flex flex-col gap-y-4">
          <div className="flex gap-x-5">
            <Brain color="#F6339A" className="w-12 h-12" />
            <div className="text-white text-3xl">심리 분석 인사이트</div>
          </div>
          <div className="flex justify-between gap-x-5">
            {insightData.map((insight, index) => (
              <InsightCard
                key={index}
                title={insight.title}
                description={insight.description}
                img={icon1}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AnalysisInsight;
