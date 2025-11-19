import { useState, useEffect, useRef } from "react";
import { useDreamCoachMessage } from "../hooks/useDreamCoachMessage";
import { useDreamCoachStart } from "../hooks/dreamCoahStart";
import { dreamCoachSummary } from "../apis/chatBot";
import { useNavigate } from "react-router-dom";

const DreamBotPage = () => {
  const navigate = useNavigate();
  const {
    data,
    loading: sessionLoading,
    error: sessionError,
  } = useDreamCoachStart();
  const {
    sendMessage,
    loading: msgLoading,
    error: msgError,
  } = useDreamCoachMessage();

  const [messages, setMessages] = useState([
    { sender: "bot", text: "안녕하세요! 꿈BOT과 대화를 시작합니다." },
  ]);
  const [input, setInput] = useState("");

  const adviceTimeoutRef = useRef<number | null>(null);
  const [isFinalTurn, setIsFinalTurn] = useState(false);

  useEffect(() => {
    if (data?.sessionId) {
      setMessages((msgs) => [
        ...msgs,
        {
          sender: "bot",
          text: "환영합니다. 오늘은 무슨 꿈을 꾸었나요?",
        },
      ]);
      setIsFinalTurn(false);
    }
    return () => {
      if (adviceTimeoutRef.current) clearTimeout(adviceTimeoutRef.current);
    };
  }, [data?.sessionId]);

  const addAdviceLineByLine = (advice: string) => {
    const lines = advice.split(/\n+/).filter((line) => line.trim() !== "");
    let index = 0;

    const printNext = () => {
      if (index >= lines.length) return;
      setMessages((msgs) => [...msgs, { sender: "bot", text: lines[index] }]);
      index++;
      adviceTimeoutRef.current = setTimeout(printNext, 800);
    };
    printNext();
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((msgs) => [...msgs, { sender: "user", text: input }]);
    const reqBody = { sessionId: data?.sessionId || "", message: input };
    setInput("");

    const res = await sendMessage(reqBody);

    if (res?.turn) {
      if (res.turn.reply) {
        setMessages((msgs) => [
          ...msgs,
          { sender: "bot", text: res.turn.reply },
        ]);
      }
      if (res.turn.question) {
        setMessages((msgs) => [
          ...msgs,
          { sender: "bot", text: res.turn.question },
        ]);
      }
      if (res.turn.type === "FINAL") {
        setIsFinalTurn(true);
        if (res.turn.advice) {
          addAdviceLineByLine(res.turn.advice);
        }
      } else {
        setIsFinalTurn(false);
      }
    }
  };

  const handleRecordDream = async () => {
    if (!data?.sessionId) {
      console.warn("세션 ID가 없습니다.");
      return;
    }

    try {
      const summaryData = await dreamCoachSummary(data.sessionId);
      console.log("꿈 요약 데이터:", summaryData);
      localStorage.setItem("chatBotSummary", summaryData.content);
      navigate("/record-page");
    } catch (error) {
      console.error("꿈 요약 데이터 불러오기 실패", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-linear-to-b from-[#1A1625] via-[#1E1B4B] to-[#2D1B4E] py-10">
      <div
        className="w-full max-w-2xl flex flex-col bg-white rounded-2xl shadow-lg p-6"
        style={{ height: "calc(100vh - 80px)" }} // 화면 높이에서 padding 뺌
      >
        <h1 className="text-xl font-bold text-indigo-700 mb-6 text-center">
          꿈Bot
        </h1>

        <div
          className="flex-1 flex flex-col gap-2 mb-4 overflow-y-auto"
          style={{ minHeight: 400 }}
        >
          {sessionLoading ? (
            <div className="text-gray-500 text-center">로딩 중...</div>
          ) : sessionError ? (
            <div className="bg-red-100 text-red-700 rounded px-3 py-2 text-center">
              {sessionError}
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-xl px-4 py-2 max-w-[70%] shadow ${
                    msg.sender === "user"
                      ? "bg-indigo-200 text-right"
                      : "bg-indigo-100"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))
          )}
          {msgLoading && (
            <div className="text-gray-500 italic text-center mt-2">
              챗봇이 생각 중입니다...
            </div>
          )}
          {msgError && (
            <div className="bg-red-100 text-red-700 rounded px-3 py-2 text-center mt-1">
              {msgError}
            </div>
          )}
        </div>

        {isFinalTurn && (
          <div className="flex justify-center mb-4">
            <button
              className="bg-linear-to-r from-[#F6339A] to-[#9810FA] text-white px-8 py-4 text-xl rounded-lg hover:scale-105 transition-transform duration-200"
              onClick={handleRecordDream}
            >
              꿈 기록하기
            </button>
          </div>
        )}

        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
        >
          <input
            className="flex-1 rounded-lg border border-indigo-300 px-3 py-2 focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="메시지 입력..."
            disabled={sessionLoading}
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
            disabled={sessionLoading || msgLoading}
          >
            보내기
          </button>
        </form>
      </div>
    </div>
  );
};

export default DreamBotPage;
