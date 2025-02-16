"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import React from "react";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";

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
    }
  ];
  const { cartTotalQty } = useShoppingCartContext();
  console.log(cartTotalQty, "hello");
  return (
    <div className=" m-auto flex border shadow-inner rounded bg-slate-100 h-16 justify-evenly items-center">
      <Container>
        <div className="flex flex-row-reverse ">
          {navlinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mr-6 ${pastname === item.href ? "text-red-500" : ""}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
          <div className="absolute top-4 left-4 border rounded shadow-inner p-2 hover:bg-blue-400 hover:text-white duration-700">
            <Link href="/cart">
              <span >سبد خرید</span>
              <span className="m-2  px-2 bg-[#ff0000] text-white rounded-full absolute -left-3 -top-5">{cartTotalQty ? cartTotalQty : ""}</span>
            </Link>
          </div>
      </Container>
    </div>
  );
}

export default Navbar;
