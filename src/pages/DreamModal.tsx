interface DreamModalProps {
  open: boolean;
  onClose: () => void;
  date: Date | null;
  // 꿈 데이터 props 추가
  dreamData?: {
    title: string;
    description: string;
    tags: string[];
    // ... 기타 정보
  };
}

const DreamModal = ({ open, onClose, date, dreamData }: DreamModalProps) => {
  if (!open || !dreamData || !date) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50">
      <div className="bg-gradient-to-br from-[#25192C] to-[#2D1B4E] rounded-2xl shadow-lg p-6 w-[440px] max-w-full">
        <button className="absolute top-4 right-4" onClick={onClose}>
          ✕
        </button>
        <div className="flex flex-col items-center">
          {/* 여기에 아이콘 등 추가 */}
          <div className="text-pink-400 font-bold text-lg mb-2">
            {dreamData.title}
          </div>
          <div className="text-gray-300 text-sm">
            {date.toLocaleDateString("ko-KR")}
          </div>
          <div className="mt-4 text-white">{dreamData.description}</div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {dreamData.tags.map((tag) => (
              <span
                key={tag}
                className="bg-pink-900/30 text-pink-400 px-2 py-1 rounded-full text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
          {/* 기타 버튼/기능 추가 */}
        </div>
      </div>
    </div>
  );
};

export default DreamModal;
