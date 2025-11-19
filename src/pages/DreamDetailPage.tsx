import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchDreamByDay } from "../apis/dreamApi";
import type { DreamDetail } from "../types/dream";
import DreamAnalysisCard from "../components/Dream/DreamAnalysisCard";

const DreamDetailPage = () => {
  const { dreamId } = useParams<{ dreamId: string }>();
  const [dreamDetail, setDreamDetail] = useState<DreamDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!dreamId) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchDreamByDay(dreamId);
        setDreamDetail(data);
      } catch (err) {
        setError("꿈 상세 정보를 불러오는 데 실패했습니다.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dreamId]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;
  if (!dreamDetail) return <div>데이터가 없습니다.</div>;

  return <DreamAnalysisCard detail={dreamDetail} />;
};

export default DreamDetailPage;
