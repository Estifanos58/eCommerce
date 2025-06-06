import { create } from 'zustand';
import { CartItem, Product, StoreType } from '../utils/types';

const useStore = create<StoreType>((set, get) => ({
  // Products
  products: [],
  setProducts: (data) => set({ products: data }),

  // Selected Product
  selectedProduct: {} as Product,
  setSelectedProduct: (data) => set({ selectedProduct: data }),
  // Filtered Products
  filteredProducts: [],

  // Cart
  cart: [],
  isCartOpen: false,
  setIsCartOpen: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
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
    cart: state.cart.filter((item) => item.id !== productId),
  })),
  emptyCart: () => set({ cart: [] }),
  updateQuantity: (productId, newQuantity) => set((state) => {
    if (newQuantity < 1) return state;
    return {
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      ),
    };
  }),

  increamentQuantity: (productId) => set((state) => {
    const item = state.cart.find((cartItem) => cartItem.id === productId);
    if (!item) {
      // If item does not exist, add it to cart with quantity 1
      return { cart: [...state.cart, { ...state.selectedProduct, id: productId, quantity: 1 }] };
    }
    // If item exists, increment its quantity
    return {
      cart: state.cart.map((cartItem) =>
        cartItem.id === productId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ),
    };
  }),

  quantity: (productId) => get().cart.find((item) => item.id === productId)?.quantity || 0,

  decrementQuantity: (productId) => set((state) => {
    const item = state.cart.find((item) => item.id === productId);
    if (!item || item.quantity <= 1) return state;
    return {
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ),
    }
  }),
  // Sorting and Filtering
  sortOption: "",
  selectedCategory: "",
  searchQuery: "",

  setSortOption: (option) => set({ sortOption: option }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),

  getTotalItems: () =>
    get().cart.reduce((total, item) => total + item.quantity, 0),

  getTotalPrice: () =>
    get().cart.reduce((total, item) => total + item.price * item.quantity, 0),

 sortProductsAndUpdate: () => {
  const { products, selectedCategory, searchQuery, sortOption } = get();

  // console.log("Selected Catagory", selectedCategory.toLocaleLowerCase())
  // console.log("Sort order", sortOption)

  const filteredAndSorted = [...products]
    .filter(
      (product) =>
        (selectedCategory ? product.category === selectedCategory.toLocaleLowerCase() : true) &&
        (searchQuery
          ? product.title.toLowerCase().includes(searchQuery.toLowerCase())
          : true)
    )
    .sort((a, b) => {
      if (sortOption === 'price-low-high') return a.price - b.price;
      if (sortOption === 'price-high-low') return b.price - a.price;
      if (sortOption === 'rating') return b.rating.rate - a.rating.rate;
      return 0;
    });

  set({ filteredProducts: filteredAndSorted });
  },

  // User Data
  userData: {} as any, 
  setUserData: (data: any) => set({ userData: data }), 
}));

export default useStore;
