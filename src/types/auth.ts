// 로그인 요청 본문 타입
export interface SigninRequest {
  username: string;
  password: string;
}

// 서버 응답 타입 (서버가 토큰 등을 반환하는 경우)
export interface AuthResponse {
  token: string;
  username: string;
  name: string;
  nickname: string;
}

// 1. 상태 타입 확장
export interface AuthState {
  token: string | null;
  username: string | null;
  name: string | null;
  nickname: string | null;
  isAuthenticated: boolean;
  setAuth: (auth: AuthResponse | null) => void; // 전체 정보 저장
  logout: () => void;
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
