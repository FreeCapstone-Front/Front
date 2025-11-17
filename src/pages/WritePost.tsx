"use client";

import { useState } from "react";
import { ChevronLeft, AlertCircle } from "lucide-react";

export const WritePost = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-4 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <ChevronLeft className="w-5 h-5" />
        <span className="text-sm font-medium">목록으로</span>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-8">고민 나누기</h1>

        {/* Info Box */}
        <div className="bg-blue-500/20 border border-blue-400/40 rounded-lg p-4 mb-8 flex gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-blue-400 mt-0.5" />
          <p className="text-sm text-blue-100">
            익명으로 글이 등록됩니다. 개인정보나 민감한 정보는 작성하지 마세요.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-2">카테고리</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-purple-900/40 border border-purple-700/50 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
            >
              <option value="">카테고리를 선택하세요</option>
              <option value="sleep_quality">수면의 질</option>
              <option value="sleep_duration">수면 시간</option>
              <option value="sleep_schedule">수면 일정</option>
              <option value="insomnia">불면증</option>
              <option value="sleep_apnea">수면 무호흡증</option>
              <option value="nap">코골이</option>
              <option value="dreams">꿈</option>
              <option value="sleep_environment">수면 환경</option>
              <option value="sleep_disorders">수면 장애</option>
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2">제목</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="고민의 제목을 입력하세요"
              maxLength={100}
              className="w-full bg-purple-900/40 border border-purple-700/50 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
            />
            <div className="text-right text-xs text-purple-300/60 mt-1">
              {title.length}/100
            </div>
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium mb-2">내용</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="고민 내용을 자세히 작성해주세요. 서로 응해하는 마음으로 작성 부탁드립니다."
              maxLength={2000}
              rows={8}
              className="w-full bg-purple-900/40 border border-purple-700/50 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition resize-none"
            />
            <div className="text-right text-xs text-purple-300/60 mt-1">
              {content.length}/2000
            </div>
          </div>

          {/* Guidelines */}
          <div className="bg-purple-900/40 border border-purple-700/50 rounded-lg p-4 space-y-3">
            <h3 className="font-medium text-sm">작성 시 유의사항</h3>
            <ul className="space-y-2 text-xs text-purple-200">
              <li className="flex gap-2">
                <span className="flex-shrink-0">•</span>
                <span>타인을 비방하거나 상처 주는 표현은 삼가주세요</span>
              </li>

              <li className="flex gap-2">
                <span className="flex-shrink-0">•</span>
                <span>개인정보(이름, 연락처 등)는 절때 작성하지 마세요</span>
              </li>
              <li className="flex gap-2">
                <span className="flex-shrink-0">•</span>
                <span>상업적 광고나 홍보는 금지됩니다</span>
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-6">
            <button
              type="button"
              className="flex-1 bg-transparent border border-purple-500/50 hover:border-purple-400 text-white rounded-lg py-3 font-medium transition hover:bg-purple-900/20"
            >
              취소
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg py-3 font-medium transition shadow-lg hover:shadow-purple-500/50"
            >
              등록하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
