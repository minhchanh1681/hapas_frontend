import React from "react";
import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";
import { formatVietnamDong } from "@/utils/currencyFormat";

export const PopularProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-2">
          TÚI XÁCH PHỔ BIẾN
        </h2>
        <p className="text-gray-500 text-center mb-10">
          Các mẫu túi xách bán chạy nhất của chúng tôi
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              id={product.id.toString()}
              key={product.id}
              image={product.image}
              name={product.name}
              price={formatVietnamDong(Number(product.price))}
              originalPrice={formatVietnamDong(Number(product.originalPrice))}
              isNew={product?.isNew}
              isSale={product?.isSale}
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors">
            XEM TẤT CẢ
          </button>
        </div>
      </div>
    </section>
  );
};
