import React from "react";

import happyIcon from "../../assets/icons/happy.png";
import calmIcon from "../../assets/icons/calm.png";
import anxiousIcon from "../../assets/icons/anxious.png";
import mysteriousIcon from "../../assets/icons/mysterious.png";
import scaryIcon from "../../assets/icons/scary.png";
import sadIcon from "../../assets/icons/sad.png";
import excitedIcon from "../../assets/icons/excited.png";
import peacefulIcon from "../../assets/icons/peaceful.png";
import confusedIcon from "../../assets/icons/confused.png";

interface MoodSelectorProps {
  selectedValue: string;
  onChange: (value: string) => void;
}

// 각 분위기(value)에 해당하는 이미지 아이콘을 매핑한 객체
const moodImageMap: { [key: string]: string } = {
  happy: happyIcon,
  calm: calmIcon,
  anxious: anxiousIcon,
  mysterious: mysteriousIcon,
  scary: scaryIcon,
  sad: sadIcon,
  excited: excitedIcon,
  peaceful: peacefulIcon,
  confused: confusedIcon,
};

const MoodSelector: React.FC<MoodSelectorProps> = ({
  selectedValue,
  onChange,
}) => {
  // 버튼 클릭 핸들러
  const handleSelect = (value: string) => {
    // 이미 선택된 값을 다시 클릭하면 선택을 해제(빈 문자열 "")하고,
    // 다른 값을 클릭하면 새 값을 선택합니다.
    const newValue = selectedValue === value ? "" : value;
    onChange(newValue);
  };

  const moodOptions = [
    { label: "행복한", value: "happy" },
    { label: "평범한", value: "calm" },
    { label: "불안한", value: "anxious" },
    { label: "신비로운", value: "mysterious" },
    { label: "무서운", value: "scary" },
    { label: "슬픈", value: "sad" },
    { label: "흥분되는", value: "excited" },
    { label: "평화로운", value: "peaceful" },
    { label: "혼란스러운", value: "confused" },
  ];

  return (
    // 전체 컨테이너: 3열 그리드 레이아웃
    <div className="grid grid-cols-3 gap-4">
      {moodOptions.map((mood) => {
        // 선택 상태 확인
        const isSelected = selectedValue === mood.value;
        // 각 분위기에 매핑된 이미지 소스(src)를 가져옵니다.
        const imageSrc = moodImageMap[mood.value];

        // Tailwind CSS 클래스 정의
        const baseClasses =
          "flex flex-col items-center justify-center p-6 rounded-xl border-2 transition duration-200 cursor-pointer text-white h-32";

        // 선택 상태에 따른 동적 클래스
        const dynamicClasses = isSelected
          ? "bg-[#F6339A]/20 border-[#F6339A] shadow-lg" // 선택됨: 눈에 띄는 테두리와 배경색
          : "bg-[#1A1625]/10 border-white/10 hover:border-white/40"; // 미선택: 기본색, 호버 시 테두리만 변경

        return (
          <div
            key={mood.value}
            className={`${baseClasses} ${dynamicClasses}`}
            onClick={() => handleSelect(mood.value)}
          >
            {/* 💡 임포트한 이미지 아이콘을 표시합니다. */}
            {imageSrc && ( // imageSrc가 유효할 경우에만 <img> 태그를 렌더링합니다.
              <img src={imageSrc} alt={mood.label} className="w-10 h-10 mb-2" />
            )}
            {!imageSrc && ( // 혹시 매핑된 이미지가 없을 경우를 대비하여 기본 이모티콘을 표시합니다.
              <span className="text-3xl mb-2">❓</span>
            )}
            <span className="text-lg">{mood.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MoodSelector;
