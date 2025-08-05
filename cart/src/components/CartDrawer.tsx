import { useCartStore } from "@/store/cartStore"
import { Button } from "./ui/button"
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { ShoppingCart } from "lucide-react"

const CartDrawer = () => {
  const items = useCartStore((state) => state.items)
  const clear = useCartStore((state) => state.clear)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <ShoppingCart /> 
          {items.length}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-3xl">Cart</SheetTitle>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          {items.map((menu) => {
            return (
              <div className="flex flex-row gap-2 rounded bordered p-2" key={menu.id}>
                <img src={menu.image} className="w-32 h-32" />
                <h2 className="text-3xl text-md font-bold">{menu.name}</h2>
              </div>
            )
          })}
        </div>
        <SheetFooter>
          <Button type="submit" variant="destructive" onClick={clear}>Clear</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default CartDrawer
