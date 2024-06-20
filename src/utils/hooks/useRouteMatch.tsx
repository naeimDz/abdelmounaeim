// hooks/useRouteMatch.tsx
import { useRouter } from "next/router";
import { useMemo } from "react";

export const useRouteMatch = (pattern: string) => {
  const { pathname } = useRouter();

  return useMemo(() => {
    if (typeof pattern !== "string") {
      console.error("Pattern must be a string");
      return false;
    }
    return pathname === pattern || pathname.startsWith(`${pattern}/`);
  }, [pathname, pattern]);
};
