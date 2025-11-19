export interface SleepTip {
  body: string;
  icon: string;
  title: string;
}
export interface WeatherInfoData {
  city: string;
  temp: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  visibility: number;
  description: string;
  timestamp: number;
  sleepTips: SleepTip[];
}

