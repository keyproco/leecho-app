"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


 
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import { Separator } from "@radix-ui/react-separator";
  
import { EllipsisVertical } from "lucide-react";

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
    title: "Hackoira", //hackwara tribute
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

const ProductCard = () => {
//   const handleEdit = (id: number) => {
//     console.log(`Edit product with ID: ${id}`);
//   };

//   const handleDelete = (id: number) => {
//     console.log(`Delete product with ID: ${id}`);
//   };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} className="relative m-4">
          <CardHeader>
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
             <EllipsisVertical className="self-end"/>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(product.title)}
            >
              Copy product ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View product details</DropdownMenuItem>
            <DropdownMenuItem>Edit product details</DropdownMenuItem>
            <DropdownMenuItem>Delete product details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-40 object-cover rounded-t-md"
            />
          </CardHeader>
          <CardContent> 
            <CardTitle className="mb-4">{product.title}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
          These are my feet
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
