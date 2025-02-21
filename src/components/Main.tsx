import { Ijdata } from '@/type/Type'
import React from 'react'
import Image from "next/image"

function Main({image,Description,title}:Ijdata) {

  // console.log("test")

  return (
    <div className="flex flex-col border inner-shadow p-2 rounded ">
      {/* <img src={image} alt="" /> */}
<Image
src={image ?? "/11.jpg"} 
width={48}
height={48}
alt="" 
className="w-72 h-36"
 />
<div className="flex flex-col items-center">

<h3>{Description}</h3>
<h2>{title}</h2>
</div>
    </div>
  )
}

export default Main