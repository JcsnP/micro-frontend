import React, { Suspense } from "react"

const RemoteHello = React.lazy(() => import("remote/Hello"))

const App = () => {
  return (
    <div>
      <h1>🌍 Host App</h1>
      <Suspense fallback={<div>Loading remote...</div>}>
        <RemoteHello />
      </Suspense>
    </div>
  )
}

export default App;