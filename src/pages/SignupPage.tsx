import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  User,
  Lock,
  Phone,
  Mail,
  Pencil,
  Tag,
} from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import character1 from "../assets/logo/profileChracter1.png";
import { signup } from "../apis/authApi";
// 회원가입 폼 validation 스키마
const SignupSchema = z.object({
  username: z.string().min(1, { message: "아이디를 입력하세요." }),
  password: z
    .string()
    .min(6, { message: "비밀번호는 최소 6자 이상이어야 합니다." }),
  name: z.string().min(1, { message: "이름을 입력하세요." }),
  age: z.number().min(0, { message: "0 이상의 숫자를 입력하세요." }),
  phone: z.string().min(10, { message: "전화번호를 입력하세요." }),
  email: z.string().email({ message: "유효한 이메일을 입력하세요." }),
  nickname: z.string().min(1, { message: "닉네임을 입력하세요." }),
});

type SignupFormValues = z.infer<typeof SignupSchema>;

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      username: "",
      password: "",
      name: "",
      age: 0,
      phone: "",
      email: "",
      nickname: "",
    },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<SignupFormValues> = async (data) => {
    try {
      await signup(data);
      alert("회원가입 완료! 로그인 페이지로 이동합니다.");
      navigate("/auth-page");
    } catch (error) {
      alert(
        "회원가입 실패: " +
          (error instanceof Error ? error.message : "알 수 없는 오류")
      );
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-linear-to-br from-[#2A2535] via-[#2E2B5B] to-[#3D2B5E] flex items-center justify-center p-4">
      {/* 배경 효과 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9810fa]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f6339a]/10 rounded-full blur-3xl" />

      <div className="w-full max-w-md relative z-10">
        <div className="flex flex-col items-center mb-8">
          <img
            src={character1}
            className="h-30 w-30 rounded-full"
            alt="profile character"
          />
          <h1 className="text-2xl font-semibold text-white mb-2">회원가입</h1>
          <p className="text-sm text-white/60">
            필수 정보를 입력하여 회원가입을 완료하세요
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* 아이디 */}
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm text-white/80">
                아이디
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f6339a]" />
                <input
                  id="username"
                  type="text"
                  placeholder="아이디를 입력하세요"
                  {...register("username")}
                  className={`w-full pl-12 pr-4 py-3 bg-white/5 border text-white placeholder:text-white/40 h-12 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                    errors.username
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white/10 focus:ring-[#f6339a] focus:border-transparent"
                  }`}
                />
              </div>
              {errors.username && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* 비밀번호 */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-white/80">
                비밀번호
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f6339a]" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="비밀번호를 입력하세요"
                  {...register("password")}
                  className={`w-full pl-12 pr-12 py-3 bg-white/5 border text-white placeholder:text-white/40 h-12 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                    errors.password
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white/10 focus:ring-[#f6339a] focus:border-transparent"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors focus:outline-none"
                  aria-label={
                    showPassword ? "비밀번호 숨기기" : "비밀번호 보기"
                  }
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* 이름 */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-white/80">
                이름
              </label>
              <div className="relative">
                <Pencil className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f6339a]" />
                <input
                  id="name"
                  type="text"
                  placeholder="이름을 입력하세요"
                  {...register("name")}
                  className={`w-full pl-12 pr-4 py-3 bg-white/5 border text-white placeholder:text-white/40 h-12 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white/10 focus:ring-[#f6339a] focus:border-transparent"
                  }`}
                />
              </div>
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* 나이 */}
            <div className="space-y-2">
              <label htmlFor="age" className="text-sm text-white/80">
                나이
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f6339a]" />
                <input
                  id="age"
                  type="number"
                  min={0}
                  placeholder="나이를 입력하세요"
                  {...register("age", { valueAsNumber: true })}
                  className={`w-full pl-12 pr-4 py-3 bg-white/5 border text-white placeholder:text-white/40 h-12 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                    errors.age
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white/10 focus:ring-[#f6339a] focus:border-transparent"
                  }`}
                />
              </div>
              {errors.age && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.age.message}
                </p>
              )}
            </div>

            {/* 전화번호 */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm text-white/80">
                전화번호
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f6339a]" />
                <input
                  id="phone"
                  type="tel"
                  placeholder="전화번호를 입력하세요"
                  {...register("phone")}
                  className={`w-full pl-12 pr-4 py-3 bg-white/5 border text-white placeholder:text-white/40 h-12 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white/10 focus:ring-[#f6339a] focus:border-transparent"
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* 이메일 */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-white/80">
                이메일
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f6339a]" />
                <input
                  id="email"
                  type="email"
                  placeholder="이메일을 입력하세요"
                  {...register("email")}
                  className={`w-full pl-12 pr-4 py-3 bg-white/5 border text-white placeholder:text-white/40 h-12 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white/10 focus:ring-[#f6339a] focus:border-transparent"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* 닉네임 */}
            <div className="space-y-2">
              <label htmlFor="nickname" className="text-sm text-white/80">
                닉네임
              </label>
              <div className="relative">
                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f6339a]" />
                <input
                  id="nickname"
                  type="text"
                  placeholder="닉네임을 입력하세요"
                  {...register("nickname")}
                  className={`w-full pl-12 pr-4 py-3 bg-white/5 border text-white placeholder:text-white/40 h-12 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                    errors.nickname
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white/10 focus:ring-[#f6339a] focus:border-transparent"
                  }`}
                />
              </div>
              {errors.nickname && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.nickname.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-linear-to-r from-[#f6339a] via-[#ad46ff] to-[#9810fa] hover:opacity-90 text-white font-medium rounded-xl shadow-lg shadow-[#f6339a]/25 transition-all focus:outline-none focus:ring-2 focus:ring-[#ad46ff] focus:ring-offset-2 focus:ring-offset-[#3d3d5c]"
            >
              회원가입
            </button>
          </form>

          <div className="text-center mt-6">
            <span className="text-sm text-white/60">
              이미 계정이 있으신가요?{" "}
            </span>
            <Link
              to="/auth-page"
              className="text-sm text-[#f6339a] hover:text-[#fb64b6] transition-colors font-medium"
            >
              로그인
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupPage;
