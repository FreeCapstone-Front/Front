import type {
  PostData,
  PostRecordResponse,
  PostDetailResponse,
} from "../types/post";
import axiosInstance from "./axiosInstance";

export const saveDreamRecord = async (
  postData: PostData
): Promise<PostRecordResponse> => {
  try {
    const response = await axiosInstance.post<PostRecordResponse>(
      "/api/community/posts",
      postData
    );
    return response.data;
  } catch (error) {
    console.error("게시글 생성 실패", error);
    throw error;
  }
};

export const fetchPost = async (): Promise<PostRecordResponse[]> => {
  try {
    const response = await axiosInstance.get<PostRecordResponse[]>(
      "/api/community/posts/all"
    );
    return response.data;
  } catch (error) {
    console.error("게시물 데이터 불러오기 실패", error);
    throw error;
  }
};

export const fetchPostDetail = async (
  postId: string
): Promise<PostDetailResponse> => {
  try {
    const response = await axiosInstance.get<PostDetailResponse>(
      `/api/community/posts/${postId}`
    );
    return response.data;
  } catch (error) {
    console.error("게시글 상세 불러오기 실패", error);
    throw error;
  }
};

// 게시글 좋아요 추가
export const likePost = async (postId: string): Promise<void> => {
  await axiosInstance.post(`/api/community/posts/${postId}/like`);
};

// 게시글 좋아요 취소
export const unlikePost = async (postId: string): Promise<void> => {
  await axiosInstance.delete(`/api/community/posts/${postId}/like`);
};
