import React from "react"

const MenuList = React.lazy(() => import('menu/MenuList'))

const HomePage = () => {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <MenuList />
    </React.Suspense>
  )
}

export default HomePage