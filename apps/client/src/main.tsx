import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

import "~/assets/css/globals.css";
import { ThemeProvider } from "~/components/theme-provider";
import { Toaster } from "~/components/ui/sonner";
import { routeTree } from "~/routeTree.gen";

const queryClient = new QueryClient();
const router = createRouter({
  context: { queryClient },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  routeTree,
});

const ReactQueryDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : lazy(() =>
        import("@tanstack/react-query-devtools").then((res) => ({
          default: res.ReactQueryDevtools,
        })),
      );
const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      );

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root");

if (rootElement && !rootElement.innerHTML) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
          <Toaster richColors />
        </ThemeProvider>
        <Suspense>
          <ReactQueryDevtools />
        </Suspense>
        <Suspense>
          <TanStackRouterDevtools />
        </Suspense>
      </QueryClientProvider>
    </StrictMode>,
  );
}
