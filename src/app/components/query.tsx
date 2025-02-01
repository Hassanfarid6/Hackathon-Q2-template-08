"use client";

import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import {client} from "../../sanity/lib/client"

// Define TypeScript Interface for Products
interface Product {
  _id: string;
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

  useEffect(() => {
    client
      .fetch(query)
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border rounded-lg p-4 shadow-md bg-white">
            <div className="relative w-full h-48">
              <Image
                src={product.imageUrl}
                alt={product.title}
                fill
                className="rounded-md object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold mt-3">{product.title}</h2>
            {/* <p className="text-gray-500">Category: {product.category._type}</p> */}
            <p className="text-xl font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
