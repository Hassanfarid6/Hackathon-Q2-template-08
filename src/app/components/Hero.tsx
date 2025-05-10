import Image from "next/image"
import React from "react"
import Chair from "./Chair"
import { FaArrowRightLong } from "react-icons/fa6";

const Hero =()=>{

  const images = [
    {id: 0, img: "/Logo1.svg", alt: "logo"},
    {id: 1, img: "/Logo2.svg", alt: "logo"},
    {id: 2, img: "/Logo3.svg", alt: "logo"},
    {id: 3, img: "/Logo4.svg", alt: "logo"},
    {id: 4, img: "/Logo5.svg", alt: "logo"},
    {id: 5, img: "/Logo6.svg", alt: "logo"},
    {id: 6, img: "/Logo7.svg", alt: "logo"},

  ]
    // console.log(props)
      return (
        <>
        <div className='flex flex-col mx-auto justify-center w-full'>
     <div className='flex md:w-[85%] xl:w-[80%] mx-auto bg-[#F0F2F3]  xl:h-[790px] md:h-[490px] rounded-[6px] text-black '>

        <div className='mt-20 2xl:w-[480px] md:w-[347px] xl:h-[337px] md:h-[237px] xl:mt-64 md:mt-32 2xl:ml-28 md:ml-28  xl:mr-12 md:mr-7 '>
          <p className='text-xs ml-2 mt-1 sm:text-lg md:text-xl'>Welcome to chairy</p>
          <h1 className='text-sm mt-2 ml-2 font-semibold xl:text-5xl md:text-3xl xl:leading-[50px] md:leading-[30px] xl:mt-12 md:mt-8 xl:mb-14 md:mb-6 md:font-bold'
          >Best Furniture Collection For Your Interior
          </h1>
          <button className='text-xs w-20 h-5 mt-2 ml-2 rounded-sm xl:w-[171px] md:w-[121px] xl:h-[52px] md:h-[42px] md:text-base md:rounded-xl bg-[#029FAE] text-white'
          >Shop Now <FaArrowRightLong className='inline-block text-sm ml-[4px] md:ml-2 xl:text-2xl md:text-xl' />
          </button>
        </div>
        <div className="flex w-36 h-44 mt-7 xl:w-[334px] md:w-[234px] xl:h-[580px] md:h-[250px] md:mt-32 md:m-auto  md:items-center md:justify-center">
          <Image src="/Product1.png" width={434} height={580} className="object-contain p-2 mt-4" alt="Product" />
           {/* <img src="/Product1.png" className="object-contain p-2 mt-4" alt="Product" /> */}
        </div>   
     </div>
    </div>

    
      <div className="w-full mx-auto justify-center h-[1850] text-black">
        <div className="flex flex-col mx-auto justify-center  md:w-[85%] xl:w-[80%]">
              <div className='flex ml-2 mb-9 rounded-[6px] justify-between text-black'>
                    {images.map((pic) =>   (
                      <div key={pic.id}>
                        <Image src={pic.img} 
                         className="w-8 h-14 md:w-20 md:h-16 lg:w-28 xl:w-20 lg:h-20 xl:h-24 object-contain" 
                         width={120} height={200} alt={pic.alt} />
                      </div>
                      ))
                    }
              </div>

            <div className="">
                <h1 className="font-medium text-lg mt-2 ml-2 mb-2 sm:font-semibold md:mt-4 md:mb-6 md:text-4xl ">Featured Products</h1>
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