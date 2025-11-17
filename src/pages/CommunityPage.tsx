import { useNavigate } from "react-router-dom";

export const CommunityPage = () => {
  const navigate = useNavigate();

  const handleWrite = () => {
    navigate("/write-page");
  };

  return (
    <button
      className="px-8 py-4 rounded-full border border-white/40 bg-transparent text-white text-lg font-medium shadow-sm hover:bg-white/10 transition"
      onClick={handleWrite}
    ></button>
  );
};
