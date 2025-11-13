import dummyCard from "../../../assets/icons/FeatureCardsDummy.png";
import timer from "../../../assets/icons/timer.png";
import rightBtn from "../../../assets/icons/introBtn2.png";
const dummytitle = "자각몽 마스터하기: 꿈속에서 자유를 찾다";
const dummytext =
  "꿈속에서 자신이 꿈을 꾸고 있음을 인식하는 자각몽. 누구나 배울 수 있는 자각몽 기술과 실전 팁을 소개합니다. 자각몽을 통해 당신의 무의식 세계를 탐험해보세요.";
const ArticleCard = () => {
  return (
    <div
      className="w-122.5 h-156.25 rounded-3xl overflow-hidden shadow-lg 
                 flex flex-col bg-white/5 backdrop-blur-sm 
                 "
    >
      <div className="w-full h-64 overflow-hidden">
        <img
          src={dummyCard}
          alt="자각몽 마스터하기 아티클 대표 이미지"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="text-white text-2xl font-semibold mb-2 leading-snug">
          {dummytitle}
        </div>

        <div className="text-[#99A1AF] text-base mb-6 line-clamp-3">
          {dummytext}
        </div>
      </div>

      <div className="px-6 pb-6 pt-4 border-t border-[#99A1AF]/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2 text-[#99A1AF] text-sm">
            <img className="w-4 h-4 text-[#99A1AF]" src={timer}></img>
            <div>8분 읽기</div>
          </div>

          <div
            className="flex items-center gap-x-2 text-[#FB64B6] font-medium 
                        hover:text-[#FB64B6]/80 transition duration-150"
          >
            <div>자세히 보기</div>
            <img className="w-4 h-4 text-[#FB64B6]" src={rightBtn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
