import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  role: null,
  isAuthenticated: false,

  login: (userData, role) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("role", role);

    set({
      user: userData,
      role: role,
      isAuthenticated: true,
    });
  },

  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("role");

    set({
      user: null,
      role: null,
      isAuthenticated: false,
    });
  },

  loadUser: () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const role = localStorage.getItem("role");

    if (user && role) {
      set({
        user,
        role,
        isAuthenticated: true,
      });
    }
  },
}));