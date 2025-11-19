import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import character1 from "../assets/logo/profileChracter1.png";
import { GoogleIcon } from "../assets/icons/GoogleIcon";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useAuthStore } from "../hooks/useAuthStore";
import type { AuthResponse } from "../types/auth";
import { signin } from "../apis/authApi";

const LoginSchema = z.object({
  id: z.string().min(1, { message: "아이디를 입력하세요." }),
  password: z
    .string()
    .min(6, { message: "비밀번호는 최소 6자 이상이어야 합니다." }),
});

type LoginFormValues = z.infer<typeof LoginSchema>;

export const AuthPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { id: "", password: "" },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      const response: AuthResponse = await signin({
        username: data.id,
        password: data.password,
      });
      setAuth(response); // 토큰 + 유저 정보 전체 저장
      alert("로그인 성공!");
      navigate("/");
    } catch (error) {
      alert(
        "로그인 실패: " +
          (error instanceof Error ? error.message : "알 수 없는 오류")
      );
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-linear-to-br from-[#2A2535] via-[#2E2B5B] to-[#3D2B5E] flex items-center justify-center p-4">
      {/* 기존 UI 그대로 유지 */}

      <div className="w-full max-w-md relative z-10">
        <div className="flex flex-col items-center mb-8">
          <img
            src={character1}
            alt="profile character"
            className="h-30 w-30 rounded-full"
          />
          <h1 className="text-2xl font-semibold text-white mb-2">
            어서오세요 환영합니다
          </h1>
          <p className="text-sm text-white/60">계정에 로그인하여 계속하세요</p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <h2 className="text-lg font-medium text-white mb-1">로그인</h2>
              <p className="text-sm text-white/60">
                아이디와 비밀번호를 입력하여 계정에 접근하세요
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="id" className="text-sm text-white/80">
                아이디
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f6339a]" />
                <input
                  id="id"
                  type="text"
                  placeholder="아이디를 입력하세요"
                  {...register("id")}
                  className={`w-full pl-12 pr-4 py-3 bg-white/5 border text-white placeholder:text-white/40 h-12 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                    errors.id
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white/10 focus:ring-[#f6339a] focus:border-transparent"
                  }`}
                />
              </div>
              {errors.id && (
                <p className="text-xs text-red-500 mt-1">{errors.id.message}</p>
              )}
            </div>

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

            <div className="flex items-center justify-end">
              <button
                type="button"
                className="text-sm text-[#f6339a] hover:text-[#fb64b6] transition-colors focus:outline-none"
              >
                비밀번호를 잊으셨나요?
              </button>
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-linear-to-r from-[#f6339a] via-[#ad46ff] to-[#9810fa] hover:opacity-90 text-white font-medium rounded-xl shadow-lg shadow-[#f6339a]/25 transition-all focus:outline-none focus:ring-2 focus:ring-[#ad46ff] focus:ring-offset-2 focus:ring-offset-[#3d3d5c]"
            >
              로그인
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-transparent text-white/60">또는</span>
            </div>
          </div>

          <button
            type="button"
            className="w-full h-12 flex items-center justify-center bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#3d3d5c]"
          >
            <GoogleIcon />
            구글로 로그인
          </button>

          <div className="text-center mt-6">
            <span className="text-sm text-white/60">계정이 없으신가요? </span>
            <Link
              to="/signup-page"
              className="text-sm text-[#f6339a] hover:text-[#fb64b6] transition-colors font-medium"
            >
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
