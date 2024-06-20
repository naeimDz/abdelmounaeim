// hooks/useQueryParams.tsx
import { useRouter } from "next/router";
import { useMemo } from "react";

export const useQueryParams = () => {
  const { query } = useRouter();

  return useMemo(() => {
    const params = new URLSearchParams(query as any);
    return Object.fromEntries(params.entries());
  }, [query]);
};
