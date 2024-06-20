// hooks/usePreviousRoute.tsx
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export const usePreviousRoute = () => {
  const router = useRouter();
  const previousPathname = useRef<string | null>(null);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      previousPathname.current = url;
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return previousPathname.current;
};
