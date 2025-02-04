import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { ShoppingCart } from "lucide-react";

export default function Shop() {


  return (
    <>
<div className="container mx-auto flex flex-col lg:flex-row justify-center px-4 py-10 space-y-8 lg:space-y-0 lg:space-x-8">
  {/* Bag Section */}
  <div className="w-full lg:w-[70%] bg-white md:p-6 rounded-lg shadow">
    <h1 className="md:text-2xl font-medium md:mb-6">Bag</h1>

    {[{ img: "/03.jpg" }, { img: "/05.jpg" }].map((item, index) => (
      <div key={index} className="flex flex-col md:flex-row items-center md:items-start border-b-2 md:py-6 space-y-4 md:space-y-0 md:space-x-6">
        {/* Product Image */}
        <div className="w-32 h-32">
          <Image
            src={item.img}
            alt="Product Image"
            height={400}
            width={400}
            className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start text-[#111111]">
            <h1 className="md:text-xl font-normal text-center sm:text-left">Library Stool Chair</h1>
            <h1 className="md:text-lg sm:text-xl">MRP: $99</h1>
          </div>

          <p className="text-gray-600 text-sm sm:text-lg mt-4">Ashen Slate/Cobalt Bliss</p>
          <p className="text-gray-600 text-sm sm:text-lg inline-block mr-6">Size L</p>
          <p className="text-gray-600 text-sm sm:text-lg inline-block">Quantity 1</p>

          <div className="flex mt-4 justify-center sm:justify-start">
            <FaRegHeart className="w-6 h-6 text-gray-600 cursor-pointer mr-4" />
            <svg className="w-6 h-6 text-gray-600 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.25 7.5V19.5M9.75 7.5V19.5M5.25 6V19.5C5.25 20.74 6.26 21.75 7.5 21.75H16.5C17.74 21.75 18.75 20.74 18.75 19.5V5.25M18.75 5.25H21.5M18.75 5.25H21M9 2.25H14.25C15.08 2.25 15.75 2.92 15.75 3.75C15.75 4.58 15.08 5.25 14.25 5.25H3" stroke="#111111" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Summary Section */}
  <div className="w-full lg:w-[30%] bg-white md:p-6 rounded-lg shadow">
    <h2 className="md:text-2xl font-medium mb-6">Summary</h2>

    <div className="space-y-4">
      <div className="flex justify-between">
        <h1>Subtotal</h1>
        <h1>$198.00</h1>
      </div>
      <div className="flex justify-between">
        <h1>Estimated Delivery & Handling</h1>
        <h1>Free</h1>
      </div>
      <hr />
      <div className="flex justify-between">
        <h1>Total</h1>
        <h1>$198.00</h1>
      </div>
      <hr />
      <button className="flex justify-center items-center w-full text-xl rounded-lg bg-[#029FAE] text-white py-3 mt-4 hover:bg-[#028b9c] transition">
        <ShoppingCart className="w-6 h-6 mr-2" />
        <h1>Member Checkout</h1>
      </button>
    </div>
  </div>
</div>

    </>
  );
}
