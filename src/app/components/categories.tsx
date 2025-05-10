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
    <section className="  py-[7rem]">
      <div className=" ">
        <h2 className="font-medium text-lg mt-2 ml-2 mb-2 sm:font-semibold md:mt-4 md:mb-6 md:text-4xl">
          Top Categories
        </h2>
        <div className="flex justify-between sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={"../components/productDectription/discription"}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] w-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                  width={400}
                  height={400}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="mb-2 font-inter text-xl font-medium text-white">
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
    </section>
  );
}
