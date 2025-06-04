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

  // Selected Product
  selectedProduct: Product,
  setSelectedProduct: (data: Product) => void

  // Cart
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  increamentQuantity: (productId: number) =>  void;
  decrementQuantity: (productId: number) => void;
  quantity: (productId: number) => number;

  // Computed values
  getTotalItems: () => number;
  getTotalPrice: () => number;

  // Sorting and Filtering
  sortOption: string;
  setSortOption: (option: string) => void;

  selectedCategory: string;
  setSelectedCategory: (category: string) => void;

  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // getFilteredProducts: () => Product[];
  sortProductsAndUpdate: () => void;
  filteredProducts: Product[];

  userData: any;
  setUserData: (data: any) => void;
}


export interface UserType {
    username: string;
    email: string;
    password: string;
    createdAt: Date;
}