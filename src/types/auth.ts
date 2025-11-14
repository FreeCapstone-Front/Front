// 로그인 요청 본문 타입
export interface SigninRequest {
  username: string;
  password: string;
}

// 서버 응답 타입 (서버가 토큰 등을 반환하는 경우)
export interface AuthResponse {
  token: string;
}
// 회원가입 리퀘스트 바디
export interface SignupRequest {
  username: string;
  password: string;
  name: string;
  age: number;
  phone: string;
  email: string;
  nickname: string;
}
