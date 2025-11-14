import type { DreamFormData, DreamRecordResponse } from "../types/dream";
import axiosInstance from "./axiosInstance";

//꿈 기록
export const saveDreamRecord = async (
  dreamData: DreamFormData
): Promise<DreamRecordResponse> => {
  try {
    const response = await axiosInstance.post<DreamRecordResponse>(
      "/api/dreams",
      dreamData
    );
    return response.data;
  } catch (error) {
    console.error("꿈 기록 저장 실패", error);
    throw error;
  }
};
