import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostDetail, likePost, unlikePost } from "../apis/postApi";
import type { PostDetailResponse } from "../types/post";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export const CommunityPageDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState<PostDetailResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [liked, setLiked] = useState(false);
  // → 로그인한 유저가 이 글에 좋아요를 눌렀는지, 서버에서 받아오는 정보 없음 (지금은 false로만 시작)
  const [likeCount, setLikeCount] = useState<number>(post?.likeCount ?? 0);
  // → 서버에서 받아온 게시글 데이터의 likeCount(전체 좋아요 수)로 상태 초기화

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setErrorMsg(null);
    if (id) {
      fetchPostDetail(id)
        .then(setPost)
        .catch(() => setErrorMsg("글을 불러올 수 없습니다."))
        .finally(() => setLoading(false));
    }
  }, [id]);

  // post 받아온 뒤에 likeCount 동기화
  useEffect(() => {
    if (post) setLikeCount(post.likeCount);
  }, [post]);

  if (loading) return <div className="text-center text-white">로딩중...</div>;
  if (!post || errorMsg)
    return (
      <div className="text-center text-pink-400">
        {errorMsg || "글을 찾을 수 없습니다."}
      </div>
    );

  /** 날짜, 시간, 조회수&작성자 렌더링 함수 */
  const formatDate = (dt: string) => {
    // YYYY.MM.DD HH:mm
    const date = new Date(dt);
    return `${date.getFullYear()}.${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")} ${date
      .getHours()
      .toString()
      .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
  };

  const handleLike = async () => {
    try {
      if (!liked) {
        await likePost(post!.id);
        setLiked(true);
        setLikeCount((prev) => prev + 1);
      } else {
        await unlikePost(post!.id);
        setLiked(false);
        setLikeCount((prev) => prev - 1);
      }
    } catch {
      alert("좋아요 처리에 실패했습니다.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-0 md:px-6 py-12 text-white">
      <div className="flex items-center gap-2 mb-8">
        <ChevronLeft
          className="w-5 h-5 cursor-pointer"
          onClick={() => navigate("/community-page")}
        />
        <span
          className="text-sm font-medium cursor-pointer"
          onClick={() => navigate("/community-page")}
        >
          목록으로
        </span>
      </div>
      <div className="w-full max-w-4xl mx-auto bg-gray-900/30 rounded-2xl shadow-lg p-6 md:p-10">
        {/* 상단: 카테고리 */}
        <div className="flex items-center gap-2 mb-4">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-pink-300 border-pink-700 border">
            {post.category}
          </span>
        </div>

        {/* 제목 */}
        <div className="font-bold text-5xl md:text-2xl mb-2 mt-20">
          {post.title}
        </div>

        {/* 작성 정보 */}
        <div className="flex gap-4 text-xl text-white/50 mb-5 mt-10">
          <span>{post.authorName}</span>
          <span>{formatDate(post.createdAt)}</span>
          <span>조회 {post.viewCount}</span>
        </div>

        <hr className="my-4 border-t border-gray-300/20 mt-10" />

        {/* 본문 */}
        <div className="mb-8 leading-relaxed text-white/90 text-xl whitespace-pre-line">
          {post.content}
        </div>

        <hr className="my-4 border-t border-gray-300/20 mt-10" />

        {/* 하단 버튼들 */}
        <div className="flex items-center gap-6 mt-5 text-xs text-white/70">
          <button
            className={`flex items-center gap-2 px-3 py-2 rounded-full transition
      ${
        liked
          ? "bg-pink-600/80 text-white"
          : "bg-white/10 text-white/70 hover:bg-pink-600/40"
      }
    `}
            onClick={handleLike}
          >
            {liked ? "❤️" : "🤍"} 공감 {likeCount}
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-purple-600/30 transition">
            💬 댓글 {post.commentCount}
          </button>
        </div>
      </div>
      {/* Main Card Container */}
      <div className="w-full max-w-4xl mx-auto bg-gray-900/30 rounded-2xl shadow-lg p-6 md:p-10 mt-15">
        {/* Header */}
        <h2 className="text-white text-lg md:text-xl font-medium mb-8">
          댓글 작성
        </h2>

        {/* Input + Button Wrapper */}
        <div className="flex flex-col">
          <textarea
            className={`
        w-full h-16 md:h-20 resize-none
        bg-white/5 border border-white/20 rounded-2xl
        px-5 py-4 text-white placeholder:text-white/30
        focus:outline-none focus:ring-1 focus:ring-white/20
        text-base md:text-lg
      `}
            placeholder="따뜻한 위로와 조언을 남겨주세요"
          />

          {/* Submit Button - 아래쪽 오른쪽 정렬 */}
          <button
            className={`
        self-end mt-5 px-8 py-3 rounded-full 
        bg-gradient-to-r from-[#ff2ecd] to-[#b026ff]
        text-white font-medium text-base md:text-lg
        shadow-[0_0_20px_rgba(255,46,205,0.5)] hover:shadow-[0_0_30px_rgba(255,46,205,0.7)]
        transition-all duration-200 hover:scale-105 active:scale-95
        flex items-center justify-center
      `}
          >
            댓글 등록
          </button>
        </div>
      </div>
    </div>
  );
};
