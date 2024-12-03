"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";

interface ProductCardProps {
  products: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

const ProductCard = ({ products }: ProductCardProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <Card key={product.id} className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <EllipsisVertical className="absolute top-2 right-2 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>Create Variant</DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(product.title)}
              >
                Copy Product ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Related Modules</DropdownMenuItem>
              <DropdownMenuItem>Related Courses</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <CardHeader>
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
