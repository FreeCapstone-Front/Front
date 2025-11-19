import { homeCompoBgBlack } from "../weather/WeatherLayout";

import pinkIcon from "../../../assets/icons/pinkIcon.png";
import introIcon1 from "../../../assets/icons/book1.png";
import introIcon2 from "../../../assets/icons/brain.png";
import introIcon3 from "../../../assets/icons/up1.png";
import introBtn1 from "../../../assets/icons/introBtn1.png";
import introBtn2 from "../../../assets/icons/introBtn2.png";
import introBtn3 from "../../../assets/icons/introBtn3.png";

import { hovercss, pinkGrLoginBtn } from "../../Navbar";
import { pinkGrBtnWeather } from "../weather/WeatherCard";
import { Link } from "react-router-dom";
export const IntroSection = () => {
  return (
    <div
      className={`${homeCompoBgBlack} w-[1150px] h-[620px] flex flex-col items-center justify-center gap-y-5 p-5`}
    >
      <div
        className={`${pinkGrBtnWeather} w-[200px] h-14 flex gap-x-2 items-center justify-center`}
      >
        <img src={pinkIcon} />
        나만의 꿈의 세계로
      </div>

      <div className="text-lg text-white">
        내 꿈을 기록하고, 나만의 심리 분석 받아보세요
      </div>
      <div className="text-xl text-white">
        꿈꿈과 함께 당신의 잠재의식을 탐험하고, 더 나은 수면을 경험하세요
      </div>
      <div className="flex gap-x-4">
        <div className="w-80 h-45 bg-white/10 rounded-3xl flex flex-col gap-y-3 px-5 py-8">
          <img src={introIcon1} className="h-12 w-12" />
          <div className=" text-white text-xl">꿈 기록</div>
          <div className=" text-[#99A1AF]">
            {" "}
            매일의 꿈을 손쉽게 기록하고 관리하세요
          </div>
        </div>
        <div className="flex gap-x-4">
          <div className="w-80 h-45 bg-white/10 rounded-3xl flex flex-col gap-y-3 px-5 py-8">
            <img src={introIcon2} className="h-12 w-12" />
            <div className=" text-white text-xl">심리 분석</div>
            <div className=" text-[#99A1AF]">
              {" "}
              AI 기반 꿈 분석으로 나를 이해해요
            </div>
          </div>
        </div>
        <div className="flex gap-x-4">
          <div className="w-80 h-45 bg-white/10 rounded-3xl flex flex-col gap-y-3 px-5 py-8">
            <img src={introIcon3} className="h-12 w-12" />
            <div className=" text-white text-xl">수면 패턴</div>
            <div className="text-[#99A1AF]">
              {" "}
              수면 패턴을 추적하고 개선하세요
            </div>
          </div>
        </div>
      </div>
      <div className={`flex items-center gap-x-10 justify-center py-5`}>
        <Link
          className={`${pinkGrLoginBtn} w-65 h-17 flex items-center justify-center gap-x-2`}
          to={"auth-page"}
        >
          <img src={introBtn1} className="h-6 w-6" />
          <div>지금 시작하기</div>
          <img src={introBtn2} className="h-6 w-6" />
        </Link>

        <Link
          className={`text-white rounded-full border-2 border-white/30 bg-white/10 w-50 h-15 flex items-center justify-center gap-x-2 ${hovercss}`}
          to={""}
        >
          <img src={introBtn3} className="h-6 w-6" />
          <div>더 알아보기</div>
        </Link>
      </div>
    </div>
  );
};
