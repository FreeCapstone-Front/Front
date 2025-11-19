import type {
  DreamCalendarItem,
  DreamDetail,
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
//꿈 하루 분석+내용 불러오기
export const fetchDreamByDay = async (
  DreamId: string
): Promise<DreamDetail> => {
  try {
    const response = await axiosInstance.get<DreamDetail>(
      `/api/dreams/${DreamId}`,
      {
        params: { id: DreamId }, // 객체 형태로 전달해야 함
      }
    );
    return response.data;
  } catch (error) {
    console.error("꿈 캘린더 데이터 불러오기 실패", error);
    throw error;
  }
};
