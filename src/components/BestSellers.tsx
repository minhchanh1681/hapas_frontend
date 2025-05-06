import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { useRouter } from "next/navigation";
import { formatVietnamDong } from "@/utils/currencyFormat";
const categories = [
  {
    id: 1,
    name: "TÚI XÁCH",
  },
  {
    id: 2,
    name: "VÍ",
  },
  {
    id: 3,
    name: "PHỤ KIỆN",
  },
];
const products = [
  {
    id: 1,
    category: 1,
    name: "TXT Quai Liền HEPI Sz 19 - Jean",
    price: "983.000",
    image: "detail/d1.jpeg",
  },
  {
    id: 2,
    category: 1,
    name: "TXT Bán Nguyệt Dreamy Sz 25 - Jean",
    price: "983.000",
    image: "detail/d2.jpeg",
  },
  {
    id: 3,
    category: 1,
    name: "TXT Hobo Bán Chảo Cuộn Sz 24 - Jean",
    price: "983.000",
    image: "detail/d3.jpeg",
  },
  {
    id: 4,
    category: 1,
    name: "V-Day Chain Flanco Sz 11 - Jean",
    price: "453.000",
    image: "detail/d4.jpeg",
  },
  {
    id: 5,
    category: 2,
    name: "Ví Dáng Dài Classic Sz 10 - Black",
    price: "383.000",
    image: "detail/d5.jpeg",
  },
  {
    id: 6,
    category: 2,
    name: "Ví Đứng Mini Sz 8 - Cream",
    price: "253.000",
    image: "detail/d6.jpeg",
  },
  {
    id: 7,
    category: 3,
    name: "Dây Đeo Túi Chain Link - Silver",
    price: "183.000",
    image: "detail/d7.jpeg",
  },
  {
    id: 8,
    category: 3,
    name: "Charm Túi JB Logo - Gold",
    price: "153.000",
    image: "detail/d8.jpeg",
  },
];
export const BestSellers = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const filteredProducts = products
    .filter((product) => product.category === activeCategory)
    .slice(0, 4);
  const router = useRouter();
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">BEST SELLERS</h2>
        <div className="flex justify-center mb-10">
          <div className="inline-flex border-b">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "border-b-2 border-black"
                    : "text-gray-500 hover:text-black"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id.toString()}
              image={product.image}
              name={product.name}
              price={formatVietnamDong(Number(product.price))}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium hover:underline"
          >
            Xem thêm <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
