import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { bgBlack } from "./IntroductionPage";
import { fetchPost } from "../apis/postApi"; // 실제 fetchPost 함수 import
import type { PostRecordResponse } from "../types/post";
import { hoverCssAnalysis } from "./AnalysisPage";
import { Pencil } from "lucide-react";
import icon from "../assets/icons/mystical.png";
const categories = [
  "전체",
  "수면의질",
  "수면시간",
  "수면일정",
  "불면증",
  "코골이",
  "꿈",
  "수면환경",
  "수면장애",
  "기타",
  "수면무호흡",
];

const PAGE_SIZE = 6;

export const CommunityPage = () => {
  const [posts, setPosts] = useState<PostRecordResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [activeCategory, setActiveCategory] = useState("전체");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState<"recent" | "popular">("recent");

  // 1. API에서 게시글 목록 불러오기
  useEffect(() => {
    setLoading(true);
    setErrorMsg(null);
    fetchPost()
      .then(setPosts)
      .catch((err) => {
        setErrorMsg("글 목록을 불러오는 데 실패했습니다.");
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  // 2. 카테고리 필터
  const filteredPosts =
    activeCategory === "전체"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  // 3. 정렬 (likes 또는 최신순)
  const sortedPosts = filteredPosts
    .slice()
    .sort((a, b) =>
      sortType === "popular"
        ? (b.likeCount || 0) - (a.likeCount || 0)
        : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  // 4. 페이지네이션
  const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);
  const pagePosts = sortedPosts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div className={`${bgBlack} min-h-screen px-8 py-10`}>
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-2">
          <div className="text-3xl font-bold text-white mb-2 flex items-center gap-x-3">
            <img src={icon} className="h-12 w-12" />
            고민을 나누고 위로받으세요
          </div>
          <Link
            to="/write-page"
            className={`bg-gradient-to-r from-pink-500 to-purple-500 ${hoverCssAnalysis} text-white font-bold px-5 py-2 rounded-full shadow transition w-40 h-13 flex justify-center gap-x-3 items-center`}
          >
            <Pencil color="white" />
            글쓰기
          </Link>
        </div>
        <div>
          <p className="text-white/50 text-lg mb-8">
            익명으로 수면 관련 고민을 공유하고 AI 분석으로 맞춤 조언을 받으세요
          </p>
        </div>
        {/* 카테고리 버튼 */}
        <div className="flex gap-2 w-full mb-8 flex-wrap">
          {categories.map((cat) => (
            <div
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-2 py-0.5 w-30 h-14 flex items-center justify-center  text-medium text-thin rounded-full font-bold cursor-pointer shadow transition
                ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-pink-400"
                    : "bg-white/4 border-1 border-white/10 text-purple-200 hover:bg-pink-500 hover:text-white"
                }
              `}
            >
              {cat}
            </div>
          ))}
        </div>
        {/* 정렬버튼 */}
        <div className="flex gap-3 mb-6">
          <div
            onClick={() => {
              setSortType("recent");
              setCurrentPage(1);
            }}
            className={`flex items-center gap-2 px-3 py-1 rounded-full font-bold cursor-pointer transition border border-white/10 w-25 h-12 justify-center
              ${
                sortType === "recent"
                  ? "bg-white/30 text-white"
                  : "bg-white/10 text-white hover:bg-white/50 hover:text-white"
              }
            `}
          >
            최신순
          </div>
          <div
            onClick={() => {
              setSortType("popular");
              setCurrentPage(1);
            }}
            className={`flex items-center gap-2 px-3 py-1 rounded-full font-bold cursor-pointer transition border border-white/10  w-25 h-12 justify-center
              ${
                sortType === "popular"
                  ? "bg-white/30 text-white"
                  : "bg-white/10 text-white hover:bg-white/50 hover:text-white"
              }
            `}
          >
            인기순
          </div>
        </div>
        {/* 글목록 */}
        <div className="flex flex-col gap-5">
          {loading && (
            <div className="text-center text-white py-12 font-bold text-lg">
              글 목록을 불러오는 중입니다...
            </div>
          )}
          {errorMsg && (
            <div className="text-center text-pink-400 py-8">{errorMsg}</div>
          )}
          {!loading && !errorMsg && pagePosts.length === 0 && (
            <div className="text-center text-white/70 py-12">
              현재 글이 없습니다.
            </div>
          )}
          {/* 실제 데이터 매핑 */}
          {pagePosts.map((post) => (
            <Link key={post.id} to={`/communitydetail-page/${post.id}`}>
              <div
                className={`rounded-3xl p-5 shadow-lg border border-transparent group cursor-pointer transition-all relative
                  ${
                    selectedId === post.id
                      ? "bg-gradient-to-r from-gray-700/10 via-purple-800/10 to-blue-700/10 border-pink-400"
                      : "bg-white/10 text-thin hover:bg-white/30"
                  }
                `}
                onClick={() => setSelectedId(post.id)}
              >
                {/* 태그/유저/시간 등은 서버 응답의 확장필드가 있다면 추가처리… 여기선 생략 */}
                {/* 카테고리 태그 샘플 */}
                <div className="flex gap-2 mb-2">
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-white/20 border border-white/20 text-white">
                    {post.category}
                  </span>
                </div>
                <div className="text-white text-lg font-bold">{post.title}</div>
                <div className="mt-1 text-gray-300 text-sm">{post.content}</div>
                <div className="flex items-center gap-4 mt-6 text-gray-400 text-xs">
                  <span>❤️ {post.likeCount}</span>
                  <span>💬 {post.commentCount}</span>
                  <span className="ml-auto">
                    {new Date(post.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* 페이지네이션 */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {totalPages > 1 && (
            <div
              className={`px-3 py-1 rounded-3xl border-1 border-white/20 bg-white/10 text-white cursor-pointer
                ${
                  currentPage === 1
                    ? "opacity-50 pointer-events-none"
                    : "hover:bg-white/30 hover:text-white"
                }
              `}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              이전
            </div>
          )}
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx + 1}
              className={`w-8 h-8 rounded-full flex items-center justify-center
                font-bold text-sm cursor-pointer transition
                ${
                  currentPage === idx + 1
                    ? "bg-pink-500 text-white shadow shadow-pink-400"
                    : "bg-[#25203A] text-violet-200 hover:bg-pink-500/50 hover:text-white"
                }
              `}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
          {totalPages > 1 && (
            <div
              className={`px-3 py-1 rounded-3xl border-1 border-white/20 bg-white/10 text-white cursor-pointer
                ${
                  currentPage === totalPages
                    ? "opacity-50 pointer-events-none"
                    : "hover:bg-white/30 hover:text-white"
                }
              `}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              다음
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
