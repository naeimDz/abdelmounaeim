// hooks/useNavigation.tsx
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useError } from "../context/ErrorContext";

export const useNavigation = () => {
  const router = useRouter();
  const { setError } = useError();

  const navigateTo = useCallback(
    async (pathname: string, options = {}) => {
      if (typeof pathname !== "string") {
        setError("Pathname must be a string");
        return;
      }

      try {
        await router.push({ pathname, ...options });
      } catch (error) {
        console.error("Navigation error:", error);
        setError("Failed to navigate to the specified route");
      }
    },
    [router, setError]
  );

  return { navigateTo };
};
