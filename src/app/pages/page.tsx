import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export default function Pages() {


  return (
    <>
    <div className="container flex justify-center mx-auto w-[1920px] py-20">
    <div className="w-[675px] h-[607px]">
    <Image
                  src='/02.jpg'
                  alt="Image"
                  height={400}
                  width={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
    </div>
    <div className="w-[541px] ml-24 h-[607px]">
        <h2 className="w-[541px] h-[132px] font-bold text-6xl mb-10">
        Library Stool Chair
        </h2>
        <button className="bg-[#029FAE] w-[144px] h-[44px] rounded-3xl mb-10 text-white font-semibold text-xl ">
            $20.00 USD
        </button>
        <hr />

        <p className="w-[543px] h-[101px] text-xl pr-8 mb-8 mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
        
        <button className="bg-[#029FAE] w-[212px] h-[63px] rounded-lg text-white font-semibold text-xl mb-8">
           <ShoppingCart className="inline-block text-xl mr-3"/>
            Add to Cart
        </button>
    </div>
    </div>
        
    <div className="container flex justify-center mx-auto w-[1920px] py-20">
        <div className=" w-[1447px] h-[409px]">

        <div className="flex justify-between text-4xl font-semibold">

                <h2>FEATURED PRODUCTS</h2>

                <p className="text-lg border-b border-gray-400">View all</p>
        </div>

        </div>
    </div>
    </>
  );
}
