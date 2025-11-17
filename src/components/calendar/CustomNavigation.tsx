// components/Calendar/CustomNavigation.tsx
import "./App.css";

type Props = {
  activeStartDate?: Date;
  addMonth: (offset: number) => void;
};

export const CustomNavigation = ({ activeStartDate, addMonth }: Props) => (
  <div className="flex items-center justify-center gap-12 w-full py-3 mb-2">
    <button
      className="bg-black/30 rounded-full w-8 h-8 flex items-center justify-center text-white/70 border border-white/20 hover:bg-pink-400 hover:text-white backdrop-blur-md transition"
      onClick={() => addMonth(-1)}
    >
      {"<"}
    </button>
    <span className="text-white text-lg font-semibold tracking-wide">
      {activeStartDate
        ? `${activeStartDate.getFullYear()}년 ${
            activeStartDate.getMonth() + 1
          }월`
        : "날짜 없음"}
    </span>
    <button
      className="bg-black/30 rounded-full w-8 h-8 flex items-center justify-center text-white/70 border border-white/20 hover:bg-pink-400 hover:text-white backdrop-blur-md transition"
      onClick={() => addMonth(1)}
    >
      {">"}
    </button>
  </div>
);
