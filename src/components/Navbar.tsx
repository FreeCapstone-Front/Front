import logoImage from "../assets/logo/logoDark.png";
import pencil from "../assets/icons/pencil.png";
import loginIcon from "../assets/icons/loginIcon.png";
import mypageIcon from "../assets/icons/myPageIcon.png";
import { Link } from "react-router-dom";
export const pinkGrhoverCss =
  " transform transition-all duration-300 ease-in-out " +
  "hover:scale-105 hover:shadow-lg hover:shadow-[#F6339A]/40";
export const pinkGrLoginBtn =
  "bg-gradient-to-r from-[#F6339A] to-[#9810FA] rounded-full text-white font-bold" +
  "flex items-center justify-center gap-2" +
  pinkGrhoverCss;

export const hovercss =
  "transform transition-all duration-300 ease-in-out " +
  " hover:border-white hover:scale-105 hover:bg-white/20 ";
const Navbar = () => {
  const bgBlack =
    "bg-gradient-to-b from-[#1A1625] via-[#1E1B4B] to-[#2D1B4E] border-b-2 border-[#F6339A]/30";

  const btncss =
    "text-white bg-white/10 w-[7.5rem] h-[3.125rem] rounded-3xl border border-white/30 " +
    "flex items-center justify-center " +
    hovercss +
    "hover:bg-white/20";

  const btncss2 =
    "text-white bg-white/10 w-[9rem] h-[3.125rem] rounded-3xl border border-white/30 " +
    "flex items-center justify-center " +
    hovercss +
    "hover:bg-white/20";

  const AccessToken = false; //더미 데이터

  return (
    <nav className={`w-full h-37.5 ${bgBlack} text-white`}>
      <div className={`h-full flex justify-between items-center px-20`}>
        <Link to="/">
          <img src={logoImage} className={`w-42 h-21.5 ${hovercss}`} />
        </Link>
        <div className="flex items-center justify-center gap-x-8">
          <Link to="/record-page" className={`${btncss} gap-x-2`}>
            <img src={pencil} className="w-6 h-6" />꿈 기록
          </Link>
          <Link to="/calendar-page" className={btncss}>
            꿈 캘린더
          </Link>
          <Link to="/analysis-page" className={btncss}>
            분석
          </Link>
          <Link to="/community-page" className={btncss}>
            고민 상담소
          </Link>
        </div>

        {AccessToken && (
          <Link to="/auth-page" className={`${pinkGrLoginBtn}  w-48.75 h-15`}>
            <img src={loginIcon} /> 회원가입/로그인
          </Link>
        )}
        {!AccessToken && (
          <div className="h-full flex items-center justify-center gap-x-8">
            <div className="bg-linear-to-r from-[#F6339A] to-[#9810FA] h-[60px] w-[60px] rounded-full"></div>
            <Link to="/calendar-page" className={`${btncss2} gap-x-2`}>
              <img src={mypageIcon} className="w-6 h-6" />
              마이페이지
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
