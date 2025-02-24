"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import ReactPaginate from "react-paginate";

function Pangination({ pageCount }: { pageCount: number }) {
  const router = useRouter();
  const searchParams = useSearchParams()
  const handlePageClick = (e: { selected: number }) => {
    const page = e.selected + 1;

    const currentSearchParams = new URLSearchParams(searchParams.toString());

    currentSearchParams.set("page",page.toString())
    currentSearchParams.set("per_page","7")

    // router.push(`/?page=${page}&per_page=3`);
    router.push(`/?${currentSearchParams.toString()}`);


  };
  return (
    <div className="">
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
