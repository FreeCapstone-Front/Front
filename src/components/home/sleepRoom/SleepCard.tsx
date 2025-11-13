import { Link } from "react-router-dom";
import sheep from "../../../assets/icons/sheep.png";
import start from "../../../assets/icons/start.png";
import { hovercss, pinkGrhoverCss } from "../../Navbar";
const SleepCard = () => {
  const btncss =
    // w-[220px] -> w-[13.75rem], h-[60px] -> h-[3.75rem], text-lg (1.125rem)
    "w-[13.75rem] h-[3.75rem] bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-lg text-white";
  return (
    <div
      // w-[490px] -> w-[30.625rem], h-[625px] -> h-[39.0625rem]
      className="w-122.5 h-[39.0625rem] rounded-3xl overflow-hidden shadow-lg 
                 flex flex-col bg-white/5 backdrop-blur-sm 
                 items-center justify-center gap-y-3"
    >
      {/* w-[400px] -> w-[25rem], h-[280px] -> h-[17.5rem] */}
      <img src={sheep} className="w-100 h-70" />
      {/* text-xl (1.25rem) */}
      <div className="text-xl text-white">편안한 수면을 위한 꿈꿈ASMR</div>
      <div className="text-[#99A1AF]">
        숙면을 도와주는 다양한 ASMR 사운드를 들어보세요
      </div>
      {/* w-[440px] -> w-[27.5rem] */}
      <div className=" w-[27.5rem] flex items-center justify-between gap-x-3">
        <div className={`${btncss} ${hovercss}`}>백색소음</div>
        <div className={`${btncss} ${hovercss}`}>동화</div>
      </div>
      <Link
        // w-[440px] -> w-[27.5rem], h-[60px] -> h-[3.75rem]
        className={`w-[27.5rem] h-[3.75rem] flex items-center gap-x-3 justify-center rounded-xl bg-linear-to-r from-[#AD46FF] to-[#F6339A] backdrop-blur-lg text-white
            ${pinkGrhoverCss}`}
        to={"sleepRoom-page"}
      >
        {/* h-5 (1.25rem), w-5 (1.25rem) */}
        <img src={start} className="h-5 w-5" />
        지금 들어보기
      </Link>
    </div>
  );
};

export default SleepCard;
