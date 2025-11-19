import type {
  DreamStats,
  insightResponse,
  MoodCountStats,
  topKeywordResponse,
  trendResponse,
} from "../types/analysis";
import axiosInstance from "./axiosInstance";

export const analysisAll = async (): Promise<DreamStats> => {
  try {
    const response = await axiosInstance.get<DreamStats>(
      "/api/analysis/stats?from=2025-01-01&to=2025-12-31"
    );
    return response.data;
  } catch (error) {
    console.error("꿈 캘린더 데이터 불러오기 실패", error);
    throw error;
  }
};

export const analysisPie = async (): Promise<MoodCountStats> => {
  try {
    const response = await axiosInstance.get<MoodCountStats>(
      "/api/analysis/moods/histogram?from=2025-01-01&to=2025-12-31"
    );
    return response.data;
  } catch (error) {
    console.error("꿈 캘린더 데이터 불러오기 실패", error);
    throw error;
  }
};
// 수면 질 그래프
export const analysisGraph = async (): Promise<trendResponse> => {
  try {
    const response = await axiosInstance.get<trendResponse>(
      "/api/analysis/trend?from=2025-01-01&to=2025-12-31"
    );
    return response.data;
  } catch (error) {
    console.error("꿈 캘린더 데이터 불러오기 실패", error);
    throw error;
  }
};
// 키워드 추출 // 수정 필요
export const analysiskeyword = async (): Promise<trendResponse> => {
  try {
    const response = await axiosInstance.get<trendResponse>(
      "/api/analysis/keyword/top?from=2025-01-01&to=2025-12-31"
    );
    return response.data;
  } catch (error) {
    console.error("꿈 캘린더 데이터 불러오기 실패", error);
    throw error;
  }
};

//심리 분석 인사이트
export const analysisInsight = async (): Promise<insightResponse> => {
  try {
    const response = await axiosInstance.get<insightResponse>(
      "/api/analysis/insights?from=2025-01-01&to=2025-12-31"
    );
    return response.data;
  } catch (error) {
    console.error("꿈 캘린더 데이터 불러오기 실패", error);
    throw error;
  }
};

//심리 분석 추천
export const analysisRecoomendation = async (): Promise<insightResponse> => {
  try {
    const response = await axiosInstance.get<insightResponse>(
      "/api/analysis/sleep/recommendations?from=2025-01-01&to=2025-12-31"
    );
    return response.data;
  } catch (error) {
    console.error("꿈 캘린더 데이터 불러오기 실패", error);
    throw error;
  }
};

//최대 키워드 추출 6개
export const getTopKeyword = async (): Promise<topKeywordResponse> => {
  try {
    const response = await axiosInstance.get<topKeywordResponse>(
      "/api/analysis/keywords/top?from=2025-01-01&to=2025-12-31&limit=6"
    );
    return response.data;
  } catch (error) {
    console.error("꿈 캘린더 데이터 불러오기 실패", error);
    throw error;
  }
};
