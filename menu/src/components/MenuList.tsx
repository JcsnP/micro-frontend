import { Button } from "./ui/button"

const menus = [
  {
    name: "Pizza",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Lj3_8eh0xYQLDhyh1pYwOF6l00mL7hIfww&s",
    price: "50",
  },
  {
    name: "Pizza",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Lj3_8eh0xYQLDhyh1pYwOF6l00mL7hIfww&s",
    price: "50",
  },
  {
    name: "Pizza",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Lj3_8eh0xYQLDhyh1pYwOF6l00mL7hIfww&s",
    price: "50",
  },
  {
    name: "Pizza",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Lj3_8eh0xYQLDhyh1pYwOF6l00mL7hIfww&s",
    price: "50",
  },
]

const MenuList = () => {
  return (
    <div className="grid grid-cols-4 gap-2 w-full">
      {menus.map((menu) => {
        return (
          <div className="flex flex-col gap-2 border rounded-lg shadow-xs">
            <img 
                src={menu.image}
                className="rounded-tl-lg rounded-bl-lg w-full"
              />
            <div className="flex flex-col justify-between p-2">
              <p className="font-bold text-2xl font-bold flex justify-between">
                <span>{menu.name}</span>
                <span>$ {menu.price}</span>
              </p>
              <p>{menu.description}</p>
              <Button variant="outline">Add to cart</Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MenuList
