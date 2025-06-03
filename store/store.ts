import { create } from 'zustand'
import { CartItem, Product, StoreType} from '../utils/types'


const useStore = create<StoreType>((set, get) => ({
    // Poducts
  products: [],
  
  setProducts: (data) => set({ products: data }),


//   Cart
  cart: [],

  addToCart: (product) => set((state) => {
    const existingItem = state.cart.find((item) => item.id === product.id);
    if (existingItem) {
      return {
        cart: state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }
    return { cart: [...state.cart, { ...product, quantity: 1 }] };
  }),
  
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== productId)
  })),
  
  updateQuantity: (productId, newQuantity) => set((state) => {
    if (newQuantity < 1) return state;
    return {
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    };
  }),
  
  getTotalItems: () => get().cart.reduce((total, item) => total + item.quantity, 0),
  
  getTotalPrice: () => get().cart.reduce((total, item) => total + item.price * item.quantity, 0),
}));

export default useStore;