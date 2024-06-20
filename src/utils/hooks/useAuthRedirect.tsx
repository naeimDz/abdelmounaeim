// hooks/useAuthRedirect.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";

export const useAuthRedirect = (isAuthenticated: boolean, redirectTo = "/login") => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(redirectTo);
    }
  }, [isAuthenticated, router, redirectTo]);
};
