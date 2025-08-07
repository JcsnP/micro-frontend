import { Layout } from "@/components/Layout"
import { createRootRoute } from "@tanstack/react-router"

export const RootRoute = createRootRoute({
  component: Layout,
})