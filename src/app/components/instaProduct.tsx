import React from "react";
import Image from "next/image";

    
export default function InstaProduct() {
  

  return (
    <>
<div className="flex justify-center bg-[#F0F2F3] py-10">
  <div className="w-full max-w-5xl mx-auto px-4">
    {/* Newsletter Section */}
    <div className="text-center py-6">
      <h2 className="font-medium text-xl sm:text-xl md:text-3xl mb-4">
        Or Subscribe to the Newsletter
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-[#6a6d6f] font-semibold">
        <input
          type="email"
          placeholder="Email address..."
          className="w-full sm:w-auto border-b border-gray-400 py-2 px-4 text-left"
        />
        <button className="text-base sm:text-lg font-normal border-b border-gray-400 py-2 px-6 hover:text-[#00A294] transition-colors">
          SUBMIT
        </button>
      </div>
    </div>

    {/* Instagram Section */}
    <div className="text-center py-10">
      <h2 className="text-xl sm:text-xl md:text-3xl font-medium">
        Follow Products and Discounts on Instagram
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
        {["/01.jpg", "/02.jpg", "/03.jpg", "/04.jpg", "/05.jpg", "/06.jpg"].map(
          (src, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg aspect-square">
              <Image
                src={src}
                alt={`Instagram product ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )
        )}
      </div>
    </div>
  </div>
</div>

   </>
  )
}
