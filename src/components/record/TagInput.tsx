import { useState, useCallback, type KeyboardEvent } from "react";
import { Tag } from "lucide-react";

import {
  useController,
  type UseControllerProps,
  type FieldValues,
} from "react-hook-form";
import { hovercss } from "../Navbar";

// 💡 RHF 폼에 연결할 때 태그 값은 문자열 배열이 됩니다.
interface TagInputProps<T extends FieldValues> extends UseControllerProps<T> {
  // RHF에 연결된 필드의 이름 (예: 'tags')
  name: UseControllerProps<T>["name"];
  // RHF의 control 객체
  control: UseControllerProps<T>["control"];
  label: string;
}

// 💡 입력 필드와 버튼에 적용할 Tailwind CSS 스타일을 정의합니다.
const inputClasses =
  "rounded-2xl border border-white/10 w-full p-5 bg-white/5 text-white placeholder-white/40 focus:border-[#F6339A] focus:ring-[#F6339A]/50 transition duration-200";
const buttonClasses = `text-white font-bold rounded-2xl w-40 p-4 ml-4 bg-gradient-to-r from-[#F6339A] to-[#C700FF] ${hovercss}`;
const tagBaseClasses =
  "text-white font-medium px-4 py-2 rounded-2xl flex items-center gap-x-2 mr-2 mb-2 transition duration-150";

// useController를 사용하는 제네릭 함수형 컴포넌트
const TagInput = <T extends FieldValues>({
  name,
  control,
  label,
}: TagInputProps<T>) => {
  const { field } = useController({ name, control });

  const [inputValue, setInputValue] = useState("");

  // 폼의 현재 태그 배열 값
  const tags: string[] = Array.isArray(field.value) ? field.value : [];

  const handleAddTag = useCallback(() => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue && !tags.includes(trimmedValue)) {
      field.onChange([...tags, trimmedValue]);
      setInputValue("");
    }
  }, [inputValue, tags, field.onChange]);

  const handleRemoveTag = useCallback(
    (tagToRemove: string) => {
      const newTags = tags.filter((tag) => tag !== tagToRemove);
      field.onChange(newTags);
    },
    [tags, field.onChange]
  );

  // 엔터 키 입력 처리
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 폼 제출 방지
      handleAddTag();
    }
  };

  // UI 컴포넌트
  return (
    <div className="flex flex-col gap-y-4">
      {/* 태그 섹션 제목 */}
      <div className="flex items-center text-white text-xl gap-x-3">
        <Tag size={20} color={"#C27AFF"} strokeWidth={2} />
        {label}
      </div>

      {/* 입력 필드와 추가 버튼 */}
      <div className="flex items-center">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className={inputClasses}
          placeholder="태그 입력 (예: 비행, 가족, 학교)"
        />
        <button
          type="button" // 폼 제출 방지
          onClick={handleAddTag}
          className={buttonClasses}
        >
          추가
        </button>
      </div>

      {/* 현재 태그 목록 */}
      <div className="flex flex-wrap mt-2">
        {tags.map((tag) => (
          <div
            key={tag}
            className={`${tagBaseClasses} bg-[#F6339A]/20 border border-[#F6339A]`}
          >
            <span>#{tag}</span>
            <button
              type="button"
              className="text-white/80 hover:text-white"
              onClick={() => handleRemoveTag(tag)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
