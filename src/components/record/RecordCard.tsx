import React from "react";
import { useForm, Controller } from "react-hook-form";

import FieldGroup from "./FieldGroup";
import MoodSelector from "./MoodSelector";
import TagInput from "./TagInput";

import { shadowStyle } from "../home/weather/WeatherLayout";
import "react-datepicker/dist/react-datepicker.css";
import MyDatePickerComponent from "./MyDatePickerComponent";
import { formatDate, formatToISOString } from "../../utils/format";

import { Calendar } from "lucide-react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { Sparkle } from "lucide-react";
import TimePickerModal from "./TimePickerModal";
import { BookOpen } from "lucide-react";
import { Heart } from "lucide-react";
import { hovercss } from "../Navbar";
import { Save } from "lucide-react";
import { Brain } from "lucide-react";

// 버튼 기본 CSS
const saveBtnCss =
  "mt-6 p-4 rounded-xl  w-80 h-17 text-white font-bold text-lg flex items-center justify-center gap-x-4";

interface DreamFormData {
  date: Date | null;
  startTime: Date | null;
  endTime: Date | null;
  title: string;
  content: string;
  mood: string;
  tags: string[];
}

const RecordCard: React.FC = () => {
  const { register, handleSubmit, control, reset, getValues } =
    useForm<DreamFormData>({
      defaultValues: {
        date: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        title: "",
        content: "",
        mood: "",
        tags: [],
      },
    });

  // 1. 꿈 기록 저장 (Submit)
  const onSubmit = (data: DreamFormData) => {
    if (!data.date || !data.startTime || !data.endTime) {
      console.error("필수 날짜/시간 데이터가 누락되었습니다.");
      alert("날짜와 시간을 정확히 입력해 주세요.");
      return;
    }

    const requestBody = {
      date: formatDate(data.date),
      sleepAt: formatToISOString(data.startTime),
      wakeAt: formatToISOString(data.endTime),
      content: data.content,
      mood: data.mood,
      title: data.title,
      tags: data.tags,
    };

    console.log("서버로 보낼 최종 JSON Request Body (가공 완료):", requestBody);
    alert("꿈 기록이 성공적으로 저장되었습니다.");
  };

  // 2. 폼 초기화/취소
  const onCancel = () => {
    reset();
    alert("폼 내용이 초기화되었습니다.");
  };

  // 3. AI 분석 요청 (저장과는 별개의 로직을 가정)
  const onAnalyze = () => {
    const data = getValues(); // 현재 폼의 데이터를 가져옴

    // AI 분석 전 유효성 검사 등 필요한 로직 수행
    if (!data.content) {
      alert("AI 분석을 받으려면 꿈 내용을 먼저 입력해야 합니다.");
      return;
    }

    console.log("AI 분석을 위한 데이터:", data);
    alert("AI 분석을 시작합니다. (API 호출 로직 필요)");
  };

  const cardCss = `w-[60rem] flex flex-col gap-y-6 h-auto rounded-[2rem] border border-[#F6339A]/20 bg-linear-to-b from-[#1A1625] via-[#1E1B4B] to-[#2D1B4E] ${shadowStyle} py-10 px-10`;
  const inputCss =
    "rounded-2xl border border-white/10 w-full p-5 bg-white/5 text-white";
  const labelCss = "flex items-center gap-x-4 text-white text-xl mb-3";

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cardCss}>
        {/* 1. 날짜/시간 필드 */}
        <div className="w-full flex items-start justify-between gap-x-8">
          <FieldGroup
            label={
              <>
                <Calendar size={20} color={"#f6339a"} strokeWidth={2} />
                날짜
              </>
            }
          >
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <MyDatePickerComponent
                  selected={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </FieldGroup>
          <FieldGroup
            label={
              <>
                <Moon size={20} color={"#C27AFF"} strokeWidth={2} />
                취침시간
              </>
            }
          >
            <Controller
              name="startTime"
              control={control}
              render={({ field }) => (
                <TimePickerModal
                  selectedTime={field.value}
                  onTimeChange={field.onChange}
                  label="취침 시간" // 모달 내부에서 사용할 레이블
                />
              )}
            />
          </FieldGroup>
          <FieldGroup
            label={
              <>
                <Sun size={20} color={"#FFB900"} strokeWidth={2} />
                종료시간
              </>
            }
          >
            <Controller
              name="endTime"
              control={control}
              render={({ field }) => (
                <TimePickerModal
                  selectedTime={field.value}
                  onTimeChange={field.onChange}
                  label="기상 시간" // ✅ 레이블 수정
                />
              )}
            />
          </FieldGroup>
        </div>

        {/* 2. 꿈 제목 */}
        <FieldGroup
          label={
            <>
              <Sparkle size={20} color={"#f6339a"} strokeWidth={2} />꿈 제목
            </>
          }
          className="flex-none"
        >
          <input
            type="text"
            className={`${inputCss} h-16`}
            placeholder="예: 하늘을 나는 꿈"
            {...register("title")}
          />
        </FieldGroup>

        {/* 3. 꿈 내용 */}
        <FieldGroup
          label={
            <>
              <BookOpen size={20} color={"#C27AFF"} strokeWidth={2} />꿈 내용
            </>
          }
          className="flex-none"
        >
          <textarea
            className={`${inputCss} h-50`}
            placeholder="꿈의 내용을 자세히 기록해보세요."
            {...register("content")}
          ></textarea>
        </FieldGroup>

        {/* 4. 꿈의 분위기 */}
        <div className="flex flex-col gap-y-4">
          <div className={labelCss}>
            <Heart size={20} color={"#FB64B6"} strokeWidth={2} />
            꿈의 분위기
          </div>
          <Controller
            name="mood"
            control={control}
            render={({ field }) => (
              <MoodSelector
                selectedValue={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>

        {/* 5. 태그 (선택사항) 섹션 */}
        <TagInput name="tags" control={control} label="태그 (선택사항)" />

        {/* 6. 저장 버튼 섹션 */}
        <div className="flex items-center justify-center gap-x-6 w-full">
          {/* 꿈 기록 저장하기 */}
          <button
            type="submit"
            className={` ${saveBtnCss} ${hovercss} border border-white/20 bg-white/10 `}
          >
            <Save size={25} color={"white"} strokeWidth={2} />꿈 기록 저장하기
          </button>

          {/* AI 분석 받기 */}
          <button
            type="button"
            onClick={onAnalyze}
            className={`${saveBtnCss} ${hovercss}  bg-linear-to-r from-[#F6339A] to-[#C700FF]`}
          >
            <Brain size={25} color={"white"} strokeWidth={2} />
            AI 분석 받기
            <Sparkle size={25} color={"white"} strokeWidth={2} />
          </button>

          {/* 취소 */}
          <button
            type="button"
            onClick={onCancel}
            className={`mt-6 p-4 rounded-xl border border-white/20 bg-white/10 w-40 h-17 text-white font-bold ${hovercss} `}
          >
            취소
          </button>
        </div>
      </div>
    </form>
  );
};

export default RecordCard;
