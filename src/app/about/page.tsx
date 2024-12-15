import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";
import { GoCheckCircle } from "react-icons/go";
import { LuSprout } from "react-icons/lu";
import { TbFileInvoice } from "react-icons/tb";

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
    </div>
                       
        {/* Brands  */}
    <div className="container flex flex-col items-center my-10 mb-32 mx-auto w-[1920px]">
            <h1 className=" text-3xl my-3 font-bold">What makes our Brand Different</h1>

          <div className="flex justify-between w-[1320px] h-[244px] my-10 ">
            
          <div className=" flex flex-col w-[309px] h-[244px] bg-[#F9F9F9] text-[#007580]">
             <  TbTruckDelivery className="h-[24px]  ml-16 mt-11 mb-1 w-[24px]"/>

            <div className="ml-16  w-[213px] h-[50px]">
            <h2 className="text-lg font-semibold mb-2">Next day as standard</h2>
            <p  className="text-base">Order before 3pm and get your order the next day as standard.</p>
            </div>
          </div>
          <div className=" flex flex-col w-[309px] h-[244px] bg-[#F9F9F9] text-[#007580]">
          < GoCheckCircle className="h-[24px]  ml-16 mt-11 mb-1 w-[24px]"/>

            <div className="ml-16  w-[213px] h-[50px]">
            <h2 className="text-lg font-semibold mb-2">Next day as standard</h2>
            <p  className="text-base">Order before 3pm and get your order the next day as standard.</p>
            </div>
          </div>
          <div className=" flex flex-col w-[309px] h-[244px] bg-[#F9F9F9] text-[#007580]">
             <   TbFileInvoice className="h-[24px]  ml-16 mt-11 mb-1 w-[24px]"/>
            <div className="ml-16  w-[213px] h-[50px]">
            <h2 className="text-lg font-semibold mb-2">Next day as standard</h2>
            <p  className="text-base">Order before 3pm and get your order the next day as standard.</p>
            </div>
          </div>
          <div className=" flex flex-col w-[309px] h-[244px] bg-[#F9F9F9] text-[#007580]">
            <  LuSprout  className="h-[24px]  ml-16 mt-11 mb-1 w-[24px]"/>

            <div className="ml-16  w-[213px] h-[50px]">
            <h2 className="text-lg font-semibold mb-2">Next day as standard</h2>
            <p  className="text-base">Order before 3pm and get your order the next day as standard.</p>
            </div>
          </div>
          </div>

         {/* Products */}
          <div>
          <h1  className=" text-3xl my-10 font-bold">Our Popular Products </h1>
              
          <div className="flex">

            <div className="w-[630px]  h-[462px]">

              <Image
                        src='/1.jpg'
                        alt="Image"
                        height={370}
                        width={400}
                        className="h-[375px] w-[630px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <h2  className="mt-6 mb-1">The Poplar suede sofa</h2>
              <p>$99.00</p>
            </div>

            <div className="w-[305px] ml-4 h-[462px]">
                 <Image
                           src='/2.jpg'
                           alt="Image"
                           height={370}
                           width={305}
                           className="h-[375px] w-[305px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <h2  className="mt-6 mb-1">The Dandy chair</h2>
              <p>$99.00</p>
            </div>
            <div className="w-[305px] ml-4 h-[462px]">
              <Image
                          src='/3.jpg'
                          alt="Image"
                          height={370}
                          width={305}
                          className="h-[375px] w-[305px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <h2 className="mt-6 mb-1">The Dandy chair</h2>
              <p>$99.00</p>
            </div>
          </div>

          </div>
    </div>
        
    </>
  );
}
