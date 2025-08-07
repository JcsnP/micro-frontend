import { createRoute } from "@tanstack/react-router";
import { RootRoute } from "./root";
import React from "react";

export const MenuDetailRoute = createRoute({
  path: '/menu',
  getParentRoute: () => RootRoute,
  component: () => {
    <React.Suspense fallback={<p>Loading...</p>}>

    </React.Suspense>
  },
  staticData: {
    title: 'Menu Detail',
  }
})