"use client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Link from "next/link";
import { Metadata } from "next";
import ProductCard from "@/components/product-card";
import { Separator } from "@/components/ui/separator";

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

const createProduct = (event: React.FormEvent) => {
  event.preventDefault();
  console.log("Product created");
};

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
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Create Product</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Product Creation</DialogTitle>
              <DialogDescription>
                Fill in the details of your new product.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={createProduct} className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="code" className="text-right">
                  Code
                </Label>
                <Input id="code" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="col-span-1 p-2">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                </div>
                <div className="col-span-3">
                  <Textarea
                    className="w-full h-100"
                    placeholder="Type your message here."
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="col-span-1 flex justify-end">
                  <Label htmlFor="logo">Logo</Label>
                </div>
                <div className="col-span-3">
                  <Input id="logo" type="file" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Create</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Separator className="mt-5 mb-5" />
      <ProductCard products={filteredProducts} />
    </div>
  );
};

export default Products;
