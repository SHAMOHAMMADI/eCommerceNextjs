"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import  Container  from "./Container";
import React from "react";

function Navbar() {


    const pastname = usePathname() 
  const navlinks = [
    {
      href: "/",
      title: "صفحه اصلی",
    },
    {
      href: "/store",
      title: "فروشگاه",
    },
  ];

  return (
    <div className=" m-auto flex border shadow-inner rounded bg-slate-100 h-16 justify-evenly items-center">
        <Container>
<div className="flex flex-row-reverse ">

      {navlinks.map((item) => (
          <Link key={item.href} href={item.href} className={`mr-6 ${pastname === item.href ? "text-red-500" : ""}`}>
          {item.title}
        </Link>
      ))}
      </div>
      <div>
        <Link href="/cart">
        <span>سبد خرید</span>
        </Link>
      </div>
      </Container>
    </div>
  );
}

export default Navbar;
