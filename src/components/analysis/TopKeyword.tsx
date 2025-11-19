import { useEffect, useState } from "react";
import type { topKeywordResponse } from "../../types/analysis";
import { getTopKeyword } from "../../apis/analysis";
import LoadingBox from "./LoadingBox";
import { shadowStyle } from "../home/weather/WeatherLayout";
import tag from "../../assets/icons/tag.png";
import { hoverCssAnalysis } from "../../pages/AnalysisPage";
const TopKeyword = () => {
  const [data, setData] = useState<topKeywordResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getTopKeyword()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("데이터를 불러오는 데 실패했습니다.");
        setLoading(false);
        console.error(err);
      });
  }, []);

  if (loading) return <LoadingBox />;
  if (error) return <div>{error}</div>;
  if (!data) return <div>키워드 데이터가 없습니다.</div>;

  return (
    <div
      className={`
        w-full
        h-65
        flex
        flex-col
        items-center
        justify-center
        gap-y-5
        rounded-3xl
        px-10
        ${shadowStyle}
      `}
      style={{
        background: "radial-gradient(circle at 50% 50%, #24184f, #140d2f 80%)",
      }}
    >
      <div className="flex gap-x-4 w-full items-center">
        <img src={tag} className="h-12 w-12" />
        <div className="text-white text-3xl">자주 나타나는 키워드</div>
      </div>
      <div className="w-full flex gap-x-5">
        {data.map(({ keyword, count }) => (
          <div
            className={`bg-white/5 w-1/6 h-30 rounded-3xl border border-white/10 flex flex-col items-center justify-center gap-y-5 ${hoverCssAnalysis}`}
          >
            <div className="text-[#FDA5D5] text-3xl">{count}</div>
            <div className="text-[#D1D5DC] text-xl">#{keyword}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopKeyword;
