export interface PostData {
  category: string;
  title: string;
  content: string;
}

export interface PostRecordResponse {
  id: string;
  category: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
  createdAt: string;
}

export interface CommentResponse {
  id: string;
  content: string;
  createdAt: string;
}

export interface PostDetailResponse {
  id: string;
  category: string;
  title: string;
  authorName: string; // "익명"
  content: string;
  likeCount: number;
  commentCount: number;
  viewCount: number;
  createdAt: string;
  comments: CommentResponse[];
}
