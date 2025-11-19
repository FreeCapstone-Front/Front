import nighticon from "../assets/icons/nighticon.png";
import ArticleCard1 from "../assets/icons/ArticleCard1.png";
import ArticleCard2 from "../assets/icons/ArticleCard2.png";
import ArticleCard3 from "../assets/icons/ArticleCard3.png";
import ArticleCard4 from "../assets/icons/ArticleCard4.png";
import ArticleCard5 from "../assets/icons/ArticleCard5.png";
import ArticleCard6 from "../assets/icons/ArticleCard6.png";
import { bgBlack } from "./IntroductionPage";
import timer from "../assets/icons/timer.png";
import human1 from "../assets/icons/human1.png";
import { Link } from "react-router-dom";

const dummytitle = "완벽한 수면 환경 만들기: 침실 꾸미기 가이드";
const dummytext =
  "편안한 수면을 위한 이상적인 침실 환경을 조성하는 방법을 알아보세요. 온도, 조명, 색상부터 침구 선택까지 모든 것을 다룹니다.";
const dummytitle2 = "올바른 베개 선택법과 수면 자세의 중요성";
const dummytext2 =
  "목과 척추 건강을 위한 올바른 베개 선택 방법과 수면 자세에 대해 알아보세요. 개인의 체형과 수면 습관에 맞는 베개를 찾는 팁을 제공합니다.";
const dummytitle3 = "수면 위생: 건강한 잠자리 습관 만들기";
const dummytext3 =
  "수면의 질을 향상시키는 일상 습관들을 소개합니다. 잠들기 전 루틴부터 기상 후 활동까지, 24시간 수면 위생 관리법을 알아보세요.";
const dummytitle4 = "스트레스와 불면증: 마음의 평화 찾기";
const dummytext4 =
  "스트레스로 인한 불면증을 극복하는 명상과 릴렉스 기법을 배워보세요. 마음을 진정시키고 깊은 잠에 빠지는 방법을 제시합니다.";
const dummytitle5 = "야간 조명의 과학: 밤에도 편안한 공간 만들기";
const dummytext5 =
  "수면에 영향을 주지 않는 야간 조명 설정법을 알아보세요. 따뜻한 색온도와 적절한 밝기로 편안한 밤 시간을 만드는 방법을 제공합니다.";
const dummytitle6 = "수면과학의 이해: 꿈과 수면 사이클의 신비";
const dummytext6 =
  "수면의 단계별 특징과 꿈의 역할에 대해 과학적으로 알아보세요. REM 수면과 깊은 잠의 중요성, 그리고 건강한 수면 사이클 유지법을 다룹니다.";
const ArticleListPage = () => {
  const textcss = "text-gray-300 text-xs";
  const textcss2 = "text-white text-lg font-semibold leading-snug";
  const textcss3 = "text-[#99A1AF] text-xs text-thin line-clamp-3";
  const divcss =
    "bg-gradient-to-b from-[#35304a] to-[#45375c] shadow-[0px_20px_60px_-15px_rgba(236,72,153,0.4)] rounded-3xl p-0 overflow-hidden max-w-md mx-auto";
  const divcss2 = "relative w-full overflow-hidden";
  const divcss3 = "p-6 flex flex-col gap-3 grow";
  const divcss4 = "flex items-center gap-x-2 text-[#99A1AF] text-sm";
  const wscss =
    "bg-gray-500/30 border-white/10 rounded-[450px] shadow-lg flex flex-col justify-center items-center p-2 w-full max-w-6xl mx-auto";
  const linkcss =
    "text-[#F6339A] text-xs cursor-pointer hover:text-[#F6339A]/80 transition duration-150";
  const overaydiv =
    "absolute top-2 left-3 inline-block px-4 py-1 bg-gradient-to-r text-white/80 from-[#F6339A] to-[#9810FA] text-xs font-base rounded-full w-fit";

  return (
    <div>
      <div className="w-full bg-linear-to-b from-[#35304a] to-[#45375c] px-8 py-8 flex flex-col">
        <div className="flex flex-row">
          <img src={nighticon} alt="logo" className="w-10 h-10" />
          <h1 className="text-white text-xl font-thin">꿈꿈</h1>
        </div>
        <div className={`${textcss} ml-2`}>
          건강한 수면을 위한 전문적인 가이드와 팁을 제공합니다. 더 나은 밤을
          여정을 시작해보세요.
        </div>
      </div>
      <div
        className={`${bgBlack}  w-full min-h-screen pt-15 p-20 flex flex-col items-center`}
      >
        <div className="grid grid-cols-2 gap-1 gap-y-17 w-full max-w-6xl">
          <div className={`${divcss}`}>
            <div className={`${divcss2}`}>
              <img src={ArticleCard1} className="w-full object-cover" />
              <div className={`${overaydiv}`}>수면환경</div>
            </div>
            <div className={`${divcss3}`}>
              <div className={`${textcss2}`}>{dummytitle}</div>
              <div className={`${textcss3}`}>{dummytext}</div>
              <div className="flex flex-row gap-12">
                <div className={`${divcss4}`}>
                  <img className="w-4 h-4" src={human1}></img>
                  <div>수면 전문가 김민지</div>
                </div>
                <div className={`${divcss4}`}>
                  <img className="w-4 h-4" src={timer}></img>
                  <div>8분 읽기</div>
                </div>
              </div>
              <div className="justify-center items-center">
                <div className={`${wscss}`}>
                  <Link className={`${linkcss}`} to={"/Article1-Page"}>
                    자세히 보기 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`${divcss}`}>
            <div className={`${divcss2}`}>
              <img src={ArticleCard2} className="w-full object-cover" />
              <div className={`${overaydiv}`}>수면자세</div>
            </div>
            <div className={`${divcss3}`}>
              <div className={`${textcss2}`}>{dummytitle2}</div>
              <div className={`${textcss3}`}>{dummytext2}</div>
              <div className="flex flex-row gap-12">
                <div className={`${divcss4}`}>
                  <img className="w-4 h-4" src={human1}></img>
                  <div>정형외과 전문의 이상호</div>
                </div>
                <div className={`${divcss4}`}>
                  <img className="w-4 h-4" src={timer}></img>
                  <div>7분 읽기</div>
                </div>
              </div>
              <div className="justify-center items-center">
                <div className={`${wscss}`}>
                  <Link className={`${linkcss}`} to={"/"}>
                    자세히 보기 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`${divcss}`}>
            <div className={`${divcss2}`}>
              <img src={ArticleCard3} className="w-full object-cover" />
              <div className={`${overaydiv}`}>수면습관</div>
            </div>
            <div className={`${divcss3}`}>
              <div className={`${textcss2}`}>{dummytitle3}</div>
              <div className={`${textcss3}`}>{dummytext3}</div>
              <div className="flex flex-row gap-12">
                <div className={`${divcss4}`}>
                  <img className="w-4 h-4" src={human1}></img>
                  <div>수면클리닉 박소영</div>
                </div>
                <div className={`${divcss4}`}>
                  <img className="w-4 h-4" src={timer}></img>
                  <div>6분 읽기</div>
                </div>
              </div>
              <div className="justify-center items-center">
                <div className={`${wscss}`}>
                  <Link className={`${linkcss}`} to={"/"}>
                    자세히 보기 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`${divcss}`}>
            <div className={`${divcss2}`}>
              <img src={ArticleCard4} className="w-full object-cover" />
              <div className={`${overaydiv}`}>스트레스관리</div>
            </div>
            <div className={`${divcss3}`}>
              <div className={`${textcss2}`}>{dummytitle4}</div>
              <div className={`${textcss3}`}>{dummytext4}</div>
              <div className="flex flex-row gap-12">
                <div className={`${divcss4}`}>
                  <img className="w-4 h-4" src={human1}></img>
                  <div>명상치료사 최은혜</div>
                </div>
                <div className={`${divcss4}`}>
                  <img className="w-4 h-4" src={timer}></img>
                  <div>8분 읽기</div>
                </div>
              </div>
              <div className="justify-center items-center">
                <div className={`${wscss}`}>
                  <Link className={`${linkcss}`} to={"/"}>
                    자세히 보기 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`${divcss}`}>
            <div className={`${divcss2}`}>
              <img src={ArticleCard5} className="w-full object-cover" />
              <div className={`${overaydiv}`}>조명설계</div>
            </div>
            <div className={`${divcss3}`}>
              <div className={`${textcss2}`}>{dummytitle5}</div>
              <div className={`${textcss3}`}>{dummytext5}</div>
              <div className="flex flex-row gap-12">
                <div className={`${divcss4}`}>
                  <img className="w-4 h-4" src={human1}></img>
                  <div>조명 디자이너 한지수</div>
                </div>
                <div className={`${divcss4}`}>
                  <img className="w-4 h-4" src={timer}></img>
                  <div>4분 읽기</div>
                </div>
              </div>
              <div className="justify-center items-center">
                <div className={`${wscss}`}>
                  <Link className={`${linkcss}`} to={"/"}>
                    자세히 보기 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`${divcss}`}>
            <div className={`${divcss2}`}>
              <img src={ArticleCard6} className="w-full object-cover" />
              <div className={`${overaydiv}`}>수면과학</div>
            </div>
            <div className={`${divcss3}`}>
              <div className={`${textcss2}`}>{dummytitle6}</div>
              <div className={`${textcss3}`}>{dummytext6}</div>
              <div className="flex flex-row gap-12">
                <div className={`${divcss4}`}>
                  <img className="w-4 h-4" src={human1}></img>
                  <div>수면의학과 교수 오태진</div>
                </div>
                <div className={`${divcss4}`}>
                  <img className="w-4 h-4" src={timer}></img>
                  <div>10분 읽기</div>
                </div>
              </div>
              <div className="justify-center items-center">
                <div className={`${wscss}`}>
                  <Link className={`${linkcss}`} to={"/"}>
                    자세히 보기 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleListPage;
