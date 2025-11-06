import { Link } from "react-router-dom";
import { DASectionCss } from "../dreamArticle/DreamArticle";
import { homeCompoBgBlack } from "../weather/WeatherLayout";
import SleepCard from "./SleepCard";
import moon from "../../../assets/icons/moon1.png";
export const SleepRoom = () => {
  return (
    <div className={`${DASectionCss} ${homeCompoBgBlack} flex flex-col p-8`}>
      <div className="flex justify-between items-center mb-6">
        {" "}
        {/* mb-6으로 아래 콘텐츠와 간격 추가 */}
        {/* 좌측: 아이콘 + 제목 */}
        <div className="flex items-center space-x-4">
          {" "}
          {/* space-x-2로 아이콘과 텍스트 간격 추가 */}
          <img src={moon} alt="꿈 아이콘" className="w-13 h-13" />{" "}
          {/* w/h 추가 및 alt 속성 권장 */}
          <div className="text-xl font-bold text-white">수면방</div>{" "}
          {/* 폰트 크기/굵기 추가 */}
        </div>
        {/* 우측: 전체보기 */}
        <Link
          className="text-[#C27AFF] cursor-pointer hover:text-[#C27AFF]/80 transition duration-150"
          to={"articleList-page"}
        >
          더보기→
        </Link>
      </div>
      <SleepCard />
    </div>
  );
};
