import { useState, useRef } from "react";

type AsmrType = "rain" | "whitenoise" | "fire" | "cafe" | "ocean" | "forest";

const LABELS: Record<AsmrType, string> = {
  rain: "비",
  whitenoise: "백색소음",
  fire: "모닥불",
  cafe: "카페",
  ocean: "바다",
  forest: "숲",
};

const BG_COLORS: Record<AsmrType, string> = {
  rain: "from-blue-900 to-blue-700 text-white",
  whitenoise: "from-gray-200 to-gray-100 text-black",
  fire: "from-orange-900 to-orange-700 text-white",
  cafe: "from-amber-900 to-amber-700 text-white",
  ocean: "from-cyan-900 to-cyan-700 text-white",
  forest: "from-green-900 to-green-700 text-white",
};

function toEmbedUrl(url: string): string {
  try {
    if (url.includes("youtube.com/watch")) {
      const u = new URL(url);
      const v = u.searchParams.get("v");
      if (v) {
        return `https://www.youtube.com/embed/${v}?autoplay=1&loop=1`;
      }
    }
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1].split(/[?&]/)[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1&loop=1`;
    }
  } catch {
    // 실패하면 그대로 반환
  }
  return url;
}

export default function SleepRoomPage() {
  const [currentType, setCurrentType] = useState<AsmrType | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const unityRef = useRef<HTMLIFrameElement | null>(null);

  const sendLightCommandToUnity = (type: AsmrType) => {
    const iframe = unityRef.current;
    if (!iframe || !iframe.contentWindow) return;

    iframe.contentWindow.postMessage(
      {
        type: "SET_LIGHT",
        mode: type,
      },
      "http://localhost:8080"
    );
  };

  const handleClick = async (type: AsmrType) => {
    setCurrentType(type);
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `http://localhost:8080/api/sleeproom/asmr?type=${type}`
      );
      if (!res.ok) {
        throw new Error(`서버 오류 ${res.status}`);
      }

      const data: string[] = await res.json();
      const first = data[0];

      if (!first) {
        throw new Error("ASMR URL이 비어 있습니다.");
      }

      console.log("ASMR URL:", first);

      const embed = toEmbedUrl(first);
      setAudioUrl(embed);

      sendLightCommandToUnity(type);
    } catch (e) {
      let msg = "ASMR 로딩 실패";
      if (e instanceof Error) {
        msg = e.message;
      }
      setError(msg);
      setAudioUrl(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={
        `min-h-screen w-full flex bg-linear-to-br transition-all duration-500 ` +
        (currentType
          ? BG_COLORS[currentType]
          : "from-black to-gray-900 text-white")
      }
    >
      {/* 왼쪽: Unity 방 */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-full aspect-video">
          <iframe
            ref={unityRef}
            src="http://localhost:8080/unity/index.html"
            className="w-full h-full border-none"
            title="Sleep Room 3D"
            allowFullScreen
          />
        </div>
      </div>

      {/* 오른쪽: ASMR + 분위기 컨트롤 패널 */}
      <div
        className={
          `w-80 p-4 flex flex-col gap-4 backdrop-blur-sm ` +
          (currentType
            ? "bg-black/20 border-l border-white/20"
            : "bg-black/20 border-l border-gray-800")
        }
      >
        <h2 className="text-xl font-semibold mb-1">ASMR & 분위기 컨트롤</h2>
        <p className="text-sm opacity-80">
          버튼을 누르면 분위기에 맞는 ASMR이
          <br />
          이 페이지에서 소리만 재생되고,
          <br />
          Unity 방 조명 + 배경색이 같이 바뀝니다.
        </p>

        {/* 버튼들 */}
        <div className="grid grid-cols-2 gap-2">
          {(Object.keys(LABELS) as AsmrType[]).map((t) => (
            <button
              key={t}
              onClick={() => handleClick(t)}
              className={`px-3 py-2 rounded-lg text-sm font-medium border
                ${
                  currentType === t
                    ? "bg-emerald-500 text-white border-emerald-400"
                    : "bg-gray-900/60 border-gray-700 hover:bg-gray-800/60"
                }`}
            >
              {LABELS[t]}
            </button>
          ))}
        </div>

        {/* 상태 표시 */}
        {loading && (
          <p className="text-sm text-emerald-300 mt-2">ASMR 불러오는 중...</p>
        )}
        {error && <p className="text-sm text-red-300 mt-2">에러: {error}</p>}
        {!loading && !error && currentType && (
          <p className="text-sm mt-1 opacity-90">
            현재 모드:{" "}
            <span className="font-semibold">{LABELS[currentType]}</span>
          </p>
        )}

        {/* 현재 재생 중 URL 텍스트로만 보여주기 */}
        {audioUrl && !error && (
          <div className="mt-4 text-xs break-all opacity-70">
            현재 재생 중 ASMR (YouTube):
            <br />
            {audioUrl}
          </div>
        )}

        {!audioUrl && !loading && !error && (
          <p className="mt-4 text-xs opacity-60">
            위 버튼 중 하나를 누르면 해당 분위기의 ASMR이 이 페이지에서
            재생됩니다.
          </p>
        )}
      </div>

      {/* 숨겨진 유튜브 플레이어 (소리만 재생) */}
      {audioUrl && (
        <iframe
          src={audioUrl}
          className="w-0 h-0 opacity-0 pointer-events-none absolute"
          title="ASMR Audio Player"
          allow="autoplay; encrypted-media"
        />
      )}
    </div>
  );
}
