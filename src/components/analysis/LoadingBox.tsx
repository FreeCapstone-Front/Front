import { bgBlack } from "../../pages/HomePage";
import { shadowStyle } from "../home/weather/WeatherLayout";

export const LoadingSpinner = () => (
  <div className="w-12 h-12 border-4 border-t-[#F6339A] border-gray-300 rounded-full animate-spin" />
);
const LoadingBox = () => {
  return (
    <div
      className={`w-full h-70 ${bgBlack} flex items-center rounded-[#f6339a]/30 rounded-2xl justify-center text-white ${shadowStyle}`}
    >
      <LoadingSpinner />
      <span className="ml-4 text-white text-lg">로딩중...</span>
    </div>
  );
};

export default LoadingBox;
