"use client";

import { useState } from "react";
import Image from "next/image";
import { CardData } from "@/utils/types";
import { FaHeart } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Card({
  _id,
  imageUrl,
  title,
  price,
  stockLevel,
}: CardData) {

  const [wishlist, setWishlist] = useState(false);
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart({
      id: _id,
      title: title,
      price: price,
      image: imageUrl,
      quantity: 1,
      stock: stockLevel,
    });
  };

  const handleWishlist = () => {
    setWishlist(!wishlist);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
      {/* Image Section */}
      <div className="relative h-[200px] flex justify-center items-center bg-morelightyellow rounded-t-lg overflow-hidden">
        <Link href={`/shop/${_id}`} className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={title || "Product Image"}
            className="w-full h-full"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            style={{ objectFit: "contain" }} // Apply objectFit here
            width={600} // Set the image width
            height={600} // Set the image height
          />
        </Link>
        <button
          onClick={handleWishlist}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-100 transition duration-200"
          title="Add to Wishlist"
        >
          <FaHeart
            className={` ${wishlist ? "text-red-500" : "text-slate-300"}`}
          />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-2">
        <Link href={`/shop/${_id}`} passHref>
          <p className="text-sm text-gray-600 truncate">
            {title || "Unnamed Product"}
          </p>
          <h2 className="text-lg font-semibold text-gray-800">
            Rs. {price ? price : "N/A"}.00
          </h2>
        </Link>

        <button
          onClick={handleAddToCart}
          disabled={stockLevel === 0}
          className="mt-3 py-2 px-4 bg-lightyellow text-black font-medium text-sm rounded hover:bg-darkyellow focus:outline-none focus:ring focus:ring-yellow-300 transition duration-200 flex items-center gap-2 justify-center"
        >
          {stockLevel === 0 ? "Out of Stock" : <><BsCartPlus /> Add to Cart</>}
        </button>
      </div>
    </div>
  );
}
