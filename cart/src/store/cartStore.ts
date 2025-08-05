import { create } from "zustand"

export type CartItem = { 
  id: number,
  name: string,
  description: string,
  image: string,
  quantity: number
  price: number
}

type CartStore = {
  items: CartItem[]
  add: (item: CartItem) => void
  clear: () => void
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  add: (item) => set((state) => ({ items: [...state.items, item ]})),
  clear: () => set({ items: [] })
}))
