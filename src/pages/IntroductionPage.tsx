import Icon from "../assets/icons/Icon.png";
import star from "../assets/icons/star.png";
import BinStar from "../assets/icons/BinStar.png";
import book from "../assets/icons/book.png";
// DASectionCss를 유지하되, 내부 콘텐츠 정렬을 위해 부모 flex 속성은 제거하거나 조정
export const DASectionCss =
  "w-[557px] h-[763px] rounded-3xl border-2 border-[#F6339A]/20";

export const IntroductionPage = () => {
    const bgBlack = "bg-gradient-to-b from-[#2a2535] via-[#2E2B5B] to-[#3D2B5E]";
    const bgCircle = "flex justify-center mb-10 text-base font-thin text-white bg-gradient-to-br from-[#AD46FF]/30 to-[#F6339A33]/30 opacity-85 backdrop-blur-xl  rounded-[100px] shadow-lg inline-flex items-center gap-2";
  return (
    <div 
    className={`${bgBlack} w-full min-h-screen p-20 flex flex-col gap-20 items-center`}>
    <div
        className={`${bgBlack} w-full min-h-screen p-20 flex flex-col gap-20 items-center`}>
          <div
        className="absolute 
                   w-[600px] h-[600px] rounded-[450px]
                   left-1/20 top-[500px] transform -translate-y-1/2 
                   
                   **-translate-x-[calc(100%+10px)]** /* 20px
                    bg-[#AD46FF33] backdrop-blur-xl
                    bg-gradient-to-br from-[#F6339A]/10 to-[#601A40]/10
                    opacity-30 backdrop-blur-xl [box-shadow:0_0_300px_200px_rgba(246,51,154,0.4)]"
      >
      </div>
      <div
        className="absolute 
                   w-[600px] h-[600px] rounded-[450px]
                   right-1/20 top-[460px] transform -translate-y-1/2 
                   
                   **-translate-x-[calc(100%+10px)]** /* 20px
                    bg-[#F6339A33] backdrop-blur-xl
                    bg-gradient-to-br from-[#AD46FF]/10 to-[#2E0F5B]/10
                    opacity-30 backdrop-blur-xl [box-shadow:0_0_300px_200px_rgba(246,51,154,0.4)]"
      >
      </div>
      <div className="z-10 -translate-y-20 relative text-white text-center">
        <div className={`${bgCircle} px-6 py-3`}
        >
            <img src = {star} ></img>
            꿈꿈 - 당신의 수면 파트너
          
        </div>
        <h1 className="text-5xl font-medium mb-4">꿈을 기록하고, <br/></h1>
        
        
        <h1 
          className="text-5xl midium mb-4 
                     inline-block /* h1의 block 속성을 해제하고 텍스트 너비만큼만 차지 */
                     text-gradient-purple-pink
                    "
        >
          나를 이해하는 시간
        </h1> 
        <p className="text-lg mb-8">
          AI 기반 분석부터 수면 메인 추적까지, <br />
          꿈과 함께 더 나은 수면과 심리적 안정감을 경험하세요.
        </p>
        <div className="flex justify-center gap-4">
          <button className=" bg-gradient-to-br from-[#F6339A]/80 to-[#9810FA]/80 text-white px-6 py-3 rounded-full hover:bg-[#9810FA]/100 transition flex items-center gap-1">
            <img src = {star} ></img>무료로 시작하기 <img src = {Icon} ></img>
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#2a2535] transition">
            기능 둘러보기
          </button>
        </div>
        <div className="flex justify-center gap-8 mt-12 text-gray-300">
          <div>
            <div className="text-3xl font-bold">500,000+</div> {/* 숫자 수정 */}
            <div className="text-sm">활성 사용자</div>
          </div>
          <div>
            <div className="text-3xl font-bold">2,000,000+</div> {/* 숫자 수정 */}
            <div className="text-sm">다운로드</div>
          </div>
          <div>
            <div className="text-3xl font-bold">4.9/5.0</div>
            <div className="text-sm">사용자 평점</div>
          </div>
        </div>
      </div>
      <div className={`${bgCircle} px-30 py-1 -translate-y-30`}
        > 
        <img src = {book} className="-translate-y-5 -translate-x-45 w-1/2 h-1/2" ></img>
        </div>
    </div>
    <div className ="z-10 -translate-y-35 relative text-white text-center">
      <div className={`${bgCircle} px-6 py-2 -translate-y-20`}>
            <img src = {BinStar} ></img>
            핵심 기능  
      </div>
      <div>
        <h1 className="text-4xl -translate-y-25 font-medium mb-4">꿈꿈이 제공한는 모든 것<br/></h1>
        <p className="text-base -translate-y-25 font-thin mb-4">당신의 꿈을 더 깊이 이해하고, 더 나은 수면을 위한 모든 도구</p>
        
        <div className="-translate-y-25 grid grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          {/* 1번째 카드 */}
          <div className="bg-[#22183E] rounded-2xl shadow-3xl shadow-pink-900 p-6 flex flex-col items-start">
            <img src="아이콘이미지1.png" className="w-12 h-12 mb-4" alt="아이콘" />
            <h3 className="text-white text-xl font-bold mb-2">꿈 일기 작성</h3>
            <p className="text-gray-300 mb-4 text-sm">직관적인 인터페이스...</p>
            <ul className="text-xs text-violet-400 space-y-1">
              <li>간편한 텍스트 입력</li>
              <li>감정 태그 추가</li>
              <li>이미지 첨부 가능</li>
            </ul>
          </div>
          <div className="bg-[#22183E] rounded-2xl shadow-3xl shadow-pink-900 p-6 flex flex-col items-start">
            <img src="아이콘이미지1.png" className="w-12 h-12 mb-4" alt="아이콘" />
            <h3 className="text-white text-xl font-bold mb-2">꿈 일기 작성</h3>
            <p className="text-gray-300 mb-4 text-sm">직관적인 인터페이스...</p>
            <ul className="text-xs text-violet-400 space-y-1">
              <li>간편한 텍스트 입력</li>
              <li>감정 태그 추가</li>
              <li>이미지 첨부 가능</li>
            </ul>
          </div>
          <div className="bg-[#22183E] rounded-2xl shadow-3xl shadow-pink-900 p-6 flex flex-col items-start">
            <img src="아이콘이미지1.png" className="w-12 h-12 mb-4" alt="아이콘" />
            <h3 className="text-white text-xl font-bold mb-2">꿈 일기 작성</h3>
            <p className="text-gray-300 mb-4 text-sm">직관적인 인터페이스...</p>
            <ul className="text-xs text-violet-400 space-y-1">
              <li>간편한 텍스트 입력</li>
              <li>감정 태그 추가</li>
              <li>이미지 첨부 가능</li>
            </ul>
          </div>
</div>

      </div>
    </div>
    </div>
  );
};
