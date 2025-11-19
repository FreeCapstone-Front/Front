import AnalysisDashBoard from "../components/analysis/AnalysisDashBoard";
import { bgBlack } from "./HomePage";
import brain from "../assets/icons/brain.png";
import AnalysisPie from "../components/analysis/AnalysisPie";
import AnalysisGraph from "../components/analysis/AnalysisGrapth";
import AnalysisInsight from "../components/analysis/AnalysisInsight";
import AnalysisRecommendation from "../components/analysis/AnalysisRecommendation";
import TopKeyword from "../components/analysis/TopKeyword";

export const hoverCssAnalysis =
  "transition-transform duration-300 ease-in-out hover:scale-105";

export const AnalysisPage = () => {
  return (
    <div
      className={`w-full min-h-screen flex flex-col gap-y-10 ${bgBlack} px-15 py-15`}
    >
      <div className="flex items-center gap-x-4 w-full">
        <img src={brain} className="h-20 w-20" />
        <div className="flex flex-col gap-y-3">
          <div className="text-4xl text-white">꿈 분석</div>
          <div className="text-medium text-[#99A1AF]">
            나의 꿈과 수면 패턴을 분석해보세요
          </div>
        </div>
      </div>
      <AnalysisDashBoard />
      <div className="flex gap-x-5 justify-between">
        <AnalysisPie />
        <AnalysisGraph />
      </div>
      <TopKeyword />
      <AnalysisInsight />
      <AnalysisRecommendation />
    </div>
  );
};
