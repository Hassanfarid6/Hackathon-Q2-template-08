import Image from "next/image"
import React from "react"
import Chair from "./Chair"
import { FaArrowRightLong } from "react-icons/fa6";

const Hero =()=>{
    // console.log(props)
      return (
        <>
        <div className='flex flex-col mx-auto justify-center w-full'>
     <div className='flex md:w-[85%] xl:w-[80%] mx-auto bg-[#F0F2F3]  xl:h-[790px] md:h-[490px] rounded-[6px] text-black '>

        <div className='2xl:w-[480px] md:w-[347px] xl:h-[337px] md:h-[237px] xl:mt-64 md:mt-32  2xl:ml-28 md:ml-28  xl:mr-12 md:mr-7 '>
          <p className='text-lg'>Welcome to chairy</p>
          <h1 className='xl:text-5xl md:text-3xl xl:leading-[50px] md:leading-[30px] xl:mt-12 md:mt-8 xl:mb-14 md:mb-6 font-bold'>Best Furniture Collection For Your Interior</h1>
          <button className='xl:w-[171px] md:w-[121px] xl:h-[52px] md:h-[42px] md:text-base rounded-xl bg-[#029FAE] text-white'>Shop Now
           <FaArrowRightLong className='inline-block ml-2 xl:text-2xl md:text-xl' />
          </button>
        </div>
        <div className="flex xl:w-[334px] md:w-[234px] xl:h-[580px] md:h-[250px] mt-32 m-auto  items-center justify-center">
          <Image src="/Product1.png" width={434} height={580} className="object-contain p-2 mt-4" alt="Product" />
           {/* <img src="/Product1.png" className="object-contain p-2 mt-4" alt="Product" /> */}
        </div>   
     </div>
    </div>

    
      <div className=" w-full mx-auto justify-center h-[1850] text-black">

        <div className="flex flex-col mx-auto justify-center  md:w-[85%] xl:w-[80%]">

              <div className='ml-2 h-[140px] rounded-[6px] text-black '>
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