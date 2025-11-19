// SurveyPage.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { pages } from "../data/survey";

export const SurveyPage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(Array(pages.length).fill(null));
  const bgBlack =
    "bg-gradient-to-b from-[#1A1625] via-[#1E1B4B] to-[#2D1B4E] border-b-2 border-[#F6339A]/30";
  const allAnswered = selected.every((sel) => sel !== null);

  const progress = Math.round(
    (selected.filter((sel) => sel !== null).length / pages.length) * 100
  );

  const handleSelect = (pageIdx: number, optIdx: number) => {
    const updated = [...selected];
    updated[pageIdx] = optIdx;
    setSelected(updated);
  };

  const handleSubmit = () => {
    if (!allAnswered) return;
    // 옵션별로 선택한 스코어 배열 생성
    const scores = selected.map((optIdx, i) => pages[i].options[optIdx].score);
    const totalScore = scores.reduce((acc, score) => acc + score, 0);
    navigate("/result-page", { state: { totalScore, scores } });
  };

  const ProgressBar = (
    <div className="sticky top-0 z-50 bg-[#231B33] px-6 py-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-200 text-lg">
          질문 {selected.filter((sel) => sel !== null).length} / {pages.length}
        </span>
        <span className="text-pink-400 text-base">{progress}% 완료</span>
      </div>
      <div className="w-full h-2 bg-gray-800 rounded-full">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {ProgressBar}
      <div className={`w-full min-h-screen ${bgBlack} py-12 `}>
        <div className="flex flex-col gap-8 max-w-5xl mx-auto py-12">
          {pages.map((page, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-purple-800/10 to-indigo-900 text-white rounded-2xl shadow-lg p-6 min-h-[240px] w-full "
            >
              <div className="flex items-center mb-4">
                <img
                  src={page.icon}
                  alt=""
                  className="w-20 h-20 object-contain"
                />
                <div className="ab ml-3 text-white font-semibold text-lg">
                  {page.question}
                </div>
              </div>
              {page.options.map((opt, i) => (
                <li
                  key={i}
                  className={
                    "flex justify-between items-center mb-2 px-4 py-2 rounded-xl bg-gray-800/60 bg-opacity-5 hover:bg-opacity-15 cursor-pointer transition-all border border-white/10" +
                    (selected[idx] === i
                      ? " border-pink-400 bg-indigo-900"
                      : "")
                  }
                  onClick={() => handleSelect(idx, i)}
                >
                  <div className="flex flex-col">
                    <span className="text-white text-2xl">{opt.text}</span>
                    <span className="text-violet-300 text-sm">{opt.desc}</span>
                  </div>
                </li>
              ))}
            </div>
          ))}
          <button
            className={`w-full py-4 rounded-lg text-white font-semibold transition-colors ${
              allAnswered
                ? "bg-pink-500 hover:bg-pink-600 cursor-pointer"
                : "bg-gray-600 cursor-not-allowed"
            }`}
            disabled={!allAnswered}
            onClick={handleSubmit}
          >
            설문 완료
          </button>
        </div>
      </div>
    </>
  );
};
