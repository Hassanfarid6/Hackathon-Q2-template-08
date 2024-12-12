import Image from "next/image"
import React from "react"
import Chair from "./Chair"

const Hero =()=>{
    // console.log(props)
      return (
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
    )
  }
  
  export default Hero