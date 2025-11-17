// 아이콘 import (경로는 상황에 맞게 조정)
import happy from "../../assets/icons/happy.png";
import sad from "../../assets/icons/sad.png";
import calm from "../../assets/icons/calm.png";
import excited from "../../assets/icons/excited.png";
import uneasy from "../../assets/icons/uneasy.png";
import peaceful from "../../assets/icons/peaceful.png";
import mystical from "../../assets/icons/mystical.png";
import confused from "../../assets/icons/confused.png";
import scary from "../../assets/icons/scary.png";

const feelings = [
  { src: happy, alt: "행복한", label: "행복한", color: "text-pink-400" },
  { src: sad, alt: "슬픈", label: "슬픈", color: "text-blue-400" },
  { src: calm, alt: "평범한", label: "평범한", color: "text-gray-400" },
  {
    src: excited,
    alt: "흥분되는",
    label: "흥분되는",
    color: "text-yellow-400",
  },
  { src: uneasy, alt: "불안한", label: "불안한", color: "text-purple-400" },
  {
    src: peaceful,
    alt: "평화로운",
    label: "평화로운",
    color: "text-green-400",
  },
  {
    src: mystical,
    alt: "신비로운",
    label: "신비로운",
    color: "text-indigo-400",
  },
  {
    src: confused,
    alt: "혼란스러운",
    label: "혼란스러운",
    color: "text-pink-200",
  },
  { src: scary, alt: "무서운", label: "무서운", color: "text-red-400" },
];

export const FeelingsGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-x-6 gap-y-3 mt-4 justify-items-center w-full max-w-10xl mx-auto">
      {feelings.map(({ src, alt, label, color }) => (
        <div key={label} className="flex flex-col items-center">
          <img src={src} alt={alt} className="w-12 h-12 mb-1" />
          <span className={`${color} text-sm`}>{label}</span>
        </div>
      ))}
    </div>
  );
};
