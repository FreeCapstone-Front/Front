import { useState } from "react";
import type { WeatherInfoData } from "../../../types/weather";
import { WeatherCard } from "./WeatherCard";
import { useEffect } from "react";
import { weatherInfo } from "../../../apis/weatherApi";

export const shadowStyle = "shadow-[0px_20px_60px_-15px_rgba(236,72,153,0.4)]";
export const homeCompoBgBlack =
  "bg-gradient-to-b from-[#1A1625] via-[#1E1B4B] to-[#2D1B4E] rounded-[60px] border-2 border-[#F6339A]/30";




export const Weatherlayout = () => {
  const [weatherData, setWeatherData] = useState<WeatherInfoData | null>(null);
  // const [weatherData2, setsWeatherData] = useState<WeatherInfoData | null>(null);
    useEffect(() => {
    weatherInfo("seoul").then(setWeatherData);
    // 예외/에러 핸들링도 추가 가능
  }, []);
  return (
    <div>
       {weatherData && <WeatherCard data={weatherData} />}
       {/* {weatherData2 && <WeatherTips data2={weatherData2} />} */}
       
    </div>
  );
};

