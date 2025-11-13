import Icon from "../assets/icons/Icon.png";
import star from "../assets/icons/star.png";
import BinStar from "../assets/icons/BinStar.png";
import book1 from "../assets/icons/book1.png";
import check from "../assets/icons/check.png";
import brain from "../assets/icons/brain.png";
import up1 from "../assets/icons/up1.png";
import music from "../assets/icons/music.png";
import thunder from "../assets/icons/thunder.png";
import secu from "../assets/icons/secu.png";
import human from "../assets/icons/human.png";
import proc from "../assets/icons/proc.png";
import heart from "../assets/icons/heart.png";
import pbrain from "../assets/icons/pbrain.png";
import cccircle from "../assets/icons/cccircle.png";
import pup from "../assets/icons/pup.png";
import logoDark from "../assets/logo/logoDark.png";
import { useNavigate } from "react-router-dom";

export const bgCss = "bg-[#22183E] rounded-[50px] shadow-[0px_20px_60px_-15px_rgba(236,72,153,0.4)] p-6 flex flex-col items-start";
export const bgBlack = "bg-gradient-to-b from-[#2a2535] via-[#2E2B5B] to-[#3D2B5E]";


export const IntroductionPage = () => {
    const navigate = useNavigate();
    const bgCircle = "flex justify-center mb-10 text-base font-thin text-white bg-gradient-to-br from-[#AD46FF]/30 to-[#F6339A33]/30 opacity-85 backdrop-blur-xl  rounded-[100px] shadow-lg inline-flex items-center gap-2";
    const textset = "z-10 -translate-y-15 relative text-white text-center"
    const textCss1 = "text-white text-xl font-bold mb-2";
    const textCss2 = "text-gray-300 mb-4 text-sm text-left";
    const textCss3 = "text-xs text-violet-400 space-y-1";
    const textCss4 = "text-[#99A1AF] mb-4 text-xs text-center whitespace-nowrap"
    const textCss5 ="text-4xl font-medium mb-4";
    const textCss6 = "text-gray-300 mb-1 text-sm text-left";
    const textCss7 = "text-[#D1D5DC] text-base font-thin mb-4"
    const numcss = "text-purple-400 text-5xl font-normal mb-3 font-bold opacity-30"
    const bgCss2 = "bg-[#22183E] rounded-[30px] shadow-[0px_20px_60px_-15px_rgba(236,72,153,0.4)] p-6 flex flex-col items-start";
    const iconcss = "w-18 h-18 mb-4"
    const iconcss2 = "w-12 h-12 mb-4"
    const wscss = "bg-gray-500/30 border-white/10 rounded-2xl shadow-lg flex flex-col justify-center items-center p-7 w-full max-w-6xl mx-auto"
  return (
    <div>
    <div 
    className={`${bgBlack} w-full min-h-screen pt-30 p-20 flex flex-col gap-20 items-center`}>
      <div
      className="w-full min-h-screen p-20 flex flex-col gap-20 items-center">
        <div
        className="absolute 
                   w-[600px] h-[600px] rounded-[450px]
                   left-1/20 top-[500px] transform -translate-y-1/2 
                   border-none
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
          <button onClick={() => navigate('/')}
          className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#2a2535] transition">
            기능 둘러보기
          </button>
        </div>
        <div className="flex justify-center gap-8 mt-12 text-gray-300">
          <div>
            <div className="text-3xl font-bold">50,000+</div> {/* 숫자 수정 */}
            <div className="text-sm">활성 사용자</div>
          </div>
          <div>
            <div className="text-3xl font-bold">200,000+</div> {/* 숫자 수정 */}
            <div className="text-sm">다운로드</div>
          </div>
          <div>
            <div className="text-3xl font-bold">4.9/5.0</div>
            <div className="text-sm">사용자 평점</div>
          </div>
        </div>
      </div>
      </div>
      <div className ={`${textset} mt-25`}>
        <div className={`${bgCircle} px-6 py-2`}>
            <img src = {BinStar} ></img>
            핵심 기능  
        </div>
        <div>
          <h1 className={`${textCss5}`}>꿈꿈이 제공하는 모든 것<br/></h1>
          <p className={`${textCss7}`}>당신의 꿈을 더 깊이 이해하고, 더 나은 수면을 위한 모든 도구</p>
        
          <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            {/* 1번째 카드 */}
            <div className= {`${bgCss}`}>
              <img src= {book1} className ={`${iconcss}`} alt="아이콘" />
              <h3 className= {`${textCss1}`}>꿈 일기 작성</h3>
              <p className= {`${textCss2}`}>직관적인 인터페이스로 매일의 꿈을 손쉽게 기록하세요. 텍스트, 감정, 태그로 체계적으로 관리할 수 있어요.</p>
              <ul className= {`${textCss3}`}>
                <li className="flex"><img src = {check}></img>간편한 텍스트 입력</li>
                <li className="flex"><img src = {check}></img>감정 태그 추가</li>
                <li className="flex"><img src = {check}></img>이미지 첨부 가능</li>
              </ul>
            </div>
            <div className= {`${bgCss}`}>
              <img src= {brain} className={`${iconcss}`} alt="아이콘" />
              <h3 className= {`${textCss1}`}>AI 꿈 분석</h3>
              <p className= {`${textCss2}`}>최신 AI 기술로 당신의 꿈을 분석합니다. 심리적 의미와 무의식의 메시지를 발견하세요. <br /><br /></p>
              
              <ul className= {`${textCss3}`}>
                <li className="flex"><img src = {check}></img>심층 심리 분석</li>
                <li className="flex"><img src = {check}></img>상징 해석</li>
                <li className="flex"><img src = {check}></img>개인화된 인사이트</li>
                
              </ul>
            </div>
            <div className= {`${bgCss}`}>
              <img src="아이콘이미지1.png" className={`${iconcss}`} alt="아이콘" />
              <h3 className= {`${textCss1}`}>꿈 캘린더</h3>
              <p className= {`${textCss2}`}>월별, 주별로 꿈을 한눈에 확인하고 패턴을 파악할 수 있어요. 꿈의 흐름을 추적하세요. <br /><br /></p>
              <ul className= {`${textCss3}`}>
                <li className="flex"><img src = {check}></img>월별 뷰</li>
                <li className="flex"><img src = {check}></img>꿈 검색</li>
                <li className="flex"><img src = {check}></img>태그 필터링</li>
              </ul>
            </div>
            <div className= {`${bgCss}`}>
              <img src={up1} className={`${iconcss}`} alt="아이콘" />
              <h3 className= {`${textCss1}`}>수면 패턴 분석</h3>
              <p className= {`${textCss2}`}>수면 시간, 품질, 꿈의 빈도를 분석하여 당신의 수면 건강을 개선할 수 있는 인사이트를 제공합니다.</p>
              <ul className= {`${textCss3}`}>
                <li className="flex"><img src = {check}></img>수면 트렌드 차트</li>
                <li className="flex"><img src = {check}></img>품질 점수</li>
                <li className="flex"><img src = {check}></img>개선 제안</li>
              </ul>
            </div>
            <div className= {`${bgCss}`}>
              <img src="아이콘이미지1.png" className={`${iconcss}`} alt="아이콘" />
              <h3 className= {`${textCss1}`}>수면 상담소</h3>
              <p className= {`${textCss2}`}>수면과 꿈에 대한 고민을 공유하고, 커뮤니티의 조언을 받아보세요. 전문가 답변도 제공됩니다.</p>
              <ul className= {`${textCss3}`}>
                <li className="flex"><img src = {check}></img>익명 고민 게시</li>
                <li className="flex"><img src = {check}></img>전문가 답변</li>
                <li className="flex"><img src = {check}></img>커뮤니티 소통</li>
              </ul>
            </div>
            <div className= {`${bgCss}`}>
              <img src= {music} className={`${iconcss}`} alt="아이콘" />
              <h3 className= {`${textCss1}`}>수면방 (ASMR)</h3>
              <p className= {`${textCss2}`}>자연의 소리와 수면 동화로 편안한 잠자리를 만들어보세요. 백색소음부터 잔잔한 이야기까지.</p>
              <ul className= {`${textCss3}`}>
                <li className="flex"><img src = {check}></img>백색 소음 라이브러리</li>
                <li className="flex"><img src = {check}></img>수면 동화</li>
                <li className="flex"><img src = {check}></img>타이머 가능</li>
              </ul>
            </div>
          
          </div>
        </div>
      </div>
      <div className={`${textset} mt-24`}>
        <h1 className={`${textCss5}`}>왜 꿈꿈을 선택해야 할까요?<br/></h1>
        <p className={`${textCss7}`}>과학적 접근과 사용자 중심 디자인의 완벽한 조화</p>
        <div className="flex flex-row gap-8 max-w-7xl mx-auto mt-12">
          <div className={`${wscss}`}>
            <img src={thunder} className="mb-4 max-auto" alt="번개" />
            <h3 className= {`${textCss1}`}>빠른 분석</h3>
            <p className= {`${textCss4}`}>몇 초만에 꿈의 의미를 파악하세요</p>
          </div>
          <div className={`${wscss}`}>
            <img src={secu} className="mb-4 max-auto" alt="번개" />
            <h3 className= {`${textCss1}`}>프라이버시 보호</h3>
            <p className= {`${textCss4}`}>당신의 꿈은 안전하게 암호화됩니다</p>
          </div><div className={`${wscss}`}>
            <img src={human} className="mb-4 max-auto" alt="번개" />
            <h3 className= {`${textCss1}`}>커뮤니티</h3>
            <p className= {`${textCss4}`}>같은 관심사를 가진 사람들과 소통</p>
          </div><div className={`${wscss}`}>
            <img src={proc} className="mb-4 max-auto" alt="번개" />
            <h3 className= {`${textCss1}`}>전문가 검증</h3>
            <p className= {`${textCss4}`}>심리학 전문가의 감수를 거친 분석</p>
          </div>
        </div>
      </div>
      <div className ={`${textset} mt-24`}>
        <div>
          <h1 className={`${textCss5}`}>사용하기 쉬운 3단계<br/></h1>
          <p className={`${textCss7}`}>복잡한 절차 없이, 지금 바로 시작하세요</p>
        
          <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            {/* 1번째 카드 */}
            <div className= {`${bgCss}`}>
              <div className={`${numcss}`}>
               01
              </div>
              <img src= {book1} className ={`${iconcss2}`} alt="아이콘" />
              <h3 className= {`${textCss1}`}>꿈 기록하기</h3>
              <p className= {`${textCss2}`}>아침에 일어나자마자 꿈의 내용을 간단히 적어보세요. 텍스트로 빠르게 입력하거나 음성으로 녹음할 수 있어요.</p>
             
            </div>
            <div className= {`${bgCss}`}>
              <div className={`${numcss}`}>
               02
              </div>
              <img src= {brain} className={`${iconcss2}`} alt="아이콘" />
              <h3 className= {`${textCss1}`}>AI 분석 받기</h3>
              <p className= {`${textCss2}`}>AI가 당신의 꿈을 분석하여 심리적 의미, 감정 상태, 그리고 무의식의 메시지를 해석해드립니다. <br /><br /></p>
              
              
            </div>
            <div className= {`${bgCss}`}>
              <div className={`${numcss}`}>
               03
              </div>
              <img src={up1} className={`${iconcss2}`} alt="아이콘" />
              <h3 className= {`${textCss1}`}>꿈 캘린더</h3>
              <p className= {`${textCss2}`}>시간이 지나면서 꿈의 패턴과 변화를 확인하세요. 수면 품질 개선을 위한 맞춤 제안을 받을 수 있어요.<br /><br /></p>
              
            </div>
          </div>
        </div>
      </div>
      <div className={`${bgCss} relative flex-row w-[1017px] gap-10 h-[370px] mt-24`}>
        <div className=" absolute left-15 top-38
                        w-[400px] h-[60px]
                        bg-gradient-to-r from-[#7f3fc5]/40 to-[#e940bc]/30
                        rounded-[17px] opacity-40
                        shadow-[0px_20px_60px_-15px_rgba(236,72,153,0.4)]
                        pointer-events-none)
                        border-1 border-[#F6339A33] border-opacity-80]
                  ">
    
        </div>
        <div className={`${textset} absolute mt-18 left-[480px]`}>
          <h1 className="text-2xl font-medium mb-4 text-left ml-2">꿈꿈으로 얻을 수 있는 것들</h1>
          <ul className="flex flex-col gap-3 p-0">
            <li className="flex items-center">
              <div><img src={heart} className="w-14 h-14" alt="heart" />
              </div>
              <div className="gap-1">
                <p className={`${textCss6}`}>더 나은 수면 품질</p>
                <p className={`${textCss4}`}>
                  꿈 패턴 분석을 통해 수면 습관을 개선하고 더 깊은 숙면을 경험하세요
                </p>
              </div>
             </li>
             <li className="flex items-center">
              <div><img src={pbrain} className="w-14 h-14" alt="heart" />
              </div>
              <div>
                <p className={`${textCss6}`}>자기 이해 증진</p>
                <p className={`${textCss4}`}>
                  꿈을 통해 무의식의 메시지를 읽고, 내면의 감정과 욕구를 이해하세요
                </p>
              </div>
             </li>
             <li className="flex items-center">
              <div><img src={cccircle} className="w-14 h-14" alt="heart" />
              </div>
              <div>
                <p className={`${textCss6}`}>스트레스 관리</p>
                <p className={`${textCss4}`}>
                 반복되는 꿈과 악몽의 원인을 파악하고, 심리적 안정을 찾으세요
                </p>
              </div>
             </li>
             <li className="flex items-center">
              <div><img src={pup} className="w-14 h-14" alt="heart" />
              </div>
              <div>
                <p className={`${textCss6}`}>개인 성장</p>
                <p className={`${textCss4}`}>
                  꿈 일기를 통한 자기 성찰로 더 나은 나를 발견하세요
                </p>
              </div>
             </li>
          </ul>
        </div>
      </div>
      <div className={`${textset} mt-34 flex flex-col items-center justify-center`}>
        <h1 className={`${textCss5}`}>간단하고 명확한 요금제</h1>
        <p className={`${textCss7}`}>모든 기능을 무료로 시작하세요</p>
        <div className="flex flex-row gap-8 mt-10">
          <div className={`${bgCss2} w-[300px]`}>
            <h2 className={`${textCss1}`}>무료</h2>
            <p className={`${textCss4}`}>꿈꿈의 기본 기능을 모두 무료로</p>
            <div className="flex flex-row items-center mb-2">
              <div className="text-2xl font-medium mb-4 text-left">
                ₩0
              </div>
              <div className={`${textCss4} mt-4`}>
                /영원히
              </div>
            </div>
              <ul className="flex flex-col gap-3 text-left text-sm text-gray-200 mt-0 mb-8">
                <li className="flex items-center gap-2">
                  <img src={check} alt="check" />
                  무제한 꿈 기록
                </li>
                <li className="flex items-center gap-2">
                  <img src={check} alt="check" />
                  AI 꿈 분석 (월 10회)
                </li>
                <li className="flex items-center gap-2">
                  <img src={check} alt="check" />
                  꿈 캘린더
                </li>
                <li className="flex items-center gap-2">
                  <img src={check} alt="check" />
                  기본 통계
                </li>
                <li className="flex items-center gap-2">
                  <img src={check} alt="check" />
                  수면방 ASMR
                </li>
                <li className="flex items-center gap-2">
                  <img src={check} alt="check" />
                  커뮤니티 참여
                </li>
              </ul>
          </div>
          <div className={`${bgCss2} w-[300px]`}>
            <h2 className={`${textCss1}`}>프리미엄</h2>
            <p className={`${textCss4}`}>모든 기능을 제한없이 사용하세요</p>
            <div className="flex flex-row items-center mb-2">
              <div className="text-2xl font-medium mb-4 text-left">
                ₩9,900
              </div>
              <div className={`${textCss4} mt-4`}>
                /월
              </div>
              
            </div>
            <ul className="flex flex-col gap-3 text-left text-sm text-gray-200 mt-0 mb-8">
                <li className="flex items-center gap-2">
                  <img src={check} alt="check" />
                  무제한 AI꿈 분석
                </li>
                <li className="flex items-center gap-2">
                  <img src={check} alt="check" />
                  고급 심리 분석 리포트
                </li>
                <li className="flex items-center gap-2">
                  <img src={check} alt="check" />
                  맞춤형 수면 개선 제안
                </li>
                <li className="flex items-center gap-2">
                  <img src={check} alt="check" />
                  광고 없는 경험
                </li>
                <li className="flex items-center gap-2">
                  <img src={check} alt="check" />
                  프리미엄 ASMR 콘텐츠
                </li>
                <li className="flex items-center gap-2">
                  <img src={check} alt="check" />
                  데이터 백업 & 내보내기
                </li>
              </ul>
          </div>
        </div>
      </div>
      
    </div>
     <div className="w-full py-12 px-4 bg-gradient-to-t from-[#1d1530] to-[#312053]  flex flex-col gap-6 justify-center items-center text-center">
        <img src={logoDark} className="w-27 h-15" alt="logoDark" />
        <div className="text-gray-400 text-xs">
          
          © 2025 꿈꿈. All rights reserved.
        </div>
      </div>
    </div>
  );
};
