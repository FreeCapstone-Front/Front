import { hoverCssAnalysis } from "../../pages/AnalysisPage";
import { shadowStyle } from "../home/weather/WeatherLayout";

interface InsightCardProps {
  title: string;
  description: string;
  img: string;
}

const InsightCard = ({ title, description, img }: InsightCardProps) => {
  return (
    <div
      className={`w-1/3 h-auto bg-linear-to-b from-[#1A1625] via-[#1E1B4B] to-[#2D1B4E]
        ${shadowStyle} border border-[#F6339A]/40 rounded-2xl p-10 text-white flex flex-col gap-y-3 ${hoverCssAnalysis}`}
    >
      <img src={img} alt={title} className="h-12 w-12" />
      <div className="text-white text-2xl">{title}</div>
      <div className="text-sm text-[#99A1AF] wrap-break-word whitespace-normal">
        {description}
      </div>
    </div>
  );
};

export default InsightCard;
