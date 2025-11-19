import Community from "../components/home/community/Community";
import { DreamArticle } from "../components/home/dreamArticle/DreamArticle";
import { IntroSection } from "../components/home/intro/IntroSection";
import { SleepRoom } from "../components/home/sleepRoom/SleepRoom";
import SleepSelfCheck from "../components/home/sleepSelfCheck/SleepSelfCheck";
import { Weatherlayout } from "../components/home/weather/WeatherLayout";
export const bgBlack =
  "bg-gradient-to-b from-[#2a2535] via-[#2E2B5B] to-[#3D2B5E]";

const HomePage = () => {
  return (
    <div
      className={`${bgBlack} w-full min-h-screen p-20 flex flex-col gap-20 items-center`}
    >
      <Weatherlayout />
      <IntroSection />
      <div className={`flex gap-x-8 `}>
        <DreamArticle />
        <SleepRoom />
      </div>
      <SleepSelfCheck />
      <Community />
    </div>
  );
};

export default HomePage;
