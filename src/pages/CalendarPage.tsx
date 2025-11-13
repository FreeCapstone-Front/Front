import Calendar from "react-calendar";
import type { CalendarProps } from "react-calendar";
import { useState } from "react";
import DreamModal from "./DreamModal";
import logoImage from "../assets/icons/DreamCalendarPage.png";
import happy from "../assets/icons/happy.png";
import sad from "../assets/icons/sad.png";
import calm from "../assets/icons/calm.png";
import excited from "../assets/icons/excited.png";
import uneasy from "../assets/icons/uneasy.png";
import peaceful from "../assets/icons/peaceful.png";
import mystical from "../assets/icons/mystical.png";
import confused from "../assets/icons/confused.png";
import scary from "../assets/icons/scary.png";
import "../App.css";

export const CalendarPage = () => {
  // Tailwind CSS 변수
  const bgGradient =
    "min-h-screen bg-gradient-to-br from-[#1A1625] via-[#1E1B4B] to-[#2D1B4E] flex flex-col items-center justify-center p-8";
  const hovercss = "transition-all duration-300 ease-in-out hover:scale-105";
  const labelcss = "text-white font-bold text-4xl mb-2";
  const labelcss2 = "text-gray-400 text-base mb-8";
  const boxCss =
    "w-full max-w-8xl p-10 bg-gray-900/80 rounded-xl shadow-xl flex flex-col items-center min-h-[600px]";

  // 캘린더 타일 스타일
  const tileBase =
    "rounded-lg bg-gray-800/60 text-white font-normal shadow-md border border-white/10 m-0 h-34 transition-all duration-300 hover:bg-indigo-900 hover:border-pink-400";
  const tileToday = "border-2 border-yellow-400 text-yellow-300";

  const tileClassName = ({ date }: { date: Date }) => {
    const isToday = date.toDateString() === new Date().toDateString();
    return [tileBase, isToday ? tileToday : ""].join(" ");
  };

  // 커스텀 네비게이션 헤더 및 버튼 스타일
  const navBarCss = "flex items-center justify-center gap-12 w-full py-3 mb-2";
  const navBtnCss =
    "bg-black/30 rounded-full w-8 h-8 flex items-center justify-center text-white/70 border border-white/20 hover:bg-pink-400 hover:text-white backdrop-blur-md transition";
  const navLabelCss = "text-white text-lg font-semibold tracking-wide";

  // 월/년도 변경 기능
  const [value, setValue] = useState<Date>(new Date());
  const [activeStartDate, setActiveStartDate] = useState<Date | undefined>(
    new Date()
  );

  // 모달 상태 관리
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const dreamDataMap: {
    [date: string]: { title: string; description: string; tags: string[] };
  } = {
    "2025-10-14": {
      title: "친구들과 여행하는 꿈",
      description:
        "오랜만에 만난 친구들과 여행을 떠났어요. 모두 웃으며 즐거운 시간을 보냈습니다.",
      tags: ["친구", "여행", "추억"],
    },
    // ... 다른 날짜 데이터
  };

  const handleChange: CalendarProps["onChange"] = (newValue) => {
    // 단일 선택만 한다면,
    if (newValue instanceof Date) {
      setValue(newValue);
      setSelectedDate(newValue);
      setModalOpen(true);
    }
    // (범위 지원이면 Array.isArray(newValue)도 추가)
  };

  const addMonth = (offset: number) => {
    if (!activeStartDate) return; // null이면 함수 조기 종료
    const next = new Date(
      activeStartDate.getFullYear(),
      activeStartDate.getMonth() + offset,
      1
    );
    setActiveStartDate(next);
  };

  const CustomNavigation = () => (
    <div className={navBarCss}>
      <button className={navBtnCss} onClick={() => addMonth(-1)}>
        {"<"}
      </button>
      <span className={navLabelCss}>
        {activeStartDate
          ? `${activeStartDate.getFullYear()}년 ${
              activeStartDate.getMonth() + 1
            }월`
          : "날짜 없음"}
      </span>
      <button className={navBtnCss} onClick={() => addMonth(1)}>
        {">"}
      </button>
    </div>
  );

  // onActiveStartDateChange 등에서 null을 undefined로 변환
  const onActiveStartDateChange = ({
    activeStartDate,
  }: {
    activeStartDate: Date | null;
  }) => {
    setActiveStartDate(activeStartDate === null ? undefined : activeStartDate);
  };

  return (
    <div className={bgGradient}>
      {/* 상단 로고/레이블/설명 */}
      <img
        src={logoImage}
        className={`w-20 h-20 mb-6 ${hovercss}`}
        alt="캘린더 로고"
      />
      <div className={labelcss}>꿈 캘린더</div>
      <div className={labelcss2}>나의 꿈 기록을 한눈에 확인하세요</div>

      {/* 중앙 캘린더 박스 */}
      <div className={boxCss}>
        <CustomNavigation />
        <Calendar
          className="custom-calendar w-full"
          calendarType="hebrew"
          value={value}
          onChange={handleChange}
          activeStartDate={activeStartDate}
          onActiveStartDateChange={onActiveStartDateChange}
          tileClassName={tileClassName}
          prevLabel={null}
          nextLabel={null}
        />
        <span className="mt-4 text-pink-400 text-lg">
          {value.toLocaleDateString("ko-KR")}
        </span>

        <DreamModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          date={selectedDate}
          dreamData={
            selectedDate
              ? dreamDataMap[selectedDate.toISOString().slice(0, 10)]
              : undefined
          }
        />

        {/* 하단 분류 예시, flex로 자연스럽게 배치 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-x-6 gap-y-3 mt-4 justify-items-center w-full max-w-10xl mx-auto">
          {[
            {
              src: happy,
              alt: "행복한",
              label: "행복한",
              color: "text-pink-400",
            },
            { src: sad, alt: "슬픈", label: "슬픈", color: "text-blue-400" },
            {
              src: calm,
              alt: "평범한",
              label: "평범한",
              color: "text-gray-400",
            },
            {
              src: excited,
              alt: "신나는",
              label: "신나는",
              color: "text-yellow-400",
            },
            {
              src: uneasy,
              alt: "불안한",
              label: "불안한",
              color: "text-purple-400",
            },
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
            {
              src: scary,
              alt: "무서운",
              label: "무서운",
              color: "text-red-400",
            },
          ].map(({ src, alt, label, color }) => (
            <div key={label} className="flex flex-col items-center">
              <img src={src} alt={alt} className="w-12 h-12 mb-1" />
              <span className={color + " text-sm"}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
