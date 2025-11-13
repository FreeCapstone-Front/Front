// FieldGroup.tsx (수정)

import React from "react";

// Tailwind CSS 클래스는 그대로 사용
const labelCss = "flex items-center gap-x-2 text-white text-xl mb-3"; // gap-x-4를 gap-x-2로 줄여 간격 조절

interface FieldGroupProps {
  // 💡 string 대신 React.ReactNode (JSX 엘리먼트를 포함)로 타입을 변경합니다.
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const FieldGroup: React.FC<FieldGroupProps> = ({
  label,
  children,
  className = "flex-1",
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {/* labelProp이 이제 아이콘과 텍스트를 모두 포함할 수 있습니다. */}
      <div className={labelCss}>{label}</div>
      {children}
    </div>
  );
};

export default FieldGroup;
