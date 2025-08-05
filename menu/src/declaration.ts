declare module 'cart/cartStore' {
  import { StateCreator } from 'zustand'
  type CartItem = { 
    id: number,
    name: string,
    description: string,
    image: string,
    quantity: number
    price: number
  }

  type CartStore = {
    items: CartItem[];
    add: (item: CartItem) => void;
    clear: () => void;
  };

  export const useCartStore: import('zustand').UseBoundStore<
    import('zustand').StoreApi<CartStore>
  >;
}
