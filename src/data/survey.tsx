import bed from "../assets/icons/bed2.png";
import brain from "../assets/icons/brain2.png";
import up from "../assets/icons/up.png";
import moon from "../assets/icons/moon.png";
import time from "../assets/icons/time.png";

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
