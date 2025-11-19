import { shadowStyle } from "./WeatherLayout";
import type { WeatherInfoData } from "../../../types/weather";
import gps from "../../../assets/icons/gps.png";
import eye from "../../../assets/icons/eye.png";
import water from "../../../assets/icons/water.png";
import wind from "../../../assets/icons/wind.png";
import pinkIcon from "../../../assets/icons/pinkIcon.png";
import greenst from "../../../assets/icons/greenst.png";
import pinkcloud from "../../../assets/icons/pinkcloud.png";
import orange from "../../../assets/icons/orange.png";
import bluewind from "../../../assets/icons/bluewind.png";
import { homeCompoBgBlack } from "./WeatherLayout";





export const WeatherbgBlackOut =
  "bg-gradient-to-b from-[#Ffff]/10 to-[#ffff]/5 backdrop-blur-lg border border-[#Ffff]/30";
export const WeatherbgBlackInner =
  "bg-gradient-to-b from-[#AD46FF]/10 to-[#F6339A]/10 backdrop-blur-lg h-full w-full";
export const pinkGrBtnWeather =
  "bg-gradient-to-l from-[#AD46FF]/20 to-[#F6339A]/20 rounded-3xl border-2 border-[#F6339A]/30  text-[#F6339A]/80 ";

function getWeatherIcon(desc: string) {
  if (desc.includes("맑음")) return "☀️";
  if (desc.includes("비")) return "🌧️";
  if (desc.includes("구름") || desc.includes("흐림")) return "☁️";
  if (desc.includes("눈")) return "❄️";
  return "🌤️";
} 

export const WeatherCard = ({ data }: { data: WeatherInfoData }) => {
  return (
    <div className={`${homeCompoBgBlack} ${shadowStyle} w-[1150px] h-[550px] flex items-center justify-center gap-10 gap-x-10`}
>

    <div
      className={`${WeatherbgBlackOut} ${shadowStyle}  rounded-[60px] w-[500px] h-[360px]`}
    >
      <div className={`${WeatherbgBlackInner} flex flex-col items-center  text-white rounded-[60px]`}>
         <div className="flex flex-row pt-10">
          <img src={gps} alt="msg" className="w-5 h-5"/>{data.city}, 대한민국
         </div>
          <div className="flex items-center pt-5 gap-4">
          <span className="text-4xl">{getWeatherIcon(data.description)}</span>
          <span className="text-3xl font-semibold">{Math.round(data.temp)}°</span>
          </div>
          <div className="font-medium opacity-40 pt-5">{data.description}</div>
          <div className="flex gap-20 mt-8 ml-5 justify-center">
          <div className="flex flex-col gap-1 items-center">
            <div className="bg-white/10 rounded-xl"><img src={water} alt="water" /></div>
            <span className="block text-sm opacity-60">습도</span>
            <span>{data.humidity}%</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="bg-white/10 rounded-xl"><img src={wind} alt="wind" /></div>
            <span className="block text-sm opacity-60">바람</span>
            <span>{Math.round(data.windSpeed)}km/h</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="bg-white/10 rounded-xl"><img src={eye} alt="eye" /></div>
            <span className="block text-sm opacity-60">가시거리</span>
            <span>{Math.round(data.visibility / 1000)}km</span>
          </div>
        </div>
      </div>
      
    </div>
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

        <div className="grid grid-cols-2 gap-4 max-">
          
            
          <div className={`w-[230px] h-[120px] ${WeatherbgBlackOut} rounded-[20px] max-w-3xl`}>
            <div className="flex flex-row pt-4">
            <div><img src={bluewind} className="w-30 h-15" alt=""/></div>
            <div className="flex flex-col gap-2 mr-5">
              <h1 className="text-white text-thin text-base">{data.sleepTips[0].title}</h1>
              <p className="text-[#99A1AF] text-xs">{data.sleepTips[0].body}</p>
            </div>
            
            </div>
          </div>
          
          <div className={`w-[230px] h-[120px] ${WeatherbgBlackOut} rounded-[20px] max-w-3xl`}>
            <div className="flex flex-row pt-4">
            <div><img src={orange} className="w-30 h-15" alt=""/></div>
            <div className="flex flex-col gap-2 mr-5">
              <h1 className="text-white text-thin text-base">{data.sleepTips[1].title}</h1>
              <p className="text-[#99A1AF] text-xs">{data.sleepTips[1].body}</p>
            </div>
            
            </div>
          </div>
          <div className={`w-[230px] h-[120px] ${WeatherbgBlackOut} rounded-[20px] max-w-3xl`}>
            <div className="flex flex-row pt-4">
            <div><img src={pinkcloud} className="w-30 h-15" alt=""/></div>
            <div className="flex flex-col gap-2 mr-5">
              <h1 className="text-white text-thin text-base">{data.sleepTips[2].title}</h1>
              <p className="text-[#99A1AF] text-xs">{data.sleepTips[2].body}</p>
            </div>
            
            </div>
          </div>
          <div className={`w-[230px] h-[120px] ${WeatherbgBlackOut} rounded-[20px] max-w-3xl`}>
            <div className="flex flex-row pt-4">
            <div><img src={greenst} className="w-30 h-15" alt=""/></div>
            <div className="flex flex-col gap-2 mr-5">
              <h1 className="text-white text-thin text-base">{data.sleepTips[3].title}</h1>
              <p className="text-[#99A1AF] text-xs">{data.sleepTips[3].body}</p>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
