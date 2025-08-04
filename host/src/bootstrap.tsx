import React from "react"
import { Suspense } from "react"
import { createRoot } from "react-dom/client"

const HelloApp = React.lazy(() => import("remote/Hello"))
const HiApp = React.lazy(() => import("remote/Hi"))

const App = () => {
  return (
    <div>
      <h1>Host APP</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <HelloApp />
        <HiApp />
      </Suspense>
    </div>
  )
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)