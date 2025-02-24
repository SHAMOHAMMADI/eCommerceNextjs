"use client";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
function Search() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSearch = () => {
    const currentSearchParams = new URLSearchParams(searchParams.toString());
    // console.log(searchParams.toString())

    currentSearchParams.set("title", search);
    // console.log(currentSearchParams.toString())
    router.push(`/?${currentSearchParams.toString()}`); 
    // router.push(`/?title=${search}`);
  };

  return (
    <div className="flex justify-start items-center ">
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        className="h-8 rounded mx-2 border shadow-inner px-2"
    
      />
      <button
        onClick={handleSearch}
        className="font-bold hover:scale-110 cursor-pointer"
      >
        <BiSearchAlt size={30} />
      </button>
    </div>
  );
}

export default Search;
