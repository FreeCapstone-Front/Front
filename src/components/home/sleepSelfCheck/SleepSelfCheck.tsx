import { homeCompoBgBlack } from "../weather/WeatherLayout";
import pinkIcon from "../../../assets/icons/pinkIcon.png";
import { pinkGrBtnWeather } from "../weather/WeatherTips";
import sheep from "../../../assets/icons/sheep.png";
import moon from "../../../assets/icons/moon1.png";
import brain from "../../../assets/icons/brain.png";
import clock from "../../../assets/icons/clock.png";
import up from "../../../assets/icons/up1.png";
import bed from "../../../assets/icons/bed.png";
import rightbtn from "../../../assets/icons/introBtn2.png";
import { pinkGrhoverCss } from "../../Navbar";
import { useNavigate } from "react-router-dom";

const sleepQuestions = [
  {
    icon: clock,
    title: "잠들기 까지 걸리는 시간",
    subtitle: "30분 이상 걸리시나요",
  },
  {
    icon: moon,
    title: "밤중에 깨는 횟수",
    subtitle: "3회 이상 깨시나요?",
  },
  {
    icon: up,
    title: "아침 기상 상태",
    subtitle: "피곤하게 일어나시나요?",
  },
  {
    icon: brain,
    title: "낮 시간대 피로도",
    subtitle: "졸리고 집중안되시나요?",
  },
];

const SleepSelfCheck = () => {
  const navigate = useNavigate();
  const handleRetry = () => {
    navigate("/survey-page");
  };

  return (
    <div
      className={`${homeCompoBgBlack} px-10 w-287.5 h-205 flex flex-col items-center justify-center gap-y-5 p-5`}
    >
      <div
        className={`${pinkGrBtnWeather} w-50 h-14 flex gap-x-2 items-center justify-center`}
      >
        <img src={pinkIcon} />
        나만의 꿈의 세계로
      </div>
      <div className="text-xl text-white">나의 수면 상태를 체크해보세요</div>
      <div className="text-lg text-[#D1D5DC]">
        간단한 질문으로 당신의 수면 건강을 진단하고, 맞춤형 솔루션을
        제공받으세요
      </div>

      <div className="w-full flex gap-x-4 items-center">
        <div className="w-full h-112.5 rounded-2xl backdrop-blur-lg text-white flex justify-center items-center bg-linear-to-r from-[#AD46FF]/10 to-[#F6339A]/10  ">
          <img src={sheep} className="w-100" />
        </div>
        <div className="w-full h-112.5 flex flex-col gap-5 bg-linear-to-r from-[#AD46FF]/10 to-[#F6339A]/10 backdrop-blur-lg text-white">
          {sleepQuestions.map((q, idx) => (
            <div key={idx} className="w-full h-25 bg-white/10 rounded-2xl px-5">
              <div className="flex items-center justify-start h-full gap-x-5">
                <img src={q.icon} className="h-12 w-12" />
                <div className="flex flex-col items-start justify-center h-full ">
                  <div>{q.title}</div>
                  <div className="text-[#99A1AF] text-sm">{q.subtitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={handleRetry}
        className={`w-120 h-20 text-white text-xl bg-linear-to-r from-[#AD46FF] to-[#F6339A] rounded-2xl px-[1.25rem] flex items-center justify-center gap-x-4 ${pinkGrhoverCss}`}
      >
        <img src={bed} className="h-6 w-6"></img>
        수면 자가진단 시작하기
        <img src={rightbtn} className="h-6 w-6"></img>
      </div>
    </div>
  );
};
export default SleepSelfCheck;
