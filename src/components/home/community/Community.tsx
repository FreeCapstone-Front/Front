/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { homeCompoBgBlack } from "../weather/WeatherLayout";
import icon from "../../../assets/icons/book1.png";
import { Link } from "react-router-dom";
import CommunityCard from "./communityCard";
import { hovercss, pinkGrhoverCss } from "../../Navbar";
import { fetchPost } from "../../../apis/postApi";
import type { PostRecordResponse } from "../../../types/post";

const Community = () => {
  const [posts, setPosts] = useState<PostRecordResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchPost();
        setPosts(data.slice(0, 3)); // 여기서 상위 3개 게시글만 저장해서 보여줌
      } catch (e) {
        setError("게시글을 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  return (
    <div
      className={`${homeCompoBgBlack} w-[1150px] h-auto flex flex-col items-center justify-center gap-y-8 p-15`}
    >
      <div className="w-full flex items-between justify-between">
        <div className="flex gap-x-4 items-center justify-center">
          <img src={icon} className="h-12 w-12" />
          <div className="text-white text-2xl">내 수면 상담소</div>
        </div>
        <Link
          className={`h-12 w-25 border border-white/30 bg-white/30 rounded-2xl flex items-center justify-center text-white ${hovercss}`}
          to={"community-page"}
        >
          더보기 →
        </Link>
      </div>

      <div className="w-full flex items-center justify-center gap-x-5">
        {loading && <div className="text-white">불러오는 중...</div>}
        {error && <div className="text-pink-400">{error}</div>}
        {!loading &&
          !error &&
          posts.map((post) => <CommunityCard key={post.id} post={post} />)}
      </div>

      <Link
        className={`w-full h-20 rounded-2xl bg-linear-to-l from-[#AD46FF] to-[#F6339A] text-white text-2xl flex items-center justify-center gap-x-6 ${pinkGrhoverCss}`}
        to={"write-page"}
      >
        <div>+</div>
        <div>수면 고민 남기기</div>
      </Link>
    </div>
  );
};

export default Community;
