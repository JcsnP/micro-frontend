import { Outlet, useMatches } from "@tanstack/react-router"
import Navbar from "./Navbar"
import React from "react"
import { Toaster } from "./ui/sonner"

export const Layout = () => {
  return (
    <div className="flex-1 overflow-hidden w-[690px] m-auto">
      <React.Suspense fallback={<p>Loading...</p>}>
        <Navbar />
      </React.Suspense>
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
      <Toaster />
    </div>
  )
}