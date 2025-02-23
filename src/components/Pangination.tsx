"use client"
import { useRouter } from "next/navigation";
import React from "react";
import ReactPaginate from "react-paginate";

function Pangination({pageCount}:{pageCount : number}) {


    const router = useRouter()
    const handlePageClick = (e:{selected:number})=>{
     console.log(e.selected)
     const page = e.selected + 1
     router.push(`/?page=${page}&per_page=3`)
    } 
     return (
       
    <div className="" >
      <ReactPaginate
      className="flex mx-auto justify-center items-center w-full [&>*]:m-6 [&>*]:shadow-inner [&>*]:bg-slate-100 [&>*]:px-2"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        />
    </div>
    
  );
}

export default Pangination;
