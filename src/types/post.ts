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

export interface CommentRequest {
  content: string;
  parentCommentId: string | null;
}
export interface CommentResponse {
  commentId: string; // 댓글의 고유 ID (UUID)
  postId: string; // 댓글이 포함된 게시글의 ID (UUID)
  authorId: string; // 댓글 작성자의 사용자 ID (UUID)
  content: string; // 댓글 내용
  createdAt: string; // 댓글 작성 시각 (ISO 8601 형식의 문자열)
}

export interface commentType {
  id: string;
  content: string;
  createdAt: string;
}

export type getCommentType = commentType[];
