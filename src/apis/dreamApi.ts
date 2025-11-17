import type {
  DreamCalendarItem,
  DreamFormData,
  DreamRecordResponse,
} from "../types/dream";
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
// 캘린더 달 정보 불러오기
export const fetchDreamCalendar = async (
  year: number,
  month: number
): Promise<DreamCalendarItem[]> => {
  try {
    const response = await axiosInstance.get<DreamCalendarItem[]>(
      "/api/dreams/calendar",
      {
        params: { year, month },
      }
    );
    return response.data;
  } catch (error) {
    console.error("꿈 캘린더 데이터 불러오기 실패", error);
    throw error;
  }
};
