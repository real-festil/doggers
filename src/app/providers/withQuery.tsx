import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient();

const withQuery = (component: () => React.ReactNode) => () =>
  <QueryClientProvider client={queryClient}>{component()}</QueryClientProvider>;

export default withQuery;
