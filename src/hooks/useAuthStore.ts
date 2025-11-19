import { create } from "zustand";
import type { AuthState } from "../types/auth";

const initialToken = localStorage.getItem("authToken");
const initialUsername = localStorage.getItem("username");
const initialName = localStorage.getItem("name");
const initialNickname = localStorage.getItem("nickname");

export const useAuthStore = create<AuthState>((set) => ({
  token: initialToken,
  username: initialUsername,
  name: initialName,
  nickname: initialNickname,
  isAuthenticated: !!initialToken,

  setAuth: (auth) => {
    if (auth && auth.token) {
      localStorage.setItem("authToken", auth.token);
      localStorage.setItem("username", auth.username);
      localStorage.setItem("name", auth.name);
      localStorage.setItem("nickname", auth.nickname);
      set({
        token: auth.token,
        username: auth.username,
        name: auth.name,
        nickname: auth.nickname,
        isAuthenticated: true,
      });
    } else {
      localStorage.removeItem("authToken");
      localStorage.removeItem("username");
      localStorage.removeItem("name");
      localStorage.removeItem("nickname");
      set({
        token: null,
        username: null,
        name: null,
        nickname: null,
        isAuthenticated: false,
      });
    }
  },

  logout: () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    localStorage.removeItem("name");
    localStorage.removeItem("nickname");
    set({
      token: null,
      username: null,
      name: null,
      nickname: null,
      isAuthenticated: false,
    });
  },
}));
