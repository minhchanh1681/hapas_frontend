import React, {useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";
import { formatVietnamDong } from "@/utils/currencyFormat";


export const FeaturedProducts = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const { current: container } = containerRef;
      const scrollAmount =
        direction === "left"
          ? -container.offsetWidth / 2
          : container.offsetWidth / 2;
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Sản Phẩm Nổi Bật</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[280px] snap-start">
              <ProductCard
                id={product.id}
                image={product.image}
                name={product.name}
                price={formatVietnamDong(Number(product.price))}
                isNew={product.id % 3 === 0}
                isSale={product.id % 4 === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
