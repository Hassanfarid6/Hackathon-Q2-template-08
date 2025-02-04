import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { GrTrophy } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

export default function Contact() {


  return (
    <>
    <div className="container md:mx-auto md:px-4 md:py-10">
  {/* Contact Section */}
  <div className="max-w-7xl md:mx-auto text-center">
    <h1 className="md:text-3xl font-bold">Get In Touch With Us</h1>
    <p className="max-w-2xl md:mx-auto text-gray-500 md:text-lg md:mt-3">
      For more information about our product & services, please feel free to drop us an email. Our staff is always here to help you. Do not hesitate!
    </p>
  </div>

  {/* Contact Details & Form */}
  <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start md:mt-10 md:space-y-10 lg:space-y-0 lg:space-x-16">
    {/* Contact Details */}
    <div className="w-full max-w-md space-y-6">
      <div className="flex items-center">
        <FaLocationDot className="w-6 h-6 text-[#029FAE]" />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">Address</h3>
          <p className="text-gray-600">236 5th SE Avenue, Malir Karachi, Pakistan</p>
        </div>
      </div>

      <div className="flex items-center">
        <FaPhoneAlt className="w-6 h-6 text-[#029FAE]" />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">Phone</h3>
          <p className="text-gray-600">Mobile: +(923) 010-228-138</p>
          <p className="text-gray-600">Hotline: +(923) 162-933-386</p>
        </div>
      </div>

      <div className="flex items-center">
        <MdOutlineAccessTimeFilled className="w-6 h-6 text-[#029FAE]" />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">Working Hours</h3>
          <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
          <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
        </div>
      </div>
    </div>

    {/* Contact Form */}
    <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
      <form className="space-y-6">
        <div>
          <label className="block text-lg font-semibold">Your Name</label>
          <input type="text" placeholder="ABC" className="w-full border-gray-300 rounded-md p-3 focus:border-[#029FAE] focus:ring-[#029FAE]" />
        </div>

        <div>
          <label className="block text-lg font-semibold">Email Address</label>
          <input type="email" placeholder="Abc@def.com" className="w-full border-gray-300 rounded-md p-3 focus:border-[#029FAE] focus:ring-[#029FAE]" />
        </div>

        <div>
          <label className="block text-lg font-semibold">Subject</label>
          <input type="text" placeholder="This is an optional" className="w-full border-gray-300 rounded-md p-3 focus:border-[#029FAE] focus:ring-[#029FAE]" />
        </div>

        <div>
          <label className="block text-lg font-semibold">Message</label>
          <textarea placeholder="Hi! I’d like to ask about..." className="w-full border-gray-300 rounded-md p-3 h-24 focus:border-[#029FAE] focus:ring-[#029FAE]"></textarea>
        </div>

        <button className="w-full bg-[#029FAE] text-white font-semibold text-lg py-3 rounded-md hover:bg-[#028c99] transition-all">
          Submit
        </button>
      </form>
    </div>
  </div>

  {/* Features Section */}
  <div className="mt-16 bg-gray-100 py-10 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
      <div className="flex flex-col items-center">
        <GrTrophy className="w-12 h-12 text-[#029FAE]" />
        <h2 className="text-xl font-semibold mt-4">High Quality</h2>
        <p className="text-gray-600">Crafted from top materials</p>
      </div>

      <div className="flex flex-col items-center">
        <FaCheckCircle className="w-12 h-12 text-[#029FAE]" />
        <h2 className="text-xl font-semibold mt-4">Warranty Protection</h2>
        <p className="text-gray-600">Over 2 years</p>
      </div>

      <div className="flex flex-col items-center">
        <BiSupport className="w-12 h-12 text-[#029FAE]" />
        <h2 className="text-xl font-semibold mt-4">24/7 Support</h2>
        <p className="text-gray-600">Dedicated support</p>
      </div>
    </div>
  </div>
</div>
        
    </>
  );
}
