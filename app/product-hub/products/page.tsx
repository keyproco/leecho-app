import type { Metadata } from "next";
import ProductCard from "@/components/product-card";
export const metadata: Metadata = {
  title: "Leecho | Products",
  description: "Build trust, improve retention, and drive growth by making education a core part of your product strategy.",
};

const Products = () => {
    return (
      <div className="">
        <ProductCard/>
      </div>
    );
  };
  
  export default Products;