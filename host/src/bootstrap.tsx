import { createRoot } from "react-dom/client"
import App from "./App"

import './styles/globals.css'
import 'cart/globals.css'
import React from "react"
import { RouterProvider } from "@tanstack/react-router"
import { router } from "./routes"

const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
