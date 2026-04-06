import { create } from "zustand";

type User = {
  name: string;
};

type AuthState = {
  user: User | null;
  role: string | null;
  isAuthenticated: boolean;
  login: (user: User, role: string) => void;
  logout: () => void;
  loadUser: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  role: null,
  isAuthenticated: false,

  login: (user, role) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("role", role);

    set({ user, role, isAuthenticated: true });
  },

  logout: () => {
    localStorage.clear();
    set({ user: null, role: null, isAuthenticated: false });
  },

  loadUser: () => {
    const user = localStorage.getItem("user");
    const role = localStorage.getItem("role");

    if (user && role) {
      set({
        user: JSON.parse(user),
        role,
        isAuthenticated: true,
      });
    }
  },
}));