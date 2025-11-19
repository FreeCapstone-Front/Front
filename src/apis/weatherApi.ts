
import type { WeatherInfoData } from "../types/weather";
import { Api } from "./authApi";

export const API_BASE_URL = "http://localhost:8080";


export const weatherInfo = async (city: string): Promise<WeatherInfoData> => {
  try {
    const response = await Api.get<WeatherInfoData>(
      "api/weather/sleep-tips",

      {
        params: { city }
      }
    );
    return response.data;
  } catch (error) {
    console.error("날씨 정보 조회 실패", error);
    throw error;
  }
};
