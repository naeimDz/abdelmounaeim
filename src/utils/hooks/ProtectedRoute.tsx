// components/ProtectedRoute.tsx
// hooks/useProtectedRoute.tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const useProtectedRoute = (allowedRoles: string[] = []) => {
  const { user, role, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user || (allowedRoles.length > 0 && !allowedRoles.includes(role || ''))) {
        router.push('/login');
      }
    }
  }, [user, role, loading, router]);

  return { user, role, loading };
};

export default useProtectedRoute;

