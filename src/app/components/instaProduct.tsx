import React from "react";
import Image from "next/image";

    
export default function InstaProduct() {
  

  return (
    <>
    <div className="flex">

       <div className=" w-full h-auto bg-[#F0F2F3]">

        
      <div className="max-w-3xl mx-auto py-6  text-center w-[760px] h-[165px]">
        <h2 className="font-medium text-[50px] px-0  mb-4">
          Or Subscribe to the Newsletter
        </h2>
          <div className="flex text-center px-3 text-[#6a6d6f] font-semibold">

            <p className="w-[640px] h-[32px] text-left  border-b border-gray-400">
              Email address...
            </p>

            <span className="text-[16px] font-normal ml-8  border-b border-gray-400">SUBMIT</span>
          </div>
      </div>



      <div className="max-w-7xl w-[1324px] h-[319px] mx-auto  px-4 mt-7 space-y-8">
        <h2 className="text-[50px] font-medium text-center">
          Follow Products and Discounts on Instagram
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pb-24">
          <div className="aspect-square w-[196px] h-[196px] relative overflow-hidden rounded-lg">
            <Image
              src="/01.jpg"
              alt="Instagram product 1"
              layout="fill"
              objectFit="cover"
              />
          </div>
          <div className="aspect-square w-[196px] h-[196px] relative overflow-hidden rounded-lg">
            <Image
              src="/02.jpg"
              alt="Instagram product 2"
              layout="fill"
              objectFit="cover"
              />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/03.jpg"
              alt="Instagram product 3"
              layout="fill"
              objectFit="cover"
              />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/04.jpg"
              alt="Instagram product 4"
              layout="fill"
              objectFit="cover"
              />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/05.jpg"
              alt="Instagram product 5"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/06.jpg"
              alt="Instagram product 6"
              layout="fill"
              objectFit="cover"
              />
          </div>
        </div>
    </div>
  </div>
</div>
   
   </>
  )
}
