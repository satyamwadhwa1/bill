import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 20, // data considered stale after 20 secs
      cacheTime: 1000 * 60 * 10, // data will be in cache for 10 minutes
      // but usage of cache will depend on stale time
    },
  },
});
