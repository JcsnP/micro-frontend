import { createRoute } from "@tanstack/react-router";
import { RootRoute } from "./root";
import HomePage from "@/pages/HomePage";

export const HomeRoute = createRoute({
  path: '/',
  getParentRoute: () => RootRoute,
  component: HomePage,
})