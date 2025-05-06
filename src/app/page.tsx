"use client";
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { PopularProducts } from "@/components/PopularProducts";
import { BestSellers } from "@/components/BestSellers";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <PopularProducts />
      <BestSellers />
    </main>
  );
}
