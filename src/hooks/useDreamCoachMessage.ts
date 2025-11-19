import { useState } from "react";
import { dreamCoachMessage } from "../apis/chatBot";
import type {
  DreamCoachMsgRequestBody,
  DreamCoachMsgResponse,
} from "../types/chatBot";

export function useDreamCoachMessage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 실제 메시지 전송 함수
  const sendMessage = async (
    msgData: DreamCoachMsgRequestBody
  ): Promise<DreamCoachMsgResponse | null> => {
    setLoading(true);
    setError(null);
    try {
      const res = await dreamCoachMessage(msgData);
      return res;
    } catch (e) {
      setError("메시지 전송 실패");
      console.log(e);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading, error };
}
