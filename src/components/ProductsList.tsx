"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://monitor-backend-rust.vercel.app/api/products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        <h1 className="mx-2 text-sm sm:text-base font-medium">
          Hard to choose right products for your pets?
        </h1>
        <div className="flex justify-between mx-2">
          <h2 className="text-xl sm:text-2xl font-bold text-[#002A48] mb-6">
            Our Products
          </h2>
          <button className="hidden sm:flex border border-[#0A3052] text-sm text-[#0A3052] h-10 px-4 sm:px-8 gap-2 rounded-full items-center hover:bg-[#0A3052] hover:text-white transition">
            View more
            <svg
              className="w-4 h-4 border-[#0A3052]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
