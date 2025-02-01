"use client"
import Categories from "./categories";
import NewProduct from "./newproducts";
import OurProduct from "./ourProduct";
import { details } from "../details/data";
import Image from "next/image";
import Link from "next/link";
import Products from "./query";


export default function Chair() {
    const data = details
    return(
        <>
        <div  className="bg-[#fff]">
            <div className="flex justify-between flex-wrap lg:flex-nowrap">
                {data.map((item)=>(
                    
                    <div key={item.id} className="bg-white rounded-md lg:my-0 ">
                      <Link href={`/${item.id}`}>
                        <div>
                            <div className="2xl:w-[300px] xl:w-[270px] md:w-[240px]">
                              
                                <Image
                                src={item.pic}
                                alt="car"
                                width={312}
                                height={312}
                                ></Image>
                               
                                </div>
                            <div id="detail" className="text-center ">
                                <h1 className="text-[#233d7b] text-lg font-semibold">{item.title}</h1>
                                <h3 className="text-[#000]  ">{item.ask}</h3>
                            </div>
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
                <Categories />
                <NewProduct />
                <OurProduct />
                < Products />
        </div>
         </>
    )
}