// hooks/useRouteParams.tsx
import { useRouter } from "next/router";
import { useMemo } from "react";

export const useRouteParams = () => {
  const { query } = useRouter();

  return useMemo(() => query, [query]);
};
