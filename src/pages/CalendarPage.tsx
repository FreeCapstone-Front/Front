import Calendar from "react-calendar";
import type { CalendarProps } from "react-calendar";
import { useState, useEffect } from "react";

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

import { fetchDreamCalendar } from "../apis/dreamApi";
import type { DreamCalendarItem } from "../types/dream";
import { FeelingsGrid } from "../components/calendar/FeelingsGrid";
import { useNavigate } from "react-router-dom";

export const CalendarPage = () => {
  const navigate = useNavigate();
  const bgGradient =
    "min-h-screen bg-gradient-to-br from-[#1A1625] via-[#1E1B4B] to-[#2D1B4E] flex flex-col items-center justify-center p-8";
  const hovercss = "transition-all duration-300 ease-in-out hover:scale-105";
  const labelcss = "text-white font-bold text-4xl mb-2";
  const labelcss2 = "text-gray-400 text-base mb-8";
  const boxCss =
    "w-full max-w-8xl p-10 bg-gray-900/80 rounded-xl shadow-xl flex flex-col items-center min-h-[600px]";

  const tileBase =
    "rounded-lg bg-gray-800/60 text-white font-normal shadow-md border border-white/10 m-0 transition-all duration-300 hover:bg-indigo-900 hover:border-pink-400";
  const tileToday = "border-2 border-yellow-400 text-yellow-300";

  const [value, setValue] = useState<Date>(new Date());
  const [activeStartDate, setActiveStartDate] = useState<Date | undefined>(
    new Date()
  );
  const [dreamData, setDreamData] = useState<DreamCalendarItem[]>([]);

  const toLocalDateString = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (!activeStartDate) return;

    const fetchData = async () => {
      const year = activeStartDate.getFullYear();
      const month = activeStartDate.getMonth() + 1;
      try {
        const response = await fetchDreamCalendar(year, month);
        setDreamData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [activeStartDate]);

  const tileClassName = ({ date }: { date: Date }) => {
    const isToday = date.toDateString() === new Date().toDateString();
    return [
      tileBase,
      isToday ? tileToday : "",
      "min-h-[10rem]",
      "flex flex-col", // 타일 전체는 flex column
    ]
      .filter(Boolean)
      .join(" ");
  };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view !== "month") return null;

    const dateStr = toLocalDateString(date);
    const record = dreamData.find((d) => d.date === dateStr);

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
    const handleClick = () => {
      // 원하는 경로로 이동, 예: /dream/2025-11-15
      navigate(`/dream/${record?.DreamId}`);
    };
    // 데이터 없으면 빈 div로 크기 유지
    // 콘텐츠 영역만 flex로 가운데 정렬
    return (
      <div
        className="grow flex flex-col items-center justify-center w-full cursor-pointer"
        onClick={handleClick}
        role="button"
        tabIndex={0}
      >
        {record && record.mood ? (
          <>
            <img
              src={moodIcons[record.mood]}
              alt={record.mood}
              className="w-10 h-10 mb-1"
            />
            <div className="text-[13px] text-gray-400">{record.title}</div>
          </>
        ) : (
          <div className="h-14 w-full" />
        )}
      </div>
    );
  };

  const navBarCss = "flex items-center justify-center gap-12 w-full py-3 mb-2";
  const navBtnCss =
    "bg-black/30 rounded-full w-8 h-8 flex items-center justify-center text-white/70 border border-white/20 hover:bg-pink-400 hover:text-white backdrop-blur-md transition";
  const navLabelCss = "text-white text-lg font-semibold tracking-wide";

  const addMonth = (offset: number) => {
    if (!activeStartDate) return;
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

  const onActiveStartDateChange = ({
    activeStartDate,
  }: {
    activeStartDate: Date | null;
  }) => {
    setActiveStartDate(activeStartDate === null ? undefined : activeStartDate);
  };

  const handleChange: CalendarProps["onChange"] = (newValue) => {
    if (newValue instanceof Date) {
      setValue(newValue);
    }
  };

  return (
    <div className={bgGradient}>
      <img
        src={logoImage}
        className={`w-20 h-20 mb-6 ${hovercss}`}
        alt="캘린더 로고"
      />
      <div className={labelcss}>꿈 캘린더</div>
      <div className={labelcss2}>나의 꿈 기록을 한눈에 확인하세요</div>

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
          tileContent={tileContent}
          prevLabel={null}
          nextLabel={null}
        />
        <span className="mt-4 text-pink-400 text-lg">꿈의 분위기</span>
        <FeelingsGrid />
      </div>
    </div>
  );
};

export default CalendarPage;
