import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

export default function Contact() {


  return (
    <>
    <div className="container flex justify-center mx-auto w-[1920px] h-[1144px] py-20">
        <div>

        <div className="w-[1440px] flex flex-col items-center">
            <h1 className="text-3xl my-3 font-bold">Get In Touch With Us</h1>
            <p className="w-[644px] h-[48px] text-center text-[#9F9F9F]  text-[16.5px]">For More Information About
             Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out.
             Do Not Hesitate!</p>
        </div>

        
        <div  className="w-[1440px] flex justify-center h-[923px] ">
            <div className="w-[393px] flex flex-col justify-center h-[537px] ">
             <div className="flex ml-10">
                < FaLocationDot className="w-[22px] h-[27px]" />
                <div className="ml-5">
                <h3>Address</h3>
                <p className="w-[212px] h-[57px]">236 5th SE Avenue, New York NY10000, United States</p>
                </div>
             </div>
             <div  className="flex mt-10 ml-10">
                <  FaPhoneAlt className="w-[22px] h-[27px]" />
                <div className="ml-5">
                <h3>Phone</h3>
                <p className="w-[212px] h-[57px]">Mobile: +(84) 546-6789
                Hotline: +(84) 456-6789</p>
                </div>
             </div>
             <div  className="flex mt-10 ml-10">
                <  MdOutlineAccessTimeFilled  className="w-[22px] h-[27px]" />
                <div className="ml-5">
                <h3>Working</h3>
                <p className="w-[212px] h-[57px]">Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
                </div>
             </div>
            </div>

            <div className="w-[635px] h-[923px]">
                <div className="w-[530px] text-xl h-[121px] mt-20">
                    <h2>Your name</h2>
                    <input type="text" placeholder="ABC" className="w-[520px] border-2 border-gray-400 h-[60px] rounded-xl mt-3"/>
                </div>
                <div className="w-[530px] text-xl h-[121px] ">
                    <h2>Email adress</h2>
                    <input type="text" placeholder="Abc@def.com" className="w-[520px] h-[60px] border-2 border-gray-400 rounded-xl mt-3"/>
                </div>
                <div className="w-[530px] text-xl h-[121px] ">
                    <h2>Subject</h2>
                    <input type="text" placeholder="This an Optional" className="w-[520px] h-[60px] rounded-xl mt-3 border-2 border-gray-400"/>
                </div>
                <div className="w-[530px] text-xl h-[121px] ">
                    <h2>Message</h2>
                    <input type="text" placeholder="Hi! I do like to ask about" className="w-[520px] h-[70px] rounded-xl mt-3 border-2 border-gray-400"/>
                </div>

            </div>
        </div>
        
        </div>
    </div>
        
    </>
  );
}
