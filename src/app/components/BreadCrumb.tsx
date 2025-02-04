import Image from "next/image"
import Link from "next/link";
interface BreadCrumbProps {
    title:string,
    url:string
}
export default function BreadCrumb (props:BreadCrumbProps){
    return(
    <div className="flex justify-center items-center bg-[url('/bgbreadcrumb.png')] h-[70px] md:h-[118px] w-full">
        <div className="flex flex-col justify-center items-center">
            <div className="flex">

            <h1 className="md:text-5xl text-2xl mr-6 text-[#219e9c] font-bold">{props.title}</h1>
            <Image src={"logos1.svg"} alt="Logo" className="w-7 md:w-full" width={50} height={50}></Image>
            </div>
            <p className="flex gap-4"> <Link href={"/"}>Home</Link> <span>/</span> <Link href={`/${props.url}`}>{props.title}</Link></p>
        </div>
    </div>
    )

}