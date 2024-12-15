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
    <div className="container flex justify-center mx-auto w-[1920px] h-[1000px] py-20">
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
                <p className="w-[212px] h-[57px]">236 5th SE Avenue, Malir Karachi, Pakistan</p>
                </div>
             </div>
             <div  className="flex mt-10 ml-10">
                <  FaPhoneAlt className="w-[22px] h-[27px]" />
                <div className="ml-5">
                <h3>Phone</h3>
                <p className="w-[212px] h-[57px]">Mobile: +(923) 010-228-138
                Hotline: +(923) 162-933-386</p>
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

                {/* form */}
            <div className="w-[635px] h-[923px]">
                <div className="w-[530px] text-xl h-[121px] mt-20">
                    <h2>Your name</h2>
                    <input type="text" placeholder=" ABC" className="w-[520px] border-2 border-gray-400 h-[60px] rounded-xl mt-3"/>
                </div>
                <div className="w-[530px] text-xl h-[121px] ">
                    <h2>Email adress</h2>
                    <input type="text" placeholder=" Abc@def.com" className="w-[520px] h-[60px] border-2 border-gray-400 rounded-xl mt-3"/>
                </div>
                <div className="w-[530px] text-xl h-[121px] ">
                    <h2>Subject</h2>
                    <input type="text" placeholder=" This an Optional" className="w-[520px] h-[60px] rounded-xl mt-3 border-2 border-gray-400"/>
                </div>
                <div className="w-[530px] text-xl h-[121px] ">
                    <h2>Message</h2>
                    <input type="text" placeholder=" Hi! I do like to ask about" className="w-[520px] h-[90px] rounded-xl my-7 border-2 border-gray-400"/>
                </div>
                <button className="w-[237px] text-xl text-white bg-[#029FAE] rounded-xl mt-14 ml-32 h-[55px]">Submit</button>
            </div>
        </div>
        </div>
    </div>
        <div className="w-[1320px] flex justify-center items-center mx-auto bg-[#F4F4F4] h-[270px]">
            <div className="flex justify-between w-[1188px] h-[70px]">
                <div className="flex w-[337px]  h-[70px]">
                <GrTrophy className="w-[52px] h-[60px]" />
                <div>
                <h2 className="text-xl font-semibold ml-5">High Quality</h2>
                <p className="text-lg font-normal ml-5">crafted from top materials</p>
                </div>

                </div>
                <div className="flex w-[337px]  h-[70px]">
                < FaCheckCircle className="w-[52px] h-[60px]" />
                <div>
                <h2 className="text-xl font-semibold ml-5">Warranty Protection</h2>
                <p className="text-lg font-normal ml-5">Over 2 years</p>
                </div>

                </div>
                <div className="flex w-[337px]  h-[70px]">
                <BiSupport  className="w-[52px] h-[60px]" />
                <div>
                <h2 className="text-xl font-semibold ml-5">24 / 7 Support</h2>
                <p className="text-lg font-normal ml-5">Dedicated support</p>
                </div>

                </div>
            </div>
        </div>
        
    </>
  );
}
