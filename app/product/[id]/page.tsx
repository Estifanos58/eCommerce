"use client";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ProductCard from "@/components/ProductCard";
import useStore from "@/store/store";
import heart from "@/public/heart.png";
import share from "@/public/share.png";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import CartDetail from "@/components/CartDetail";
import truck from "@/public/truck.png";
import reload from "@/public/reload.png";
import LoadingProductDetail from "@/components/LoadingProductDetail";
import { Product } from "@/utils/types";
import ProductGridSkeleton from "@/components/OtherLoading";

function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const {
    selectedProduct,
    setProducts,
    increamentQuantity,
    decrementQuantity,
    quantity,
    products,
    addToCart,
  } = useStore();

  const [isLoading, setLoading] = useState(true);
  const [isOtherProductLoading, setOtherProductLoading] = useState(true);
  const [fetchedProduct, setFetchedPoduct] = useState<Product>({} as Product);
  const [fetchedOtherProducts, setFetchedOtherProducts] = useState<Product[]>(
    []
  );
  const [otherProducts, setOtherProducts] = useState<Product[]>([]);
  const [displayedProduct, setDisplayedProduct] = useState(
    selectedProduct || fetchedProduct
  );
  const otherProductsfromStore = products
    .filter((product) => product.id !== selectedProduct.id)
    .slice(0, 4);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await fetch(
          `https://fakestoreapi.com/products/${id}`
        ).then((res) => res.json());
        setFetchedPoduct(product);
        setDisplayedProduct(product);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      } finally {
        setLoading(false);
      }
    };

    if (selectedProduct?.id?.toString() === id.toString()) {
      setDisplayedProduct(selectedProduct);
      setLoading(false);
    } else {
      fetchProduct();
    }
  }, [id, selectedProduct]);

  useEffect(() => {
    if (otherProductsfromStore && otherProductsfromStore.length > 0) {
      setOtherProductLoading(false);
      setOtherProducts(otherProductsfromStore);
      return;
    }
    const fetchAllProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const allProducts = await response.json();
        setFetchedOtherProducts(allProducts);
        setProducts(allProducts);
        setOtherProductLoading(false);
        setOtherProducts(
          allProducts
            .filter((product: Product) => product.id !== Number(id))
            .slice(0, 4)
        );
      } catch (err) {
        console.error("Failed to fetch all products:", err);
      }
    };

    if (!products || products.length === 0) {
      fetchAllProducts();
    }
  }, [products]);

  let productQuantity = quantity(displayedProduct.id);

  console.log("Selected Product: ", displayedProduct);
  console.log("id", id);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <Nav />
      {/* <Navbar /> */}

      {isLoading ? (
        <LoadingProductDetail />
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={displayedProduct?.image} // Replace with actual image path
              alt="Ergonomic Office Chair"
              className="w-full max-w-md object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">{displayedProduct?.title}</h2>
            <p className="text-sm text-gray-600">
              {displayedProduct?.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="text-yellow-500">★★★★★</div>
              <span className="text-sm text-gray-600">
                {displayedProduct?.rating?.count} reviews
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-2xl font-semibold text-black">
                ${(displayedProduct?.price * 1.2).toFixed(2)}
              </span>
              <span className="text-gray-500 line-through">
                ${displayedProduct?.price}
              </span>
              <span className="text-sm bg-red-500 text-white px-2 py-1 rounded">
                25% OFF
              </span>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block mb-1 font-medium">Color</label>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded border-2 border-black bg-black" />
                <button className="w-8 h-8 rounded bg-gray-300" />
                <button className="w-8 h-8 rounded bg-blue-500" />
              </div>
              <p className="text-sm mt-1 text-gray-500">Selected: Black</p>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block mb-1 font-medium">Size</label>
              <div className="flex gap-2">
                {["S", "M", "L", "XL"].map((size, i) => (
                  <button
                    key={i}
                    className={`px-4 py-1 rounded border ${
                      size === "M"
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block mb-1 font-medium">Quantity</label>
              <div className="flex items-center gap-2">
                <button
                  className="w-8 h-8 rounded border"
                  onClick={() => decrementQuantity(displayedProduct?.id)}
                >
                  -
                </button>
                <span>{productQuantity}</span>
                <button
                  className="w-8 h-8 rounded border"
                  onClick={() => increamentQuantity(displayedProduct?.id)}
                >
                  +
                </button>
                <span className="text-sm text-gray-500">
                  15 items available
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                className="bg-indigo-600 text-white px-6 py-2 rounded"
                onClick={() => addToCart(displayedProduct)}
              >
                Add to Cart
              </button>
              <button className="bg-black text-white px-6 py-2 rounded">
                Buy Now
              </button>
            </div>

            {/* Links */}
            <div className="flex gap-4 text-sm text-indigo-600 underline">
              <button className="flex items-center gap-2">
                <Image src={heart} alt="" className="w-4 h-4" />
                <p className="text-gray-400 font-bold">Add to Wishlist</p>
              </button>
              <button className="flex items-center gap-2">
                <Image src={share} alt="" className="w-4 h-4" />
                <p className="text-gray-400 font-bold ">Share</p>
              </button>
            </div>

            {/* Delivery Info */}
            <div className="text-sm text-gray-600 space-y-1">
              <div className="flex items-center gap-2">
                <Image src={truck} alt="" className="w-6 h-6" />
                <div className="flex flex-col">
                  <h3 className="font-bold text-gray-700">Free Delivery</h3>
                  <p>Enter your postal code for delivery availability</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image src={reload} alt="" className="w-6 h-6" />
                <div className="flex flex-col">
                  <h3 className="font-bold text-gray-700">Return Policy</h3>
                  <p>Free 30-day returns. See details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other Products */}

      <h2 className="text-2xl font-bold text-center my-10">
        You May Also Like
      </h2>
      {isOtherProductLoading ? (
        <ProductGridSkeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {otherProducts &&
            otherProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}

      {/* Footer */}
      <Footer />
      {/* <Footer /> */}

      <CartDetail />
    </div>
  );
}

export default page;
