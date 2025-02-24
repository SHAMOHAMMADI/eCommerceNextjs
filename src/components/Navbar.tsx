"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import React, { useState } from "react";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import Search from "./Search";
import Image from "next/image";

function Navbar() {
  const pastname = usePathname();
  const navlinks = [
    {
      href: "/",
      title: "صفحه اصلی",
    },
    {
      href: "/store",
      title: "فروشگاه",
    },
    {
      href: "/dashboard",
      title: "داشبورد",
    },
  ];
  const { cartTotalQty } = useShoppingCartContext();
  console.log(cartTotalQty, "hello");

  const [menu, setMenu] = useState(true);

  const handlemenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="h-20 flex border shadow-inner rounded bg-slate-100 justify-center items-center">
      <Container>
        <div className="relative">
          <button onClick={handlemenu}>
            <Image
              className=" absolute right-0 top-8 border border-gray-600 rounded shadow-inner  hover:bg-blue-400 duration-700 cursor-pointer hover:scale-110"
              src="/hamburger-menu.svg"
              width={36}
              height={36}
              alt="noImage"
            />
          </button>
        </div>
        {menu && (
          <div className="absolute right-0 top-20 w-48 bg-blue-300/20 border border-gray-600 rounded shadow-lg">
            {navlinks.map((item, index) => (
              <Link
                key={index} // Use index as the key (or a unique identifier from `item` if available)
                href={item.href}
                className={`block p-3 text-center hover:bg-blue-400/50 hover:text-white ${
                  pastname === item.href
                    ? "text-red-500 font-bold"
                    : "text-gray-800"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}

        <div className="flex flex-row-reverse justify-start items-center mx-auto px-4">
          <div className="absolute top-4 left-4 border rounded shadow-inner p-2 hover:bg-blue-400 hover:text-white duration-700">
            <Link href="/cart">
              <span>سبد خرید</span>
              <span className="m-2  px-2 bg-[#ff0000] text-white rounded-full absolute -left-3 -top-5">
                {cartTotalQty ? cartTotalQty : ""}
              </span>
            </Link>
          </div>
          <div className="h-20 flex justify-center items-center mx-auto">
            <Search />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
