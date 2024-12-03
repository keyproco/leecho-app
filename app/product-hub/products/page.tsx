"use client";

import { useState } from "react";
import Link from "next/link";
import { Metadata } from "next";
import ProductCard from "@/components/product-card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// todo split files & wrap
const metadata: Metadata = {
  title: "Leecho | Products",
  description:
    "Build trust, improve retention, and drive growth by making education a core part of your product strategy.",
};

const products = [
  {
    id: 1,
    title: "Mawl Ai",
    description: "The Intelligence Touch for Your Digital Kingdom.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Jeeb",
    description: "It pulls instead",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Hackoira",
    description: "Golden Age",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Dead Product",
    description: "rip",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between m-5">
        <Input
          placeholder="Filter products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Link href="/product-hub/create-product">
          <Button variant="outline">Create Product</Button>
        </Link>
      </div>
      <Separator className="mt-5 mb-5" />
      <ProductCard products={filteredProducts} />
    </div>
  );
};

export default Products;
