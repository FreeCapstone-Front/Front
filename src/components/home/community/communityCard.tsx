import type { PostRecordResponse } from "../../../types/post";

interface CommunityCardProps {
  post: PostRecordResponse;
}

const CommunityCard = ({ post }: CommunityCardProps) => {
  return (
    <div className="flex flex-col gap-y-4 p-5 bg-white/10 border border-white/20 w-1/3 h-62 rounded-3xl">
      <div className="flex items-center gap-x-3">
        <div className="w-10 h-10 rounded-full bg-pink-500"></div>
        <div className="text-white text-lg flex-1">{post.title}</div>
      </div>
      <div className="text-white pb-3 border-b border-white/10 flex-1">
        {post.content}
      </div>
      <div className="flex justify-between text-white/70 text-sm">
        <span>{post.category}</span>
        <span>
          ❤️ {post.likeCount} 💬 {post.commentCount}
        </span>
      </div>
    </div>
  );
};

export default CommunityCard;
