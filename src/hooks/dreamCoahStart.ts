// hooks/useDreamCoachStart.ts
import { useState, useEffect } from "react";
import type { dreamCoachStartResponse } from "../types/chatBot";
import { dreamCoachStart } from "../apis/chatBot";
export const useDreamCoachStart = () => {
  const [data, setData] = useState<dreamCoachStartResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await dreamCoachStart();
        setData(result);

        // result에서 바로 sessionID 저장
        if (result?.sessionId) {
          localStorage.setItem("sessionId", result.sessionId);
        }
      } catch (err) {
        setError("데이터를 불러오는 데 실패했습니다.");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
