import Image from "next/image";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="flex justify-evenly items-center bg-white pt-4">
      <Image src="./flipkart_logo.svg" width={160} height={40} alt="" />
      <div className="flex items-center bg-slate-100 pt-2 pb-2 w-6/12 rounded-lg">
        <IoSearchOutline className="w-10 text-zinc-600" />
        <input type="text" placeholder="Search for Products, Brands and More" className="bg-slate-100 w-80 border-none outline-none"/>
      </div>
      <div className="flex justify-between items-center w-28">
        <Image src="./account_logo.svg" width={24} height={24} alt="" />
        <p>Accounts</p>
        <Image src="./dropdown_logo.svg" width={12} height={12} alt="" />
      </div>
      <div className="flex justify-center items-center w-20">
        <Image src="./shopping_cart_logo.svg" width={24} height={24} alt="" />
        <p>Cart</p>
      </div>
    </div>
  );
}

export default Navbar;
