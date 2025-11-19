import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import FieldGroup from "./FieldGroup";
import MoodSelector from "./MoodSelector";
import TagInput from "./TagInput";
import { shadowStyle } from "../home/weather/WeatherLayout";
import "react-datepicker/dist/react-datepicker.css";
import MyDatePickerComponent from "./MyDatePickerComponent";
import TimePickerModal from "./TimePickerModal";

import {
  Calendar,
  Moon,
  Sun,
  Sparkle,
  BookOpen,
  Heart,
  Save,
  Brain,
} from "lucide-react";

import { formatDate, formatToISOString } from "../../utils/format";
import type { DreamFormData } from "../../types/dream";
import { hovercss } from "../Navbar";
import { saveDreamRecord } from "../../apis/dreamApi";
import LoadingModal from "../LoadingModal";
import { useNavigate } from "react-router-dom";

const saveBtnCss =
  "mt-6 p-4 rounded-xl w-80 h-17 text-white font-bold text-lg flex items-center justify-center gap-x-4";

const moodOptions = [
  "행복한",
  "평범한",
  "불안한",
  "신비로운",
  "무서운",
  "슬픈",
  "흥분되는",
  "평화로운",
  "혼란스러운",
];

const RecordCard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const navigate = useNavigate();
  const { register, handleSubmit, control, reset, getValues } =
    useForm<DreamFormData>({
      defaultValues: {
        date: formatDate(new Date()),
        sleepAt: formatToISOString(new Date()),
        wakeAt: formatToISOString(new Date()),
        title: "",
        content: "",
        mood: "",
        tags: [],
      },
    });
  useEffect(() => {
    const savedSummary = localStorage.getItem("chatBotSummary");
    if (savedSummary) {
      reset({ ...getValues(), content: savedSummary });
    }
  }, []);

  const onSubmit = async (data: DreamFormData) => {
    if (!data.date || !data.sleepAt || !data.wakeAt) {
      alert("날짜와 시간을 정확히 입력해 주세요.");
      return;
    }

    if (!moodOptions.includes(data.mood)) {
      alert("꿈의 분위기는 반드시 지정된 한글 값이어야 합니다.");
      return;
    }

    setIsLoading(true); // 로딩 시작

    try {
      const result = await saveDreamRecord(data);
      alert("꿈 기록이 성공적으로 저장되었습니다.");
      console.log(result);
      localStorage.removeItem("chatBotSummary");
      reset();
      navigate(`/calendar-page`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("꿈 기록 저장 실패", error.message);
      } else {
        console.error("알 수 없는 에러 발생", error);
      }
      alert("꿈 기록 저장 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  };

  const onCancel = () => {
    reset();
    alert("폼 내용이 초기화되었습니다.");
  };

  const onAnalyze = () => {
    const data = getValues();

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
    <>
      <LoadingModal visible={isLoading} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cardCss}>
          {/* 필드 그룹들 - 생략, 이전과 동일 */}

          {/* 날짜/시간 필드 */}
          <div className="w-full flex items-start justify-between gap-x-8">
            <FieldGroup
              label={
                <>
                  <Calendar size={20} color="#f6339a" strokeWidth={2} />
                  날짜
                </>
              }
            >
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <MyDatePickerComponent
                    selected={field.value ? new Date(field.value) : null}
                    onChange={(date) =>
                      field.onChange(date ? formatDate(date) : null)
                    }
                  />
                )}
              />
            </FieldGroup>

            <FieldGroup
              label={
                <>
                  <Moon size={20} color="#C27AFF" strokeWidth={2} />
                  취침시간
                </>
              }
            >
              <Controller
                name="sleepAt"
                control={control}
                render={({ field }) => (
                  <TimePickerModal
                    selectedTime={field.value ? new Date(field.value) : null}
                    onTimeChange={(date) =>
                      field.onChange(date ? formatToISOString(date) : null)
                    }
                    label="취침 시간"
                  />
                )}
              />
            </FieldGroup>

            <FieldGroup
              label={
                <>
                  <Sun size={20} color="#FFB900" strokeWidth={2} />
                  종료시간
                </>
              }
            >
              <Controller
                name="wakeAt"
                control={control}
                render={({ field }) => (
                  <TimePickerModal
                    selectedTime={field.value ? new Date(field.value) : null}
                    onTimeChange={(date) =>
                      field.onChange(date ? formatToISOString(date) : null)
                    }
                    label="기상 시간"
                  />
                )}
              />
            </FieldGroup>
          </div>

          {/* 꿈 제목 */}
          <FieldGroup
            label={
              <>
                <Sparkle size={20} color="#f6339a" strokeWidth={2} />꿈 제목
              </>
            }
            className="flex-none"
          >
            <input
              type="text"
              className={`${inputCss} h-16`}
              placeholder="예: 하늘을 나는 꿈"
              {...register("title")}
              disabled={isLoading}
            />
          </FieldGroup>

          {/* 꿈 내용 */}
          <FieldGroup
            label={
              <>
                <BookOpen size={20} color="#C27AFF" strokeWidth={2} />꿈 내용
              </>
            }
            className="flex-none"
          >
            <textarea
              className={`${inputCss} h-50`}
              placeholder="꿈의 내용을 자세히 기록해보세요."
              {...register("content")}
              disabled={isLoading}
            />
          </FieldGroup>

          {/* 꿈의 분위기 */}
          <div className="flex flex-col gap-y-4">
            <div className={labelCss}>
              <Heart size={20} color="#FB64B6" strokeWidth={2} />
              꿈의 분위기
            </div>
            <Controller
              name="mood"
              control={control}
              render={({ field }) => (
                <MoodSelector
                  options={moodOptions}
                  selectedValue={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>

          {/* 태그 */}
          <TagInput
            name="tags"
            control={control}
            label="태그 (선택사항)"
            disabled={isLoading}
          />

          {/* 버튼 섹션 */}
          <div className="flex items-center justify-center gap-x-6 w-full">
            <button
              type="submit"
              className={`${saveBtnCss} ${hovercss} border border-white/20 bg-white/10`}
              disabled={isLoading}
            >
              <Save size={25} color="white" strokeWidth={2} />꿈 기록 저장하기
            </button>

            <button
              type="button"
              onClick={onAnalyze}
              className={`${saveBtnCss} ${hovercss} bg-linear-to-r from-[#F6339A] to-[#C700FF]`}
              disabled={isLoading}
            >
              <Brain size={25} color="white" strokeWidth={2} />
              AI 분석 받기
              <Sparkle size={25} color="white" strokeWidth={2} />
            </button>

            <button
              type="button"
              onClick={onCancel}
              className={`mt-6 p-4 rounded-xl border border-white/20 bg-white/10 w-40 h-17 text-white font-bold ${hovercss}`}
              disabled={isLoading}
            >
              취소
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default RecordCard;
