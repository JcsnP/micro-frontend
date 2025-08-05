import React, { Suspense } from "react"

const MenuList = React.lazy(() => import("menu/MenuList"))
const CartDrawer = React.lazy(() => import("cart/CartDrawer"))

const App = () => {
  return (
    <div className="w-[690px] m-auto">
      <nav className="h-[60px] flex justify-between items-center">
        <h1>🌍 Host App</h1>
        <CartDrawer />
      </nav>
      <Suspense fallback={<div>Loading remote...</div>}>
        <MenuList />
      </Suspense>
    </div>
  )
}

export default App;
