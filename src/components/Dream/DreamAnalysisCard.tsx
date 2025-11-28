import { useState } from "react"; // useState 추가

import { bgBlack } from "../../pages/HomePage";
// 🚨 DreamDetail 타입에 id와 imageUrl 필드가 필요합니다!
import type { DreamComics, DreamDetail } from "../../types/dream";
import { shadowStyle } from "../home/weather/WeatherLayout";
import { Calendar } from "lucide-react";
import brain from "../../assets/icons/brain.png";
import { Sparkles } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { Clock } from "lucide-react";
import up from "../../assets/icons/up1.png";
import heart2 from "../../assets/icons/heartNew.png";
import bingbing from "../../assets/icons/bingbing.png";
import { fetchDreamComics } from "../../apis/dreamApi";
import { pinkGrLoginBtn } from "../Navbar";

// ************************************************
// 💡 이미지 서버 기본 URL을 실제 도메인으로 수정해야 합니다!
const IMAGE_BASE_URL = "http://localhost:8080";
// ************************************************

const bg = `bg-linear-to-br from-[#1A1625] via-[#1E1B4B] to-[#2D1B4E] flex gap-y-4 h-auto rounded-2xl p-10 mb-6 ${shadowStyle}`;
const bgContent =
  "text-gray-200 bg-white/5 w-full min-h-30 flex items-center justify-center rounded-3xl p-6 whitespace-pre-wrap wrap-break-word";

// 문자열에서 각 항목을 배열로 분리하는 함수
const parseRecommendation = (text: string): string[] => {
  return text
    .split("\n") // 줄바꿈 기준 분리
    .map((line) => line.trim()) // 앞뒤 공백 제거
    .filter((line) => line.startsWith("-")) // '-'로 시작하는 항목만 필터링
    .map((line) => line.replace(/^-+/, "").trim()); // '-' 제거 및 공백 제거
};

const DreamAnalysisCard = ({ detail }: { detail: DreamDetail }) => {
  // 1. 만화 생성 관련 상태 관리
  // detail.imageUrl이 이미 있을 수도 있으므로 초기값은 detail.imageUrl로 설정
  const [comicsImageUrl, setComicsImageUrl] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState<string | null>(null);

  // 2. 만화 생성 버튼 클릭 이벤트 핸들러
  const handleGenerateComics = async () => {
    // DreamDetail 타입에 id 필드가 있다고 가정합니다.
    if (!detail.id) {
      setError("만화 생성을 위한 꿈 ID를 찾을 수 없습니다.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result: DreamComics = await fetchDreamComics(detail.id); // API 호출

      // 결과의 imageUrl을 상태에 저장
      setComicsImageUrl(result.imageUrl);
    } catch (err) {
      console.error("만화 생성 오류:", err);
      setError("만화 생성 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`dream-analysis-root  px-8 py-6 text-white w-full min-h-min mx-auto ${bgBlack}`}
    >
      <div
        className={` px-8 py-6 text-white w-300 mx-auto ${bgBlack} flex-col`}
      >
        {/* 상단: 제목/날짜/태그 */}
        <section className={`${bg} flex-col`}>
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-2xl">{detail.title}</h2>
          </div>

          <div className="text-sm text-gray-400 flex gap-x-3">
            <Calendar />
            {detail.date}
          </div>

          <div className="text-gray-200 bg-white/5 w-full min-h-30 flex items-center justify-center rounded-3xl p-4 whitespace-pre-wrap wrap-break-word">
            {detail.content}
          </div>
          <div className="mt-2 flex gap-2 flex-wrap">
            {detail.tags?.map((tag, i) => (
              <span
                key={i}
                className="bg-[#F6339a]/10  border border-[#F6339A]/30 shadow-lg rounded-2xl px-3 py-1 text-medium font-lg"
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>

        {/* 심리 분석 (이하 기존 로직 유지) */}
        {(detail.psychologySummary ||
          (detail.keywords && detail.keywords.length > 0)) && (
          <section className={`${bg} flex-col`}>
            {/* ... (심리 분석 내용) ... */}
            <div className="flex items-center gap-x-5">
              <img src={brain} className="h-15 w-15" />
              <h3 className="font-semibold text-2xl">심리 분석</h3>
            </div>
            {detail.psychologySummary && (
              <div className={`${bgContent}`}>{detail.psychologySummary}</div>
            )}
            <div className="text-xl flex gap-x-2 ">
              <Lightbulb /> 심리분석 키워드
            </div>
            {detail.keywords?.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {detail.keywords.map((kw, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 border w-30 h-15 border-white/20 text-white px-3 py-1 rounded-2xl flex items-center justify-center gap-x-2"
                  >
                    <Sparkles color="#F6339A" />
                    {kw}
                  </span>
                ))}
              </div>
            )}
          </section>
        )}

        {/*그리드 형식*/}
        <div className={`flex gap-x-5 ${bg} `}>
          {/* 만화 */}
          {/* 만화 섹션 (기존 감정 분석 섹션 위치 활용) */}
          <section className="mb-5 bg-linear-to-br from-[#2E2B5B]/20 via-[#9810fa]/20 to-[#f6339a]/20 rounded-2xl p-5 shadow-md w-1/2 flex flex-col justify-between  min-h-[350px]">
            <h3 className="font-semibold text-2xl mb-2 flex gap-x-4 items-center">
              <img src={heart2} className="h-15 w-15" />
              만화
            </h3>
            {/* 1. 로딩 중일 때 (만화 URL이 아직 없을 때) 로딩 스피너 표시 */}
            {!comicsImageUrl && isLoading && (
              <div className="flex flex-col items-center justify-center grow py-10">
                {/* 간단한 회전 스피너 */}
                <div className="w-12 h-12 border-4 border-t-4 border-white border-t-pink-400 rounded-full animate-spin"></div>
                <p className="mt-3 text-gray-300">
                  꿈을 만화로 그리고 있어요...
                </p>
              </div>
            )}
            {/* 2. 만화 URL이 없을 때 (로딩 완료 또는 로딩 전) 안내 메시지 및 버튼 표시 */}
            {!comicsImageUrl && !isLoading && (
              <>
                <div className="w-full text-center text-lg grow flex items-center justify-center">
                  오늘 나의 꿈의 기록을 만화로 남겨보세요!
                </div>
                <button
                  onClick={handleGenerateComics}
                  className={`w-full ${pinkGrLoginBtn} rounded-2xl text-white h-20 font-bold text-xl`}
                >
                  만화 생성하기
                </button>
              </>
            )}
            {/* 3. comicsImageUrl이 있을 때 이미지 표시 */}
            {comicsImageUrl && (
              <div className="flex items-center justify-center w-full">
                <div className="mt-6 mb-6">
                  <img
                    src={`${IMAGE_BASE_URL}${comicsImageUrl}`}
                    alt="꿈 코믹스 이미지"
                    className="w-full h-auto max-h-[350px] object-contain rounded-xl shadow-lg border border-white/10"
                  />
                </div>
              </div>
            )}
          </section>

          {/* 수면 분석 */}
          {(detail.sleepMinutes || detail.sleepQuality) && (
            <section className="mb-5 bg-linear-to-r from-[#3D2B5E]/20 to-[#F6339A]/20 rounded-2xl p-5 shadow-md w-1/2 min-h-80 flex flex-col gap-y-5">
              <h3 className="font-semibold text-2xl mb-2 flex gap-x-4 items-center">
                <img src={up} className="h-15 w-15" />
                수면 분석
              </h3>
              {detail.sleepMinutes > 0 && (
                <div className="mb-2 flex justify-between items-center w-full bg-white/10 h-18 p-5 rounded-2xl">
                  <span className="text-lg flex items-center gap-x-2">
                    <Clock color={"skyblue"} />
                    수면 시간
                  </span>
                  <span className="font-bold text-pink-400">
                    {detail.sleepMinutes}분
                  </span>
                </div>
              )}
              {detail.sleepQuality > 0 && (
                <div className="mb-2 flex items-center w-full bg-white/10 h-18 p-5 rounded-2xl gap-x-2">
                  <span className="text-">수면 품질</span>
                  <span className="ml-2 font-bold text-pink-400">
                    {detail.sleepQuality}%
                  </span>
                  <div className="flex-1 bg-white/10 rounded-full h-3 mt-2">
                    <div
                      className="bg-pink-400 rounded-full h-3 transition-all"
                      style={{ width: `${detail.sleepQuality}%` }}
                    />
                  </div>
                </div>
              )}
            </section>
          )}
        </div>

        {/* 추천 행동 */}
        {detail.recommendation && (
          <section className={`${bg} flex-col`}>
            <h3 className="font-semibold text-2xl mb-2 flex gap-x-4 items-center">
              <img src={bingbing} className="h-15 w-15" />
              추천 행동
            </h3>
            <div className="text-gray-50 space-y-5">
              {parseRecommendation(detail.recommendation).map((item, idx) => (
                <div
                  className="flex items-center gap-x-5 w-full bg-white/10 h-18 p-4 rounded-2xl"
                  key={idx}
                >
                  <div className="bg-linear-to-br from-[#00BC7D] to-[#009689] w-10 h-10 rounded-xl font-lg flex items-center justify-center">
                    {idx + 1}
                  </div>{" "}
                  {item}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default DreamAnalysisCard;
