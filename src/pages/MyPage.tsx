import { Mail, Phone, MapPin, User, Edit } from "lucide-react"
import { Link } from "react-router-dom";
import pinkperson from "../assets/icons/pinkperson.png"
import { bgBlack } from "./IntroductionPage";

export const MyPage = () => {
  const inputcss = "pl-14 w-90 bg-white/5 border-1 border-white/10  text-white placeholder:text-white/40 h-11 rounded-3xl focus:outline-none focus:ring-0 focus:border-white/20"
  const infocss = "text-xs text-thin text-white/80"
  return (
    <div className={`${bgBlack} relative w-full min-h-screen pt-30 p-20 flex flex-col gap-20 items-center`}>
      {/* Gradient overlay effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9810fa]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f6339a]/10 rounded-full blur-3xl" />

      <div className="w-full max-w-md relative z-10 my-8">
        {/* Profile Icon */}
        

        {/* Profile Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 bg-[#22183E] rounded-[50px] shadow-[0px_20px_60px_-15px_rgba(236,72,153,0.4)]">
          <div className="flex flex-col items-center mb-6">
          <img src={pinkperson} alt="핑크사람" />

          <h1 className="text-xl text-white font-semibold mb-1">마이페이지</h1>
          <p className="text-sm text-white/60">내 정보를 확인하고 수정하세요.</p>
         </div>
          <div className="space-y-4">
            {/* Name Input */}
            <div className="space-y-2">
              <label className={`${infocss}`}>이름</label>
              <div className="relative pt-1">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f6339a]" />
                <input
                  type="text"
                  placeholder="김철수"
                  className={`${inputcss}`}
                />
              </div>
            </div>

            {/* Gender Input */}
            <div className="space-y-2">
              <label className={`${infocss}`}>성별</label>
              <div className="relative pt-1">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f6339a]" />
                <input
                  type="text"
                  placeholder="남자"
                  className={`${inputcss}`}
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className={`${infocss}`}>이메일</label>
              <div className="relative pt-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f6339a]" />
                <input
                  type="email"
                  placeholder="chulsoo@example.com"
                  className={`${inputcss}`}
                />
              </div>
            </div>

            {/* Phone Input */}
            <div className="space-y-2">
              <label className={`${infocss}`}>전화번호</label>
              <div className="relative pt-1">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f6339a]" />
                <input
                  type="tel"
                  placeholder="010-1234-5678"
                  className={`${inputcss}`}
                />
              </div>
            </div>

            {/* Address Input */}
            <div className="space-y-2">
              <label className={`${infocss}`}>주소</label>
              <div className="relative pt-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f6339a]" />
                <input
                  type="text"
                  placeholder="서울시 강남구"
                  className={`${inputcss}`}
                />
              </div>
            </div>

            {/* Additional Info Input */}
            <div className="space-y-2">
              <label className={`${infocss}`}>추가 정보</label>
              <div className="relative pt-1">
                <Edit className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f6339a]" />
                <input
                  type="text"
                  placeholder="추가 정보"
                  className={`${inputcss}`}
                />
              </div>
            </div>

            {/* Update Button */}
            <button className="w-full h-11 bg-gradient-to-r from-[#f6339a] via-[#ad46ff] to-[#9810fa] hover:opacity-90 text-white font-medium rounded-3xl shadow-lg shadow-[#f6339a]/25 transition-all mt-6 flex items-center justify-center gap-2">
              <Edit className="w-4 h-4" />
              수정하기
            </button>
          </div>
        </div>

       
      </div>
    </div>
  )
}
