// components/Calendar/TileContent.tsx
import "./App.css";
import type { DreamCalendarItem } from "../../types/dream";

import happy from "../../assets/icons/happy.png";
import sad from "../../assets/icons/sad.png";
import calm from "../../assets/icons/calm.png";
import excited from "../../assets/icons/excited.png";
import uneasy from "../../assets/icons/uneasy.png";
import peaceful from "../../assets/icons/peaceful.png";
import mystical from "../../assets/icons/mystical.png";
import confused from "../../assets/icons/confused.png";
import scary from "../../assets/icons/scary.png";

type Props = {
  dateStr: string;
  dreamData: DreamCalendarItem[];
};

const moodIcons: Record<string, string> = {
  행복한: happy,
  슬픈: sad,
  평범한: calm,
  흥분되는: excited,
  불안한: uneasy,
  평화로운: peaceful,
  신비로운: mystical,
  혼란스러운: confused,
  무서운: scary,
};

export const TileContent = ({ dateStr, dreamData }: Props) => {
  const record = dreamData.find((d) => d.date === dateStr);

  if (!record || !record.mood) return <div className="h-[3.5rem] w-full" />;

  return (
    <div className="flex-grow flex flex-col items-center justify-center w-full">
      <img
        src={moodIcons[record.mood]}
        alt={record.mood}
        className="w-10 h-10 mb-1"
      />
      <div className="text-[10px] text-gray-400">꿈</div>
    </div>
  );
};
