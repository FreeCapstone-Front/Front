import { create } from "zustand";

// 1. 스토어 상태 타입 정의
interface AuthState {
  token: string | null;
  isAuthenticated: boolean; // 로그인 여부
  setToken: (token: string | null) => void;
  logout: () => void;
}

// 2. 초기 상태 결정 (로컬 스토리지에서 토큰을 읽어 초기화)
const initialToken = localStorage.getItem("authToken");

export const useAuthStore = create<AuthState>((set) => ({
  // 초기 상태
  token: initialToken,
  isAuthenticated: !!initialToken, // 토큰이 있으면 true

  // 3. 토큰 설정 액션
  setToken: (token) => {
    if (token) {
      localStorage.setItem("authToken", token);
      set({ token, isAuthenticated: true });
    } else {
      // 토큰을 null로 설정 시 로그아웃 처리
      set({ token: null, isAuthenticated: false });
      localStorage.removeItem("authToken");
    }
  },

  // 4. 로그아웃 액션
  logout: () => {
    // setToken(null) 호출과 동일한 효과
    set({ token: null, isAuthenticated: false });
    localStorage.removeItem("authToken");
  },
}));
