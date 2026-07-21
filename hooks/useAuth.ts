import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/store/authStore';

export function useAuth() {
  const { user, isAuthenticated } = useAuthStore();
  return { user, isAuthenticated };
}

export function useProtectedRoute() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    } else {
      setIsLoading(false);
    }
  }, [isAuthenticated, router]);

  return { isLoading };
}

export function useAdminRoute() {
  const router = useRouter();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user || (user.role !== 'admin' && user.role !== 'moderator')) {
      router.push('/');
    } else {
      setIsLoading(false);
    }
  }, [user, router]);

  return { isLoading };
}
