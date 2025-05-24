"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
      gcTime: 10 * 60 * 1000,
    },
  },
});

export const ReactQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => <QueryClientProvider client={client}>{children}</QueryClientProvider>;
