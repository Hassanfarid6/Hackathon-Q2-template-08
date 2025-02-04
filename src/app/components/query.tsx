"use client";

import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import {client} from "../../sanity/lib/client"
import { ShoppingCart } from "lucide-react";
import { CartItem, useCart } from "../context/CartContext";

// Define TypeScript Interface for Products
interface Product {
  _id: number;
  title: string;
  price: number;
  imageUrl: string;
  category:{
    _ref: string,
    _type: string 
  };
}

// GROQ Query
const query = `*[_type == "products"]{
  _id,
  title,
  price,
  "imageUrl": image.asset->url,
  category
}`;

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    client
      .fetch(query)
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="container md:w-[94%] mx-auto px-4 py-2">
      <h1 className="text-xl md:text-4xl font-bold text-[#1C1B1F] tracking-tight mb-8">ALL Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border rounded-md shadow-md bg-white">
            <div className="relative w-full">
              <Image
                src={product.imageUrl}
                alt={product.title}
                // fill
                width={400}
                height={400}
                className="rounded-md h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          <div className="mt-4 flex items-center justify-between">
            <h2 className="text-lg ml-1 font-semibold mt-3">{product.title}</h2>
            {/* <p className="text-gray-500">Category: {product.category._type}</p> */}
            <p className="text-xl font-bold mr-1 mt-2">${product.price}</p>
          </div>
                <button
                  onClick={() => addToCart({
                    id: product._id,
                    image: product.imageUrl,
                    price: product.price,
                    quantity: 1,
                    stock: 10,
                    title: product.title
                  })}
                  className="mt-auto flex items-center justify-center gap-2 w-full rounded-lg bg-[#00B5A5] md:px-4 py-2 text-white text-sm font-medium transition-all duration-300 hover:bg-[#00A294] active:scale-95 shadow-md"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
         
          </div>
        ))}
      </div>
    </div>
  );
}
