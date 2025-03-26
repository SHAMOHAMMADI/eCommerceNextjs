// "use client"

// import ProductItem from "@/components/ProductItem";
import { jdataWithpagination } from "@/type/Type";
// import axios from "axios";
import Main from "@/components/Main";
import Container from "@/components/Container";
import Pangination from "@/components/Pangination";
import { importFakeStoreData } from "@/import/Import";
// import { SearchParams } from "next/dist/server/request/search-params";
// import { useEffect, useState } from "react";
interface IStoredProps {
  params?: Promise<number>;
  searchParams: Promise<{ page: string; per_page: string; title:string }>;
}


export default async function Home({ searchParams }: IStoredProps) {
  const page = (await searchParams).page ?? "1";
  const per_page = (await searchParams).per_page ?? "5";
  const title = (await searchParams).title ?? "" 




  //client component------------
  // const [jdata,setJdata] = useState<Ijdata[]>([])
  // useEffect(()=>{
  // axios.get("http://localhost:3011/data").then((res)=>(
  // setJdata(res.data)
  // ))
  // },[])

  //server component method--------------
  const result = await fetch(
    `http://localhost:3011/data?_page=${page}&_per_page=${per_page}&title=${title}`
  );
  const jdata = (await result.json()) as jdataWithpagination;

  return (
    <Container>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 my-4">

        {jdata.data.map((res) => (
          <div key={res.id}>
            <Main {...res} />
          </div>
        ))}
      </div>
      <div className="">
      <Pangination pageCount={jdata.pages}/>
      </div>
    </Container>
  );
}
