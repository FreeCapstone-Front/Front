import { WeatherbgBlackInner, WeatherbgBlackOut } from "./WeatherCard";
import pinkIcon from "../../../assets/icons/pinkIcon.png";
import { shadowStyle } from "./WeatherLayout";

import { WeatherTipDetail } from "./WeatherTipDetail";

export const pinkGrBtnWeather =
  "bg-gradient-to-l from-[#AD46FF]/20 to-[#F6339A]/20 rounded-3xl border-2 border-[#F6339A]/30  text-[#F6339A]/80 ";

export const WeatherTips = () => {
  return (
    <div
      className={`${WeatherbgBlackOut} ${shadowStyle} rounded-[60px] h-118 w-127.5`}
    >
      <div
        className={`${WeatherbgBlackInner} rounded-[60px] flex flex-col gap-y-6 py-10 items-center`}
      >
        <div
          className={`${pinkGrBtnWeather} w-60 h-[50px] flex items-center justify-center`}
        >
          <img src={pinkIcon} />
          Today's Sleep Tips
        </div>

        <div className="text-center text-white text-xl">
          오늘 날씨에 맞는 수면 꿀팁
        </div>

        <div className="grid grid-cols-2 gap-4">
          <WeatherTipDetail />

          <WeatherTipDetail />

          <WeatherTipDetail />

          <WeatherTipDetail />
        </div>
      </div>
    </div>
  );
};
