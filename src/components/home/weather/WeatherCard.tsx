import { shadowStyle } from "./WeatherLayout";
export const WeatherbgBlackOut =
  "bg-gradient-to-b from-[#Ffff]/10 to-[#ffff]/5 backdrop-blur-lg border border-[#Ffff]/30";
export const WeatherbgBlackInner =
  "bg-gradient-to-b from-[#AD46FF]/10 to-[#F6339A]/10 backdrop-blur-lg h-full w-full";

export const WeatherCard = () => {
  return (
    <div
      className={`${WeatherbgBlackOut} ${shadowStyle} rounded-[60px] w-[500px] h-[360px]`}
    >
      <div className={`${WeatherbgBlackInner} rounded-[60px]`}></div>
    </div>
  );
};
