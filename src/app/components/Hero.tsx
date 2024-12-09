import Image from "next/image"
import React from "react"
import Chair from "./Chair"

const Hero =()=>{
    // console.log(props)
      return (
      <div className="flex flex-col w-[1920px] mx-auto justify-center h-[1850] text-black">

        <div className="flex flex-col  mx-auto justify-center  w-[1340px]">

              <div className='ml-4 p-3 m-2 w-[1321] h-[140px] rounded-[6px] text-black '>
              <Image src="/CompanyLogo.png" alt="Logo"/>
                {/* <Image src="/CompanyLogo.png" alt="" /> */}
            </div>

            <div className="">
                <h1 className="font-semibold mt-4 text-4xl ">Featured Products</h1>
            </div>
            <div className="m-2 lg:m-4 sm:m-2 my-12 mb-6">
                <Chair />
            </div>


        </div>
      </div>
    )
  }
  
  export default Hero