import { toast } from "sonner"
import { Button } from "./ui/button"
import { useCartStore } from "cart/cartStore"
import { LucideCheck } from "lucide-react"

const menus = [
  {
    id: 1,
    name: "Pizza",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Lj3_8eh0xYQLDhyh1pYwOF6l00mL7hIfww&s",
    price: 50,
    quantity: 100,
  },
  {
    id: 2,
    name: "Pizza",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Lj3_8eh0xYQLDhyh1pYwOF6l00mL7hIfww&s",
    price: 50,
    quantity: 100,
  },
  {
    id: 3,
    name: "Pizza",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Lj3_8eh0xYQLDhyh1pYwOF6l00mL7hIfww&s",
    price: 50,
    quantity: 100,
  },
  {
    id: 4,
    name: "Pizza",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Lj3_8eh0xYQLDhyh1pYwOF6l00mL7hIfww&s",
    price: 50,
    quantity: 100,
  },
]

const MenuList = () => {
  const add = useCartStore((state) => state.add)

  const handleClick = (menu: any) => {
    add(menu);

    toast("Add to cart success", {
      icon: <LucideCheck />,
    })   
  }
  
  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      {menus.map((menu) => {
        return (
          <div className="flex flex-col gap-2 border rounded-lg shadow-xs">
            <img 
                src={menu.image}
                className="rounded-t-lg w-full"
              />
            <div className="flex flex-col gap-2 justify-between p-2">
              <p className="text-2xl font-bold flex justify-between">
                <span>{menu.name}</span>
                <span>$ {menu.price}</span>
              </p>
              <p>{menu.description}</p>
              <Button variant="outline" onClick={() => handleClick(menu)} className="cursor-pointer">Add to cart</Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MenuList
