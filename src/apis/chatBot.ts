import type {
  DreamCoachMsgRequestBody,
  DreamCoachMsgResponse,
  dreamCoachStartResponse,
  DreamCoachSummaryResponse,
} from "../types/chatBot";
import axiosInstance from "./axiosInstance";

export const dreamCoachStart = async (): Promise<dreamCoachStartResponse> => {
  try {
    const response = await axiosInstance.post<dreamCoachStartResponse>(
      "api/dream-coach/session"
    );

    return response.data;
  } catch (error) {
    console.error("챗봇 세션 불러오기 실패", error);
    throw error;
  }
};

export const dreamCoachMessage = async (
  msgData: DreamCoachMsgRequestBody
): Promise<DreamCoachMsgResponse> => {
  try {
    const response = await axiosInstance.post<DreamCoachMsgResponse>(
      "api/dream-coach/message",
      msgData
    );

    return response.data;
  } catch (error) {
    console.error("챗봇 메세지 보내기 실패", error);
    throw error;
  }
};

export const dreamCoachSummary = async (
  sessionId: string
): Promise<DreamCoachSummaryResponse> => {
  try {
    const response = await axiosInstance.get<DreamCoachSummaryResponse>(
      `/api/dream-coach/sessions/${sessionId}/dream-draft`,
      {
        params: { id: sessionId }, // 객체 형태로 전달해야 함
      }
    );
    return response.data;
  } catch (error) {
    console.error("꿈Bot 요약 데이터 불러오기 실패", error);
    throw error;
  }
};
