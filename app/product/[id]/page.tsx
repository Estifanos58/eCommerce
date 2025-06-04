import Nav from '@/components/Nav';
import useStore from '@/store/store'
import React from 'react'

function page() {
    const {selectedProduct, updateQuantity, cart} = useStore();

      const incrementQuantity = () => {
    if (quantity < product.stock) {
      updateQuantity(selectedProduct.id,  + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      updateQuantity(selectedProduct.id, quantity -1)
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= product.stock) {
      setQuantity(value);
    }
  };
  return (
    <div>
        {/* Nav */}
        <div>
            <Nav/>
        </div>
        {/* Product Details */}

    </div>
  )
}

export default page