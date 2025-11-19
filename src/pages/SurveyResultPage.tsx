import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import star from "../assets/icons/star.png";
import { pages } from "../data/survey";
import { useNavigate } from "react-router-dom";
import improvement from "../assets/icons/improvement.png";
import book1 from "../assets/icons/book1.png";
import clock from "../assets/icons/clock.png";
import up1 from "../assets/icons/up1.png";
import moon2 from "../assets/icons/moon2.png";

export const SurveyResultPage = () => {
  const bgBlack =
    "bg-gradient-to-b from-[#1A1625] via-[#1E1B4B] to-[#2D1B4E] border-b-2 border-[#F6339A]/30";
  const location = useLocation();
  const navigate = useNavigate();
  const totalScore = location.state?.totalScore ?? 0;
  const scores = location.state?.scores ?? [];
  interface Option {
    text: string;
    desc: string;
    score: number;
  }
  interface Page {
    question: string;
    icon: string;
    options: Option[];
  }

  // 최대 점수 예시 (문항 수 * 최고점)
  const maxScore = 20;

  let status = "";
  let message = "";
  let badgeColor = "";
  let badgeText = "";
  let improvements = [];
  // let title1 = "";
  // let title2 = "";
  // let title3 = "";
  // let title4 = "";
  // let improvement1 = "";
  // let improvement2 = "";
  // let improvement3 = "";
  // let improvement4 = "";

  let badgeBorderColor = "border-green-500";

  if (totalScore >= 18) {
    badgeBorderColor = "border-green-500";
    status = "훌륭한 수면 상태입니다!";
    message =
      "현재 수면 습관을 잘 유지하고 계시네요. 꾸준히 좋은 수면 패턴을 이어가세요.";
    badgeColor = "bg-green-500";
    badgeText = "우수";
    improvements = [
      {
        title: "아주 좋은 상태예요!",
        desc: "현재의 수면 습관을 지속적으로 유지하세요.",
        icon: clock,
      },
      {
        title: "긍정적 변화 반영!",
        desc: "최근 실천한 변화 중 효과가 있었던 것을 계속하세요.",
        icon: book1,
      },
      {
        title: "작은 변화 감사하기",
        desc: "적극적으로 변화를 실천한 것에 대해 스스로를 칭찬하세요.",
        icon: up1,
      },
      {
        title: "새로운 도전!",
        desc: "수면 루틴을 소폭 다양화해서 더 건강한 습관을 시도해보세요.",
        icon: moon2,
      },
    ];
  } else if (totalScore >= 13) {
    badgeBorderColor = "border-yellow-500";
    status = "보통 수면 상태입니다!";
    message = "수면 습관이 나쁘지 않지만, 더 개선할 수 있습니다.";
    badgeColor = "bg-yellow-500";
    badgeText = "보통";
    improvements = [
      {
        title: "환경 개선 실천",
        desc: "침실을 어둡고 조용하게 유지하고 온도도 조정하세요.",
        icon: clock,
      },
      {
        title: "스트레칭/명상 루틴",
        desc: "취침 전 스트레칭이나 명상 루틴을 만들어 보세요.",
        icon: book1,
      },
      {
        title: "저녁 식사 조절",
        desc: "너무 늦은 저녁식사는 피하고 가벼운 식사를 하세요.",
        icon: up1,
      },
      {
        title: "습관화 하기",
        desc: "좋은 행동들을 항시 습관화 하세요.",
        icon: moon2,
      },
    ];
  } else {
    badgeBorderColor = "border-red-500";
    status = "수면 개선이 필요합니다!";
    message = "수면 습관을 점검하고 개선 방법을 시도해보세요.";
    badgeColor = "bg-red-500";
    badgeText = "필요";
    improvements = [
      {
        title: "수면 습관 점검",
        desc: "수면 시간을 일정하게 맞추려고 노력해보세요.",
        icon: clock,
      },
      {
        title: "전자기기 사용 제한",
        desc: "자기 전 2시간은 휴대폰, TV의 사용을 줄이세요.",
        icon: book1,
      },
      {
        title: "카페인 섭취 관리",
        desc: "저녁 이후에는 카페인 음료를 마시지 않는 게 좋아요.",
        icon: up1,
      },
      {
        title: "수면 기록 시작",
        desc: "오늘 밤부터 저희 꿈 일지 서비스를 이용해보세요.",
        icon: moon2,
      },
    ];
  }

  const handleRetry = () => {
    navigate("/survey-page");
  };

  const handleGoHome = () => {
    navigate("/home-page");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`w-full min-h-screen ${bgBlack} py-12 flex flex-col items-center`}
    >
      {/* 아이콘 */}
      <div className="w-16 h-16 mb-3">
        <img src={star} alt="Star Icon" />
      </div>
      <div className="text-3xl text-gray-300 font-bold mb-2">{status}</div>
      <div className="text-base text-gray-300 mb-6">{message}</div>
      <div className="rounded-3xl bg-gradient-to-br from-purple-800/10 to-indigo-900 p-8 mb-8 shadow-md w-full max-w-3xl flex flex-col items-center">
        <div className="mb-3 text-violet-300 text-sm">
          <label className="text-white bg-white/10 w-[7.5rem] h-[3.125rem] rounded-3xl border border-white/30 ">
            수면 품질 점수
          </label>
        </div>
        <div className="relative flex flex-col items-center justify-center w-32 h-32">
          {/* 원형 + 점수 */}
          <div
            className={`absolute inset-0 rounded-full border-4 ${badgeBorderColor} shadow-xl flex items-center justify-center`}
          >
            <span className="text-4xl font-extrabold text-white">
              {totalScore}
            </span>
            <span className="ml-2 text-xl text-gray-400">/ {maxScore}점</span>
          </div>
        </div>
        <div
          className={`mt-6 py-1 px-7 rounded-full text-white ${badgeColor} font-semibold`}
        >
          {badgeText}
        </div>
        <div className="w-full h-2 mt-7 bg-violet-900 rounded-full overflow-hidden">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-green-400 to-violet-500"
            style={{ width: `${(totalScore / maxScore) * 100}%` }}
          />
        </div>
      </div>
      {/* 결과 카피/추천 영역 등 추가 */}
      <div className="max-w-3xl w-full mb-12">
        <h3 className="text-xl font-semibold text-white mb-4 text-left px-2">
          응답 세부 결과
        </h3>
        <div className="flex flex-col gap-4">
          {pages.map((page: Page, idx: number) => {
            const answer = page.options.find(
              (opt: Option) => opt.score === scores[idx]
            )!;

            return (
              <div
                key={idx}
                className="bg-white/10 rounded-xl p-4 flex items-center"
              >
                <img src={page.icon} alt="icon" className="w-10 h-10 mr-4" />
                <div className="flex-grow">
                  <div className="text-white text-md mb-1 font-semibold">
                    {page.question}
                  </div>
                  <div className="text-pink-400 font-bold text-base">
                    {answer.text}
                  </div>
                  <div className="text-violet-300 text-sm">{answer.desc}</div>
                </div>
                <div className="ml-4 text-lg text-violet-400 font-bold">
                  {answer.score}
                </div>
              </div>
            );
          })}
          <div className="rounded-3xl bg-gradient-to-br from-purple-800/10 to-indigo-900 p-8 mb-8 shadow-md w-full max-w-3xl flex flex-col items-center">
            <div className="flex flex-raw items-center justify-center">
              <img className="mt-5" src={improvement} />
              <label className="text-4xl font-semibold text-white">
                맞춤개선제안
              </label>
            </div>
            {/* 개선사항 카드 그리드 */}
            <div className="grid grid-cols-2 gap-6 w-full mt-8">
              {improvements.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 bg-[#24224C]/80 rounded-xl shadow-md"
                >
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-20 h-20 object-contain"
                  />

                  <div>
                    <div className="text-white text-base font-bold mb-1">
                      {item.title}
                    </div>
                    <div className="text-gray-300 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-6 items-center justify-center mt-8">
            {/* 다시 진단하기 버튼 (outlined) */}
            <button
              className="px-8 py-4 rounded-full border border-white/40 bg-transparent text-white text-lg font-medium shadow-sm hover:bg-white/10 transition"
              onClick={handleRetry}
            >
              다시 진단하기
            </button>
            {/* 홈으로 돌아가기 버튼 (gradient fill) */}
            <button
              className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white text-lg font-medium shadow-lg flex items-center gap-2 hover:opacity-90 transition"
              onClick={handleGoHome}
            >
              홈으로 돌아가기
              <span className="ml-1">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
