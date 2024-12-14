import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { ShoppingCart } from "lucide-react";

export default function Shop() {


  return (
    <>
    <div className="container flex justify-center mx-auto w-[1920px] py-20">
        
        <div className="w-[1100px] h-[550px]">
            <h1  className="text-2xl font-medium">Bag</h1>

            <div  className="flex w-[963px] h-[211px] border-b-2 my-5 py-7">

            <div className="w-[150px] h-[150px]">
            <Image
                  src='/03.jpg'
                  alt="Image"
                  height={400}
                  width={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
            </div>
            <div className="ml-11 w-[687px] h-[163px]">

                <div className="flex justify-between text-[#111111]">
                <h1 className="text-2xl font-normal">Library Stool Chair</h1>
                <h1 className="text-xl">MRP: $99</h1>
                </div>

                <p className="text-lg font-normal text-[#757575] mt-7">Ashen Slate/Cobalt Bliss</p>
                <p className="text-lg font-normal text-[#757575] inline-block mr-9">Size L</p>
                <p className="text-lg font-normal text-[#757575] inline-block">Quantity 1</p>

                <div  className="flex mt-3">
                <FaRegHeart className="w-[24px] mr-5 h-[24px]"/>
                <svg width="24" height="24" className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.25 7.5V19.5M9.75 7.5V19.5M5.25 6V19.5C5.25 20.74 6.26 21.75 7.5 21.75H16.5C17.74 21.75 18.75 20.74 18.75 19.5V5.25M18.75 5.25H21.5M18.75 5.25H21M9 2.25H14.25C15.08 2.25 15.75 2.92 15.75 3.75C15.75 4.58 15.08 5.25 14.25 5.25H3" stroke="#111111" stroke-width="1.5" stroke-miterlimit="10"/>
                        </svg>
                </div>

            </div>
            </div>
            {/* Next Image */}
            <div  className="flex w-[963px] h-[211px] border-b-2 my-5 py-7">

            <div className="w-[150px] h-[150px]">
            <Image
                  src='/05.jpg'
                  alt="Image"
                  height={400}
                  width={400}
                  className="h-full w-full object-cover transition-transform duration-300"
                  />
            </div>
            <div className="ml-11 w-[687px] h-[163px]">

                <div className="flex justify-between text-[#111111]">
                <h1 className="text-2xl font-normal">Library Stool Chair</h1>
                <h1 className="text-xl">MRP: $99</h1>
                </div>

                <p className="text-lg font-normal text-[#757575] mt-7">Ashen Slate/Cobalt Bliss</p>
                <p className="text-lg font-normal text-[#757575] inline-block mr-9">Size L</p>
                <p className="text-lg font-normal text-[#757575] inline-block">Quantity 1</p>

                <div  className="flex mt-3">
                <FaRegHeart className="w-[24px] mr-5 h-[24px]"/>
                <svg width="24" height="24" className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.25 7.5V19.5M9.75 7.5V19.5M5.25 6V19.5C5.25 20.74 6.26 21.75 7.5 21.75H16.5C17.74 21.75 18.75 20.74 18.75 19.5V5.25M18.75 5.25H21.5M18.75 5.25H21M9 2.25H14.25C15.08 2.25 15.75 2.92 15.75 3.75C15.75 4.58 15.08 5.25 14.25 5.25H3" stroke="#111111" stroke-width="1.5" stroke-miterlimit="10"/>
                        </svg>
                </div>

            </div>
            </div>

                       
        </div>
        {/* Summary */}
        <div className="w-[350px] h-[295px] text-lg">
            <h2 className="text-2xl font-medium">Summary</h2>
                <div>
                    <div className="flex justify-between mt-7">
                        <h1>Subtotal</h1>
                        <h1>$198.00</h1>
                    </div>
                    <div className="flex justify-between my-3">
                        <h1>Estimated Delivery & Handling</h1>
                        <h1>Free</h1>
                    </div>
                    <hr />
                    <div className="flex justify-between my-3">
                        <h1>Total</h1>
                        <h1>$198.00</h1>
                    </div>
                    <hr />
                    <div className="flex justify-center mt-7">
                        <button className="flex justify-center text-xl rounded-xl items-center w-[350px] h-[60px] bg-[#029FAE] text-white">
                        <ShoppingCart className="w-[24px] mr-3 h-[24px]"/>
                        <h1>Member Checkout</h1>
                        </button>
                    </div>
                </div>
        </div>
    </div>
    </>
  );
}
