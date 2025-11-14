import { bgBlack } from "./IntroductionPage";
import { Link } from "react-router-dom";
import ArticleCard1 from "../assets/icons/ArticleCard1.png";
import human1 from "../assets/icons/human1.png";
// import minicalendar from "../assets/icons/minicalendar.png";
import timer from "../assets/icons/timer.png";

export const Article1Page = () => {
  const linkcss =
    "text-[#F6339A] text-sm cursor-pointer hover:text-[#F6339A]/80 transition duration-150";

  return (
    <div>
      <div className="w-full bg-gradient-to-b from-[#35304a] to-[#45375c] shadow-[0px_20px_60px_-15px_rgba(236,72,153,0.4)] px-4 py-4 flex flex-col">
        <Link className={`${linkcss}`} to={"/articleList-page"}>
          ← 목록으로 돌아가기
        </Link>
      </div>
      <div
        className={`${bgBlack}  w-full min-h-screen pt-15 p-20 flex flex-col items-center`}
      >
        <div className="w-full max-w-xl mx-auto flex flex-col gap-6">
          {/* 카테고리 뱃지 & 메타 정보 */}
          <div className="flex flex-col gap-2 mt-4">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-[#F6339A] to-[#9810FA] text-white text-sm font-semibold rounded-full w-fit">
              수면환경
            </div>
            <h1 className="text-white text-lg font-bold">
              완벽한 수면 환경 만들기: 침실 꾸미기 가이드
            </h1>
            <div className="flex flex-row items-center gap-5 text-xs text-gray-400">
              <div className="flex flex-row">
                <img src={human1} alt="인간" />
                수면전문가 김민지
              </div>
              {/* <div className="flex flex-row"><img src={minicalendar} className="w-3 h-3"     alt="달력" /> 2025년 1월 5일</div> */}
              <div className="flex flex-row">
                <img src={timer} alt="시계" />
                5분
              </div>
            </div>
          </div>

          {/* 카드 이미지 */}
          <div className="w-180 h-80 rounded-[40px] overflow-hidden shadow-[0px_20px_60px_-15px_rgba(236,72,153,0.4)]">
            <img
              src={ArticleCard1} // 본인 이미지 경로로
              alt="침실 예시"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 주요 본문내용 카드 */}
          <div className="w-180 bg-[#615186]/50 rounded-[40px] shadow-lg px-10 py-9 text-sm text-thin text-gray-200 leading-relaxed">
            수면의 질은 하루의 컨디션을 좌우하는 중요한 요소입니다. 좋은 잠을
            위해서는 무엇보다 편안한 침실 환경이 필요합니다.
            <br />
            <br />
            이상적인 침실 온도는 18~22도 사이로 유지하는 것이 좋습니다. 너무
            덥거나 추우면 숙면 중 체온 조절이 어려워지며 깊은 잠에 빠지기
            힘들어집니다. 온도 조절을 위해 에어컨이나 히터를 사용할 때는
            직접적인 바람이 몸에 닿지 않도록 주의하세요.
            <br />
            <br />
            조명 역시 수면에 영향을 미칩니다. 잠들기 2-3시간 전부터는 밝은
            조명을 피하고, 따뜻한 색온도의 조명을 사용하는 것이 좋습니다. 침실의
            메인 조명은 3000K 이하의 따뜻한 색상을 선택하고, 취침 직전에는 간접
            조명만 사용해보세요.
            <br />
            <br />
            침구 선택도 매우 중요합니다. 계절에 맞는 이불과 베개를 선택하고,
            통풍이 잘 되는 소재의 침구를 사용하세요. 특히 베개는 개인의 경추
            높이를 맞춰 목의 곡선에 맞아야 딱딱함을 줄여주는 것이 중요합니다.
            <br />
            <br />
            침실의 색상은 차분하고 편안한 느낌을 주는 색상을 선택하세요. 파스텔
            블루, 미드나잇 바이올렛, 라벤더 등의 색상이 숙면에 도움이 됩니다.
            너무 색이 화려하거나 복잡한 침구보다는 무채색 느낌을 고르는 것이
            좋습니다.
            <br />
            <br />
            마지막으로 침실의 정리정돈도 중요합니다. 어수선한 공간은 마음을
            불편하게 만들어 수면을 방해할 수 있으니, 침실 오직 수면과 휴식을
            위한 공간으로 세팅하고, 불필요한 식사 등 다른 활동은 피하세요.
          </div>
          {/* 하단 박스 & 버튼 */}
        </div>
      </div>
    </div>
  );
};
