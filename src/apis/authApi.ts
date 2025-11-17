import axios from "axios";

import type { AuthResponse, SigninRequest, SignupRequest } from "../types/auth";

// 1. API_BASE_URL 변경
export const API_BASE_URL = "http://localhost:8080";

export const Api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// 1. 로그인 함수(signin) 엔드포인트 변경
export const signin = async (
  signinData: SigninRequest
): Promise<AuthResponse> => {
  const response = await Api.post("/api/auth/login", signinData);
  return response.data;
};

//2. 회원가입 함수
export const signup = async (signupData: SignupRequest): Promise<void> => {
  await Api.post("/api/auth/signup", signupData);
};
