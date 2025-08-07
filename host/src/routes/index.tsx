import { Router } from "@tanstack/react-router";
import { RootRoute } from "./root";
import { HomeRoute } from "./home";
import { MenuDetailRoute } from "./menuDetail";

const routeTree = RootRoute.addChildren([HomeRoute, MenuDetailRoute])

export const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}