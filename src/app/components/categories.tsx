import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  const categories = [
    {
      name: "Wing Chair",
      products: "3,584 Products",
      image: "/07.jpg",
      href: "/categories/wing-chair",
    },
    {
      name: "Wooden Chair",
      products: "157 Products",
      image: "/08.jpg",
      href: "/categories/wooden-chair",
    },
    {
      name: "Desk Chair",
      products: "154 Products",
      image: "/04.jpg",
      href: "/categories/desk-chair",
    },
  ];

  return (
    // <section className="py-7 md:py-[7rem]">
      <div className="my-5 md:py-[7rem]">
        <h2 className="font-medium text-lg ml-2 mt-1 mb-1 sm:mt-2 sm:ml-2 sm:mb-2 sm:font-semibold md:mt-4 md:mb-6 md:text-4xl">
          Top Categories
        </h2>
        {/* <div className="flex justify-between sm:grid-cols-2 lg:grid-cols-3"> */}
        <div className="flex justify-around md:justify-between flex-wrap lg:flex-nowrap">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={"../components/productDectription/discription"}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="2xl:w-[300px] xl:w-auto xl:m-1 md:w-[210px] w-32">
                <Image
                  src={category.image}
                  alt={category.name}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                  width={312}
                  height={312}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-1 sm:p-6">
                  <h3 className=" mb-0 md:mb-2  md:font-inter text-sm sm:text-xl font-medium text-white">
                    {category.name}
                  </h3>
                  <p className="font-inter text-sm text-gray-200">
                    {category.products}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    // </section>
  );
}
