import React from "react";
import sheep from "../assets/logo/profileChracter1.png";

const LoadingModal: React.FC<{ visible: boolean }> = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-linear-to-b from-[#2A2535]/30 to-[#3D2B5E]/30 bg-opacity-30 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 py-15 flex flex-col items-center w-150 h-120">
        <img
          src={sheep}
          alt="loading"
          className="h-48 w-48 mb-6 animate-spin-slow"
          style={{ animationTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)" }}
        />
        <p className="text-3xl font-bold text-gray-900 dark:text-white animate-pulse">
          로딩 중...
        </p>
        {/* 회전하는 스피너 애니메이션 */}
        <svg
          className="w-12 h-12 text-pink-600 mt-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      </div>
    </div>
  );
};

export default LoadingModal;
