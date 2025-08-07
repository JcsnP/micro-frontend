import React from "react"

const CartDrawer = React.lazy(() => import('cart/CartDrawer'))

const Navbar = () => {
  return (
    <nav className="h-[60px] flex justify-between items-center">
      <h1>Host App</h1>
      <CartDrawer />
    </nav>
  )
} 

export default Navbar