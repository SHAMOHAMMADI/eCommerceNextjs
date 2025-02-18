// "use client"

import { Ijdata } from "@/type/Type";
// import axios from "axios";
// import  Main  from '@/components/Main'
// import { useEffect, useState } from "react";

export default async function Home() {

  
  //client component------------
  // const [jdata,setJdata] = useState<Ijdata[]>([])
  // useEffect(()=>{
  // axios.get("http://localhost:3011/data").then((res)=>(
  // setJdata(res.data)
  // ))
  // },[])

  //server component method--------------
  const result = await fetch("http://localhost:3001/data")
  const jdata = await result.json() as Ijdata[]

  
  return (
    <div className="">
      <div className="border min-h-8 border-red-600 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">

        {jdata.map(res=>(
          <div key={res.id}>

          {/* <Main  {...res}/> */}
          </div>
        ))}
        </div>
    </div>
  );
}
