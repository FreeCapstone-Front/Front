import React from "react"; // React를 가져옵니다.
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // ✨ CSS 임포트

// 💡 1. RecordCard의 Controller에서 전달받을 props 타입을 명확히 정의합니다.
interface MyDatePickerProps {
  // RHF Controller의 field.value와 연결됩니다.
  selected: Date | null;
  // RHF Controller의 field.onChange와 연결됩니다.
  onChange: (date: Date | null) => void;
}

const MyDatePickerComponent: React.FC<MyDatePickerProps> = ({
  selected,
  onChange,
}) => {
  // ❌ 내부 상태 관리 (useState) 로직은 제거합니다!
  // const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <DatePicker
      // 👈 RHF Controller에서 내려받은 selected 값을 사용합니다.
      selected={selected}
      // 👈 RHF Controller에서 내려받은 onChange 함수를 사용합니다.
      // DatePicker는 Date | null을 인수로 넘겨주며, onChange가 이를 받습니다.
      onChange={onChange}
      dateFormat="yyyy/MM/dd"
      className="text-white border border-white/20 bg-white/5 rounded-xl w-60 h-12 text-center"
    />
  );
};

export default MyDatePickerComponent;
