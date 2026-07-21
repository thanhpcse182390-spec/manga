import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin' | 'moderator';
  avatar?: string;
}

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    // Mock login
    if (email && password) {
      set({
        user: {
          id: '1',
          name: 'Test User',
          email,
          role: 'user',
        },
        isAuthenticated: true,
      });
    }
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
  register: async (name: string, email: string, password: string) => {
    // Mock register
    if (name && email && password) {
      set({
        user: {
          id: '1',
          name,
          email,
          role: 'user',
        },
        isAuthenticated: true,
      });
    }
  },
}));
