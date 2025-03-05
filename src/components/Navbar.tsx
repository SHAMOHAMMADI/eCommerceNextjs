"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import React, { useState } from "react";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import Search from "./Search";
import Image from "next/image";
import { HiRefresh } from "react-icons/hi";

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
    {
      href: "/login",
      title: "حساب کاربری",
    },
  ];
  const { cartTotalQty } = useShoppingCartContext();
  console.log(cartTotalQty, "hello");

  const [menu, setMenu] = useState(false);

  const handlemenu = () => {
    setMenu(!menu);
  };

  console.log(menu);

  return (
    <div className="h-24 flex shadow-inner rounded bg-slate-100 justify-center items-center">
      <Container>
        <div className="flex flex-row-reverse items-center w-10/12 mx-auto ">
          <div className=" lg:flex md:flex justify-end sm:hidden">
            {navlinks.map((item, index) => (
              <Link
                // Use index as the key (or a unique identifier from `item` if available)
                key={index}
                href={item.href}
                className={`block p-3 text-center rounded hover:bg-blue-400/50 hover:text-white ${
                  pastname === item.href
                    ? "text-red-500 font-bold"
                    : "text-gray-800"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <button onClick={handlemenu}>
            <Image
              className=" absolute right-6 top-6 border border-gray-600 rounded shadow-inner lg:hidden md:hidden  hover:bg-blue-400 duration-700 cursor-pointer hover:scale-110 "
              src="/hamburger-menu.svg"
              width={36}
              height={36}
              alt="noImage"
            />
          </button>
          {menu && (
            <div className="absolute md:hidden lg:hidden right-0 top-20 w-48 bg-blue-300/20 border border-gray-600 rounded shadow-lg">
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
          <div className="me-6">
            <Search />
          </div>
        </div>

        <div className="flex flex-row-reverse justify-center items-center mx-auto ">
          <div className="absolute top-4 left-4 border rounded shadow-inner p-2 hover:bg-blue-400 hover:text-white duration-700">
            <Link href="/cart">
              <span>سبد خرید</span>
              <span className="m-2  px-2 bg-[#ff0000] text-white rounded-full absolute -left-3 -top-5">
                {cartTotalQty ? cartTotalQty : ""}
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
