import Image from "next/image";

export default function NewProduct() {
  return (
    <header className="container mx-auto py-12 lg:py-16">
        {/* Vertical text */}
        <div className="font-medium text-lg mt-2 ml-2 mb-2 sm:font-semibold md:mt-4 md:mb-6 md:text-4xl tracking-wider text-zinc-900 md:block">
          Explore New And Popular Styles
        </div>
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr]">
        {/* Images section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Orange chair (left side) */}
          <div className="w-full md:w-[53%]">
            <Image
              src="/03.jpg"
              alt="Orange modern chair"
              className="h-full w-full object-cover"
              width={700}
              height={700}
              priority
            />
          </div>

          {/* Other chairs (right side) */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
            <div className="aspect-square">
              <Image
                src="/04.jpg"
                alt="White tufted chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/01.jpg"
                alt="Gray upholstered chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/06.jpg"
                alt="Vintage white chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/01.jpg"
                alt="Vintage white chair duplicate"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
