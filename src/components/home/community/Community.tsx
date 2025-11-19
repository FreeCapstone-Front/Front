import { homeCompoBgBlack } from "../weather/WeatherLayout";
import icon from "../../../assets/icons/book1.png";
import { Link } from "react-router-dom";
import CommunityCard from "./communityCard";
import { hovercss, pinkGrhoverCss } from "../../Navbar";
const Community = () => {
  return (
    <div
      className={`${homeCompoBgBlack} w-[1150px] h-[620px] flex flex-col items-center justify-center gap-y-7 px-20`}
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
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
      </div>
      <div
        className={`w-full h-20 rounded-2xl bg-linear-to-l from-[#AD46FF] to-[#F6339A] text-white text-2xl flex items-center justify-center gap-x-6 ${pinkGrhoverCss}`}
      >
        <div>+</div>
        <div>수면 고민 남기기</div>
      </div>
    </div>
  );
};
export default Community;
