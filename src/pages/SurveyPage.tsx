// SurveyPage.jsx
import { useState } from "react";
import bed from "../assets/icons/bed.png";
import brain from "../assets/icons/brain.png";
import up from "../assets/icons/up.png";
import moon from "../assets/icons/moon.png";
import time from "../assets/icons/time.png";
import { useNavigate } from "react-router-dom";

export const pages = [
  {
    question: "잠들기까지 얼마나 걸리시나요?",
    icon: time,
    options: [
      { text: "10분 이내", desc: "금방 잠들어요", score: 4 },
      { text: "10-20분", desc: "적당한 시간이에요", score: 3 },
      { text: "20-30분", desc: "조금 오래 걸려요", score: 2 },
      { text: "30분 이상", desc: "잠들기 어려워요", score: 1 },
    ],
  },
  {
    question: "밤중에 몇 번 정도 꺠시나요?",
    icon: moon,
    options: [
      { text: "전혀 안 깸", desc: "아침까지 푹 자요", score: 4 },
      { text: "1~2회", desc: "가끔 깨요", score: 3 },
      { text: "3~4회", desc: "자주 깨요", score: 2 },
      { text: "5회 이상", desc: "계속 깨요", score: 1 },
    ],
  },
  {
    question: "아침에 일어날 때 기분은?",
    icon: up,
    options: [
      { text: "상쾌함", desc: "완전히 회복된 느낌", score: 4 },
      { text: "괜찮음", desc: "무난한 편이에요", score: 3 },
      { text: "조금 피곤함", desc: "덜 잔 느낌이에요", score: 2 },
      { text: "매우 피곤함", desc: "전혀 회복 안 됨", score: 1 },
    ],
  },
  {
    question: "낮 시간에 졸음이나 피로를 느끼시나요?",
    icon: brain,
    options: [
      { text: "아예 느끼지 않음", desc: "하루종일 활기차요", score: 4 },
      { text: "가끔 느끼는 편", desc: "오후에 조금 졸려요", score: 3 },
      { text: "자주 느끼는 편", desc: "자주 피곤해요", score: 2 },
      { text: "항상 느끼는 편", desc: "늘 졸리고 피곤해요", score: 1 },
    ],
  },
  {
    question: "평소 수면 시간은 얼마나 되시나요?",
    icon: bed,
    options: [
      { text: "7~9시간", desc: "적정 수면 시간", score: 4 },
      { text: "6~7시간", desc: "약간 부족해요", score: 3 },
      { text: "5~6시간", desc: "많이 부족해요", score: 2 },
      { text: "5시간 이하", desc: "매우 부족해요", score: 1 },
    ],
  },
];

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
    <div className="fixed top-0 left-0 w-full z-50 bg-[#231B33] px-6 py-4">
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

  return (
    <>
      {ProgressBar}
      <div className={`w-full min-h-screen ${bgBlack} py-12`}>
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
