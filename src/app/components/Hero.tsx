import Image from "next/image"
import React from "react"
import Chair from "./Chair"
import { FaArrowRightLong } from "react-icons/fa6";

const Hero =()=>{
    // console.log(props)
      return (
        <>
        <div className='flex flex-col mx-auto justify-center w-[1920px]'>
     <div className='flex mx-auto bg-[#F0F2F3] w-[1340px] h-[790px] rounded-[6px] text-black '>

        <div className='w-[557px] mt-64 ml-12 mr-12 h-[337px]'>
          <p className='text-lg'>Welcome to chairy</p>
          <h1 className='text-[47px] leading-[50px] mt-12 mb-14 font-bold'>Best Furniture Collection For Your Interior</h1>
          <button className='w-[171px] h-[52px] rounded-xl bg-[#029FAE] text-white'>Shop Now
           <FaArrowRightLong className='inline-block ml-2 text-2xl' />
          </button>
        </div>
        <div className="flex w-[434px] h-[580px] mt-32 mx-auto  items-center justify-center">
          <Image src="/Product1.png" width={434} height={580} className="object-contain p-2 mt-4" alt="Product" />
           {/* <img src="/Product1.png" className="object-contain p-2 mt-4" alt="Product" /> */}
        </div>   
     </div>
    </div>

    
      <div className=" w-[1920px] mx-auto justify-center h-[1850] text-black">

        <div className="flex flex-col  mx-auto justify-center  w-[1340px]">

              <div className='ml-4 p-3 m-2 w-[1321] h-[140px] rounded-[6px] text-black '>
              <Image src="/CompanyLogo.png" width={1321} height={140} alt="Logo"/>
                {/* <Image src="/CompanyLogo.png" alt="" /> */}
            </div>

            <div className="">
                <h1 className="font-semibold mt-4 mb-6 text-4xl ">Featured Products</h1>
            </div>
            <div className="">
                <Chair />
            </div>


        </div>
      </div>
        </>
    )
  }
  
  export default Hero