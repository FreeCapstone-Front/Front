import { useState } from "react";
import { Link } from "react-router-dom";
import { bgBlack } from "./IntroductionPage";
// 샘플 데이터
const posts = [
  {
    id: "1",
    category: "불면증",
    title: "불면증이 너무 심해요. 어떻게 해야 할까요?",
    desc: "최근 2주 동안 밤에 잠을 거의 못 자고 있어요...",
    likes: 24,
    comments: 12,
    user: "익명1234",
    time: "5분 전",
    tags: ["불면증", "인기", "AI분석"],
  },
  {
    id: "2",
    category: "코골이",
    title: "코골이 때문에 가족들이 힘들어해요",
    desc: "제가 코를 너무 심하게 골아서 같은 방을 쓰는 가족이 잠을 못 잔다고 해요...",
    likes: 18,
    comments: 8,
    user: "고민이",
    time: "1시간 전",
    tags: ["코골이", "AI분석"],
  },
  {
    id: "3",
    category: "수면장애",
    title: "악몽을 자주 꿔서 숙면을 못해요",
    desc: "거의 매일 밤 무서운 꿈을 꿔서 깨요. 심리적인 문제인 걸까요?",
    likes: 15,
    comments: 6,
    user: "밤하늘",
    time: "3시간 전",
    tags: ["수면장애", "인기", "AI분석"],
  },
  {
    id: "4",
    category: "수면장애",
    title: "낮에 계속 졸려요. 기면증일까요?",
    desc: "충분히 잔다고 생각하는데도 낮에 갑자기 졸음이 쏟아져요. 회의 중에도 조는 경우가 많아서 걱정이에요.",
    likes: 22,
    comments: 10,
    user: "졸린사람",
    time: "5시간 전",
    tags: ["수면장애"],
  },
  {
    id: "5",
    category: "불면증",
    title: "수면제 없이 잠드는 방법 있을까요?",
    desc: "수면제를 먹어야만 잠들 수 있는데, 의존성이 생길까 봐 걱정돼요. 자연스럽게 잠드는 방법이 있을까요?",
    likes: 31,
    comments: 15,
    user: "희망찾기자",
    time: "8시간 전",
    tags: ["불면증", "인기", "AI분석"],
  },
  {
    id: "6",
    category: "수면무호흡",
    title: "수면 무호흡증 진단받았어요",
    desc: "병원에서 수면 무호흡증 진단을 받았는데, 치료 경험 있으신 분 계신가요?",
    likes: 12,
    comments: 7,
    user: "건강챙기자",
    time: "12시간 전",
    tags: ["수면무호흡"],
  },
  {
    id: "7",
    category: "수면무호흡",
    title: "수면 무호흡증 진단받았어요",
    desc: "병원에서 수면 무호흡증 진단을 받았는데, 치료 경험 있으신 분 계신가요?",
    likes: 12,
    comments: 7,
    user: "건강챙기자",
    time: "12시간 전",
    tags: ["수면무호흡"],
  },
  // 필요 시 추가!
];


const categories = [
  "전체", "수면의질", "수면시간", "수면일정", 
  "불면증", "코골이", "꿈", "수면환경", "수면장애", "기타", "수면무호흡"
];

const PAGE_SIZE = 6;

export const CommunityPage = () => {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState<"recent"|"popular">("recent");

  // 카테고리 필터
  const filteredPosts = activeCategory === "전체"
    ? posts
    : posts.filter(post => post.category === activeCategory);

  // 정렬: 최신순(id 기준), 인기순(likes 기준)
  const sortedPosts = filteredPosts.slice().sort((a, b) =>
    sortType === "popular"
      ? b.likes - a.likes
      : b.id.localeCompare(a.id) // 실제 최신순 정렬은 날짜필드 활용 권장
  );

  const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);
  const pagePosts = sortedPosts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div className={`${bgBlack} min-h-screen px-8 py-10`}>
      <div className="max-w-5xl mx-auto">
        <div>
          <h1 className="text-xl font-bold text-white mb-2">고민을 나누고 위로받으세요</h1>
          <p className="text-white/50 text-sm mb-8">
            익명으로 수면 관련 고민을 공유하고 AI 분석으로 맞춤 조언을 받으세요
          </p>
        </div>
        {/* 카테고리 버튼 */}
        <div className="flex gap-2 max-w-xl mb-8 flex-wrap">
          {categories.map(cat => (
            <div
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-2 py-0.5 text-xs text-thin rounded-full font-bold cursor-pointer shadow transition
                ${activeCategory === cat
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-pink-400"
                  : "bg-white/4 border-1 border-white/10 text-purple-200 hover:bg-pink-500 hover:text-white"}
              `}
            >
              {cat}
            </div>
          ))}
        </div>
        {/* 정렬버튼 */}
        <div className="flex gap-3 mb-6">
          <div
            onClick={() => { setSortType("recent"); setCurrentPage(1); }}
            className={`flex items-center gap-2 px-3 py-1 rounded-full font-bold cursor-pointer transition border border-white/10
              ${sortType === "recent"
                ? "bg-white/30 text-white"
                : "bg-white/10 text-white hover:bg-white/50 hover:text-white"}
            `}
          >
          최신순
          </div>
          <div
            onClick={() => { setSortType("popular"); setCurrentPage(1); }}
            className={`flex items-center gap-2 px-3 py-1 rounded-full font-bold cursor-pointer transition border border-white/10
              ${sortType === "popular"
                ? "bg-white/30 text-white"
                : "bg-white/10 text-white hover:bg-white/50 hover:text-white"}
            `}
          >
            인기순
          </div>
        </div>
        {/* 글목록 */}
        <div className="flex flex-col gap-5">
          {pagePosts.map(post => (
            <Link key={post.id} to={`/detail/${post.id}`}>
              <div
                className={`rounded-3xl p-5 shadow-lg border border-transparent group cursor-pointer transition-all relative
                  ${selectedId === post.id
                    ? "bg-gradient-to-r from-gray-700/10 via-purple-800/10 to-blue-700/10 border-pink-400"
                    : "bg-white/10 text-thin hover:bg-white/30"}
                `}
                onClick={() => setSelectedId(post.id)}
              >
                <div className="flex gap-2 mb-2">
                  {/* "AI분석" 태그 빼고 표시 */}
                  {post.tags
                    
                    .map(tag => (
                      <span
                        key={tag}
                        className={`
                          px-2 py-1 rounded-full text-xs font-bold
                          ${tag === "인기"
                            ? "bg-gradient-to-r from-[#FF6900] to-[#F6339A] text-white shadow-pink-300r"
                            : "bg-white/20 text-white border-1 border-white/20"}
                        `}
                      >{tag}</span>
                    ))}
                </div>
                <div className="text-white text-lg font-bold">{post.title}</div>
                <div className="mt-1 text-gray-300 text-sm">{post.desc}</div>
                <div className="flex items-center gap-4 mt-6 text-gray-400 text-xs">
                  <span>{post.user}</span>
                  <span>{post.time}</span>
                  <span className="ml-auto flex gap-3">
                    <span className="flex items-center gap-1"><span>🤍</span><span>{post.likes}</span></span>
                    <span className="flex items-center gap-1"><span>💬</span><span>{post.comments}</span></span>
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
                ${currentPage === 1
                  ? "opacity-50 pointer-events-none"
                  : "hover:bg-white/30 hover:text-white"}
              `}
              onClick={() => setCurrentPage(currentPage - 1)}
            >이전</div>
          )}
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx + 1}
              className={`w-8 h-8 rounded-full flex items-center justify-center
                font-bold text-sm cursor-pointer transition
                ${currentPage === idx + 1
                  ? "bg-pink-500 text-white shadow shadow-pink-400"
                  : "bg-[#25203A] text-violet-200 hover:bg-pink-500/50 hover:text-white"}
              `}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
          {totalPages > 1 && (
            <div
              className={`px-3 py-1 rounded-3xl border-1 border-white/20 bg-white/10 text-white cursor-pointer
                ${currentPage === totalPages
                  ? "opacity-50 pointer-events-none"
                  : "hover:bg-white/30 hover:text-white"}
              `}
              onClick={() => setCurrentPage(currentPage + 1)}
            >다음</div>
          )}
        </div>
      </div>
    </div>
  );
};
