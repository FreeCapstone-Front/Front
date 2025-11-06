import { WeatherCard } from "./WeatherCard";
import { WeatherTips } from "./WeatherTips";

export const shadowStyle = "shadow-[0px_20px_60px_-15px_rgba(236,72,153,0.4)]";
export const homeCompoBgBlack =
  "bg-gradient-to-b from-[#1A1625] via-[#1E1B4B] to-[#2D1B4E] rounded-[60px] border-2 border-[#F6339A]/30";

export const Weatherlayout = () => {
  return (
    <div
      className={`${homeCompoBgBlack} ${shadowStyle} w-[1150px] h-[550px] flex items-center justify-center gap-x-10`}
    >
      <WeatherCard />
      <WeatherTips />
    </div>
  );
};

export const IntroductionPage = () => {
  return <div>화이팅,,,,</div>;
};
