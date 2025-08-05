declare module 'menu/MenuList' {
  import * as React from 'react'
  const Component: React.ComponentType
  export default Component
}

declare module 'cart/CartDrawer' {
  import * as React from 'react'
  const Component: React.ComponentType
  export default Component
}

declare module 'cart/cartStore' {
  import { StateCreator } from 'zustand'
  type CartItem = { id: string, name: string, quantity: number }

  type CartStore = {
    items: CartItem[];
    add: (item: CartItem) => void;
    clear: () => void;
  };

  export const useCartStore: import('zustand').UseBoundStore<
    import('zustand').StoreApi<CartStore>
  >;
}
