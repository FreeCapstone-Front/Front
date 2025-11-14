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
  options: string[];
}

// 한글 enum 값으로 value와 이미지 키를 전부 매핑
const moodOptions = [
  { label: "행복한", value: "행복한" },
  { label: "평범한", value: "평범한" },
  { label: "불안한", value: "불안한" },
  { label: "신비로운", value: "신비로운" },
  { label: "무서운", value: "무서운" },
  { label: "슬픈", value: "슬픈" },
  { label: "흥분되는", value: "흥분되는" },
  { label: "평화로운", value: "평화로운" },
  { label: "혼란스러운", value: "혼란스러운" },
];

const moodImageMap: { [key: string]: string } = {
  행복한: happyIcon,
  평범한: calmIcon,
  불안한: anxiousIcon,
  신비로운: mysteriousIcon,
  무서운: scaryIcon,
  슬픈: sadIcon,
  흥분되는: excitedIcon,
  평화로운: peacefulIcon,
  혼란스러운: confusedIcon,
};

const MoodSelector: React.FC<MoodSelectorProps> = ({
  selectedValue,
  onChange,
}) => {
  // 버튼 클릭 핸들러
  const handleSelect = (value: string) => {
    const newValue = selectedValue === value ? "" : value;
    onChange(newValue);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {moodOptions.map((mood) => {
        const isSelected = selectedValue === mood.value;
        const imageSrc = moodImageMap[mood.value];

        const baseClasses =
          "flex flex-col items-center justify-center p-6 rounded-xl border-2 transition duration-200 cursor-pointer text-white h-32";
        const dynamicClasses = isSelected
          ? "bg-[#F6339A]/20 border-[#F6339A] shadow-lg"
          : "bg-[#1A1625]/10 border-white/10 hover:border-white/40";

        return (
          <div
            key={mood.value}
            className={`${baseClasses} ${dynamicClasses}`}
            onClick={() => handleSelect(mood.value)}
          >
            {imageSrc ? (
              <img src={imageSrc} alt={mood.label} className="w-10 h-10 mb-2" />
            ) : (
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
