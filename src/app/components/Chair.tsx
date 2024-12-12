"use client"
import Categories from "./categories";
import NewProduct from "./newproducts";
import OurProduct from "./ourProduct";
import { details } from "../details/data";
import Image from "next/image";
import Link from "next/link";

export default function Chair() {
    const data = details
    return(
        <>
        <div  className="bg-[#fff]">
            <div className="container flex justify-between flex-wrap lg:flex-nowrap">
                {data.map((item)=>(
                    
                    <div key={item.id} className="bg-white rounded-md lg:my-0 ">
                      <Link href={`/${item.id}`}>
                        <div>
                            <div className="">
                              
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
        </div>
         </>
    )
}