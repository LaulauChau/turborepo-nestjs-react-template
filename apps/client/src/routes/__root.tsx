import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Suspense, lazy } from "react";

import { ThemeProvider } from "~/components/theme-provider";
import { Toaster } from "~/components/ui/sonner";

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

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Outlet />
      <Toaster richColors />
      <Suspense>
        <ReactQueryDevtools />
      </Suspense>
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </ThemeProvider>
  ),
});
