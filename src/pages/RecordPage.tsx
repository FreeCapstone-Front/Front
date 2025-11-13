import book from "../../src/assets/icons/book1.png";
import RecordCard from "../components/record/RecordCard";

// 제목/부제 스타일 재사용성을 위한 상수
const titleCss = "text-white text-3xl";
const subtitleCss = "text-[#99A1AF] text-lg";
const headerIconCss = "h-14 w-14"; // 3.5rem

export const RecordPage = () => {
  return (
    // 배경은 전체 너비(w-full)를 유지
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-[#2A2535] via-[#2E2B5B] to-[#3D2B5E]">
      {/* 내부 컨테이너: 최대 너비를 지정하고(max-w-7xl) 중앙 정렬(mx-auto) 및 좌우 패딩(px-4) 추가 */}
      <div className="max-w-7xl mx-auto min-h-screen py-20 flex flex-col gap-y-10 px-4">
        {/* 헤더 섹션 */}
        <div className="flex items-center gap-x-4">
          <img src={book} className={headerIconCss} alt="꿈 기록 아이콘" />
          <div>
            <div className={titleCss}>꿈 기록하기</div>
            <div className={subtitleCss}>오늘의 꿈을 기록하고 분석해보세요</div>
          </div>
        </div>

        {/* 실제 꿈 기록 카드 컴포넌트 */}
        <RecordCard />
      </div>
    </div>
  );
};
