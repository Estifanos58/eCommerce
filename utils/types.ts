export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartItem extends Product {
  quantity: number;
}


export interface StoreType {
  // Products
  products: Product[];
  setProducts: (data: Product[]) => void;
  
  // Cart
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  
  // Computed values (these should probably be getters rather than setters)
  getTotalItems: () => number;
  getTotalPrice: () => number;
}