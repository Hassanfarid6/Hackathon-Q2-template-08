import Image from "next/image";
import { ShoppingCart } from "lucide-react";
// import { CartItem, useCart } from "../context/CartContext";


export default function Pages() {
    // const { addToCart } = useCart();
    
    return (
        <>
    <div className=" md:container flex justify-center mx-auto w-[90%] lg:w-[1920px] lg:py-20">
        
    <div className="w-[200px] h-[200px] lg:w-[675px] lg:h-[607px]">
    <Image
                  src='/02.jpg'
                  alt="Image"
                  height={400}
                  width={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
     />
    </div>
    <div className="lg:w-[541px] lg:ml-24 lg:h-[607px]">
        <h2 className="w-[541px] h-[132px] font-bold text-6xl mb-10">
        Library Stool Chair
        </h2>
        <button className="bg-[#029FAE] w-[144px] h-[44px] rounded-3xl mb-10 text-white font-semibold text-xl ">
            $20.00 USD
        </button>
        <hr />

        <p className="w-[543px] h-[101px] text-xl pr-8 mb-8 mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
        
        <button 
        // onClick={() => addToCart({
        //           id:product.id,
        //           image:product.image,
        //           price:product.price,
        //           quantity:1,
        //           stock:10,
        //           title:product.title
        //         })
        //         } 
                className="bg-[#029FAE] w-[212px] h-[63px] rounded-lg text-white font-semibold text-xl mb-8">
           <ShoppingCart className="inline-block text-xl mr-3"/>
            Add to Cart
        </button>
    </div>
    </div>
        
    <div className="container flex justify-center mx-auto w-[1920px] py-20">
        <div className=" w-[1447px] h-[409px]">

        <div className="flex justify-between text-4xl font-semibold">
                <h2>FEATURED PRODUCTS</h2>
                <p className="text-lg border-b border-gray-800 leading-tight pb-1">View all</p>
        </div>

        <div className="flex justify-between">
            <div>
                <Image
                  src='/07.jpg'
                  alt="Image"
                  height={400}
                  width={400}
                  className="h-[263px] mt-10 w-[270px] object-cover"
                />
                <div className="flex justify-between mt-4">
                    <p className="text-lg">Library Stool Chair</p>
                    <p className="text-lg font-bold">$99</p>
                </div>
            </div>            
            <div>
                <Image
                  src='/01.jpg'
                  alt="Image"
                  height={400}
                  width={400}
                  className="h-[263px] mt-10 w-[270px] object-cover"
                />
                <div className="flex justify-between mt-4">
                    <p className="text-lg">Library Stool Chair</p>
                    <p className="text-lg font-bold">$99</p>
                </div>
            </div>            
            <div>
                <Image
                  src='/14.jpg'
                  alt="Image"
                  height={400}
                  width={400}
                  className="h-[263px] mt-10 w-[270px] object-cover"
                />
                <div className="flex justify-between mt-4">
                    <p className="text-lg">Library Stool Chair</p>
                    <p className="text-lg font-bold">$99</p>
                </div>
            </div>            
            <div>
                <Image
                  src='/03.jpg'
                  alt="Image"
                  height={400}
                  width={400}
                  className="h-[263px] mt-10 w-[270px] object-cover"
                />
                <div className="flex justify-between mt-4">
                    <p className="text-lg">Library Stool Chair</p>
                    <p className="text-lg font-bold">$99</p>
                </div>
            </div>            
            <div>
                <Image
                  src='/05.jpg'
                  alt="Image"
                  height={400}
                  width={400}
                  className="h-[263px] w-[270px] mt-10 object-cover"
                />
                <div className="flex justify-between mt-4">
                    <p className="text-lg">Library Stool Chair</p>
                    <p className="text-lg font-bold">$99</p>
                </div>
            </div>            
        </div>


        </div>
    </div>
    </>
  );
}
