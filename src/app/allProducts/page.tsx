"use client"
import { ShoppingCart } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
import InstaProduct from "../components/instaProduct";
import { useEffect, useState } from "react";
import { CartItem, useCart } from "../context/CartContext";
import Image from "next/image";
// import { CartItem, useCart } from "../context/CartContext";
import Link from "next/link";
import {client} from "../../sanity/lib/client"
import Products from "../components/query";

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
  
  export default function AllProducts() {
  // interface Product {
  //   id: number;
  //   title: string;
  //   price: number;
  //   originalPrice?: number;
  //   image: string;
  //   isNew?: boolean;
  //   isSale?: boolean;
  //   ShoppingCart?: boolean
  // }
  // const { addToCart } = useCart();
  
  // const products: Product[] = [
  //   {
  //     id: 1,
  //     title: "Library Stool Chair",
  //     price: 20,
  //     image: "/01.jpg",
  //     isNew: true,
  //     ShoppingCart: true,
  //   },
  //   {
  //       id: 2,
  //       title: "Library Stool Chair",
  //       price: 20,
  //       originalPrice: 30,
  //       image: "/02.jpg",
  //       isSale: true,
  //   },
  //   {
    //       id: 3,
    //       title: "Library Stool Chair",
    //       price: 20,
    //       image: "/03.jpg",
    //   },
    //   {
      //       id: 4,
      //       title: "Library Stool Chair",
      //       price: 20,
      //       image: "/04.jpg",
      //   },
      //   {
        //       id: 5,
        //       title: "Library Stool Chair",
        //       price: 20,
        //       image: "/08.jpg",
  //       isNew: true,
  //       ShoppingCart: true,
  //   },
  //   {
  //       id: 6,
  //       title: "Library Stool Chair",
  //       price: 20,
  //       originalPrice: 30,
  //       image: "/06.jpg",
  //       isSale: true,
  //   },
  //   {
  //       id: 7,
  //       title: "Library Stool Chair",
  //       price: 20,
  //       image: "/07.jpg",
  //   },
  //   {
  //       id: 8,
  //       title: "Library Stool Chair",
  //       price: 20,
  //       image: "/01.jpg",
  //   },
  //   {
  //       id: 9,
  //       title: "Library Stool Chair",
  //       price: 20,
  //       image: "/05.jpg",
  //       isNew: true,
  //       ShoppingCart: true,
  //   },
  //   {
  //       id: 10,
  //       title: "Library Stool Chair",
  //       price: 20,
  //       image: "/02.jpg",
  //       isSale: true,
  //   },
  //   {
  //     id: 11,
  //     title: "Library Stool Chair",
  //     price: 20,
  //     image: "/03.jpg",
  //   },
  //   {
  //     id: 12,
  //     title: "Library Stool Chair",
  //     price: 20,
  //     image: "/14.jpg",
  //   },
  // ];
  
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    client
      .fetch(query)
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  const { addToCart } = useCart();

  return (
    <>
    <div className="md:container w-full md:w-[94%] flex-col justify-center px-4 mx-auto py-8">
        <div className="ml-8">
      {/* <h1 className="text-4xl font-bold text-[#1C1B1F] tracking-tight  mb-8">
        ALL Products
      </h1> */}
      </div>
      < Products />

    {/* // Query for  */}
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-6">
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
            <h2 className="text-sm sm:text-lg ml-0 sm:ml-1 font-normal sm:font-semibold mt-0 sm:mt-3">{product.title}</h2>
            {/* <p className="text-gray-500">Category: {product.category._type}</p> */}
            <p className="text-sm sm:text-lg ml-0 sm:ml-1 font-normal sm:font-semibold mt-0 mr-1 sm:mt-2">${product.price}</p>
          </div>
                <button
                  onClick={() => addToCart({
                    id: String(product._id),
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

        
        
     {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"> */}
        {/* {products.map((product) => (
          <div key={product.id} className="group relative rounded-lg bg-white">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              {product.isNew && (
                  <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
                  New
                </Badge>
              )}
                {product.isSale && (
                    <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
                    Sales
                  </Badge>
                )}
              <Link href={"components/productDectription/discription"}>
                <Image
                  src={product.image}
                  alt={product.title}
                  height={400}
                  width={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
              </Link>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-lg font-medium text-[#1C1B1F]">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
            {product.ShoppingCart && (
              <button
              // onClick={() => addToCart({
                //   id:product.id,
                //   image:product.image,
                //   price:product.price,
                //   quantity:1,
                //   stock:10,
                //   title:product.title
                // })}
                className="rounded-md ml-56 bg-[#029FAE] p-2 text-white transition-colors hover:bg-[#00A294]">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Add to cart</span>
            </button>
              // <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
              //   Sales
              // </Badge>
            )}
                </div>
              </div>
            </div>
          </div>
        ))} */}
         {/* </div> */}
        
    </div>
            <InstaProduct />
    </>
  );
}
