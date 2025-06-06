"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { SearchCommand } from "./SearchBar";
import SignInButtonComponent from "../components/auth/loginButoon";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoAlertCircleOutline } from "react-icons/io5";
import { UserButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn, user, isLoaded } = useUser();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className=" flex flex-col mx-auto justify-between bg-white w-full 2xl:h-[203px]">
        <div className=" 2xl:h-[45px] md:h-[40px] bg-[#272343] text-white">
          <div
            className="flex flex-wrap items-center justify-center md:justify-between w-full 
            md:w-[85%] xl:w-[80%] mx-auto text-xs lg:text-sm xl:text-lg md:text-base md:pt-2 font-light"
          >
            <div className="text-center mb-1 md:text-left w-full md:w-auto">
              Free shipping on all orders over $50
            </div>
            <ul className="h-5 gap-1 md:flex hidden items-center gap-x-3 md:gap-x-4 gap-y-2 md:gap-y-0  md:mt-0">
              <li>Eng</li>
              <li>
                <RiArrowDropDownLine className="text-white xl:text-2xl text-[16px] lg:text-xl mt-1 xl:mt-0 mr-2 p-0" />
              </li>
              <li>Faqs</li>
              <li>
                <IoAlertCircleOutline className="md:text-lg  text-white xl:text-2xl text-[16px]  lg:text-xl  font-semibold xl:mt-0 mt-1 ml-2 p-0" />
              </li>
              <li>Need Help</li>
            </ul>
          </div>
        </div>

        <div className="xl:h-[84px] md:h-[64px]  pt-4 bg-[#F0F2F3] text-black ">
          <div className="flex md:w-[85%] xl:w-[80%]  mx-auto justify-between">
            <span>
              {/* <img className='inline-block w-8 h-8 ' src="/logo1.png" alt="Logo" /> */}
              <svg
                width="30"
                className="inline-block "
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_890)">
                  <path
                    d="M39.9938 19.7464C39.9286 18.4433 39.3566 17.2173 38.3999 16.3301C37.4432 15.4429 36.1776 14.9649 34.8732 14.9979C33.5689 15.031 32.3292 15.5727 31.4187 16.5072C30.5082 17.4418 29.9991 18.6952 30 20V28.3333C30 27.8913 29.8244 27.4674 29.5119 27.1548C29.1993 26.8422 28.7754 26.6667 28.3334 26.6667H11.6667C11.2247 26.6667 10.8007 26.8422 10.4882 27.1548C10.1756 27.4674 10 27.8913 10 28.3333V20C9.99996 19.0833 9.74791 18.1843 9.27143 17.4013C8.79495 16.6182 8.11237 15.9812 7.2983 15.5598C6.48422 15.1385 5.56999 14.949 4.65552 15.0122C3.74105 15.0754 2.86154 15.3887 2.11312 15.9179C1.3647 16.4472 0.776167 17.172 0.411857 18.0131C0.0475467 18.8543 -0.0785237 19.7794 0.0474254 20.6873C0.173374 21.5953 0.546496 22.4511 1.12601 23.1614C1.70552 23.8716 2.46912 24.4088 3.33334 24.7144V33.3333C3.33334 33.7753 3.50893 34.1993 3.8215 34.5118C4.13406 34.8244 4.55798 35 5.00001 35H6.66668V38.3333H10V35H30V38.3333H33.3334V35H35C35.4421 35 35.866 34.8244 36.1786 34.5118C36.4911 34.1993 36.6667 33.7753 36.6667 33.3333V24.7144C37.6824 24.3551 38.5549 23.6775 39.1544 22.7823C39.7539 21.8872 40.0483 20.8224 39.9938 19.7464Z"
                    fill="#029FAE"
                  />
                  <path
                    d="M11.6667 20V25H28.3334V20C28.3353 18.5224 28.8271 17.0872 29.7319 15.919C30.6367 14.7508 31.9033 13.9157 33.3334 13.5443V9.99996C33.3309 7.79058 32.4522 5.67241 30.8899 4.11014C29.3276 2.54788 27.2095 1.66911 25.0001 1.66663H15.0001C12.7907 1.66911 10.6725 2.54788 9.11026 4.11014C7.548 5.67241 6.66923 7.79058 6.66675 9.99996V13.5443C8.09689 13.9157 9.3635 14.7508 10.2683 15.919C11.173 17.0872 11.6649 18.5224 11.6667 20ZM23.3334 8.33329C23.663 8.33329 23.9853 8.43104 24.2594 8.61418C24.5334 8.79731 24.7471 9.05761 24.8732 9.36215C24.9994 9.6667 25.0324 10.0018 24.9681 10.3251C24.9037 10.6484 24.745 10.9454 24.5119 11.1785C24.2788 11.4116 23.9819 11.5703 23.6586 11.6346C23.3353 11.6989 23.0001 11.6659 22.6956 11.5398C22.3911 11.4136 22.1308 11.2 21.9476 10.9259C21.7645 10.6518 21.6667 10.3296 21.6667 9.99996C21.6667 9.55793 21.8423 9.13401 22.1549 8.82145C22.4675 8.50889 22.8914 8.33329 23.3334 8.33329ZM23.3334 13.3333C23.663 13.3333 23.9853 13.431 24.2594 13.6142C24.5334 13.7973 24.7471 14.0576 24.8732 14.3622C24.9994 14.6667 25.0324 15.0018 24.9681 15.3251C24.9037 15.6484 24.745 15.9454 24.5119 16.1785C24.2788 16.4116 23.9819 16.5703 23.6586 16.6346C23.3353 16.6989 23.0001 16.6659 22.6956 16.5398C22.3911 16.4136 22.1308 16.2 21.9476 15.9259C21.7645 15.6518 21.6667 15.3296 21.6667 15C21.6667 14.5579 21.8423 14.134 22.1549 13.8214C22.4675 13.5089 22.8914 13.3333 23.3334 13.3333ZM16.6667 8.33329C16.9964 8.33329 17.3186 8.43104 17.5927 8.61418C17.8668 8.79731 18.0804 9.05761 18.2065 9.36215C18.3327 9.6667 18.3657 10.0018 18.3014 10.3251C18.2371 10.6484 18.0783 10.9454 17.8453 11.1785C17.6122 11.4116 17.3152 11.5703 16.9919 11.6346C16.6686 11.6989 16.3335 11.6659 16.0289 11.5398C15.7244 11.4136 15.4641 11.2 15.281 10.9259C15.0978 10.6518 15.0001 10.3296 15.0001 9.99996C15.0001 9.55793 15.1757 9.13401 15.4882 8.82145C15.8008 8.50889 16.2247 8.33329 16.6667 8.33329ZM16.6667 13.3333C16.9964 13.3333 17.3186 13.431 17.5927 13.6142C17.8668 13.7973 18.0804 14.0576 18.2065 14.3622C18.3327 14.6667 18.3657 15.0018 18.3014 15.3251C18.2371 15.6484 18.0783 15.9454 17.8453 16.1785C17.6122 16.4116 17.3152 16.5703 16.9919 16.6346C16.6686 16.6989 16.3335 16.6659 16.0289 16.5398C15.7244 16.4136 15.4641 16.2 15.281 15.9259C15.0978 15.6518 15.0001 15.3296 15.0001 15C15.0001 14.5579 15.1757 14.134 15.4882 13.8214C15.8008 13.5089 16.2247 13.3333 16.6667 13.3333Z"
                    fill="#029FAE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_890">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h1 className="inline-block text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
              font-medium xl:font-semibold h-8 ml-2 md:text-[20px] ">
                {/* text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium xl:font-semibold */}
                Comfortly
              </h1>
            </span>

            <div className="flex">
              <Link href="/" className="mr-2 text-gray-800 hover:text-black">
                {/* <FiSearch size={20} /> */}
                <SearchCommand />
              </Link>
              {/* <img src="/Bug 2.png" className='inline-block w-8 h-8 ' alt="" /> */}
              <Link href={"/cart" }>
              <div className="hidden md:flex">
              <button className='bg-white rounded-[6px] xl:w-36 md:w-28 xl:text-xl md:text-base font-medium md:h-8 xl:h-[40px] '>
              <svg className='inline-block xl:m-2 md:m-1' width="25" height="25" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.52087 2.97913L4.42754 3.30913L5.31029 13.826C5.3442 14.2399 5.5329 14.6257 5.83873 14.9066C6.14457 15.1875 6.54506 15.3427 6.96029 15.3413H16.9611C17.3587 15.3417 17.7431 15.1986 18.0436 14.9382C18.344 14.6778 18.5404 14.3177 18.5965 13.9241L19.4673 7.91263C19.4905 7.75275 19.482 7.58987 19.4422 7.43329C19.4024 7.27671 19.3322 7.12951 19.2354 7.00011C19.1387 6.8707 19.0175 6.76163 18.8786 6.67913C18.7397 6.59663 18.5859 6.54231 18.426 6.51929C18.3673 6.51288 4.73371 6.50829 4.73371 6.50829" stroke="#272343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.948 9.89539H15.4899" stroke="#272343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.55786 18.5194C6.62508 18.5165 6.69219 18.5272 6.75515 18.551C6.81811 18.5747 6.87562 18.611 6.9242 18.6575C6.97279 18.704 7.01145 18.7599 7.03787 18.8218C7.06428 18.8837 7.0779 18.9503 7.0779 19.0176C7.0779 19.0849 7.06428 19.1515 7.03787 19.2133C7.01145 19.2752 6.97279 19.3311 6.9242 19.3777C6.87562 19.4242 6.81811 19.4605 6.75515 19.4842C6.69219 19.5079 6.62508 19.5187 6.55786 19.5158C6.42942 19.5103 6.30808 19.4554 6.21914 19.3626C6.13021 19.2697 6.08057 19.1461 6.08057 19.0176C6.08057 18.889 6.13021 18.7654 6.21914 18.6726C6.30808 18.5798 6.42942 18.5249 6.55786 18.5194Z" fill="#272343" stroke="#272343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8988 18.5194C17.0312 18.5194 17.1583 18.572 17.252 18.6657C17.3457 18.7594 17.3983 18.8865 17.3983 19.019C17.3983 19.1515 17.3457 19.2786 17.252 19.3723C17.1583 19.4659 17.0312 19.5186 16.8988 19.5186C16.7663 19.5186 16.6392 19.4659 16.5455 19.3723C16.4518 19.2786 16.3992 19.1515 16.3992 19.019C16.3992 18.8865 16.4518 18.7594 16.5455 18.6657C16.6392 18.572 16.7663 18.5194 16.8988 18.5194Z" fill="#272343" stroke="#272343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Cart
              <svg width="25" className='inline-block md:h-4 xl:h-8 xl:m-2 md:mb-1' height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#007580" />
                <path d="M7.70867 13V12.24C8.16201 11.88 8.59534 11.5167 9.00867 11.15C9.42201 10.7833 9.78867 10.4233 10.1087 10.07C10.4353 9.71 10.692 9.36 10.8787 9.02C11.0653 8.67333 11.1587 8.34 11.1587 8.02C11.1587 7.80667 11.122 7.60667 11.0487 7.42C10.9753 7.22667 10.8553 7.07333 10.6887 6.96C10.522 6.84 10.2987 6.78 10.0187 6.78C9.59867 6.78 9.28201 6.91333 9.06867 7.18C8.86201 7.44667 8.76201 7.76667 8.76867 8.14H7.73867C7.74534 7.64667 7.84867 7.23333 8.04867 6.9C8.25534 6.56667 8.52867 6.31333 8.86867 6.14C9.21534 5.96667 9.60534 5.88 10.0387 5.88C10.6987 5.88 11.2253 6.06667 11.6187 6.44C12.0187 6.80667 12.2187 7.32 12.2187 7.98C12.2187 8.37333 12.122 8.76333 11.9287 9.15C11.742 9.53667 11.4953 9.91 11.1887 10.27C10.8887 10.6233 10.5653 10.9567 10.2187 11.27C9.87201 11.5833 9.54201 11.8667 9.22867 12.12H12.4287V13H7.70867Z" fill="white" />
              </svg>
            </button>
              </div>
              </Link>
              {/* Account */}
              {!isSignedIn ? (
                <SignInButtonComponent />
              ) : (
                <div className="flex justify-center items-center gap-2">
                  <UserButton />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className=" xl:h-[74px] md:h-[54px] bg-[#fff] text-black">
          <div className="hidden md:flex md:w-[85%] xl:w-[80%] mx-auto justify-between text-base md:pt-[2px] font-normal opacity-95">
            <ul className="flex">
              <li className="xl:pl-5 md:pt-2 xl:pt-5 text-[#029FAE]">
                <Link href="/">Home</Link>
              </li>
              <li className="xl:p-5 md:pt-2 md:ml-3 sm:ml-2">
                <Link href="../shop">Shop</Link>
              </li>
              <li className="xl:p-5 md:pt-2 md:ml-3 sm:ml-2">
                <Link href="../allProducts">Product</Link>
              </li>
              <li className="xl:p-5 md:pt-2 md:ml-3 sm:ml-2">
                <Link href="../pages">Pages</Link>
              </li>
              <li className="xl:p-5 md:pt-2 md:ml-3 sm:ml-2">
                <Link href="../about">About</Link>
              </li>
              <li className="xl:p-5 md:pt-2 md:ml-3 sm:ml-2">
                <Link href="../contact">Contact</Link>
              </li>
            </ul>
            <p className=" px-0 xl:pt-5 md:pt-2">Contact: (0800) 155-1004</p>
          </div>
          <div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center justify-center p-2 text-gray-700"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="flex flex-col gap-4 p-4">
                <Link
                  href="/"
                  className="text-[#007580] text-[14px] font-medium"
                >
                  Home
                </Link>
                <Link href="../shop" className="text-[14px] font-medium">
                  Shop
                </Link>
                <Link href="../allProducts" className="text-[14px] font-medium">
                  Product
                </Link>
                <Link href="../pages" className="text-[14px] font-medium">
                  Pages
                </Link>
                <Link href="../about" className="text-[14px] font-medium">
                  About
                </Link>
                <Link href="/cart" className="text-[14px] font-medium">
                  Cart
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
      <hr />
    </>
  );
};

export default Navbar;
