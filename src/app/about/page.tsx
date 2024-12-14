import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { ShoppingCart } from "lucide-react";

export default function Shop() {


  return (
    <>
    <div className="container flex justify-center mx-auto w-[1920px] py-20">
        
        <div className="w-[672px] text-white h-[478px] bg-[#007580]">
            <div className="w-[495px] h-[161px] m-20">
            <h1  className="text-3xl my-3 font-bold">About Us - Comforty</h1>
            <p   className="text-lg leading-tight">At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design,
             premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
            </div>
            <button className="w-[179px] h-[56px] bg-[#1c9ca7] ml-20">View collection</button>

        </div>
        <div className="w-[619px] h-[478px] mx-2">
        <Image
                  src='/chair1.jpg'
                  alt="Image"
                  height={619}
                  width={478}
                  className="h-[478px] w-[619px] object-cover transition-transform duration-300 group-hover:scale-105"
     />
        </div>
        <div>
            <h1 className="text-3xl my-3 font-bold">What makes our Brand Different</h1>

        </div>
                       
        
    </div>
    </>
  );
}
