import { homeCompoBgBlack } from "../weather/WeatherLayout";

import bookIcon from "../../../assets/icons/book1.png";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";
// DASectionCss를 유지하되, 내부 콘텐츠 정렬을 위해 부모 flex 속성은 제거하거나 조정
export const DASectionCss =
  "w-140 h-190 rounded-3xl border-2 border-[#F6339A]/20";

export const DreamArticle = () => {
  return (
    <div className={`${DASectionCss} ${homeCompoBgBlack} flex flex-col p-8`}>
      <div className="flex justify-between items-center mb-6">
        {" "}
        <div className="flex items-center space-x-4">
          {" "}
          {/* space-x-2로 아이콘과 텍스트 간격 추가 */}
          <img src={bookIcon} alt="꿈 아이콘" className="w-13 h-13" />{" "}
          {/* w/h 추가 및 alt 속성 권장 */}
          <div className="text-xl font-bold text-white">꿈 아티클</div>{" "}
          {/* 폰트 크기/굵기 추가 */}
        </div>
        {/* 우측: 전체보기 */}
        <Link
          className={`text-[#F6339A] cursor-pointer hover:text-[#F6339A]/80 transition duration-150`}
          to={"articleList-page"}
        >
          전체보기 →
        </Link>
      </div>

      {/* 2. 콘텐츠 영역 (ArticleCard) */}
      <ArticleCard />
      {/* 필요하다면 여기에 추가적인 아티클 카드나 내용이 들어갈 수 있습니다. */}
    </div>
  );
};
