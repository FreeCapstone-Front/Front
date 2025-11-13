import React, { useState, useCallback, useMemo } from "react";

// 💡 Props 정의: RHF Controller에서 전달받는 값과 함수
interface TimePickerModalProps {
  selectedTime: Date | null;
  onTimeChange: (date: Date | null) => void;
  label: string;
}

// 00~23시 배열 생성
const HOURS = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
// 00~59분 배열 생성
const MINUTES = Array.from({ length: 60 }, (_, i) =>
  String(i).padStart(2, "0")
);

const TimePickerModal: React.FC<TimePickerModalProps> = ({
  selectedTime,
  onTimeChange,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // RHF의 값으로 초기화 (Date 객체 대신 문자열 사용)
  const initialHour = selectedTime
    ? String(selectedTime.getHours()).padStart(2, "0")
    : "00";
  const initialMinute = selectedTime
    ? String(selectedTime.getMinutes()).padStart(2, "0")
    : "00";

  const [currentHour, setCurrentHour] = useState(initialHour);
  const [currentMinute, setCurrentMinute] = useState(initialMinute);

  const handleOpen = useCallback(() => {
    // 모달 열 때 현재 RHF 값으로 내부 상태 초기화
    if (selectedTime) {
      setCurrentHour(String(selectedTime.getHours()).padStart(2, "0"));
      setCurrentMinute(String(selectedTime.getMinutes()).padStart(2, "0"));
    }
    setIsOpen(true);
  }, [selectedTime]);

  const handleConfirm = useCallback(() => {
    // 확인 시 RHF에 값 업데이트
    const newTime = selectedTime
      ? new Date(selectedTime.getTime())
      : new Date();
    newTime.setHours(parseInt(currentHour), parseInt(currentMinute), 0, 0);

    onTimeChange(newTime);
    setIsOpen(false);
  }, [currentHour, currentMinute, selectedTime, onTimeChange]);

  const handleCancel = useCallback(() => {
    // RHF에 값 전달 없이 모달만 닫음
    setIsOpen(false);
  }, []);

  const displayTime = useMemo(
    () => `${currentHour}:${currentMinute}`,
    [currentHour, currentMinute]
  );

  // Tailwind CSS 클래스
  // 🚨 커스텀 목록 스타일 (스크롤바를 숨기는 유틸리티가 있다면 적용 가능)
  const baseListClasses =
    "rounded-xl p-3 text-2xl text-center border-2 w-full h-[15rem] overflow-y-scroll bg-[#1A1625]/80";
  const buttonBaseClasses =
    "w-full py-3 rounded-xl font-bold text-lg transition duration-200";
  const confirmButtonClasses = `${buttonBaseClasses} bg-[#F6339A] hover:bg-[#F6339A]/80 text-white`;
  const cancelButtonClasses = `${buttonBaseClasses} bg-[#333] hover:bg-[#555] text-white`;

  // 🚨 커스텀 목록 항목 스타일 함수 (그라디언트 적용)
  const getOptionClasses = (value: string, selectedValue: string) => {
    const isSelected = value === selectedValue;
    return isSelected
      ? "bg-gradient-to-r from-[#F6339A] to-[#C700FF] text-white font-bold" // 선택된 항목은 그라디언트
      : "bg-transparent text-gray-300 hover:bg-white/10"; // 미선택 항목은 투명, 호버 시 연한 배경색
  };

  return (
    <div className="relative w-full">
      {/* 1. 입력 필드 역할 (클릭 시 모달 열기) */}
      <div
        onClick={handleOpen}
        className="text-white border border-white/20 bg-white/5 rounded-xl w-full h-12 text-center flex items-center justify-center cursor-pointer"
      >
        <span className="text-lg">
          {selectedTime
            ? `${String(selectedTime.getHours()).padStart(2, "0")}:${String(
                selectedTime.getMinutes()
              ).padStart(2, "0")}`
            : "시간 선택"}
        </span>
      </div>

      {/* 2. 모달 컨텐츠 */}
      {isOpen && (
        <div
          className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 z-50"
          style={{ width: "max-content" }}
        >
          <div className="bg-[#1A1625] p-8 rounded-2xl shadow-2xl w-90 border border-[#F6339A]/40">
            {/* 상단 제목/현재 시간 표시 */}
            <div className="text-center mb-6">
              <h3 className="text-gray-400 text-xl mb-4">{label}</h3>
              <h1 className="text-4xl font-extrabold text-[#F6339A]">
                {displayTime}
              </h1>
            </div>

            {/* 시 / 분 커스텀 목록 영역  */}
            <div className="flex justify-between gap-x-4 mb-8">
              {/* 시 (Hour) */}
              <div className="flex-1 flex flex-col items-center">
                <span className="text-white text-lg mb-2">시</span>
                <div
                  className={`${baseListClasses} border-[#F6339A]`} // 시 목록 스타일
                >
                  {HOURS.map((hour) => (
                    <div
                      key={hour}
                      className={`py-2 text-3xl cursor-pointer transition duration-100 ${getOptionClasses(
                        hour,
                        currentHour
                      )}`}
                      onClick={() => setCurrentHour(hour)}
                    >
                      {hour}
                    </div>
                  ))}
                </div>
              </div>

              {/* 분 (Minute) */}
              <div className="flex-1 flex flex-col items-center">
                <span className="text-white text-lg mb-2">분</span>
                <div
                  className={`${baseListClasses} border-[#F6339A]`} // 분 목록 스타일
                >
                  {MINUTES.map((minute) => (
                    <div
                      key={minute}
                      className={`py-2 text-3xl cursor-pointer transition duration-100 ${getOptionClasses(
                        minute,
                        currentMinute
                      )}`}
                      onClick={() => setCurrentMinute(minute)}
                    >
                      {minute}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 취소 / 확인 버튼 */}
            <div className="flex justify-between gap-x-4">
              <button onClick={handleConfirm} className={confirmButtonClasses}>
                확인
              </button>
              <button onClick={handleCancel} className={cancelButtonClasses}>
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimePickerModal;
